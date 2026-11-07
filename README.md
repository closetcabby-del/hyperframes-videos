# Jeff Electric videos with HyperFrames

Two Facebook Reels, two Facebook video ad creatives, and reusable Codex skills. Built and rendered in the cloud with pinned HeyGen HyperFrames 0.9.20 and GSAP 3.15.1.

## Facebook starter pack

All four videos are 15 seconds, 1080×1920, 30 fps, silent, and readable without audio. They use the original Jeff Electric logo and the black/gold brand palette. They are prepared for owner review; no social posts or campaigns are launched by this repository.

| Creative | Download |
| --- | --- |
| Reel: Electrical troubleshooting | [MP4](https://github.com/closetcabby-del/hyperframes-videos/raw/refs/heads/main/renders/jeff-electric-troubleshooting.mp4) |
| Reel: Planning a project | [MP4](https://github.com/closetcabby-del/hyperframes-videos/raw/refs/heads/main/renders/jeff-electric-project-planning.mp4) |
| Ad A: Flickering lights | [MP4](https://github.com/closetcabby-del/hyperframes-videos/raw/refs/heads/main/renders/jeff-electric-ad-flickering.mp4) |
| Ad B: Breaker keeps tripping | [MP4](https://github.com/closetcabby-del/hyperframes-videos/raw/refs/heads/main/renders/jeff-electric-ad-breaker.mp4) |

[Captions and ad copy](content/facebook-starter-pack.md). [Brand source notes](content/jeff-electric-troubleshooting.md). [Validation evidence](evidence/).

Before launching paid ads, choose a verified contact destination and review the actual Facebook placement preview. Rendering does not establish Meta approval or ad performance.

## Reusable Codex skills

The repository includes two local skills under `.agents/skills/`:

- [$jeff-electric-reels](.agents/skills/jeff-electric-reels/SKILL.md): organic short-form video, script, caption, rendering, and delivery.
- [$jeff-electric-video-ads](.agents/skills/jeff-electric-video-ads/SKILL.md): paid-social creative, hooks, variants, ad copy, rendering, and delivery.

They extend the installed HyperFrames core instructions. They are available to Codex when it reads this repository's local skills; they are not globally installed ChatGPT plugins. If the picker does not show them immediately, start a new cloud task in this repository, or ask Codex to read the corresponding SKILL.md directly.

From an iPhone, open Codex Cloud, select this repository and a cloud environment, then ask:

> Use $jeff-electric-reels to create a 15-second Facebook Reel about [topic]. Use the Jeff Electric brand assets, render and validate it in the cloud, and give me the MP4 and caption.

Or:

> Use $jeff-electric-video-ads to create two Facebook ad creatives for [verified service], with different opening hooks. Render both MP4s and include primary text, headlines, and CTAs. Do not launch a campaign.

## Cloud setup and rendering

Requirements: Node.js 22+ (validated with 24), FFmpeg/FFprobe, Chromium or Google Chrome. No Windows computer, desktop app, Docker, GPU, paid hosted renderer, or HeyGen API key is needed for these text-led videos.

Set the Codex Cloud setup command to `bash scripts/setup.sh`. The selected environment must have FFmpeg and Chrome installed in its Linux image. Set `HYPERFRAMES_BROWSER_PATH` if Chrome is not on PATH. The wrapper automatically detects common Chromium/Chrome executables and stores caches in the workspace. Enable network during dependency installation; render assets are local.

```bash
bash scripts/setup.sh
npm run render -- jeff-electric-troubleshooting
node scripts/playback.cjs jeff-electric-troubleshooting
npm run render:facebook
```

The original five-second, 1920×1080 smoke test is preserved:

```bash
npm run render
node scripts/playback.cjs smoke
```

Each render profile in `configs/` declares project path, output, evidence folder, dimensions, duration, FPS, and resolution. `scripts/render.mjs` checks the composition, renders MP4, fully decodes it with FFmpeg, checks H.264/yuv420p, frame count/FPS/duration/dimensions/fast-start, and extracts a frame. JSON `ok` is checked explicitly because some HyperFrames commands return zero despite failed checks. Browser playback is a separate advancing-video test.

If the command sandbox prevents Chrome launch, use the cloud runtime's supported execution route. This still runs in the cloud. Do not use a personal computer as the execution environment.

Doctor may report optional transcription, voice, music, or Docker tools missing. They are not required for these silent videos; setup gates on the required dependencies.

## From an iPhone

Open an MP4 download link above, save to Files, and use Share → Save Video when available. Upload the reviewed file in Facebook and paste its caption from the copy pack. Physical iPhone playback has not been tested by the agent.

For repeat renders from GitHub, open **Actions → Render HyperFrames video → Run workflow**. If hidden in Safari's mobile view, request the desktop website. The workflow renders the smoke test and all four creatives on GitHub-hosted Ubuntu runners. Open a completed job and download its `hyperframes-<profile>-video-and-evidence` artifact; tap the ZIP in Files to extract it. Actions artifacts require GitHub sign-in and expire after 30 days. The MP4s committed in `renders/` remain accessible independently of artifact retention.

The workflow only renders and uploads artifacts. It does not post to Facebook, launch ads, or spend money.
