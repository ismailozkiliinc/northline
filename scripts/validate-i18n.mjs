#!/usr/bin/env node
/**
 * Validates that all locale message catalogs share identical namespaces and leaf keys.
 * Also verifies namespaces referenced by the Process page exist.
 *
 * Usage: node scripts/validate-i18n.mjs
 * Exit 1 on any mismatch or missing required namespace.
 */

import { readdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const messagesDir = join(root, "src/messages");

/** Required top-level namespaces that must exist in every locale */
const REQUIRED_NAMESPACES = [
  "meta",
  "nav",
  "hero",
  "work",
  "services",
  "process",
  "processCinema",
  "processPage",
  "about",
  "faq",
  "blog",
  "packages",
  "contact",
  "start",
  "legal",
  "cookies",
  "footer",
  "ctaBand",
  "ai",
  "notFound",
  "common",
  "principles",
  "homeExtras",
  "sectors",
  "why",
];

/** Keys that Process page / components resolve (dot paths under processPage) */
const PROCESS_PAGE_REQUIRED_KEYS = [
  "processPage.metaTitle",
  "processPage.metaDesc",
  "processPage.hero.eyebrow",
  "processPage.hero.title",
  "processPage.hero.body",
  "processPage.hero.cta",
  "processPage.hero.ctaSecondary",
  "processPage.hero.openStep",
  "processPage.hero.fromYou",
  "processPage.hero.fromUs",
  "processPage.hero.output",
  "processPage.hero.approval",
  "processPage.hero.trust",
  "processPage.stages",
  "processPage.timeline.eyebrow",
  "processPage.timeline.title",
  "processPage.timeline.navLabel",
  "processPage.timeline.fromYou",
  "processPage.timeline.fromUs",
  "processPage.timeline.deliverables",
  "processPage.timeline.decisions",
  "processPage.timeline.approval",
  "processPage.timeline.duration",
  "processPage.timeline.tools",
  "processPage.timeline.previous",
  "processPage.timeline.current",
  "processPage.timeline.next",
  "processPage.timeline.nextPreview",
  "processPage.timeline.trustItems",
  "processPage.trust.eyebrow",
  "processPage.trust.title",
  "processPage.trust.items",
  "processPage.lifecycle.eyebrow",
  "processPage.lifecycle.title",
  "processPage.lifecycle.stages",
  "processPage.deliverables.eyebrow",
  "processPage.deliverables.title",
  "processPage.deliverables.subtitle",
  "processPage.deliverables.handoff",
  "processPage.deliverables.items",
  "processPage.tech.eyebrow",
  "processPage.tech.title",
  "processPage.tech.body",
  "processPage.cta.title",
  "processPage.cta.body",
  "processPage.cta.primary",
  "processPage.cta.secondary",
];

function leafPaths(value, prefix = "") {
  /** @type {string[]} */
  const out = [];
  if (value === null || typeof value !== "object") {
    if (prefix) out.push(prefix);
    return out;
  }
  if (Array.isArray(value)) {
    // Arrays are treated as a single leaf (t.raw) — path without indices
    out.push(prefix);
    return out;
  }
  for (const [key, child] of Object.entries(value)) {
    const next = prefix ? `${prefix}.${key}` : key;
    out.push(...leafPaths(child, next));
  }
  return out;
}

function loadLocales() {
  const files = readdirSync(messagesDir)
    .filter((f) => f.endsWith(".json"))
    .sort();
  if (files.length === 0) {
    throw new Error(`No locale JSON files found in ${messagesDir}`);
  }
  /** @type {Record<string, Record<string, unknown>>} */
  const catalogs = {};
  for (const file of files) {
    const locale = file.replace(/\.json$/, "");
    const raw = readFileSync(join(messagesDir, file), "utf8");
    catalogs[locale] = JSON.parse(raw);
  }
  return catalogs;
}

function main() {
  const catalogs = loadLocales();
  const locales = Object.keys(catalogs);
  /** @type {string[]} */
  const errors = [];

  console.log(`i18n validate — locales: ${locales.join(", ")}`);

  // 1) Required namespaces in every locale
  for (const locale of locales) {
    const namespaces = Object.keys(catalogs[locale]);
    for (const ns of REQUIRED_NAMESPACES) {
      if (!namespaces.includes(ns)) {
        errors.push(`[${locale}] missing namespace "${ns}"`);
      }
    }
  }

  // 2) Identical namespace sets across locales
  const baseLocale = locales[0];
  const baseNamespaces = new Set(Object.keys(catalogs[baseLocale]));
  for (const locale of locales.slice(1)) {
    const ns = new Set(Object.keys(catalogs[locale]));
    for (const name of baseNamespaces) {
      if (!ns.has(name)) errors.push(`[${locale}] missing namespace "${name}" (present in ${baseLocale})`);
    }
    for (const name of ns) {
      if (!baseNamespaces.has(name)) {
        errors.push(`[${locale}] extra namespace "${name}" (not in ${baseLocale})`);
      }
    }
  }

  // 3) Identical leaf key paths across locales
  const baseLeaves = new Set(leafPaths(catalogs[baseLocale]));
  for (const locale of locales.slice(1)) {
    const leaves = new Set(leafPaths(catalogs[locale]));
    for (const path of baseLeaves) {
      if (!leaves.has(path)) errors.push(`[${locale}] missing key "${path}"`);
    }
    for (const path of leaves) {
      if (!baseLeaves.has(path)) errors.push(`[${locale}] extra key "${path}"`);
    }
  }

  // 4) Process page required keys
  for (const locale of locales) {
    const leaves = new Set(leafPaths(catalogs[locale]));
    for (const path of PROCESS_PAGE_REQUIRED_KEYS) {
      if (!leaves.has(path)) {
        errors.push(`[${locale}] Process page requires key "${path}"`);
      }
    }
    // Explicit namespace presence (the reported MISSING_MESSAGE case)
    if (!catalogs[locale].processPage) {
      errors.push(`[${locale}] top-level namespace "processPage" is missing`);
    }

    const stages = catalogs[locale]?.processPage?.stages;
    if (!Array.isArray(stages) || stages.length !== 9) {
      errors.push(`[${locale}] processPage.stages must be an array of 9 stages`);
    } else {
      for (const [i, stage] of stages.entries()) {
        for (const field of [
          "n",
          "title",
          "purpose",
          "fromYou",
          "fromUs",
          "output",
          "approval",
          "duration",
          "art",
          "deliverables",
          "tools",
          "cta",
        ]) {
          if (!stage || typeof stage !== "object" || !(field in stage)) {
            errors.push(`[${locale}] processPage.stages[${i}] missing "${field}"`);
          }
        }
      }
    }
  }

  if (errors.length > 0) {
    console.error("\ni18n validation FAILED:\n");
    for (const err of errors) console.error(`  • ${err}`);
    console.error(`\n${errors.length} error(s). Fix locale files before building.\n`);
    process.exit(1);
  }

  console.log(`✓ ${locales.length} locale(s) aligned`);
  console.log(`✓ ${REQUIRED_NAMESPACES.length} required namespaces present`);
  console.log(`✓ processPage keys verified`);
  console.log(`✓ ${baseLeaves.size} leaf paths match across locales`);
}

main();
