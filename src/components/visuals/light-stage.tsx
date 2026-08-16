import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function LightStage({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("relative isolate h-full w-full overflow-hidden bg-[#f8faff]", className)}>
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 88% 0%, rgba(99,102,241,0.10), transparent 55%), radial-gradient(ellipse 50% 45% at 8% 100%, rgba(139,92,246,0.07), transparent 50%)",
        }}
      />
      <div className="pointer-events-none absolute inset-0 opacity-35 hero-grid-move" aria-hidden />
      {children}
    </div>
  );
}

export function LightBrowser({
  children,
  className,
  url = "northline.studio",
}: {
  children: ReactNode;
  className?: string;
  url?: string;
}) {
  return (
    <div
      className={cn(
        "flex h-full min-h-0 flex-col overflow-hidden rounded-2xl border border-[#e2e8f0] bg-white shadow-[0_22px_50px_-12px_rgba(15,23,42,0.14)]",
        className,
      )}
    >
      <div className="flex shrink-0 items-center gap-1.5 border-b border-[#eef2f7] bg-[#f8fafc] px-2.5 py-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-[#fecaca]" />
        <span className="h-1.5 w-1.5 rounded-full bg-[#fde68a]" />
        <span className="h-1.5 w-1.5 rounded-full bg-[#bbf7d0]" />
        <span className="ml-2 flex h-5 flex-1 items-center rounded-md bg-white px-2 font-mono text-[8px] text-[#94a3b8] ring-1 ring-[#e8ecf4]">
          {url}
        </span>
      </div>
      <div className="min-h-0 flex-1 overflow-hidden">{children}</div>
    </div>
  );
}

export function LightPhone({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[1.7rem] border-[3px] border-[#e4e9f2] bg-white shadow-[0_20px_40px_rgba(79,110,247,0.12)]",
        className,
      )}
    >
      <div className="absolute top-1.5 left-1/2 z-10 h-2.5 w-12 -translate-x-1/2 rounded-full bg-[#e8ecf4]" />
      <div className="h-full pt-5">{children}</div>
    </div>
  );
}

export function GlassFloat({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/90 bg-white/92 p-2.5 shadow-[0_18px_40px_rgba(15,23,42,0.12)] ring-1 ring-indigo-100/70 backdrop-blur-xl",
        className,
      )}
    >
      {children}
    </div>
  );
}
