import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** HTML browser chrome — not a photographed device. Used so homepage ≠ web-service MacBook. */
export function BrowserSurface({
  children,
  url = "northline.studio",
  className,
}: {
  children: ReactNode;
  url?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-[#e8ecf4] bg-white shadow-[0_24px_50px_rgba(15,23,42,0.12)]",
        className,
      )}
    >
      <div className="flex items-center gap-2 border-b border-[#eef2f7] bg-[#f8faff] px-3 py-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-[#f9a8d4]" />
        <span className="h-1.5 w-1.5 rounded-full bg-[#fde68a]" />
        <span className="h-1.5 w-1.5 rounded-full bg-[#bbf7d0]" />
        <span className="ml-2 min-w-0 flex-1 truncate rounded-full bg-white px-2 py-0.5 text-[8px] text-[#64748b]">
          {url}
        </span>
      </div>
      <div className="bg-white">{children}</div>
    </div>
  );
}
