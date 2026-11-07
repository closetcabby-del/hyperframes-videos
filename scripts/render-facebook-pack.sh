#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."
for project in jeff-electric-troubleshooting jeff-electric-project-planning jeff-electric-ad-flickering jeff-electric-ad-breaker; do
  npm run render -- "$project"
  node scripts/playback.cjs "$project"
done
