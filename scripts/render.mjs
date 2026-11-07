import {spawn} from 'node:child_process';
import {mkdirSync, writeFileSync, createWriteStream} from 'node:fs';
import {dirname, resolve} from 'node:path';
import {root, projectConfig} from './project.mjs';

process.chdir(root);
const config = projectConfig(process.argv[2]);
mkdirSync(config.evidence, {recursive: true});
mkdirSync(dirname(config.output), {recursive: true});

async function run(command, args, {capture = false, log} = {}) {
  const output = [];
  const stream = log ? createWriteStream(log) : null;
  const child = spawn(command, args, {cwd: root, stdio: ['ignore', 'pipe', 'pipe']});
  child.stdout.on('data', data => {
    if (capture) output.push(data); else process.stdout.write(data);
    stream?.write(data);
  });
  child.stderr.on('data', data => {
    process.stderr.write(data);
    if (!capture) stream?.write(data);
  });
  const code = await new Promise((ok, fail) => {child.on('error', fail); child.on('close', ok);});
  if (stream) await new Promise(ok => stream.end(ok));
  if (code !== 0) throw new Error(`${command} exited ${code}`);
  return Buffer.concat(output).toString();
}

try {
  const report = await run('./scripts/hf.sh', ['check', config.project, '--json'], {capture: true});
  writeFileSync(`${config.evidence}/check.json`, report);
  if (!JSON.parse(report).ok) throw new Error(`HyperFrames check failed: ${config.evidence}/check.json`);
  await run('./scripts/hf.sh', ['render', config.project, '--fps', String(config.fps), '--resolution', config.resolution,
    '--workers', '1', '--quality', 'delivery', '--strict', '-o', resolve(config.output)], {log: `${config.evidence}/render.log`});
  await run(process.execPath, ['scripts/verify.mjs', config.output, config.name], {log: `${config.evidence}/validation.log`});
  await run('ffmpeg', ['-y', '-v', 'error', '-ss', String(config.duration / 2), '-i', config.output, '-frames:v', '1', `${config.evidence}/decoded-frame.png`]);
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
}
