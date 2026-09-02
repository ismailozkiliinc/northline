"use client";

import { useState } from "react";
import type { HomepageCms } from "@/lib/cms/types";
import { saveHomepageAction } from "@/lib/admin/actions";

export function HomepageForm({ data }: { data: HomepageCms }) {
  const [form, setForm] = useState(data);
  const [saved, setSaved] = useState(false);

  function setBilingual(key: keyof HomepageCms["hero"], locale: "tr" | "en", value: string) {
    setForm((prev) => ({
      ...prev,
      hero: {
        ...prev.hero,
        [key]: { ...(prev.hero[key] as { tr: string; en: string }), [locale]: value },
      },
    }));
  }

  return (
    <form
      className="admin-card max-w-3xl space-y-4 p-6"
      onSubmit={async (e) => {
        e.preventDefault();
        const fd = new FormData();
        fd.set("payload", JSON.stringify(form));
        await saveHomepageAction(fd);
        setSaved(true);
        setTimeout(() => setSaved(false), 2000);
      }}
    >
      <h3 className="font-semibold">Hero</h3>
      {(["eyebrow", "titleBefore", "titleHighlight", "titleAfter", "subtitle", "ctaPrimary", "ctaSecondary"] as const).map(
        (key) => (
          <div key={key} className="grid gap-2 md:grid-cols-2">
            <label className="text-sm">
              <span className="mb-1 block font-medium">{key} (TR)</span>
              <input
                className="admin-input"
                value={form.hero[key].tr}
                onChange={(e) => setBilingual(key, "tr", e.target.value)}
              />
            </label>
            <label className="text-sm">
              <span className="mb-1 block font-medium">{key} (EN)</span>
              <input
                className="admin-input"
                value={form.hero[key].en}
                onChange={(e) => setBilingual(key, "en", e.target.value)}
              />
            </label>
          </div>
        ),
      )}
      <button type="submit" className="admin-btn admin-btn-primary">{saved ? "Kaydedildi ✓" : "Kaydet"}</button>
    </form>
  );
}
