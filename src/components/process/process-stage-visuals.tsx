"use client";

import { NorthlineStageArt } from "@/components/process/northline-stage-art";

export function ProcessStageVisual({
  art,
  className,
}: {
  art: string;
  className?: string;
}) {
  return <NorthlineStageArt art={art} className={className} />;
}

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
