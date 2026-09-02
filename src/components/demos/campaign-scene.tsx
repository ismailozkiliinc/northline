"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Float, SpatialField } from "@/components/demos/spatial";

export { Float };

export type DeviceLayout = "laptop-phone" | "monitor-detail" | "tablet-laptop" | "browser-phone" | "monitor";

export function CampaignPhoto({
  src,
  alt,
  className,
  sheen = false,
}: {
  src: string;
  alt: string;
  className?: string;
  sheen?: boolean;
}) {
  const reduce = useReducedMotion();

  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      <motion.img
        src={src}
        alt={alt}
        className="absolute inset-0 h-full w-full origin-center object-cover"
        animate={reduce ? undefined : { scale: [1, 1.025] }}
        transition={{ duration: 14, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      />
      {sheen && !reduce ? (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/18 to-transparent"
          animate={{ x: ["-60%", "220%"] }}
          transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut", repeatDelay: 3 }}
        />
      ) : null}
    </div>
  );
}

export function ProductPhone({
  children,
  className,
  fit = "cover",
}: {
  children: ReactNode;
  className?: string;
  fit?: "cover" | "contain";
}) {
  void fit;
  return (
    <div className={cn("phone-frame", className)}>
      <div className="phone-frame__shell">
        <div className="phone-frame__screen">{children}</div>
        <div aria-hidden className="phone-frame__island" />
        <div aria-hidden className="phone-frame__bar" />
      </div>
    </div>
  );
}

export function CampaignStage({
  children,
  className,
  contained = true,
}: {
  children: ReactNode;
  className?: string;
  contained?: boolean;
}) {
  return (
    <SpatialField contained={contained} className={cn("group/scene", className)}>
      {children}
    </SpatialField>
  );
}

export function VisualSlot({
  children,
  className,
  contained = false,
}: {
  children: ReactNode;
  className?: string;
  contained?: boolean;
}) {
  return (
    <div
      className={cn(
        "project-visual-stage relative w-full min-w-0 overflow-hidden",
        contained
          ? "h-[260px] sm:h-[300px] md:h-[360px] lg:h-[420px]"
          : "h-[340px] md:h-[440px] lg:h-[480px]",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function ProductLaptop({
  children,
  className,
  fit = "cover",
  url = "app.niscraft.com",
}: {
  children: ReactNode;
  className?: string;
  fit?: "cover" | "contain";
  url?: string;
}) {
  void fit;
  return (
    <div className={cn("browser-frame", className)}>
      <div className="browser-frame__chrome">
        <span className="browser-frame__dot bg-[#f9a8d4]" />
        <span className="browser-frame__dot bg-[#fde68a]" />
        <span className="browser-frame__dot bg-[#bbf7d0]" />
        <span className="browser-frame__url">{url}</span>
      </div>
      <div className="browser-frame__screen">{children}</div>
    </div>
  );
}

export function DeviceComposition({
  laptop,
  phone,
  layout = "laptop-phone",
  className,
}: {
  laptop?: ReactNode;
  phone?: ReactNode;
  layout?: DeviceLayout;
  className?: string;
}) {
  return (
    <div className={cn("device-showcase", `device-composition device-composition--${layout}`, className)}>
      <div className="device-cluster">
        {laptop ? <div className="device-laptop">{laptop}</div> : null}
        {phone ? <div className="device-phone">{phone}</div> : null}
      </div>
    </div>
  );
}
