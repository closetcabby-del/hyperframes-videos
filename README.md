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

## Creative skills

Start with **[$jeff-electric-creative-director](.agents/skills/jeff-electric-creative-director/SKILL.md)**. It researches references when needed, checks the actual source media, selects a concrete concept, and runs a creative review before production.

| Skill | Job |
| --- | --- |
| [Creative Director](.agents/skills/jeff-electric-creative-director/SKILL.md) | Audience, references, concept selection, media fit, and critical review |
| [Copywriter](.agents/skills/jeff-electric-copywriter/SKILL.md) | Natural hooks, dialogue, scripts, captions, and ad copy |
| [Video Storyteller](.agents/skills/jeff-electric-video-storyteller/SKILL.md) | Opening visual, shot sequence, performance, editing, and sound |
| [Rights Review](.agents/skills/jeff-electric-rights-review/SKILL.md) | Copyright, music scope, permissions, provenance, and truthful claims |
| [Reels Production](.agents/skills/jeff-electric-reels/SKILL.md) | Build, render, inspect, and deliver a supported organic creative |
| [Video Ads](.agents/skills/jeff-electric-video-ads/SKILL.md) | Produce a supported ad treatment and copy pack |

The initial exported videos above remain as technical samples. The owner rejected their creative direction; they are not examples of creative approval or demonstrated marketing performance. The revised skills remove the automatic silent text-led/four-scene recipe and explicitly retain that feedback.

From an iPhone, start a Codex Cloud task in this repository and ask:

> Use $jeff-electric-creative-director to develop a strong Jeff Electric Facebook concept. Research relevant references, inspect our actual media, and give me a concrete treatment supported by the assets. Do not recycle the rejected photo montage or quiz.

Or, for an approved treatment:

> Use $jeff-electric-copywriter and $jeff-electric-video-storyteller to develop this treatment, then use $jeff-electric-reels to render and validate it. Identify any missing essential shot rather than substituting a weak slideshow.

These are repository-local Codex skills, not globally installed ChatGPT plugins. Open a new task after pulling the current repository so skill discovery can load the new names and descriptions. If a picker does not show them, ask Codex to read the corresponding SKILL.md directly. The root `AGENTS.md` routes ordinary content requests into the creative workflow.

[Creative skill guide and test scope](evals/creative-skills/README.md). Skills make decisions more repeatable; they do not guarantee taste, reach, or conversion. Actual publication tests and owner feedback are still necessary.

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
