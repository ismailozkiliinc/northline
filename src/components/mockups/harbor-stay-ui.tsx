import { cn } from "@/lib/utils";
import { LaptopFrame, PhoneFrame } from "./device-frames";
import { HotelBookingDesktop, HotelBookingMobile } from "./product-screens";

type HarborStaySceneProps = {
  className?: string;
  variant?: "card" | "hero" | "detail";
};

export function HarborStayScene({ className, variant = "hero" }: HarborStaySceneProps) {
  const isHero = variant === "hero";
  const isDetail = variant === "detail";

  return (
    <div
      className={cn(
        "relative overflow-hidden",
        isHero && "aspect-[16/10] min-h-[280px]",
        variant === "card" && "aspect-[4/3] min-h-[220px]",
        isDetail && "aspect-[21/9] min-h-[200px]",
        className,
      )}
      aria-hidden
    >
      <div className="absolute inset-0 bg-linear-to-br from-[#061214] via-[#0a2a28] to-[#124038]" />
      <div className="absolute -left-10 top-1/4 h-36 w-36 rounded-full bg-amber-500/18 blur-3xl md:h-52 md:w-52" />
      <div className="absolute -right-6 bottom-1/4 h-28 w-28 rounded-full bg-amber-400/12 blur-2xl md:h-40 md:w-40" />
      <div className="absolute left-1/2 top-0 h-44 w-44 -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 70%, rgba(251,191,36,0.5) 0%, transparent 50%)",
        }}
        aria-hidden
      />

      <div
        className={cn(
          "relative flex h-full items-end justify-center gap-3 p-4 md:gap-7 md:p-8",
          isDetail && "items-center",
          isHero && "md:justify-end md:pr-[8%]",
        )}
      >
        <LaptopFrame
          className={cn(
            "w-[72%] max-w-md shrink-0",
            isHero && "md:w-[62%] md:max-w-lg",
            variant === "card" && "w-[65%]",
            isDetail && "w-[55%]",
          )}
          transform={isHero ? "perspective(1200px) rotateY(-4deg) rotateX(2deg)" : undefined}
        >
          <div className="aspect-[16/10]">
            <HotelBookingDesktop />
          </div>
        </LaptopFrame>

        <PhoneFrame
          className={cn(
            "w-[22%] min-w-[64px] max-w-[90px] shrink-0 self-end md:max-w-[100px]",
            isHero && "md:-ml-4 md:max-w-[108px]",
            isDetail && "self-center",
          )}
          transform={isHero ? "perspective(900px) rotateY(-8deg) translateY(-4px)" : undefined}
        >
          <div className="aspect-[9/16]">
            <HotelBookingMobile />
          </div>
        </PhoneFrame>
      </div>
    </div>
  );
}
