"use client";

import type { LeadRecord } from "@/lib/cms/types";
import { deleteLeadAction, updateLeadAction } from "@/lib/admin/actions";

export function LeadDetailForm({ lead }: { lead: LeadRecord }) {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <div className="admin-card space-y-3 p-5 lg:col-span-2 text-sm">
        <Row label="E-posta" value={lead.email} />
        <Row label="Telefon" value={lead.phone} />
        <Row label="Şirket" value={lead.company} />
        <Row label="Kaynak" value={lead.source} />
        <Row label="Sayfa" value={lead.source_page} />
        <Row label="Bütçe" value={lead.budget} />
        <Row label="Mesaj" value={lead.message} />
        <Row label="Tarih" value={new Date(lead.created_at).toLocaleString("tr-TR")} />
      </div>

      <div className="space-y-4">
        <form action={updateLeadAction.bind(null, lead.id)} className="admin-card space-y-4 p-5">
          <h2 className="font-semibold">Durum güncelle</h2>
          <select name="status" defaultValue={lead.status} className="admin-input">
            {["new", "reviewing", "contacted", "proposal", "won", "closed", "spam"].map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
          <textarea name="admin_notes" defaultValue={lead.admin_notes} rows={4} className="admin-input" placeholder="Admin notu" />
          <button type="submit" className="admin-btn admin-btn-primary w-full">Kaydet</button>
        </form>
        <form action={deleteLeadAction.bind(null, lead.id)}>
          <button type="submit" className="admin-btn admin-btn-ghost w-full text-red-600">Sil</button>
        </form>
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value?: string | null }) {
  return (
    <div>
      <p className="text-xs font-semibold tracking-wide text-[#94a3b8] uppercase">{label}</p>
      <p className="mt-0.5">{value || "—"}</p>
    </div>
  );
}
