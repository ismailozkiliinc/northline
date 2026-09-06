import { mkdir, readFile, writeFile, appendFile } from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";
import { z } from "zod";
import { getSupabaseAdmin } from "@/lib/supabase";
import { getResendConfig, isProductionRuntime } from "@/lib/env";

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
  /** Honeypot — bots fill this; humans leave empty */
  website: z.string().optional(),
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

async function logEmailFailure(detail: string, payload: Record<string, unknown>) {
  try {
    const dir = path.join(process.cwd(), ".data");
    await mkdir(dir, { recursive: true });
    const line = JSON.stringify({
      at: new Date().toISOString(),
      detail,
      leadEmail: payload.email,
      leadName: payload.name,
      source: payload.source,
    });
    await appendFile(path.join(dir, "email-failures.log"), `${line}\n`);
  } catch (err) {
    console.error("[lead] failed to write email-failures.log:", err);
  }
}

type EmailResult =
  | { ok: true; id: string }
  | { ok: false; error: string; skipInDev?: boolean };

async function sendEmail(payload: Record<string, unknown>): Promise<EmailResult> {
  const config = getResendConfig();
  if (!config.ok) {
    await logEmailFailure(config.error, payload);
    if (!isProductionRuntime()) {
      console.error("[lead] email not sent:", config.error);
      return { ok: false, error: config.error, skipInDev: true };
    }
    return { ok: false, error: config.error };
  }

  try {
    const { Resend } = await import("resend");
    const resend = new Resend(config.apiKey);
    const result = await resend.emails.send({
      from: config.from,
      to: config.to,
      replyTo: typeof payload.email === "string" ? payload.email : undefined,
      subject: `New lead: ${String(payload.name)} (${String(payload.source ?? "contact")})`,
      text: [
        `Name: ${payload.name}`,
        `Email: ${payload.email}`,
        `Phone: ${payload.phone ?? "—"}`,
        `Company: ${payload.company ?? "—"}`,
        `Type: ${payload.type ?? "—"}`,
        `Source: ${payload.source ?? "contact"}`,
        "",
        "Message:",
        String(payload.message ?? "—"),
      ].join("\n"),
    });

    if (result.error) {
      const msg = result.error.message ?? "Resend API error";
      await logEmailFailure(msg, payload);
      console.error("[lead] Resend error:", result.error);
      return { ok: false, error: msg };
    }

    const id = result.data?.id;
    if (!id) {
      await logEmailFailure("Resend returned no message id", payload);
      return { ok: false, error: "Resend returned no message id" };
    }

    console.info("[lead] email sent", { id, to: config.to });
    return { ok: true, id };
  } catch (err) {
    const msg = err instanceof Error ? err.message : "email_send_failed";
    await logEmailFailure(msg, payload);
    console.error("[lead] email exception:", err);
    return { ok: false, error: msg };
  }
}

async function persistLead(payload: Record<string, unknown>) {
  const supabase = getSupabaseAdmin();
  if (supabase) {
    await supabase.from("leads").insert({ ...payload, status: "new" });
    try {
      const { createNotification } = await import("@/lib/cms/store");
      await createNotification(
        "lead",
        "Yeni iletişim talebi",
        `${payload.name} (${payload.email})`,
        payload,
      );
    } catch {
      /* optional */
    }
    return;
  }

  const { getCmsStore, createNotification } = await import("@/lib/cms/store");
  await getCmsStore().leads.create({
    ...payload,
    source: payload.source ?? "contact",
    status: "new",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  } as never);
  await createNotification(
    "lead",
    "Yeni iletişim talebi",
    `${payload.name} (${payload.email})`,
    payload,
  );
  await saveToFile(payload);
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

  // Honeypot filled — pretend success to bots (no storage)
  if (parsed.data.website) {
    return NextResponse.json({ success: true, ok: true, stored: false, emailed: false });
  }

  const { website: _hp, ...safeData } = parsed.data;
  void _hp;
  const payload = { ...safeData, ip };

  try {
    await persistLead(payload);
  } catch (err) {
    console.error("[lead] storage failed:", err);
    return NextResponse.json(
      { success: false, ok: false, error: "storage_failed", stored: false, emailed: false },
      { status: 500 },
    );
  }

  const email = await sendEmail(payload);

  if (email.ok) {
    return NextResponse.json({
      success: true,
      ok: true,
      stored: true,
      emailed: true,
      messageId: email.id,
    });
  }

  // Lead kept — do not claim full success when email failed
  if (isProductionRuntime() || !email.skipInDev) {
    return NextResponse.json(
      {
        success: false,
        ok: false,
        error: "email_failed",
        stored: true,
        emailed: false,
        detail: email.error,
      },
      { status: 502 },
    );
  }

  // Local/dev without Resend: storage-only OK so UI can be tested
  return NextResponse.json({
    success: true,
    ok: true,
    stored: true,
    emailed: false,
    warning: "email_skipped_dev",
  });
}
