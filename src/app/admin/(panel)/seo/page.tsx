import { getCmsStore } from "@/lib/cms/store";
import { AdminPageHeader } from "@/components/admin/page-header";

export default async function AdminSeoPage() {
  const pages = await getCmsStore().seo.list();
  return (
    <div>
      <AdminPageHeader title="SEO" description="Sayfa bazlı meta ve OG ayarları." />
      <div className="admin-card overflow-x-auto">
        <table className="admin-table w-full">
          <thead><tr><th>Path</th><th>Title</th><th>Index</th></tr></thead>
          <tbody>
            {pages.map((p) => (
              <tr key={p.id}><td>{p.path}</td><td>{p.meta_title ?? "—"}</td><td>{p.indexable ? "yes" : "no"}</td></tr>
            ))}
          </tbody>
        </table>
        {pages.length === 0 ? <p className="p-6 text-sm text-[#94a3b8]">SEO kaydı yok — proje/blog SEO alanlarından yönetilir.</p> : null}
      </div>
    </div>
  );
}
