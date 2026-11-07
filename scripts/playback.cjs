const puppeteer=require('puppeteer-core');
const {resolve}=require('node:path');
const {writeFileSync,readFileSync}=require('node:fs');
const http=require('node:http');
(async()=>{
const server=http.createServer((req,res)=>{if(req.url==='/video.mp4'){res.setHeader('Content-Type','video/mp4');res.end(readFileSync('renders/test-1080p.mp4'))}else{res.setHeader('Content-Type','text/html');res.end('<video src="/video.mp4" muted playsinline></video>')}});
await new Promise(r=>server.listen(0,'127.0.0.1',r));
const browser=await puppeteer.launch({executablePath:process.env.HYPERFRAMES_BROWSER_PATH||'/usr/bin/chromium',headless:true,args:['--no-sandbox','--disable-dev-shm-usage']});
try{
const page=await browser.newPage();
await page.goto('http://127.0.0.1:'+server.address().port);
const result=await page.evaluate(async()=>{
const v=document.querySelector('video');
if(!v)throw Error('No HTML video element');
v.muted=true;await v.play();
await new Promise((ok,fail)=>{let frames=0;const timer=setTimeout(()=>fail(Error('Playback timed out')),15000);function frame(){frames++;if(frames>=15){clearTimeout(timer);ok()}else v.requestVideoFrameCallback(frame)}v.requestVideoFrameCallback(frame)});
const r={ok:!v.error&&v.currentTime>0,width:v.videoWidth,height:v.videoHeight,duration:v.duration,currentTime:v.currentTime,decodedFrames:v.getVideoPlaybackQuality().totalVideoFrames,paused:v.paused,error:v.error};v.pause();return r;
});
if(!result.ok||result.width!==1920||result.height!==1080)throw Error(JSON.stringify(result));
writeFileSync('evidence/browser-playback.json',JSON.stringify(result,null,2)+'\n');console.log(result);
}finally{await browser.close();server.close()}
})().catch(e=>{console.error(e);process.exit(1)});
