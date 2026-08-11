"use client";

import { useTranslations } from "next-intl";
import { useRouter } from "@/i18n/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";

type AssistResult = {
  type?: string;
  features?: string[];
  message?: string;
  disclaimer: string;
};

export function AiAssistant() {
  const t = useTranslations("ai");
  const router = useRouter();
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AssistResult | null>(null);

  async function analyze() {
    if (!text.trim()) return;
    setLoading(true);
    setResult(null);
    try {
      const res = await fetch("/api/ai-assist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });
      const data = (await res.json()) as AssistResult;
      setResult(data);
    } catch {
      setResult({
        disclaimer: t("disclaimer"),
        message: "Error",
      });
    } finally {
      setLoading(false);
    }
  }

  function goToWizard() {
    if (result?.type || result?.features?.length) {
      const stored: Record<string, unknown> = {};
      try {
        const raw = localStorage.getItem("northline-wizard");
        if (raw) Object.assign(stored, JSON.parse(raw));
      } catch {
        /* ignore */
      }
      if (result.type) stored.type = result.type;
      if (result.features?.length) stored.features = result.features;
      localStorage.setItem("northline-wizard", JSON.stringify(stored));
    }
    router.push("/proje-baslat");
  }

  return (
    <section className="rounded-2xl border border-border bg-surface/60 p-6 md:p-8">
      <h2 className="font-display text-xl font-semibold">{t("title")}</h2>
      <p className="mt-2 text-sm text-muted">{t("subtitle")}</p>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={t("placeholder")}
        rows={4}
        className="mt-4 w-full rounded-xl border border-border bg-bg px-4 py-3 text-sm text-fg outline-none focus:border-accent"
      />
      <div className="mt-4 flex flex-wrap gap-3">
        <Button type="button" onClick={analyze} disabled={loading || !text.trim()}>
          {loading ? "…" : t("ask")}
        </Button>
        <Button asChild variant="secondary">
          <Link href="/iletisim">{t("human")}</Link>
        </Button>
      </div>
      {result && (
        <div className="mt-6 space-y-3 rounded-xl border border-border bg-bg/50 p-4 text-sm">
          {result.type && (
            <p>
              <span className="text-muted">Type: </span>
              {result.type}
            </p>
          )}
          {result.features && result.features.length > 0 && (
            <p>
              <span className="text-muted">Features: </span>
              {result.features.join(", ")}
            </p>
          )}
          {result.message && <p className="text-muted">{result.message}</p>}
          <p className="text-xs text-muted">{result.disclaimer ?? t("disclaimer")}</p>
          <Button type="button" variant="soft" size="sm" onClick={goToWizard}>
            → Proje Başlat
          </Button>
        </div>
      )}
      <p className="mt-4 text-xs text-muted">{t("disclaimer")}</p>
    </section>
  );
}
