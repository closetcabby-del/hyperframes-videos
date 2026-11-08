# Creative skill evaluation

The revised workflow separates creative decisions from rendering. It responds to the owner's actual feedback about the first text-led videos, the flickering-light quiz, and the generator photo montage. Those rejections are documented as negative examples so a new session does not recycle them.

## What changed

- New Creative Director, Copywriter, Video Storyteller, and Rights Review skills.
- Existing Reels/Ads skills route through concept and media-fit review.
- No automatic silent soundtrack, fixed four-scene structure, or blanket 15-second runtime.
- Dated reference research with honest access limits, natural-copy checks, a real payoff, and a purposeful sound plan.
- Separate creative, rights, technical, delivery, publication, and performance states.
- The agent curates references and makes routine decisions; the owner does not have to become a prompt engineer.

## How to check

`python3 evals/creative-skills/validate_structure.py` checks frontmatter, names, relative links, UI metadata, and the fixture schema. It requires Python and PyYAML. This is a developer check, not a dependency of video rendering.

`cases.json` supplies four synthetic briefs: poor-media fit, a supported story, rights/claims problems, and repairing rejected work. Evaluation agents read the new skills and the case inputs without seeing `rubric.md`, then write response artifacts under `evidence/creative-skills/`. A separate reviewer compares the responses against the rubric and cites concrete decisions rather than awarding a generic quality score.

These are behavioral spot checks, not a controlled comparison against the old skills, an automated benchmark, a human taste study, or evidence of social performance. They do not test every future prompt. No test case authorizes publishing, rendering, or inventing actual company work. All fixture job facts and quoted voices are explicitly hypothetical.

## Useful public sources

- [Official OpenAI skill documentation](https://developers.openai.com/codex/skills/): skill structure, metadata, and discovery.
- [OpenAI UI metadata reference](https://github.com/openai/skills/blob/main/skills/.system/skill-creator/references/openai_yaml.md): `agents/openai.yaml` fields.
- [Later's dated trend roundup](https://later.com/blog/instagram-reels-trends/): a discovery source for candidate current formats, not proof a sound is trending on every platform or cleared for business use. Last reviewed November 7, 2026; entries change.
- [Meta originality guidance](https://about.fb.com/news/2026/03/rewarding-original-creators-on-facebook/): owner-produced content and meaningful original contribution.
- [YouTube audience-retention guidance](https://support.google.com/youtube/answer/9314415?hl=en): expectation matching and reviewing drop-off/rewatch moments. This is YouTube-specific; do not map its 30-second intro metric or eligibility limits onto an eight-second Facebook Reel.
- [Rights/claims sources](../../.agents/skills/jeff-electric-rights-review/references/sources.md): official platform terms and U.S. copyright/advertising guidance, with dates and access limits.

The Meta Reels creative-essentials page redirected to login during this research; it is not treated as independently read evidence here. Follow current placement requirements when creating a paid asset.
