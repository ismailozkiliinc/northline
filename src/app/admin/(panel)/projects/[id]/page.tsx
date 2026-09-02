import { notFound } from "next/navigation";
import { getCmsStore } from "@/lib/cms/store";
import { AdminPageHeader } from "@/components/admin/page-header";
import { ProjectForm } from "@/components/admin/project-form";

export default async function AdminProjectEditPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const store = getCmsStore();

  if (id === "new") {
    return (
      <div>
        <AdminPageHeader title="Yeni proje" />
        <ProjectForm />
      </div>
    );
  }

  const project = await store.projects.get(id);
  if (!project) notFound();

  return (
    <div>
      <AdminPageHeader title="Proje düzenle" description={project.slug} />
      <ProjectForm project={project} />
    </div>
  );
}
