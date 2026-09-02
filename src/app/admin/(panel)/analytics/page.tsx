import { getCmsStore } from "@/lib/cms/store";
import { AdminPageHeader } from "@/components/admin/page-header";
import { DashboardCharts } from "@/components/admin/dashboard-charts";

export default async function AdminAnalyticsPage() {
  const views = await getCmsStore().pageViews.list();
  return (
    <div>
      <AdminPageHeader title="Traffic Analytics" description="Sayfa görüntüleme ve cihaz dağılımı." />
      <div className="admin-card p-6"><DashboardCharts views={views} /></div>
    </div>
  );
}
