"use client";

import { useState } from "react";
import type { SiteSettingsRecord } from "@/lib/cms/types";
import { saveSettingsAction } from "@/lib/admin/actions";

export function SettingsForm({ data }: { data: SiteSettingsRecord }) {
  const [form, setForm] = useState(data);
  const [saved, setSaved] = useState(false);

  return (
    <form
      className="admin-card max-w-2xl space-y-4 p-6"
      onSubmit={async (e) => {
        e.preventDefault();
        const fd = new FormData();
        fd.set("payload", JSON.stringify(form));
        await saveSettingsAction(fd);
        setSaved(true);
        setTimeout(() => setSaved(false), 2000);
      }}
    >
      {(["name", "email", "phone", "whatsapp"] as const).map((key) => (
        <label key={key} className="block text-sm">
          <span className="mb-1 block font-medium capitalize">{key}</span>
          <input
            className="admin-input"
            value={form[key] ?? ""}
            onChange={(e) => setForm({ ...form, [key]: e.target.value })}
          />
        </label>
      ))}
      <div className="grid gap-3 md:grid-cols-2">
        {(["instagram", "linkedin", "x", "behance", "dribbble", "github"] as const).map((key) => (
          <label key={key} className="block text-sm">
            <span className="mb-1 block font-medium capitalize">{key}</span>
            <input
              className="admin-input"
              value={form.social[key] ?? ""}
              onChange={(e) => setForm({ ...form, social: { ...form.social, [key]: e.target.value } })}
            />
          </label>
        ))}
      </div>
      <button type="submit" className="admin-btn admin-btn-primary">{saved ? "Kaydedildi ✓" : "Kaydet"}</button>
    </form>
  );
}
