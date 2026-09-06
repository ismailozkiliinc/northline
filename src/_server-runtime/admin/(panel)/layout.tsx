import { redirect } from "next/navigation";
import { getAdminUser } from "@/lib/admin/auth";
import { getCmsStore } from "@/lib/cms/store";
import { AdminShell } from "@/components/admin/shell";

export default async function AdminPanelLayout({ children }: { children: React.ReactNode }) {
  const user = await getAdminUser();
  if (!user) redirect("/admin/login");

  const store = getCmsStore();
  const notifications = await store.notifications.list();

  return (
    <AdminShell user={user} notifications={notifications}>
      {children}
    </AdminShell>
  );
}
