import Link from "next/link";
import { Plus } from "lucide-react";
import { getCmsStore } from "@/lib/cms/store";
import { AdminPageHeader } from "@/components/admin/page-header";
import { ProjectList } from "@/components/admin/project-list";

export default async function AdminProjectsPage() {
  const store = getCmsStore();
  const projects = await store.projects.list();

  return (
    <div>
      <AdminPageHeader
        title="Projects"
        description="Portfolyo projelerini yönetin."
        actions={
          <Link href="/admin/projects/new" className="admin-btn admin-btn-primary">
            <Plus className="h-4 w-4" /> Yeni proje
          </Link>
        }
      />
      <ProjectList projects={projects} />
    </div>
  );
}
