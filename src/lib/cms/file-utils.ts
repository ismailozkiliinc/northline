import { mkdir, readFile, writeFile } from "fs/promises";
import path from "path";
import { randomUUID } from "crypto";

const DATA_DIR = path.join(process.cwd(), ".data", "cms");

async function ensureDir() {
  await mkdir(DATA_DIR, { recursive: true });
}

async function readJson<T>(file: string, fallback: T): Promise<T> {
  await ensureDir();
  try {
    const raw = await readFile(path.join(DATA_DIR, file), "utf8");
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

async function writeJson<T>(file: string, data: T): Promise<void> {
  await ensureDir();
  await writeFile(path.join(DATA_DIR, file), JSON.stringify(data, null, 2));
}

function now() {
  return new Date().toISOString();
}

export function fileStoreId() {
  return randomUUID();
}

export const fileStore = {
  readJson,
  writeJson,
  now,
  DATA_DIR,
};
