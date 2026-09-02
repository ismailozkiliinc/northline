"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";

export function AnalyticsTracker() {
  const pathname = usePathname();
  const locale = useLocale();

  useEffect(() => {
    const sessionId = sessionStorage.getItem("nl_sid") ?? crypto.randomUUID();
    sessionStorage.setItem("nl_sid", sessionId);
    fetch("/api/analytics/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        path: pathname,
        locale,
        referrer: document.referrer,
        sessionId,
      }),
      keepalive: true,
    }).catch(() => {});
  }, [pathname, locale]);

  return null;
}
