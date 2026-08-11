"use client";

import { useCallback, useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "northline-cookies";

type CookiePreferences = {
  necessary: true;
  analytics: boolean;
};

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

function readPreferences(): CookiePreferences | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as CookiePreferences;
    return { necessary: true, analytics: Boolean(parsed.analytics) };
  } catch {
    return null;
  }
}

function savePreferences(prefs: CookiePreferences) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
}

function loadAnalytics() {
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({
    event: "northline_analytics_enabled",
    timestamp: Date.now(),
  });
}

export function CookieConsent() {
  const t = useTranslations("cookies");
  const reduce = useReducedMotion();
  const [visible, setVisible] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [analytics, setAnalytics] = useState(false);

  const apply = useCallback((prefs: CookiePreferences) => {
    savePreferences(prefs);
    if (prefs.analytics) loadAnalytics();
    setVisible(false);
    setSettingsOpen(false);
  }, []);

  useEffect(() => {
    const existing = readPreferences();
    if (existing) {
      if (existing.analytics) loadAnalytics();
      return;
    }
    setVisible(true);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-x-0 bottom-0 z-50 p-4 sm:p-6"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduce ? undefined : { opacity: 0, y: 24 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          role="dialog"
          aria-labelledby="cookie-consent-title"
          aria-describedby="cookie-consent-body"
        >
          <div className="container-page">
            <div className="glass hairline mx-auto max-w-3xl rounded-2xl p-5 shadow-[var(--shadow-depth)] sm:p-6">
              <h2
                id="cookie-consent-title"
                className="font-display text-base font-semibold text-fg"
              >
                {t("title")}
              </h2>
              <p
                id="cookie-consent-body"
                className="mt-2 text-sm leading-relaxed text-muted"
              >
                {t("body")}
              </p>

              {settingsOpen && (
                <div className="mt-4 space-y-3 rounded-xl bg-white/[0.03] p-4">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm font-medium text-fg">{t("necessary")}</p>
                      <p className="text-xs text-muted">Always active</p>
                    </div>
                    <span className="text-xs font-medium text-accent">On</span>
                  </div>
                  <label className="flex cursor-pointer items-center justify-between gap-4">
                    <div>
                      <p className="text-sm font-medium text-fg">{t("analytics")}</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={analytics}
                      onChange={(e) => setAnalytics(e.target.checked)}
                      className="h-4 w-4 rounded border-border accent-accent"
                    />
                  </label>
                </div>
              )}

              <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center">
                <Button
                  size="sm"
                  onClick={() => apply({ necessary: true, analytics: true })}
                >
                  {t("accept")}
                </Button>
                <Button
                  size="sm"
                  variant="secondary"
                  onClick={() => apply({ necessary: true, analytics: false })}
                >
                  {t("reject")}
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => {
                    if (settingsOpen) {
                      apply({ necessary: true, analytics });
                    } else {
                      setSettingsOpen(true);
                    }
                  }}
                >
                  {settingsOpen ? t("save") : t("settings")}
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
