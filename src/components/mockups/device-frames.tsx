import { cn } from "@/lib/utils";

type FrameProps = {
  children: React.ReactNode;
  className?: string;
  transform?: string;
};

function FrameReflection({ intensity = "default" }: { intensity?: "default" | "subtle" }) {
  return (
    <>
      <div
        className={cn(
          "pointer-events-none absolute inset-0 z-20",
          intensity === "default" ? "opacity-30" : "opacity-18",
        )}
        aria-hidden
        style={{
          background:
            "linear-gradient(145deg, rgba(255,255,255,0.16) 0%, transparent 38%, transparent 62%, rgba(255,255,255,0.06) 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-20 h-[28%] opacity-20"
        aria-hidden
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.12) 0%, transparent 100%)",
        }}
      />
    </>
  );
}

function BezelEdge() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-10 rounded-[inherit] ring-1 ring-inset ring-white/6"
      aria-hidden
    />
  );
}

export function LaptopFrame({ children, className, transform }: FrameProps) {
  return (
    <div
      className={cn("relative", className)}
      style={transform ? { transform, transformStyle: "preserve-3d" } : undefined}
    >
      <div
        className={cn(
          "relative overflow-hidden rounded-t-[1.35rem] rounded-b-md p-[3px] md:p-1",
          "border border-[#3a4049]/80 bg-linear-to-br from-[#3d434c] via-[#252a32] to-[#14181f]",
          "shadow-[0_28px_70px_rgba(0,0,0,0.58),0_4px_12px_rgba(0,0,0,0.35)]",
        )}
      >
        <BezelEdge />
        <FrameReflection />
        <div className="relative flex items-center justify-center gap-1.5 px-3 py-1.5 md:px-4 md:py-2">
          <div
            className="h-[5px] w-[5px] rounded-full bg-[#1a1e24] ring-1 ring-white/8"
            aria-hidden
          />
          <div
            className="mx-auto h-[3px] w-[6px] rounded-full bg-[#263243]/90 ring-1 ring-white/5"
            aria-hidden
          />
        </div>
        <div className="relative mx-[2px] mb-[2px] overflow-hidden rounded-[0.72rem] bg-[#1a2332] md:mx-1 md:mb-1 md:rounded-[0.85rem]">
          {children}
        </div>
      </div>
      <div
        className="mx-auto h-[7px] w-[93%] rounded-b-lg bg-linear-to-b from-[#343b48] via-[#222833] to-[#12161e] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
        aria-hidden
      />
      <div
        className="mx-auto h-[3px] w-[14%] rounded-b-md bg-linear-to-b from-[#1a1f28] to-[#0a0d12]"
        aria-hidden
      />
    </div>
  );
}

export function PhoneFrame({ children, className, transform }: FrameProps) {
  return (
    <div
      className={cn("relative", className)}
      style={transform ? { transform, transformStyle: "preserve-3d" } : undefined}
    >
      <div
        className={cn(
          "relative overflow-hidden rounded-[1.55rem] p-[3px] md:rounded-[1.65rem] md:p-1",
          "border border-[#3a4049]/80 bg-linear-to-br from-[#3d434c] via-[#252a32] to-[#14181f]",
          "shadow-[0_20px_50px_rgba(0,0,0,0.52),0_2px_8px_rgba(0,0,0,0.32)]",
        )}
      >
        <BezelEdge />
        <FrameReflection intensity="subtle" />
        <div className="relative overflow-hidden rounded-[1.4rem] bg-[#1a2332] md:rounded-[1.5rem]">
          <div
            className="absolute left-1/2 top-2 z-30 flex -translate-x-1/2 items-center gap-1.5 md:top-2.5"
            aria-hidden
          >
            <div className="h-[5px] w-[5px] rounded-full bg-[#202b3a] ring-1 ring-white/10" />
            <div className="h-[6px] w-[28%] min-w-[36px] max-w-[52px] rounded-full bg-[#202b3a]/95 ring-1 ring-white/8" />
          </div>
          <div className="px-[2px] pb-[2px] pt-5 md:pt-6">{children}</div>
        </div>
      </div>
    </div>
  );
}

export function TabletFrame({ children, className, transform }: FrameProps) {
  return (
    <div
      className={cn("relative", className)}
      style={transform ? { transform, transformStyle: "preserve-3d" } : undefined}
    >
      <div
        className={cn(
          "relative overflow-hidden rounded-[1.35rem] p-[3px] md:rounded-[1.45rem] md:p-1",
          "border border-[#3a4049]/80 bg-linear-to-br from-[#3d434c] via-[#252a32] to-[#14181f]",
          "shadow-[0_24px_58px_rgba(0,0,0,0.54),0_3px_10px_rgba(0,0,0,0.34)]",
        )}
      >
        <BezelEdge />
        <FrameReflection intensity="subtle" />
        <div className="relative overflow-hidden rounded-[1.15rem] bg-[#1a2332] md:rounded-[1.25rem]">
          <div
            className="absolute left-1/2 top-2.5 z-30 h-[4px] w-[4px] -translate-x-1/2 rounded-full bg-[#202b3a] ring-1 ring-white/10 md:top-3"
            aria-hidden
          />
          <div className="pt-1">{children}</div>
        </div>
      </div>
    </div>
  );
}
