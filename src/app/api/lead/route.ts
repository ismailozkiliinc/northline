import { mkdir, readFile, writeFile } from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";
import { z } from "zod";
import { getSupabaseAdmin } from "@/lib/supabase";
import { siteConfig } from "@/lib/site";

const leadSchema = z.object({
  source: z.enum(["contact", "wizard"]).optional(),
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().optional(),
  consent: z.boolean().refine((v) => v === true),
  company: z.string().optional(),
  phone: z.string().optional(),
  channel: z.string().optional(),
  type: z.string().optional(),
  status: z.string().optional(),
  features: z.array(z.string()).optional(),
  budget: z.string().optional(),
  timeline: z.string().optional(),
});

type RateEntry = { count: number; resetAt: number };
const rateMap = new Map<string, RateEntry>();
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 60_000;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return true;
  }
  if (entry.count >= RATE_LIMIT) return false;
  entry.count += 1;
  return true;
}

async function saveToFile(payload: Record<string, unknown>) {
  const dir = path.join(process.cwd(), ".data");
  await mkdir(dir, { recursive: true });
  const file = path.join(dir, "leads.json");
  let existing: Record<string, unknown>[] = [];
  try {
    const raw = await readFile(file, "utf8");
    existing = JSON.parse(raw) as Record<string, unknown>[];
  } catch {
    /* new file */
  }
  existing.push({ ...payload, createdAt: new Date().toISOString() });
  await writeFile(file, JSON.stringify(existing, null, 2));
}

async function sendEmail(payload: Record<string, unknown>) {
  const key = process.env.RESEND_API_KEY;
  if (!key) {
    console.info("[lead] RESEND_API_KEY not set — logging lead:", payload);
    return;
  }
  const { Resend } = await import("resend");
  const resend = new Resend(key);
  await resend.emails.send({
    from: process.env.RESEND_FROM ?? `Northline <onboarding@resend.dev>`,
    to: siteConfig.email,
    subject: `New lead: ${String(payload.name)} (${String(payload.source ?? "contact")})`,
    text: JSON.stringify(payload, null, 2),
  });
}

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip") ??
    "unknown";

  if (!checkRateLimit(ip)) {
    return NextResponse.json({ ok: false, error: "rate_limit" }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const parsed = leadSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "validation", details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const payload = { ...parsed.data, ip };

  const supabase = getSupabaseAdmin();
  if (supabase) {
    await supabase.from("leads").insert(payload);
  } else {
    await saveToFile(payload);
  }

  try {
    await sendEmail(payload);
  } catch (err) {
    console.error("[lead] email failed:", err);
  }

  return NextResponse.json({ ok: true });
}
