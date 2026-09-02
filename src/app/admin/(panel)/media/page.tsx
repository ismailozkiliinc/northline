import { getCmsStore } from "@/lib/cms/store";
import { AdminPageHeader } from "@/components/admin/page-header";
import { MediaUploader } from "@/components/admin/media-uploader";

export default async function AdminMediaPage() {
  const media = await getCmsStore().media.list();
  return (
    <div>
      <AdminPageHeader title="Media Library" description="Görsel ve dosya yönetimi." />
      <MediaUploader assets={media} />
    </div>
  );
}
