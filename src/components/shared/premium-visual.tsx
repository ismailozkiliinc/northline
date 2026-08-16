"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { SoftwareLive } from "@/components/demos/software-live";
import { VisualSlot } from "@/components/demos/campaign-scene";
import {
  AppStoreCardLive,
  ProductGridLive,
  SupportQueueLive,
  UiSpecLive,
  AiPipelineLive,
  WebMagazineLive,
} from "@/components/visuals/exclusive-scenes";

type Presentation = "bleed" | "stage" | "stage-tight" | "stage-hero";

type PremiumVisualProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  presentation?: Presentation;
  stageTone?: string;
  objectPosition?: string;
  fit?: "contain" | "cover";
  inset?: boolean;
};

export const MEDIA_INTRINSIC = { width: 1536, height: 1024 } as const;
export const MEDIA_ASPECT = "aspect-[3/2]" as const;

function Frame({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div className={cn("relative isolate block h-full w-full overflow-visible bg-transparent", className)}>
      {children}
    </div>
  );
}

export function PremiumVisual({ className }: PremiumVisualProps) {
  return <Frame className={className} />;
}

export function CaseVisual({
  className,
  slug,
}: {
  slug: string;
  alt: string;
  className?: string;
  priority?: boolean;
  presentation?: Presentation;
  sizes?: string;
  fit?: "contain" | "cover";
}) {
  void slug;
  return <Frame className={className} />;
}

const SERVICE_LIVE: Record<string, () => ReactNode> = {
  web: () => <WebMagazineLive />,
  mobile: () => <AppStoreCardLive />,
  "ui-ux": () => <UiSpecLive />,
  saas: () => <SoftwareLive />,
  ecommerce: () => <ProductGridLive />,
  ai: () => <AiPipelineLive />,
  support: () => <SupportQueueLive />,
};

export function ServiceVisual({
  className,
  id,
}: {
  id: string;
  alt: string;
  className?: string;
}) {
  const Live = SERVICE_LIVE[id] ?? WebMagazineLive;
  return (
    <Frame className={className}>
      <VisualSlot className="h-full min-h-[320px] overflow-hidden">
        <Live />
      </VisualSlot>
    </Frame>
  );
}
