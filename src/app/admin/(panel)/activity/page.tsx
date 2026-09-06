import { getCmsStore } from "@/lib/cms/store";
import { AdminPageHeader } from "@/components/admin/page-header";

export default async function AdminActivityPage() {
  const logs = await getCmsStore().auditLog.list();
  return (
    <div>
      <AdminPageHeader title="Activity Logs" description="Admin panelinde yapılan işlemler." />
      <div className="admin-card divide-y">
        {logs.slice(0, 50).map((log) => (
          <div key={log.id} className="flex flex-wrap items-center justify-between gap-2 px-4 py-3 text-sm">
            <p><span className="font-medium">{log.actor_email ?? "system"}</span> — {log.action}</p>
            <p className="text-[#94a3b8]">{new Date(log.created_at).toLocaleString("tr-TR")}</p>
          </div>
        ))}
        {logs.length === 0 ? <p className="p-6 text-sm text-[#94a3b8]">Henüz log yok.</p> : null}
      </div>
    </div>
  );
}
