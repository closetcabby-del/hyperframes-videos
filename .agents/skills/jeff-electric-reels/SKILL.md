---
name: jeff-electric-reels
description: Create, edit, and render Jeff Electric Instagram Reels, Facebook Reels, and vertical organic social videos using the repository's pinned HyperFrames renderer. Use for service explainers, electrical questions, job showcases, and repeatable short-form content; deliver a verified MP4, post caption, and reusable source.
---

# Jeff Electric Reels

Deliver the actual video when asked to make content. Own scripting, creative direction, source changes, rendering, visual review, validation, and delivery. Do not hand the user a prompt to run elsewhere when the connected cloud environment can do the work.

First read [shared production rules](references/production.md), then the installed HyperFrames core skill at `node_modules/hyperframes/dist/skills/hyperframes/SKILL.md` and its `references/types/vertical.md`. If dependencies are missing, run `bash scripts/setup.sh`. Read the CLI skill's relevant references before unfamiliar commands. Keep the existing CLI pin.

## Choose a useful brief

- Infer the topic, audience, and service from the request. For a first unspecific video, use the electrical troubleshooting template.
- Default to one 15-second, 1080×1920, 30 fps video for local homeowners. Use another audience only when the brief or source supports it; do not invent a city or service radius.
- Draft three short hooks privately and choose the clearest. Deliver alternatives in the caption file if useful; do not stop for routine hook selection.
- The first frame already contains the problem or result. One message per beat, with a new beat about every 2–4 seconds and a readable closing CTA.
- Design for sound-off viewing. Default to a silent text-led Reel unless the user requests narration or music. Disclose silence. Do not claim an AI voice is a real employee.

## Build

Use `projects/jeff-electric-troubleshooting/` as the starting layout, preserving its original logo, local fonts, and phone-safe text placement. Create a new project and profile for a new topic; modify the existing one when revising that same video. Follow the shared rules for names and validation.

Prefer this story shape:

1. A recognizable question or outcome.
2. A second symptom or a useful explanation.
3. The relevant Jeff Electric service.
4. One specific next action with the original logo.

Do not diagnose a particular household remotely. Avoid instructions to open panels or work on energized equipment. If using a tip, keep it general and avoid implying that a symptom proves a single cause. Do not use flashing/strobe effects to depict flickering.

Use actual job photos only when their intended marketing use and customer privacy are established. When unavailable, make a polished text-led creative. Never generate fake before-and-after job photos or customer testimonials.

## Ship

Complete the shared check → snapshot → review → preview → render → decode → playback process. Save a short `REVIEW.md` inside the project and `content/<name>.md` containing:

- Final on-screen script and timings.
- One ready-to-copy caption, one CTA, and up to five relevant hashtags.
- Asset/source notes, any assumptions, and whether audio is included.

Provide a downloadable MP4, dimensions and duration, validation evidence, and the source commit. Posting to Instagram/Facebook is a separate action requiring the user's explicit instruction. Creating a file is not publishing a post.

Example request: “Use $jeff-electric-reels to make a 15-second Jeff Electric Reel about breakers that keep tripping. Render it in the cloud and give me the MP4 and caption.”
