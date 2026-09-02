"use client";

import Image from "next/image";
import type { MediaAssetRecord } from "@/lib/cms/types";
import { deleteMediaAction, uploadMediaAction } from "@/lib/admin/actions";

export function MediaUploader({ assets }: { assets: MediaAssetRecord[] }) {
  return (
    <div className="space-y-6">
      <form
        className="admin-card flex flex-col items-center justify-center gap-3 border-dashed p-10 text-center"
        onSubmit={async (e) => {
          e.preventDefault();
          const fd = new FormData(e.currentTarget);
          await uploadMediaAction(fd);
          window.location.reload();
        }}
      >
        <input name="file" type="file" accept="image/*,video/*" required className="text-sm" />
        <button type="submit" className="admin-btn admin-btn-primary">Yükle</button>
      </form>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {assets.map((asset) => (
          <div key={asset.id} className="admin-card overflow-hidden">
            {asset.mime_type.startsWith("image/") ? (
              <Image src={asset.url} alt={asset.alt ?? asset.original_name} width={400} height={240} className="h-36 w-full object-cover" />
            ) : (
              <div className="flex h-36 items-center justify-center bg-[#f8fafc] text-sm text-[#64748b]">{asset.mime_type}</div>
            )}
            <div className="space-y-2 p-3">
              <p className="truncate text-sm font-medium">{asset.original_name}</p>
              <p className="text-xs text-[#94a3b8]">{(asset.size_bytes / 1024).toFixed(1)} KB</p>
              <form action={deleteMediaAction.bind(null, asset.id)}>
                <button type="submit" className="text-xs text-red-600 hover:underline">Sil</button>
              </form>
            </div>
          </div>
        ))}
      </div>
      {assets.length === 0 ? <p className="text-sm text-[#94a3b8]">Henüz medya yok.</p> : null}
    </div>
  );
}
