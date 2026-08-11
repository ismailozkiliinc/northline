"use client";

import { PremiumVisual } from "@/components/shared/premium-visual";
import { media } from "@/lib/media";
import { cn } from "@/lib/utils";

/**
 * Process stage → unique premium studio photograph
 * Art direction matches about/studio.png quality bar.
 */
export const STAGE_STUDIO: Record<string, string> = {
  brief: media.studio.strategy,
  proposal: media.studio.materials,
  research: media.studio.ux,
  wireframe: media.studio.prototype,
  design: media.studio.ui,
  development: media.studio.development,
  qa: media.studio.qa,
  launch: media.studio.launch,
  growth: media.studio.growth,
};

const ALT: Record<string, string> = {
  brief: "Premium strategy and discovery workspace",
  proposal: "Design materials and proposal artifacts",
  research: "UX research and journey mapping workspace",
  wireframe: "Prototyping and wireframe environment",
  design: "UI design system studio",
  development: "Premium developer workstation",
  qa: "Device testing and QA lab",
  launch: "Production launch and monitoring environment",
  growth: "Product analytics and growth workspace",
};

/** Right-rail cinematic studio photography — unique scene per stage. */
export function NorthlineStageArt({
  art,
  className,
}: {
  art: string;
  className?: string;
}) {
  const src = STAGE_STUDIO[art] ?? media.studio.strategy;
  return (
    <div
      className={cn(
        "overflow-hidden rounded-[var(--radius-media)] border border-border shadow-[var(--shadow-depth)]",
        className,
      )}
    >
      <PremiumVisual
        src={src}
        alt={ALT[art] ?? "Northline studio workspace"}
        className="w-full"
        sizes="(max-width: 1024px) 100vw, 48vw"
      />
    </div>
  );
}
