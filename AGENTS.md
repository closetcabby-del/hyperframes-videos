# HyperFrames video repository

For Jeff Electric organic vertical content, use `.agents/skills/jeff-electric-reels/SKILL.md`.
For Jeff Electric video ad creative, use `.agents/skills/jeff-electric-video-ads/SKILL.md`.
These are repository-local Codex skills, not globally installed ChatGPT plugins.

Read the relevant skill and its shared production rules before editing a brand video. Follow the pinned HyperFrames core skill bundled under `node_modules/hyperframes/dist/skills/hyperframes/` after setup. Keep `video/` and the `smoke` profile as the working regression sample.

Use `bash scripts/setup.sh` for dependencies, `npm run render -- <profile>` to render/validate, and `node scripts/playback.cjs <profile>` to test playback. Rendering is not publishing a social post or launching an ad.
