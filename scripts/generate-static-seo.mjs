#!/usr/bin/env node
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { createRequire } from "module";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

// Dynamic import of TS content via next's compiled path is heavy; duplicate slugs from JSON-ish grep.
const projectsSrc = fs.readFileSync(path.join(root, "src/content/projects.ts"), "utf8");
const blogSrc = fs.readFileSync(path.join(root, "src/content/blog.ts"), "utf8");

const projectSlugs = [...projectsSrc.matchAll(/slug:\s*"([^"]+)"/g)].map((m) => m[1]);
const blogSlugs = [...blogSrc.matchAll(/slug:\s*"([^"]+)"/g)].map((m) => m[1]);

const base = "https://niscraft.com";
const staticPaths = [
  "",
  "/hizmetler",
  "/hizmetler/web",
  "/hizmetler/mobil",
  "/hizmetler/ui-ux",
  "/hizmetler/saas",
  "/hizmetler/e-ticaret",
  "/hizmetler/ai",
  "/calismalar",
  "/surec",
  "/hakkimizda",
  "/paketler",
  "/icgoruler",
  "/sss",
  "/proje-baslat",
  "/iletisim",
  "/gizlilik",
  "/kvkk",
  "/cerezler",
  "/kullanim-kosullari",
];

const urls = [];
for (const loc of ["tr", "en"]) {
  for (const p of staticPaths) urls.push(`${base}/${loc}${p}/`);
  for (const slug of projectSlugs) urls.push(`${base}/${loc}/calismalar/${slug}/`);
  for (const slug of blogSlugs) urls.push(`${base}/${loc}/icgoruler/${slug}/`);
}

const xml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...urls.map((u) => `  <url><loc>${u}</loc><changefreq>monthly</changefreq></url>`),
  "</urlset>",
  "",
].join("\n");

fs.writeFileSync(path.join(root, "public/sitemap.xml"), xml);
fs.writeFileSync(
  path.join(root, "public/robots.txt"),
  [
    "User-agent: *",
    "Allow: /",
    "Disallow: /admin",
    "Disallow: /api/",
    "Sitemap: https://niscraft.com/sitemap.xml",
    "",
  ].join("\n"),
);

console.log(`Wrote public/sitemap.xml (${urls.length} urls) and public/robots.txt`);
