"use client";

import { NorthlineStageArt } from "@/components/process/northline-stage-art";

/** Process hero / satellite stage visual — photography, not CSS mockups. */
export function ProcessStageVisual({
  art,
  className,
}: {
  art: string;
  className?: string;
}) {
  return <NorthlineStageArt art={art} className={className} />;
}

export { STAGE_STUDIO } from "@/components/process/northline-stage-art";
export const STAGE_ART_KEYS = [
  "brief",
  "proposal",
  "research",
  "wireframe",
  "design",
  "development",
  "qa",
  "launch",
  "growth",
] as const;
