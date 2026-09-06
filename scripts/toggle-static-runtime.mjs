#!/usr/bin/env node
/**
 * Parks admin + API outside the App Router so STATIC_EXPORT builds succeed.
 * Restores them afterward (or on --restore).
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const park = path.join(root, "src", "_server-runtime");
const appAdmin = path.join(root, "src", "app", "admin");
const appApi = path.join(root, "src", "app", "api");
const parkAdmin = path.join(park, "admin");
const parkApi = path.join(park, "api");
const mw = path.join(root, "src", "middleware.ts");
const mwPark = path.join(park, "middleware.ts");

const mode = process.argv[2] ?? "park";

function move(from, to) {
  if (!fs.existsSync(from)) return false;
  fs.mkdirSync(path.dirname(to), { recursive: true });
  if (fs.existsSync(to)) fs.rmSync(to, { recursive: true, force: true });
  fs.renameSync(from, to);
  return true;
}

if (mode === "park") {
  fs.mkdirSync(park, { recursive: true });
  move(appAdmin, parkAdmin);
  move(appApi, parkApi);
  move(mw, mwPark);
  console.log("Parked admin/api/middleware for static export");
} else if (mode === "restore") {
  move(parkAdmin, appAdmin);
  move(parkApi, appApi);
  move(mwPark, mw);
  console.log("Restored admin/api/middleware");
} else {
  console.error("Usage: node scripts/toggle-static-runtime.mjs [park|restore]");
  process.exit(1);
}
