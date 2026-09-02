import Link from "next/link";
import { getCmsStore } from "@/lib/cms/store";
import { AdminPageHeader } from "@/components/admin/page-header";

const statusColors: Record<string, string> = {
  new: "bg-blue-50 text-blue-700",
  reviewing: "bg-amber-50 text-amber-700",
  contacted: "bg-indigo-50 text-indigo-700",
  proposal: "bg-purple-50 text-purple-700",
  won: "bg-emerald-50 text-emerald-700",
  closed: "bg-slate-100 text-slate-600",
  spam: "bg-red-50 text-red-700",
};

export default async function AdminLeadsPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; status?: string }>;
}) {
  const { q, status } = await searchParams;
  const store = getCmsStore();
  const leads = await store.leads.list({
    q,
    status: status as never,
  });

  return (
    <div>
      <AdminPageHeader title="Leads" description="İletişim formları ve proje başvuruları." />

      <form method="get" className="admin-card mb-4 flex flex-wrap gap-3 p-4">
        <input name="q" defaultValue={q} placeholder="Ara..." className="admin-input max-w-xs" />
        <select name="status" defaultValue={status} className="admin-input max-w-[180px]">
          <option value="">Tüm durumlar</option>
          {["new", "reviewing", "contacted", "proposal", "won", "closed", "spam"].map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
        <button type="submit" className="admin-btn admin-btn-primary">Filtrele</button>
      </form>

      <div className="admin-card overflow-x-auto">
        <table className="admin-table w-full min-w-[720px]">
          <thead>
            <tr>
              <th>Ad</th>
              <th>E-posta</th>
              <th>Şirket</th>
              <th>Durum</th>
              <th>Tarih</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead) => (
              <tr key={lead.id} className="hover:bg-[#fafbff]">
                <td>
                  <Link href={`/admin/leads/${lead.id}`} className="font-medium text-[#4338ca] hover:underline">
                    {lead.name}
                  </Link>
                </td>
                <td>{lead.email}</td>
                <td>{lead.company ?? "—"}</td>
                <td>
                  <span className={`admin-badge ${statusColors[lead.status] ?? "bg-slate-100"}`}>{lead.status}</span>
                </td>
                <td className="text-[#64748b]">{new Date(lead.created_at).toLocaleDateString("tr-TR")}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {leads.length === 0 ? <p className="p-8 text-center text-sm text-[#94a3b8]">Kayıt bulunamadı.</p> : null}
      </div>
    </div>
  );
}
