"use client";

import { UniverseLive } from "@/components/demos/universe-live";
import { BriefLive } from "@/components/demos/studio-lives";
import {
  CapabilityMesh,
  EditorialMasthead,
  ProcessStudio,
} from "@/components/visuals/exclusive-scenes";

export function ServicesHeroLive() {
  return (
    <div className="relative mx-auto h-[440px] w-full max-w-[560px] overflow-hidden md:h-[520px]">
      <CapabilityMesh />
    </div>
  );
}

export function WorkHeroLive() {
  return null;
}

export function BlogHeroLive() {
  return (
    <div className="relative mx-auto h-[400px] w-full max-w-[520px] overflow-hidden md:h-[480px]">
      <EditorialMasthead />
    </div>
  );
}

export function ContactHeroLive() {
  return (
    <div className="relative mx-auto h-[400px] w-full max-w-[480px] overflow-hidden">
      <BriefLive />
    </div>
  );
}

export function HomeUniverseLive() {
  return <UniverseLive />;
}

export function AboutHeroLive() {
  return (
    <div className="relative h-full min-h-[420px] w-full overflow-hidden md:min-h-[500px]">
      <ProcessStudio />
    </div>
  );
}

export function CtaLive() {
  return (
    <div className="relative h-[320px] w-full overflow-hidden md:h-[380px]">
      <BriefLive />
    </div>
  );
}
