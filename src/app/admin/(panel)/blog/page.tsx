import { getCmsStore } from "@/lib/cms/store";
import { AdminPageHeader } from "@/components/admin/page-header";

export default async function AdminBlogPage() {
  const posts = await getCmsStore().blog.list();
  return (
    <div>
      <AdminPageHeader title="Blog / Insights" description="Yazıları taslak veya yayında yönetin." />
      <div className="admin-card overflow-x-auto">
        <table className="admin-table w-full">
          <thead><tr><th>Başlık</th><th>Durum</th><th>Yayın</th></tr></thead>
          <tbody>
            {posts.map((p) => (
              <tr key={p.id}>
                <td>{(p.payload as {title?:{tr?:string}}).title?.tr ?? p.slug}</td>
                <td>{p.status}</td>
                <td>{p.published_at ? new Date(p.published_at).toLocaleDateString("tr-TR") : "—"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
