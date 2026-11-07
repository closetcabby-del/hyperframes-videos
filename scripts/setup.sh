#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."
node -e 'if(Number(process.versions.node.split(".")[0])<22)throw Error("Node.js 22+ is required")'
for tool in ffmpeg ffprobe; do
  command -v "$tool" >/dev/null || { echo "Missing $tool: install the ffmpeg system package" >&2; exit 1; }
done
if ! command -v chromium >/dev/null && ! command -v chromium-browser >/dev/null && ! command -v google-chrome >/dev/null && [[ -z "${HYPERFRAMES_BROWSER_PATH:-}" ]]; then
  echo 'Install Chromium or set HYPERFRAMES_BROWSER_PATH to an installed Chrome executable.' >&2
  exit 1
fi
npm ci
mkdir -p video/assets evidence
cp node_modules/gsap/dist/gsap.min.js video/assets/gsap.min.js
./scripts/hf.sh doctor --json > evidence/doctor.json
node <<'JS'
const r=require('./evidence/doctor.json');
for(const name of ['Node.js','FFmpeg','FFprobe','Chrome']) {
 const c=r.checks.find(c=>c.name===name); if(!c?.ok)throw Error('Required dependency failed: '+name); console.log(name+': '+c.detail);
}
JS
