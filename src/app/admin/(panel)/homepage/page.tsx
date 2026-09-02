import { getCmsStore } from "@/lib/cms/store";
import { AdminPageHeader } from "@/components/admin/page-header";
import { HomepageForm } from "@/components/admin/homepage-form";

export default async function AdminHomepagePage() {
  const store = getCmsStore();
  const homepage = await store.homepage.get();
  return (
    <div>
      <AdminPageHeader title="Homepage CMS" description="Ana sayfa hero, CTA ve featured içerikler." />
      <HomepageForm data={homepage} />
    </div>
  );
}
