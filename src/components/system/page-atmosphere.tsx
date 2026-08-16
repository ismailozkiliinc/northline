"use client";

import { cn } from "@/lib/utils";

type AtmosphereTone = "white" | "mist" | "lavender" | "slate";

const tones: Record<AtmosphereTone, string> = {
  white: "bg-white",
  mist: "bg-[#f8faff]",
  lavender: "bg-[#f7f6fb]",
  slate: "bg-[#f5f7fb]",
};

export function PageAtmosphere({
  tone = "white",
  className,
}: {
  tone?: AtmosphereTone;
  className?: string;
}) {
  return (
    <div
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", tones[tone], className)}
      aria-hidden
    >
      <div className="hero-bg-orb-1 absolute -top-[18%] -left-[12%] h-[50vw] max-h-[520px] w-[50vw] max-w-[520px] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.1)_0%,transparent_70%)] blur-3xl" />
      <div className="hero-bg-orb-2 absolute -top-[8%] -right-[16%] h-[46vw] max-h-[480px] w-[46vw] max-w-[480px] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.08)_0%,transparent_70%)] blur-3xl" />
      <div className="hero-bg-orb-3 absolute bottom-[0%] left-[28%] h-[38vw] max-h-[400px] w-[38vw] max-w-[400px] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.07)_0%,transparent_70%)] blur-3xl" />
      <div className="absolute inset-0 opacity-40 hero-grid-move" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_70%_at_50%_40%,transparent_28%,white_88%)]" />
    </div>
  );
}
