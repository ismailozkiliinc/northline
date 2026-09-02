"use client";

import { saveClientAction } from "@/lib/admin/actions";

export function ClientForm() {
  return (
    <form action={saveClientAction} className="admin-card space-y-3 p-5">
      <h3 className="font-semibold">Yeni müşteri</h3>
      <input name="name" required placeholder="İsim" className="admin-input" />
      <input name="company" placeholder="Şirket" className="admin-input" />
      <input name="email" type="email" placeholder="E-posta" className="admin-input" />
      <input name="phone" placeholder="Telefon" className="admin-input" />
      <input name="country" placeholder="Ülke" className="admin-input" />
      <input name="service_interest" placeholder="İlgilendiği hizmet" className="admin-input" />
      <input name="project_name" placeholder="Proje" className="admin-input" />
      <input name="budget" placeholder="Bütçe" className="admin-input" />
      <select name="status" className="admin-input" defaultValue="lead">
        {["lead", "active", "completed", "archived"].map((s) => <option key={s} value={s}>{s}</option>)}
      </select>
      <textarea name="notes" rows={3} placeholder="Notlar" className="admin-input" />
      <button type="submit" className="admin-btn admin-btn-primary w-full">Kaydet</button>
    </form>
  );
}
