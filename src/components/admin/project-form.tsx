"use client";

import type { CmsProjectRecord } from "@/lib/cms/types";
import { saveProjectAction } from "@/lib/admin/actions";

export function ProjectForm({ project }: { project?: CmsProjectRecord }) {
  const p = project?.payload as Record<string, unknown> | undefined;
  const title = p?.title as { tr?: string; en?: string } | undefined;

  return (
    <form action={saveProjectAction} className="admin-card max-w-3xl space-y-4 p-6">
      {project?.id ? <input type="hidden" name="id" value={project.id} /> : null}
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Slug" name="slug" defaultValue={project?.slug} required />
        <Field label="Durum" name="status" defaultValue={project?.status ?? "draft"} select={["draft", "published", "archived"]} />
        <Field label="Kategori" name="category" defaultValue={project?.category} />
        <Field label="Müşteri" name="client_name" defaultValue={project?.client_name} />
        <Field label="Yıl" name="project_year" defaultValue={project?.project_year ?? "2025"} />
        <Field label="URL" name="project_url" defaultValue={project?.project_url} />
        <Field label="Cover tone" name="cover_tone" defaultValue={project?.cover_tone ?? "gradient-indigo"} />
        <Field label="Presentation" name="presentation" defaultValue={project?.presentation ?? "cinematic"} />
        <Field label="Sıra" name="sort_order" type="number" defaultValue={String(project?.sort_order ?? 0)} />
      </div>
      <label className="flex items-center gap-2 text-sm">
        <input type="checkbox" name="featured" defaultChecked={project?.featured} />
        Featured project
      </label>
      <Field label="Başlık (TR)" name="title_tr" defaultValue={title?.tr} />
      <Field label="Başlık (EN)" name="title_en" defaultValue={title?.en} />
      <input type="hidden" name="payload" value={JSON.stringify(project?.payload ?? { title: { tr: "", en: "" }, summary: { tr: "", en: "" } })} />
      <input type="hidden" name="seo_title" value={JSON.stringify(project?.seo_title ?? { tr: "", en: "" })} />
      <input type="hidden" name="seo_description" value={JSON.stringify(project?.seo_description ?? { tr: "", en: "" })} />
      <button type="submit" className="admin-btn admin-btn-primary">Kaydet</button>
    </form>
  );
}

function Field({
  label,
  name,
  defaultValue,
  required,
  type = "text",
  select,
}: {
  label: string;
  name: string;
  defaultValue?: string;
  required?: boolean;
  type?: string;
  select?: string[];
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium">{label}</span>
      {select ? (
        <select name={name} defaultValue={defaultValue} className="admin-input" required={required}>
          {select.map((o) => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
      ) : (
        <input name={name} type={type} defaultValue={defaultValue} required={required} className="admin-input" />
      )}
    </label>
  );
}
