"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { media, type CaseImageSlug } from "@/lib/media";

/**
 * Media surface matched to source art (all case/hero/service assets are 1536×1024 → 3:2).
 * Zero passepartout: fill the card, cover with ~0% crop when aspect matches.
 */
type Presentation = "bleed" | "stage" | "stage-tight" | "stage-hero";

type PremiumVisualProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  presentation?: Presentation;
  /** @deprecated Compatibility only */
  stageTone?: string;
  objectPosition?: string;
  /** @deprecated Compatibility — ignored; always matched-ratio cover */
  fit?: "contain" | "cover";
  /** @deprecated Compatibility — ignored; no inset frame */
  inset?: boolean;
};

/** Source pixel size for all product mockups in /public/images */
export const MEDIA_INTRINSIC = { width: 1536, height: 1024 } as const;
/** Tailwind-ready ratio matching MEDIA_INTRINSIC */
export const MEDIA_ASPECT = "aspect-[3/2]" as const;

export function PremiumVisual({
  src,
  alt,
  className,
  priority,
  sizes = "(max-width: 768px) 100vw, 80vw",
  objectPosition = "50% 50%",
}: PremiumVisualProps) {
  const hasCustomAspect = Boolean(className?.match(/\baspect-/));

  return (
    <div
      className={cn(
        "relative isolate block w-full overflow-hidden bg-surface-inner",
        !hasCustomAspect && MEDIA_ASPECT,
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="block object-cover transition-transform duration-[650ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.012]"
        style={{ objectPosition }}
      />
    </div>
  );
}

export function CaseVisual({
  slug,
  alt,
  className,
  priority,
  presentation,
  sizes,
}: {
  slug: string;
  alt: string;
  className?: string;
  priority?: boolean;
  presentation?: Presentation;
  sizes?: string;
  fit?: "contain" | "cover";
}) {
  void presentation;
  const src = media.cases[slug as CaseImageSlug] ?? media.cases["harbor-stay"];
  return (
    <PremiumVisual
      src={src}
      alt={alt}
      className={className}
      priority={priority}
      sizes={sizes ?? "(max-width: 768px) 100vw, 50vw"}
    />
  );
}

export function ServiceVisual({
  id,
  alt,
  className,
}: {
  id: string;
  alt: string;
  className?: string;
}) {
  const key = id as keyof typeof media.services;
  const src = media.services[key] ?? media.services.web;
  return (
    <PremiumVisual
      src={src}
      alt={alt}
      className={className}
      sizes="(max-width: 1024px) 100vw, 45vw"
    />
  );
}
