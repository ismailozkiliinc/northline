import { NextResponse } from "next/server";
import { getCmsStore } from "@/lib/cms/store";

export async function POST(request: Request) {
  let body: { path?: string; locale?: string; referrer?: string; sessionId?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const ua = request.headers.get("user-agent") ?? "";
  const device_type = /mobile/i.test(ua) ? "mobile" : /tablet/i.test(ua) ? "tablet" : "desktop";

  const store = getCmsStore();
  await store.pageViews.track({
    path: body.path ?? "/",
    locale: body.locale,
    referrer: body.referrer,
    user_agent: ua,
    device_type,
    session_id: body.sessionId,
  });

  return NextResponse.json({ ok: true });
}
