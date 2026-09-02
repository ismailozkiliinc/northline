import { getCmsStore } from "@/lib/cms/store";
import { AdminPageHeader } from "@/components/admin/page-header";
import { SettingsForm } from "@/components/admin/settings-form";

export default async function AdminSettingsPage() {
  const settings = await getCmsStore().settings.get();
  return (
    <div>
      <AdminPageHeader title="Site Settings" description="Global site bilgileri ve sosyal medya." />
      <SettingsForm data={settings} />
    </div>
  );
}
