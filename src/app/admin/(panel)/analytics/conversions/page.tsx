import { getCmsStore } from "@/lib/cms/store";
import { AdminPageHeader } from "@/components/admin/page-header";

export default async function AdminAnalyticsConversionsPage() {
  const [leads, views] = await Promise.all([getCmsStore().leads.list(), getCmsStore().pageViews.list()]);
  const rate = views.length ? ((leads.length / views.length) * 100).toFixed(1) : "0";
  return (
    <div>
      <AdminPageHeader title="Conversions" description="Lead dönüşüm metrikleri." />
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="admin-card p-5"><p className="text-sm text-[#64748b]">Toplam lead</p><p className="mt-2 text-3xl font-bold">{leads.length}</p></div>
        <div className="admin-card p-5"><p className="text-sm text-[#64748b]">Sayfa görüntüleme</p><p className="mt-2 text-3xl font-bold">{views.length}</p></div>
        <div className="admin-card p-5"><p className="text-sm text-[#64748b]">Dönüşüm</p><p className="mt-2 text-3xl font-bold">%{rate}</p></div>
      </div>
    </div>
  );
}
