import { getCmsStore } from "@/lib/cms/store";
import { AdminPageHeader } from "@/components/admin/page-header";
import { ClientForm } from "@/components/admin/client-form";

export default async function AdminClientsPage() {
  const clients = await getCmsStore().clients.list();
  return (
    <div>
      <AdminPageHeader title="Clients" description="Mini CRM — müşteri kayıtları." />
      <div className="grid gap-6 lg:grid-cols-2">
        <ClientForm />
        <div className="admin-card divide-y">
          {clients.map((c) => (
            <div key={c.id} className="p-4">
              <p className="font-semibold">{c.name}</p>
              <p className="text-sm text-[#64748b]">{c.company} · {c.status}</p>
            </div>
          ))}
          {clients.length === 0 ? <p className="p-6 text-sm text-[#94a3b8]">Müşteri yok.</p> : null}
        </div>
      </div>
    </div>
  );
}
