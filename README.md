# HyperFrames in Codex Cloud

Pinned HeyGen HyperFrames 0.9.20 and GSAP 3.15.1. The test composition is five seconds, 1920×1080, 30 fps. No HeyGen API key, desktop app, Windows computer, Docker, GPU, or paid hosted renderer is needed for this test. Chrome captures frames and FFmpeg encodes them on the machine executing the scripts.

Repository: https://github.com/closetcabby-del/hyperframes-videos

[Download the verified test MP4](https://github.com/closetcabby-del/hyperframes-videos/raw/refs/heads/main/renders/test-1080p.mp4)

## Codex Cloud setup

Connect the intended GitHub repository to a **cloud** environment. Use Node.js 22+ (validated here with 24). Install Linux `ffmpeg` and Chromium/Google Chrome in the environment image. In this managed cloud environment those are already installed. If missing, use the supported system package installer; do not install Windows binaries.

Set the environment setup command to `bash scripts/setup.sh`. Enable network during dependency setup for npm; assets used by the render are local. Set `HYPERFRAMES_BROWSER_PATH` if Chrome is not on PATH. The wrapper detects Chromium and Google Chrome automatically and puts caches in the workspace.

Run `npm run render`. This performs HyperFrames checks, renders the video, fully decodes it with FFmpeg, checks dimensions/duration/frame count/H.264 pixel format/fast-start, and extracts a frame. Failures stop the script. Some HyperFrames JSON commands return exit zero even on failed checks, so the render script explicitly checks `ok`.

In an agent sandbox that blocks Chrome launch, allow the browser command to run through the cloud runtime's supported execution route. This still runs in the cloud. Do not point the environment at a personal computer.

`npm run doctor` reports optional transcription, voice, music, and Docker tools as missing. They are not required for this silent smoke test. `scripts/setup.sh` gates on the four required runtime dependencies.

## From an iPhone

1. Open Codex in your supported mobile app or Safari, select this repository and its **cloud** environment.
2. Ask: “Create a HyperFrames video about [topic] in `video/`, run the full checks, render it with the repository scripts, validate the MP4, and provide a downloadable video and rendering evidence.” The supplied validator deliberately requires the smoke test's 5 seconds/1080p/30 fps; adjust its expected values for other formats.
3. For the repeatable GitHub-hosted route, open the repository in Safari, choose **Actions → Render HyperFrames video → Run workflow** (the workflow must first be committed to the default branch). If the mobile view hides this control, request the desktop website in Safari.
4. Open the completed run, scroll to **Artifacts**, and download `hyperframes-video-and-evidence`. In Files, tap the ZIP to extract it, then open `renders/test-1080p.mp4`. Share → Save Video saves to Photos when offered. Artifacts require GitHub sign-in and expire after 30 days.

The GitHub Actions route uses a GitHub-hosted Ubuntu runner and does not require your laptop. Check the Actions page for the latest run and its logs. A local cloud render alone does not prove a GitHub Actions run succeeded.

## Evidence

`evidence/install.log`, `doctor.json`, `check.json`, `render.log`, `validation.json`, and `decoded-frame.png` record installation, runtime checks, render output, technical validation, and a decoded image. `renders/test-1080p.mp4` is the deliverable. Cloud provenance is in `evidence/cloud-runtime.json`.

## Download this verified test on iPhone

Open the delivered Google Drive video link while signed into the account connected to this chat. In the Drive iPhone app, use the file menu → **Send a copy** → **Save Video**, or **Open in** → **Save to Files**, depending on the options shown. Safari can download to Files. Drive may need processing time before its web preview is ready; downloading the MP4 does not depend on that preview. Physical iPhone playback has not been tested by the agent.

The initial browser playback probe used a file URL and hit managed Chrome's `ERR_BLOCKED_BY_ADMINISTRATOR` policy. The final test serves the MP4 over loopback HTTP inside the cloud executor, without changing browser policy. See `evidence/browser-playback.json`.
