---
name: jeff-electric-video-ads
description: Create and render Jeff Electric video ad creatives for Instagram and Facebook using HyperFrames, including hooks, variant concepts, primary text, headlines, CTAs, and verified MP4 files. Use for paid-social creative production and ad-ready variations; this skill does not launch campaigns or spend ad budget.
---

# Jeff Electric video ads

Own the creative deliverable from brief through verified video. Start with [shared production rules](../jeff-electric-reels/references/production.md), then the installed HyperFrames core skill at `node_modules/hyperframes/dist/skills/hyperframes/SKILL.md` and the relevant vertical/launch references. The shared rules govern brand facts, privacy, file layout, rendering, QA, and delivery.

## Define the conversion

Extract the service, audience, placement, CTA, and any substantiated offer from the user's brief or current approved company sources. If no campaign brief exists, choose electrical troubleshooting for local homeowners, a 15-second 1080×1920 video, and “Contact Jeff Electric to schedule service.” Clearly label those as creative defaults rather than a proven marketing strategy.

Do not block creative production because budget, targeting, a phone number, or a landing page is missing. Use a generic contact CTA, omit unverified details, and list only the information needed before an actual campaign launch. Ask a question only when it changes the requested creative materially and cannot be resolved from connected sources.

## Write for an ad

Use one service, one main promise that can be substantiated, and one CTA. Start with a concrete problem or desired outcome, then introduce the service and a clear next action. Avoid fake urgency, exaggerated danger, guaranteed savings, fabricated reviews, unsupported “best” claims, or competitor comparisons without evidence.

Do not imply knowledge of an individual viewer's household or electrical condition. Frame symptoms as a general question, not a diagnosis. Do not depict unsafe work. The creative must work without sound, with readable text in the phone-safe area. Label any illustrative or AI-generated scene rather than representing it as a completed Jeff Electric job.

For an ad request without an explicit variant count, build one finished creative and provide two alternative hook lines. If the user asks for a test, create two genuinely different opening concepts with the remaining message and CTA held consistent. Name exports `...-a.mp4` and `...-b.mp4`, give each its own render profile/evidence, and do not call either a winner before campaign data exists.

For another placement, recompose for its aspect ratio rather than stretching or letterboxing the vertical version. Check current official placement requirements when available; report any placement compatibility that remains unverified. Do not call a file Meta-approved or claim compliance from a successful render.

## Build, test, and deliver

Use the brand project as the source template, preserve the smoke test, and follow the shared production checklist. Render every requested variant and validate each one. If using speech or music, load the installed media-use skill first, establish usage rights, and verify the resulting audio stream. Do not add paid generation or incur charges without existing authorization.

Save `content/<name>-ad-copy.md` with:

- Objective and audience assumptions.
- The final on-screen script and timings.
- Primary text, a concise headline, a short description, and CTA wording.
- Two alternative hooks or the requested variant comparison.
- A source for every factual claim or a note that the wording is a proposed creative line.
- Pre-launch dependencies, such as a verified contact destination and final placement preview.

Deliver the MP4 link(s), copy pack, source commit, and actual render/validation evidence. The file and copy are ready for owner review; publishing, campaign changes, tracking setup, budget changes, and sending customer messages require explicit instructions and suitable connected tools. Do not silently turn this creative request into a campaign launch.

Example request: “Use $jeff-electric-video-ads to make two 15-second electrical troubleshooting ad variants for Instagram. Use different openings, the same service and CTA, and render both MP4s with a copy pack.”
