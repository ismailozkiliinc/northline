#!/usr/bin/env node
/**
 * Builds a cPanel Node.js App upload folder (source, no node_modules).
 * On the server: npm install && npm run build && start via server.js
 * Includes admin panel + API routes.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const outDir = path.join(root, "deploy-cpanel-node");

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

// Do not ship parked static-runtime leftovers inside the Node pack
const parked = path.join(outDir, "src", "_server-runtime");
if (fs.existsSync(parked)) rm(parked);

const pkgPath = path.join(outDir, "package.json");
const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf8"));
delete pkg.dependencies["@next/swc-darwin-arm64"];
delete pkg.dependencies["@parcel/watcher-darwin-arm64"];
delete pkg.devDependencies;
fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + "\n");

fs.writeFileSync(
  path.join(outDir, "CPANEL-NODE-README.txt"),
  `NISCRAFT — Güzel Hosting Node.js App (admin dahil)

ÖNEMLİ: Admin paneli Node.js gerektirir. Statik HTML zip ile çalışmaz.

1) cPanel → Setup Node.js App → Create Application
   - Node.js version: 20.x (veya 18+)
   - Application root: niscraft   (public_html / sadece dosya klasörü DEĞİL)
   - Application URL: niscraft.com (veya alt domain)
   - Application startup file: server.js
   - Mode: Production

2) Bu klasörün TÜM içeriğini Application root'a yükle (FTP / File Manager + Extract).

3) Environment Variables (cPanel Node App → Environment):
   NODE_ENV=production
   NEXT_PUBLIC_SITE_URL=https://niscraft.com
   NEXT_PUBLIC_CONTACT_EMAIL=hello@niscraft.com
   ADMIN_EMAIL=...
   ADMIN_PASSWORD=...
   ADMIN_SESSION_SECRET=...   (openssl rand -hex 32)
   ADMIN_ROLE=super_admin
   RESEND_API_KEY=...
   RESEND_FROM=NISCRAFT <hello@niscraft.com>
   LEAD_NOTIFY_EMAIL=...
   (opsiyonel) NEXT_PUBLIC_SUPABASE_URL / NEXT_PUBLIC_SUPABASE_ANON_KEY / SUPABASE_SERVICE_ROLE_KEY

4) Run NPM Install

5) SSH veya Terminal:
   cd ~/niscraft   # (senin application root)
   npm run build

6) Restart / Start App

7) SSL: Let's Encrypt

8) Admin:
   https://niscraft.com/admin/login

Not: Eski statik dosyaları (index.html, _next) Application root'tan kaldır;
     domain Node uygulamasına bağlı olsun.
`,
);

console.log("Created", outDir);
