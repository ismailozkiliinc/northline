import { getCmsStore } from "@/lib/cms/store";
import { AdminPageHeader } from "@/components/admin/page-header";

export default async function AdminTestimonialsPage() {
  const items = await getCmsStore().testimonials.list();
  return (
    <div>
      <AdminPageHeader title="Testimonials" description="Müşteri yorumları." />
      <div className="grid gap-4 md:grid-cols-2">
        {items.map((t) => (
          <div key={t.id} className="admin-card p-5">
            <p className="font-semibold">{t.client_name}</p>
            <p className="text-sm text-[#64748b]">{t.position} · {t.company}</p>
            <p className="mt-3 text-sm italic">&ldquo;{t.quote.tr}&rdquo;</p>
          </div>
        ))}
        {items.length === 0 ? <p className="text-sm text-[#94a3b8]">Yorum yok.</p> : null}
      </div>
    </div>
  );
}
