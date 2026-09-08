#!/usr/bin/env bash
# Güzel Hosting / cPanel — run inside Terminal after extracting the node zip
set -euo pipefail

ROOT="${1:-$HOME/niscraft-build}"
source "$HOME/nodevenv/niscraft.com/24/bin/activate"
cd "$ROOT"

echo "==> Installing deps (WASM CSS stack for old glibc)"
npm install --no-optional=false

echo "==> Building with webpack"
npx next build --webpack

echo "==> DONE. Now:"
echo "1) Node App STOP"
echo "2) Copy this folder contents into niscraft.com (replace static)"
echo "3) Startup: server.js  → START"
echo "4) https://niscraft.com/admin/login"
