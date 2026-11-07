#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."
mkdir -p renders evidence
./scripts/hf.sh check video --json > evidence/check.json
node -e 'if(!require("./evidence/check.json").ok)process.exit(1)'
./scripts/hf.sh render video --fps 30 --resolution 1080p --workers 1 --quality delivery --strict -o "$PWD/renders/test-1080p.mp4" 2>&1 | tee evidence/render.log
node scripts/verify.mjs renders/test-1080p.mp4 | tee evidence/validation.log
ffmpeg -y -v error -ss 2.5 -i renders/test-1080p.mp4 -frames:v 1 evidence/decoded-frame.png
