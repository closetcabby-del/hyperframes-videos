# Jeff Electric content workflow

For new social content or creative feedback, start with `.agents/skills/jeff-electric-creative-director/SKILL.md`. It selects the idea, checks source-media fit, and runs creative review before production. The owner has rejected the early text-led Reels, the flickering-light quiz, and the backup-plan photo montage; treat that feedback as a durable taste constraint.

Supporting skills:
- `.agents/skills/jeff-electric-copywriter/SKILL.md` — hooks, scripts, dialogue, captions, and ad copy.
- `.agents/skills/jeff-electric-video-storyteller/SKILL.md` — shot sequence, performance, edit, and sound.
- `.agents/skills/jeff-electric-rights-review/SKILL.md` — copyright, music, permissions, provenance, and claims.

Route the supported concept to `.agents/skills/jeff-electric-reels/SKILL.md` or `.agents/skills/jeff-electric-video-ads/SKILL.md` for production. Load supporting references only when relevant. These are repository-local Codex skills, not globally installed ChatGPT plugins.

Use the pinned HyperFrames core skill bundled under `node_modules/hyperframes/dist/skills/hyperframes/` after setup. Keep `video/` and the `smoke` profile as the working regression sample. `bash scripts/setup.sh` installs dependencies; `npm run render -- <profile>` renders/validates; `node scripts/playback.cjs <profile>` tests browser playback.

Separate prepared source, actual render, decoded output, browser playback, download verification, creative review, publication, and performance. Do not claim a pending or canceled tool call is rendering. If execution is blocked, name the actual blocker and continue concrete work that remains possible. Rendering is not publishing or launching an ad, and a valid MP4 does not establish audience appeal.
