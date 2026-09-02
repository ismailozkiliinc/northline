import Link from "next/link";
import { getCmsStore } from "@/lib/cms/store";
import { AdminPageHeader } from "@/components/admin/page-header";

export default async function AdminServicesPage() {
  const services = await getCmsStore().services.list();
  return (
    <div>
      <AdminPageHeader title="Services" description="Hizmet kartları ve detayları." />
      <div className="admin-card overflow-x-auto">
        <table className="admin-table w-full">
          <thead><tr><th>Hizmet</th><th>Durum</th><th>Sıra</th><th /></tr></thead>
          <tbody>
            {services.sort((a,b)=>a.sort_order-b.sort_order).map((s) => (
              <tr key={s.id}>
                <td>{(s.payload as {title?:{tr?:string}}).title?.tr ?? s.service_id}</td>
                <td>{s.active ? "Aktif" : "Pasif"}</td>
                <td>{s.sort_order}</td>
                <td><Link href={`/admin/services/${s.id}`} className="text-[#4338ca] hover:underline text-sm">Düzenle</Link></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
