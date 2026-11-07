import {readFileSync} from 'node:fs';
import {resolve, relative} from 'node:path';
import {fileURLToPath} from 'node:url';

export const root = fileURLToPath(new URL('../', import.meta.url));

export function projectConfig(name = 'smoke') {
  if (!/^[a-z0-9-]+$/.test(name)) throw new Error('Invalid project name');
  const config = JSON.parse(readFileSync(resolve(root, 'configs', name + '.json'), 'utf8'));
  for (const key of ['project', 'output', 'evidence']) {
    const path = resolve(root, config[key]);
    const rel = relative(root, path);
    if (!rel || rel.startsWith('..') || rel.startsWith('/')) throw new Error('Path must stay inside the repository');
  }
  for (const key of ['width', 'height', 'fps']) {
    if (!Number.isInteger(config[key]) || config[key] <= 0) throw new Error('Invalid ' + key);
  }
  if (!Number.isFinite(config.duration) || config.duration <= 0) throw new Error('Invalid duration');
  return {...config, name};
}
