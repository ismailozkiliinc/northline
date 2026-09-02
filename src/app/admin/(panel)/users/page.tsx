import { getAdminUser } from "@/lib/admin/auth";
import { AdminPageHeader } from "@/components/admin/page-header";

export default async function AdminUsersPage() {
  const user = await getAdminUser();
  return (
    <div>
      <AdminPageHeader title="Users & Roles" description="Ekip üyeleri ve yetki seviyeleri." />
      <div className="admin-card p-5">
        <p className="text-sm text-[#64748b]">Supabase Auth ile profil tablosu üzerinden yönetilir.</p>
        <div className="mt-4 rounded-xl bg-[#f8faff] p-4">
          <p className="font-semibold">{user?.email}</p>
          <p className="text-sm capitalize text-[#64748b]">{user?.role.replace("_", " ")}</p>
        </div>
        <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-[#64748b]">
          <li>Super Admin — tam erişim</li>
          <li>Admin — ayarlar hariç tam erişim</li>
          <li>Editor — içerik + lead, ayar yok</li>
        </ul>
      </div>
    </div>
  );
}
