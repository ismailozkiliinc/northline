#!/usr/bin/env node
/**
 * Check that required production env vars are set (no placeholders).
 * Auto-loads .env.local when present (never commit that file).
 *
 *   npm run env:check
 *   NODE_ENV=production npm run env:check
 */

import { readFileSync, existsSync } from "fs";
import { resolve } from "path";

function loadEnvFile(filePath) {
  if (!existsSync(filePath)) return;
  const raw = readFileSync(filePath, "utf8");
  for (const line of raw.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq <= 0) continue;
    const key = trimmed.slice(0, eq).trim();
    let value = trimmed.slice(eq + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    if (process.env[key] === undefined) process.env[key] = value;
  }
}

loadEnvFile(resolve(process.cwd(), ".env.local"));
loadEnvFile(resolve(process.cwd(), ".env"));

const required = [
  "NEXT_PUBLIC_SITE_URL",
  "NEXT_PUBLIC_CONTACT_EMAIL",
  "RESEND_API_KEY",
  "RESEND_FROM",
  "LEAD_NOTIFY_EMAIL",
  "ADMIN_EMAIL",
  "ADMIN_PASSWORD",
  "ADMIN_SESSION_SECRET",
];

const PLACEHOLDER = /YOUR_|YOUR-|example\.com|localhost|127\.0\.0\.1|change-me|onboarding@resend\.dev/i;

const missing = [];
const weak = [];

for (const key of required) {
  const value = process.env[key]?.trim();
  if (!value) {
    missing.push(key);
    continue;
  }
  if (PLACEHOLDER.test(value)) {
    weak.push(`${key} still looks like a placeholder`);
  }
  if (key === "NEXT_PUBLIC_SITE_URL") {
    if (!/^https:\/\//i.test(value)) {
      weak.push("NEXT_PUBLIC_SITE_URL must start with https://");
    }
    if (!value.includes("niscraft.com")) {
      weak.push("NEXT_PUBLIC_SITE_URL should be https://niscraft.com for production");
    }
  }
  if (key === "ADMIN_SESSION_SECRET" && value.length < 32) {
    weak.push("ADMIN_SESSION_SECRET must be at least 32 characters (openssl rand -hex 32)");
  }
  if (key === "RESEND_FROM" && !/niscraft\.com/i.test(value)) {
    weak.push("RESEND_FROM should use @niscraft.com after Resend domain verification");
  }
}

if (missing.length || weak.length) {
  console.error("PRODUCTION ENV CHECK FAILED\n");
  if (missing.length) {
    console.error("Missing:");
    missing.forEach((k) => console.error("  -", k));
  }
  if (weak.length) {
    console.error("Invalid:");
    weak.forEach((k) => console.error("  -", k));
  }
  console.error("\nFill .env.local from .env.local.template, then re-run.");
  process.exit(1);
}

console.log("PRODUCTION ENV CHECK PASS — all required variables look set.");
console.log("  NEXT_PUBLIC_SITE_URL =", process.env.NEXT_PUBLIC_SITE_URL);
console.log("  RESEND_FROM          =", process.env.RESEND_FROM);
process.exit(0);
