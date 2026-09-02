import Link from "next/link";
import { ArrowUpRight, TrendingUp } from "lucide-react";
import { getCmsStore } from "@/lib/cms/store";
import { AdminPageHeader } from "@/components/admin/page-header";
import { DashboardCharts } from "@/components/admin/dashboard-charts";

export default async function AdminDashboardPage() {
  const store = getCmsStore();
  const [stats, leads, views] = await Promise.all([
    store.dashboard.stats(),
    store.leads.list(),
    store.pageViews.list(),
  ]);

  const kpis = [
    { label: "Toplam ziyaretçi", value: stats.totalVisitors.toLocaleString("tr-TR") },
    { label: "Bugünkü ziyaretçi", value: stats.todayVisitors.toLocaleString("tr-TR") },
    { label: "Son 30 gün", value: stats.last30DaysVisitors.toLocaleString("tr-TR") },
    { label: "Toplam talep", value: stats.totalLeads.toLocaleString("tr-TR") },
    { label: "Okunmamış", value: stats.unreadLeads.toLocaleString("tr-TR"), accent: true },
    { label: "Toplam proje", value: stats.totalProjects.toLocaleString("tr-TR") },
    { label: "Aktif proje", value: stats.activeProjects.toLocaleString("tr-TR") },
    { label: "Tamamlanan", value: stats.completedProjects.toLocaleString("tr-TR") },
    { label: "Aktif hizmet", value: stats.totalServices.toLocaleString("tr-TR") },
    { label: "Dönüşüm", value: `%${stats.conversionRate}` },
  ];

  return (
    <div>
      <AdminPageHeader
        title="Dashboard"
        description="NISCRAFT sitesinin performans özeti ve operasyonel KPI'lar."
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
        {kpis.map((kpi) => (
          <div key={kpi.label} className="admin-card p-4">
            <p className="text-xs font-medium text-[#64748b]">{kpi.label}</p>
            <p className={`mt-2 font-display text-2xl font-bold tracking-tight ${kpi.accent ? "text-[#6366f1]" : ""}`}>
              {kpi.value}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-3">
        <div className="admin-card p-5 xl:col-span-2">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="font-display text-lg font-semibold">Trafik analizi</h2>
            <TrendingUp className="h-4 w-4 text-[#6366f1]" />
          </div>
          <DashboardCharts views={views} />
        </div>

        <div className="admin-card p-5">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="font-display text-lg font-semibold">Son talepler</h2>
            <Link href="/admin/leads" className="text-sm font-medium text-[#6366f1] hover:underline">
              Tümü
            </Link>
          </div>
          <div className="space-y-3">
            {leads.slice(0, 6).map((lead) => (
              <Link
                key={lead.id}
                href={`/admin/leads/${lead.id}`}
                className="block rounded-xl border border-[var(--admin-border)] px-3 py-2.5 transition hover:bg-[#f8fafc]"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="text-sm font-semibold">{lead.name}</p>
                    <p className="text-xs text-[#64748b]">{lead.email}</p>
                  </div>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-[#94a3b8]" />
                </div>
                <span className="admin-badge mt-2 bg-[#f1f5f9] text-[#475569]">{lead.status}</span>
              </Link>
            ))}
            {leads.length === 0 ? <p className="text-sm text-[#94a3b8]">Henüz talep yok.</p> : null}
          </div>
        </div>
      </div>
    </div>
  );
}
