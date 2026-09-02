"use client";

import Link from "next/link";
import type { CmsProjectRecord } from "@/lib/cms/types";
import { deleteProjectAction } from "@/lib/admin/actions";

export function ProjectList({ projects }: { projects: CmsProjectRecord[] }) {
  return (
    <div className="admin-card overflow-x-auto">
      <table className="admin-table w-full min-w-[800px]">
        <thead>
          <tr>
            <th>Proje</th>
            <th>Durum</th>
            <th>Featured</th>
            <th>Sıra</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {projects
            .sort((a, b) => a.sort_order - b.sort_order)
            .map((p) => (
              <tr key={p.id} className="hover:bg-[#fafbff]">
                <td>
                  <Link href={`/admin/projects/${p.id}`} className="font-medium text-[#4338ca] hover:underline">
                    {(p.payload as { title?: { tr?: string } }).title?.tr ?? p.slug}
                  </Link>
                  <p className="text-xs text-[#94a3b8]">{p.slug}</p>
                </td>
                <td><span className="admin-badge bg-[#f1f5f9]">{p.status}</span></td>
                <td>{p.featured ? "✓" : "—"}</td>
                <td>{p.sort_order}</td>
                <td className="text-right">
                  <form action={deleteProjectAction.bind(null, p.id)}>
                    <button type="submit" className="text-xs text-red-600 hover:underline">Sil</button>
                  </form>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {projects.length === 0 ? <p className="p-8 text-center text-sm text-[#94a3b8]">Proje yok.</p> : null}
    </div>
  );
}
