import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function StudioBrowser({
  children,
  className,
  url = "app.orbit.dev",
}: {
  children: ReactNode;
  className?: string;
  url?: string;
}) {
  return (
    <div
      className={cn(
        "flex h-full min-h-0 flex-col overflow-hidden rounded-[1.15rem] border border-white/80 bg-white",
        "shadow-[0_32px_70px_-18px_rgba(15,23,42,0.22),0_8px_24px_rgba(79,110,247,0.08)]",
        className,
      )}
    >
      <div className="flex h-7 shrink-0 items-center gap-1.5 border-b border-[#eef2f7] bg-[#fbfcfe] px-2.5">
        <span className="h-1.5 w-1.5 rounded-full bg-[#f0b4b4]" />
        <span className="h-1.5 w-1.5 rounded-full bg-[#ead889]" />
        <span className="h-1.5 w-1.5 rounded-full bg-[#a8d7b5]" />
        <span className="ml-2 flex h-[18px] flex-1 items-center rounded-md bg-white px-2 font-mono text-[7px] text-[#94a3b8] ring-1 ring-[#e8ecf4]">
          {url}
        </span>
      </div>
      <div className="min-h-0 flex-1 overflow-hidden bg-white">{children}</div>
    </div>
  );
}

export function StudioPhone({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn("relative", className)}
      style={{ filter: "drop-shadow(0 28px 40px rgba(15,23,42,0.18))" }}
    >
      <div
        className="h-full overflow-hidden rounded-[1.85rem] p-[5px]"
        style={{
          background: "linear-gradient(165deg, #f6f7fa 0%, #d9dde6 48%, #b7bcc7 100%)",
        }}
      >
        <div className="relative h-full overflow-hidden rounded-[1.55rem] bg-[#0f1218] p-[3px]">
          <div className="relative h-full overflow-hidden rounded-[1.4rem] bg-white">
            <div className="absolute top-[6px] left-1/2 z-20 h-[12px] w-[78px] max-w-[42%] -translate-x-1/2 rounded-full bg-black" />
            <div className="h-full">{children}</div>
            <div className="absolute bottom-[5px] left-1/2 z-20 h-[3px] w-[30%] -translate-x-1/2 rounded-full bg-black/25" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function FloatPanel({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-[1.15rem] border border-white/90 bg-white/92 shadow-[0_20px_50px_-16px_rgba(15,23,42,0.18)] ring-1 ring-indigo-100/80 backdrop-blur-xl",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function ShowcaseStage({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("relative h-full w-full overflow-hidden bg-[#f4f6ff]", className)}>
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 58% 48% at 82% 8%, rgba(99,102,241,0.13), transparent 58%), radial-gradient(ellipse 46% 40% at 8% 92%, rgba(139,92,246,0.08), transparent 52%), linear-gradient(180deg, #fbfcff 0%, #f3f6ff 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute right-[-10%] bottom-[-18%] h-[48%] w-[48%] rounded-full blur-3xl"
        style={{ background: "rgba(99,102,241,0.08)" }}
        aria-hidden
      />
      {children}
    </div>
  );
}

/** @deprecated Kept for older scenes; prefer StudioBrowser. */
export const SilverLaptop = StudioBrowser;
export const IPhone = StudioPhone;
