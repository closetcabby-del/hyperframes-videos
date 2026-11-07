const puppeteer = require('puppeteer-core');
const {writeFileSync, readFileSync, existsSync} = require('node:fs');
const http = require('node:http');
(async () => {
  const {projectConfig, root} = await import('./project.mjs');
  process.chdir(root);
  const config = projectConfig(process.argv[2]);
  const server = http.createServer((req, res) => {
    if (req.url === '/video.mp4') {
      res.setHeader('Content-Type', 'video/mp4');
      res.end(readFileSync(config.output));
    } else {
      res.setHeader('Content-Type', 'text/html');
      res.end('<video src="/video.mp4" muted playsinline></video>');
    }
  });
  await new Promise(r => server.listen(0, '127.0.0.1', r));
  let browser;
  try {
    const executablePath = process.env.HYPERFRAMES_BROWSER_PATH || ['/usr/bin/chromium', '/usr/bin/chromium-browser', '/usr/bin/google-chrome'].find(existsSync);
    if (!executablePath) throw new Error('Chrome not found');
    browser = await puppeteer.launch({executablePath, headless: true, args: ['--no-sandbox', '--disable-dev-shm-usage']});
    const page = await browser.newPage();
    await page.goto('http://127.0.0.1:' + server.address().port);
    const result = await page.evaluate(async () => {
      const v = document.querySelector('video');
      if (!v) throw new Error('No HTML video element');
      v.muted = true;
      await v.play();
      await new Promise((ok, fail) => {
        let frames = 0;
        const timer = setTimeout(() => fail(new Error('Playback timed out')), 15000);
        function frame() {
          if (++frames >= 15) {clearTimeout(timer); ok();}
          else v.requestVideoFrameCallback(frame);
        }
        v.requestVideoFrameCallback(frame);
      });
      const result = {ok: !v.error && v.currentTime > 0, width: v.videoWidth, height: v.videoHeight, duration: v.duration,
        currentTime: v.currentTime, decodedFrames: v.getVideoPlaybackQuality().totalVideoFrames, paused: v.paused, error: v.error};
      v.pause();
      return result;
    });
    if (!result.ok || result.width !== config.width || result.height !== config.height || Math.abs(result.duration - config.duration) > 1 / config.fps) throw new Error(JSON.stringify(result));
    writeFileSync(`${config.evidence}/browser-playback.json`, JSON.stringify(result, null, 2) + '\n');
    console.log(result);
  } finally {
    if (browser) await browser.close();
    server.close();
  }
})().catch(error => {console.error(error); process.exitCode = 1;});
