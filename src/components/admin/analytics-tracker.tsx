"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { getSupabase } from "@/lib/supabase";

/** Best-effort page view tracking via Supabase (static hosting — no API route). */
export function AnalyticsTracker() {
  const pathname = usePathname();
  const locale = useLocale();

  useEffect(() => {
    const sessionId = sessionStorage.getItem("nl_sid") ?? crypto.randomUUID();
    sessionStorage.setItem("nl_sid", sessionId);
    const sb = getSupabase();
    if (!sb) return;
    void (async () => {
      try {
        await sb.from("page_views").insert({
          path: pathname,
          locale,
          referrer: document.referrer || null,
          session_id: sessionId,
        });
      } catch {
        /* ignore */
      }
    })();
  }, [pathname, locale]);

  return null;
}
