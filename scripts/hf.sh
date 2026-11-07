#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."
export HYPERFRAMES_NO_TELEMETRY=1
export HYPERFRAMES_CACHE_DIR="$PWD/.cache/hyperframes"
export XDG_CACHE_HOME="$PWD/.cache"
if [[ -z "${HYPERFRAMES_BROWSER_PATH:-}" ]]; then
  for browser in chromium chromium-browser google-chrome; do
    if command -v "$browser" >/dev/null; then
      export HYPERFRAMES_BROWSER_PATH="$(command -v "$browser")"
      break
    fi
  done
fi
mkdir -p "$HYPERFRAMES_CACHE_DIR"
exec ./node_modules/.bin/hyperframes "$@"
