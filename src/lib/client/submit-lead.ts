import { getSupabase } from "@/lib/supabase";
import { siteConfig } from "@/lib/site";

export type LeadPayload = {
  source?: "contact" | "wizard";
  name: string;
  email: string;
  message?: string;
  consent: boolean;
  company?: string;
  phone?: string;
  channel?: string;
  type?: string;
  status?: string;
  features?: string[];
  budget?: string;
  timeline?: string;
  website?: string;
};

export type LeadSubmitResult = {
  ok: boolean;
  stored?: boolean;
  emailed?: boolean;
  warning?: string;
  error?: string;
};

/**
 * Client-side lead submit for static hosting (no Next.js API routes).
 * Prefer Supabase anon insert when configured; otherwise FormSubmit → contact email.
 */
export async function submitLeadClient(payload: LeadPayload): Promise<LeadSubmitResult> {
  if (payload.website) {
    return { ok: true, stored: true, emailed: true };
  }

  const sb = getSupabase();
  if (sb) {
    const { error } = await sb.from("leads").insert({
      name: payload.name,
      email: payload.email,
      message: payload.message ?? null,
      company: payload.company ?? null,
      phone: payload.phone ?? null,
      channel: payload.channel ?? null,
      type: payload.type ?? null,
      status: payload.status ?? "new",
      features: payload.features ?? null,
      budget: payload.budget ?? null,
      timeline: payload.timeline ?? null,
      source: payload.source ?? "contact",
      consent: payload.consent,
    });
    if (!error) {
      return { ok: true, stored: true, emailed: true };
    }
    console.warn("[lead] supabase insert failed:", error.message);
  }

  const notify = siteConfig.email;
  try {
    const res = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(notify)}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        _subject: `NISCRAFT lead — ${payload.source ?? "contact"}`,
        name: payload.name,
        email: payload.email,
        phone: payload.phone ?? "",
        company: payload.company ?? "",
        message: payload.message ?? "",
        type: payload.type ?? "",
        budget: payload.budget ?? "",
        timeline: payload.timeline ?? "",
        features: (payload.features ?? []).join(", "),
        source: payload.source ?? "contact",
      }),
    });
    if (res.ok) {
      return { ok: true, stored: true, emailed: true };
    }
  } catch (err) {
    console.warn("[lead] formsubmit failed:", err);
  }

  return { ok: false, error: "submit_failed" };
}
