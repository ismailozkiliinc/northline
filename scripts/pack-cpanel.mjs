#!/usr/bin/env node
/**
 * Builds a cPanel-ready upload folder (source + server.js, no node_modules).
 * On the server: npm install && npm run build && start via cPanel Node App.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const outDir = path.join(root, "deploy-cpanel");

function rm(p) {
  fs.rmSync(p, { recursive: true, force: true });
}

function copy(src, dest) {
  fs.cpSync(src, dest, { recursive: true });
}

rm(outDir);
fs.mkdirSync(outDir, { recursive: true });

const include = [
  "src",
  "public",
  "messages",
  "supabase",
  "scripts",
  "package.json",
  "package-lock.json",
  "next.config.ts",
  "tsconfig.json",
  "postcss.config.mjs",
  "server.js",
];

for (const item of include) {
  const from = path.join(root, item);
  if (!fs.existsSync(from)) {
    console.warn("skip missing", item);
    continue;
  }
  copy(from, path.join(outDir, item));
}

// Strip darwin-only native deps so Linux cPanel npm install works
const pkgPath = path.join(outDir, "package.json");
const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf8"));
delete pkg.dependencies["@next/swc-darwin-arm64"];
delete pkg.dependencies["@parcel/watcher-darwin-arm64"];
delete pkg.devDependencies;
fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + "\n");

fs.writeFileSync(
  path.join(outDir, "CPANEL-README.txt"),
  `NISCRAFT — Güzel Hosting / cPanel kurulum

1) cPanel → Setup Node.js App → Create
   - Node.js: 20.x
   - Application root: niscraft   (public_html DEĞİL)
   - Application URL: niscraft.com
   - Startup file: server.js

2) Bu klasörün tüm içeriğini Application root'a yükle (FTP / File Manager).

3) Environment Variables ekle:
   NEXT_PUBLIC_SITE_URL=https://niscraft.com
   (+ Supabase, Resend, vs. — .env.local'deki production değerleri)

4) Run NPM Install

5) SSH / Terminal:
   cd ~/niscraft
   npm run build

6) Start App

7) SSL: cPanel → Let's Encrypt → niscraft.com

Not: public_html içindeki "yapım aşamasında" sayfasını kaldır;
     domain Node uygulamasına bağlansın.
`,
);

console.log("Created", outDir);
