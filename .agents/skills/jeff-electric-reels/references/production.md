# Shared HyperFrames production rules

These technical rules apply after the creative-director workflow has established a supported concept. They extend the installed HyperFrames instructions; they do not replace its composition contract or the separate creative/rights review.

## Brand and business facts

Use `content/jeff-electric-troubleshooting.md` for the existing asset provenance. The original primary logo is `projects/jeff-electric-troubleshooting/assets/jeff-electric-logo.png`.

- Palette: Midnight Black `#0D0D0D`, Electric Gold `#DEAD44`, Pure White `#FFFFFF`. Supporting Charcoal `#1A1A1A`.
- Headings: Oswald; body: Inter. The template bundles local font files and their licenses.
- Preserve the entire logo and its proportions. No cropping, recoloring, rotation, opacity effects, or drop shadow. Maintain clear space. At small sizes, use a verified approved emblem asset rather than manually extracting it from the full logo.
- Write the business name as “Jeff Electric.” Do not invent phone numbers, website addresses, prices, promotions, credentials, insurance status, service areas, guarantees, reviews, or response times.
- Existing brand-guideline business-card mockups include sample contact details. Those are not verified business contacts.
- Use current company marketing sources; ignore superseded/archive guidelines. A modification date does not establish approval. If important facts conflict, continue with a generic CTA and identify the unresolved fact.
- Do not copy internal PDFs, customer information, login records, or private business data into the public repository. Intended marketing logo assets may be used within the requested creative.

## Phone layout

Default to 1080×1920 at 30 fps. Keep all essential readable content in the conservative band `x=108..900`, `y=192..1300`; only decoration goes below it. This leaves space for typical platform overlays but does not guarantee compatibility with every current placement. For paid work, check the actual placement preview/specification before publishing.

Use large type, short lines, high contrast, and one focal message per frame. Never shrink critical text to fit excessive copy. The first frame must contain the hook. Avoid strobing. If a closing CTA is used, give it adequate reading time. Do not add a sales card to every organic post.

## Files and commands

Keep the 5-second landscape smoke test in `video/` intact.

For a new topic, reuse appropriate brand assets and technical scaffolding in `projects/<name>/`; do not copy an old creative structure by default. Create `configs/<name>.json` using the same schema as `configs/jeff-electric-troubleshooting.json`. Each profile declares `project`, `output`, `evidence`, `width`, `height`, `duration`, `fps`, and `resolution`. Use a lowercase hyphenated name. Keep composition dimensions/duration, scene timings, and profile expectations in agreement. Use a separate output and evidence folder for each video.

1. Read the current Git status and relevant `AGENTS.md`; preserve the last working version on a development branch.
2. Read the installed HyperFrames core skill. Seek paused timelines; never use wall-clock animation or runtime network-dependent assets. Read the registry skill if available before named effects. If the registry is inaccessible, record that and use simple supported typography/motion.
3. Resolve creative/media-fit and rights blockers. Write the supported scenes and local assets. Lint after the first structural pass.
4. `./scripts/hf.sh check projects/<name> --json` — inspect the JSON `ok` value, not only the process exit code. Fix errors and review warnings. No browser/layout samples means those checks were not performed.
5. `./scripts/hf.sh snapshot projects/<name> --review` — inspect beat, seam, and phone sheets. For important transitions, sample frames on either side. Fix clipping and unreadable copy. Read HyperFrames' `references/review.md`, then save a concise project `REVIEW.md`.
6. `./scripts/hf.sh preview projects/<name> --background` — verify its actual URL answers HTTP 200. This is the editable review surface; a localhost URL alone is not an iPhone download link. User requests for a finished video authorize continuing to render.
7. `npm run render -- <name>` — checks, renders, verifies the MP4, and extracts a decoded frame. The script stops on failed checks or render failure.
8. `node scripts/playback.cjs <name>` — verify advancing HTML video playback in cloud Chrome.
9. Inspect frames decoded from the final MP4, including every scene and the last readable CTA. Report only the tests actually performed.

The validator checks actual dimensions, duration, FPS, frame count, H.264/yuv420p, full FFmpeg decoding, and MP4 fast-start. It must validate against the requested profile, not assume every video is the smoke test. A change to shared rendering scripts requires rerunning the original smoke profile as well as the new profile.

The cloud command sandbox may block Chrome or the network proxy. Use the environment's supported execution/approval route; never alter access controls, disable TLS, or depend on a personal laptop. Do not claim future/background execution without a saved workflow or schedule.

## Delivery and publishing

Within the authorized repository scope, commit the source, post copy, output, and evidence to a development branch. Check whether a push triggers public deployment before pushing; this repository's known workflow only renders and stores artifacts. Never post to social channels, launch ads, or spend money without explicit authorization.

Verify the delivered URL by downloading the actual MP4 and checking its checksum against the validated output. Prefer a stable repository raw-file URL after an authorized push, or an uploaded Drive file with metadata readback. Never present a VM-local path as an iPhone download link. Include the source commit and concise evidence links. Do not claim physical iPhone playback unless it was actually tested.
