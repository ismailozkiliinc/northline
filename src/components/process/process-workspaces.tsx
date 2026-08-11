"use client";

import { NorthlineStageArt } from "@/components/process/northline-stage-art";

export function ProcessWorkspace({
  art,
  className,
}: {
  art: string;
  className?: string;
}) {
  return <NorthlineStageArt art={art} className={className} />;
}
