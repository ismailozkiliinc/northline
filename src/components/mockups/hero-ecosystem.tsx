"use client";

import { cn } from "@/lib/utils";
import { LaptopFrame, PhoneFrame, TabletFrame } from "./device-frames";
import {
  AnalyticsDesktop,
  FinanceDashboard,
  HotelBookingDesktop,
  HotelBookingMobile,
} from "./product-screens";

type HeroProductEcosystemProps = {
  className?: string;
};

/** Compact editorial device cluster — devices support content, not dominate it. */
export function HeroProductEcosystem({ className }: HeroProductEcosystemProps) {
  return (
    <div
      className={cn(
        "relative mx-auto w-full max-w-lg select-none md:max-w-xl",
        className,
      )}
      aria-hidden
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 55% 50%, rgba(16,185,129,0.1), transparent 55%), radial-gradient(circle at 70% 60%, rgba(99,102,241,0.08), transparent 50%)",
        }}
      />

      {/* Tighter stage — more negative space around the group */}
      <div className="relative mx-auto aspect-[5/4] w-[88%] md:aspect-[16/12] md:w-[82%]">
        {/* Tablet — ~40% smaller, tucked behind, partially cropped */}
        <div
          className={cn(
            "absolute -right-[2%] top-[18%] z-0 hidden w-[22%] max-w-[120px] md:block",
            "float-y-slow",
          )}
          style={{ animationDelay: "1.2s" }}
        >
          <TabletFrame
            className="opacity-70"
            transform="perspective(1000px) rotateY(-8deg) rotateX(2deg) scale(0.6)"
          >
            <div className="aspect-[4/3]">
              <AnalyticsDesktop />
            </div>
          </TabletFrame>
        </div>

        {/* Secondary laptop — depth layer, ~30% smaller */}
        <div
          className={cn(
            "absolute right-[10%] top-[12%] z-[5] hidden w-[42%] max-w-[240px] md:block",
            "float-y",
          )}
          style={{ animationDelay: "0.6s" }}
        >
          <LaptopFrame
            className="opacity-45"
            transform="perspective(1100px) rotateY(-6deg) rotateX(3deg) scale(0.7)"
          >
            <div className="aspect-[16/10]">
              <FinanceDashboard />
            </div>
          </LaptopFrame>
        </div>

        {/* Primary laptop — ~30% reduced, clustered center-right */}
        <div
          className={cn(
            "absolute top-[8%] left-1/2 z-10 w-[78%] max-w-[320px] -translate-x-[42%] md:left-auto md:right-[8%] md:w-[62%] md:max-w-[340px] md:translate-x-0",
            "float-y",
          )}
        >
          <LaptopFrame transform="perspective(1200px) rotateY(-4deg) rotateX(1.5deg) scale(0.92)">
            <div className="aspect-[16/10]">
              <HotelBookingDesktop />
            </div>
          </LaptopFrame>
        </div>

        {/* Phone — ~20% smaller, overlapping laptop, partially cropped at bottom */}
        <div
          className={cn(
            "absolute bottom-[-4%] left-[18%] z-20 w-[20%] min-w-[58px] max-w-[86px] md:bottom-[-2%] md:left-[22%] md:w-[16%] md:max-w-[94px]",
            "float-y-slow",
          )}
          style={{ animationDelay: "0.3s" }}
        >
          <PhoneFrame transform="perspective(900px) rotateY(-8deg) scale(0.92)">
            <div className="aspect-[9/19]">
              <HotelBookingMobile />
            </div>
          </PhoneFrame>
        </div>
      </div>
    </div>
  );
}
