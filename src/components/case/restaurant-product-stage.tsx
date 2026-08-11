"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { LaptopFrame, PhoneFrame } from "@/components/mockups/device-frames";
import { media } from "@/lib/media";

/** Restaurant reservation desktop UI — readable, original, no brand logos */
export function RestaurantDesktopScreen({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex h-full min-h-[200px] flex-col bg-[#14110f] text-[7px] text-[#e8ddd0] md:min-h-[240px] md:text-[8px]",
        className,
      )}
    >
      <header className="flex items-center justify-between border-b border-[#c4a574]/15 px-3 py-2.5 md:px-4">
        <span className="font-semibold tracking-[0.14em] text-[#e8c9a0] uppercase">
          Table Reserve
        </span>
        <nav className="flex gap-3 text-[#a89888]">
          <span className="text-[#e8c9a0]">Reserve</span>
          <span>Menu</span>
          <span>Events</span>
        </nav>
      </header>
      <div className="grid flex-1 grid-cols-[1.1fr_0.9fr] gap-0">
        <div className="relative overflow-hidden p-3 md:p-4">
          <div className="absolute inset-0 bg-linear-to-br from-[#3a2a1c] via-[#1c1612] to-[#0e0c0a]" />
          <div className="relative">
            <p className="text-[9px] tracking-[0.2em] text-[#c4a574] uppercase md:text-[10px]">
              Tonight
            </p>
            <h3 className="mt-1 font-display text-[14px] font-semibold text-[#f5ebe0] md:text-[16px]">
              Chef&apos;s table
            </h3>
            <p className="mt-2 max-w-[90%] text-[#a89888] leading-relaxed">
              Intimate seating · tasting menu · wine pairing
            </p>
            <div className="mt-4 flex gap-2">
              <div className="rounded-md bg-[#c4a574] px-2.5 py-1.5 text-[7px] font-medium text-[#1a120c]">
                Book a table
              </div>
              <div className="rounded-md border border-[#c4a574]/35 px-2.5 py-1.5 text-[7px] text-[#e8c9a0]">
                View menu
              </div>
            </div>
          </div>
          <div className="relative mt-5 grid grid-cols-3 gap-1.5">
            {["Salon", "Terrace", "Private"].map((room, i) => (
              <div
                key={room}
                className={cn(
                  "rounded-lg border p-2",
                  i === 1
                    ? "border-[#c4a574]/40 bg-[#c4a574]/10"
                    : "border-white/8 bg-black/20",
                )}
              >
                <div
                  className={cn(
                    "mb-1.5 aspect-[4/3] rounded-md",
                    i === 0 && "bg-[#4a3424]",
                    i === 1 && "bg-[#5c4030]",
                    i === 2 && "bg-[#3a281c]",
                  )}
                />
                <p className="text-[6px] text-[#e8ddd0]">{room}</p>
                <p className="text-[5px] text-[#a89888]">2–6 guests</p>
              </div>
            ))}
          </div>
        </div>
        <aside className="border-l border-[#c4a574]/12 bg-[#1a1612] p-3 md:p-4">
          <p className="text-[6px] tracking-wider text-[#c4a574] uppercase">Reservation</p>
          <div className="mt-3 space-y-2">
            {["Date", "Time", "Guests"].map((label) => (
              <div
                key={label}
                className="rounded-lg border border-white/8 bg-[#1a1612] px-2.5 py-2"
              >
                <p className="text-[5px] text-[#a89888]">{label}</p>
                <p className="mt-0.5 text-[7px] text-[#f0e6da]">
                  {label === "Date" ? "Fri, 14 Mar" : label === "Time" ? "20:30" : "4 guests"}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-lg border border-[#c4a574]/25 bg-[#1c1610] p-2.5">
            <p className="text-[5px] text-[#a89888]">Floor plan</p>
            <div className="mt-2 grid grid-cols-4 gap-1">
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className={cn(
                    "aspect-square rounded-md",
                    i === 3 || i === 5
                      ? "bg-[#c4a574]/50"
                      : "bg-white/8",
                  )}
                />
              ))}
            </div>
          </div>
          <button
            type="button"
            className="mt-4 w-full rounded-lg bg-[#c4a574] py-2 text-[7px] font-semibold text-[#1a120c]"
          >
            Confirm request
          </button>
        </aside>
      </div>
    </div>
  );
}

export function RestaurantMobileScreen({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex min-h-[180px] flex-col bg-[#120f0d] p-2.5 text-[6px] text-[#e8ddd0] md:min-h-[200px] md:p-3 md:text-[7px]",
        className,
      )}
    >
      <div className="flex items-center justify-between">
        <span className="tracking-wider text-[#c4a574] uppercase">Order</span>
        <span className="text-[#a89888]">Table 12</span>
      </div>
      <div className="mt-3 space-y-2">
        {[
          { name: "Burrata", price: "₺420" },
          { name: "Sea bass", price: "₺890" },
          { name: "Sorbet", price: "₺180" },
        ].map((item) => (
          <div
            key={item.name}
            className="flex items-center gap-2 rounded-lg border border-white/8 bg-[#1a1612] p-2"
          >
            <div className="size-8 rounded-md bg-[#3a2a1c]" />
            <div className="flex-1">
              <p className="text-[#f0e6da]">{item.name}</p>
              <p className="text-[#a89888]">1 × course</p>
            </div>
            <span className="text-[#e8c9a0]">{item.price}</span>
          </div>
        ))}
      </div>
      <div className="mt-auto rounded-lg bg-[#c4a574] py-2 text-center text-[7px] font-semibold text-[#1a120c]">
        Place order · ₺1.490
      </div>
    </div>
  );
}

export function RestaurantDashboardCloseup({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "rounded-xl border border-[#c4a574]/20 bg-[#16120f] p-3 text-[6px] text-[#e8ddd0] shadow-[0_20px_50px_rgba(0,0,0,0.5)] md:p-3.5 md:text-[7px]",
        className,
      )}
    >
      <div className="flex items-center justify-between">
        <span className="text-[#c4a574]">Service board</span>
        <span className="rounded-full bg-emerald-500/20 px-1.5 py-0.5 text-emerald-200/90">
          Live
        </span>
      </div>
      <div className="mt-2.5 space-y-1.5">
        {[
          { t: "T12 · Chef table", s: "Seated" },
          { t: "T04 · Terrace", s: "Arriving" },
          { t: "T09 · Salon", s: "Course 2" },
        ].map((row) => (
          <div
            key={row.t}
            className="flex items-center justify-between rounded-md bg-black/25 px-2 py-1.5"
          >
            <span>{row.t}</span>
            <span className="text-[#e8c9a0]">{row.s}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function RestaurantDetailCard({
  title,
  body,
  className,
}: {
  title: string;
  body: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-xl border border-[#c4a574]/18 bg-[#1a1511]/95 p-3 backdrop-blur-sm md:p-3.5",
        "shadow-[0_16px_40px_rgba(0,0,0,0.45)]",
        className,
      )}
    >
      <p className="text-[6px] tracking-[0.16em] text-[#c4a574] uppercase md:text-[7px]">
        {title}
      </p>
      <p className="mt-1.5 text-[8px] leading-snug text-[#e8ddd0] md:text-[9px]">{body}</p>
    </div>
  );
}

type RestaurantProductStageProps = {
  className?: string;
};

/**
 * Asymmetrical editorial product stage — Apple-keynote density,
 * warm hospitality atmosphere, layered devices (no giant empty card).
 */
export function RestaurantProductStage({ className }: RestaurantProductStageProps) {
  return (
    <div
      className={cn(
        "relative isolate min-h-[340px] w-full md:min-h-[420px] lg:min-h-[480px]",
        className,
      )}
    >
      {/* Warm ambient wash — not pure black */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 60% 40%, rgba(196,165,116,0.16), transparent 55%), radial-gradient(ellipse 50% 45% at 20% 80%, rgba(90,55,30,0.25), transparent 50%), linear-gradient(160deg, #1a1410 0%, #0f0c0a 55%, #1c1612 100%)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -top-8 -right-6 h-40 w-40 rounded-full bg-[#c4a574]/15 blur-3xl"
        aria-hidden
      />

      {/* Main desktop — slightly overflows right/bottom */}
      <div className="absolute top-[4%] right-[-6%] z-10 w-[92%] max-w-none md:right-[-8%] md:w-[88%] lg:w-[86%]">
        <div className="origin-top-right scale-[0.98] md:scale-100">
          <LaptopFrame transform="perspective(1400px) rotateY(-6deg) rotateX(2deg)">
            <div className="aspect-[16/10]">
              <RestaurantDesktopScreen />
            </div>
          </LaptopFrame>
        </div>
      </div>

      {/* Soft photo texture layer (partial) for richness */}
      <div className="absolute top-[-4%] left-[-8%] z-[5] hidden w-[42%] overflow-hidden rounded-2xl opacity-40 mix-blend-luminosity md:block">
        <div className="relative aspect-[4/5] rotate-[-6deg]">
          <Image
            src={media.cases["table-reserve"]}
            alt=""
            fill
            className="object-cover object-[30%_40%]"
            sizes="280px"
            aria-hidden
          />
          <div className="absolute inset-0 bg-[#1a120e]/55" />
        </div>
      </div>

      {/* Floating phone — overlaps laptop */}
      <div className="absolute bottom-[-2%] left-[2%] z-30 w-[28%] max-w-[120px] md:bottom-[-4%] md:left-[4%] md:w-[24%] md:max-w-[132px]">
        <PhoneFrame transform="perspective(900px) rotateY(8deg) rotateZ(-2deg)">
          <div className="aspect-[9/19]">
            <RestaurantMobileScreen />
          </div>
        </PhoneFrame>
      </div>

      {/* Dashboard close-up */}
      <div className="absolute top-[8%] left-[0%] z-20 w-[38%] max-w-[200px] md:left-[-2%] md:w-[34%]">
        <RestaurantDashboardCloseup className="rotate-[-3deg]" />
      </div>

      {/* UI detail cards */}
      <div className="absolute right-[2%] bottom-[10%] z-25 w-[36%] max-w-[180px] md:bottom-[14%] md:right-[-2%]">
        <RestaurantDetailCard
          title="Kitchen sync"
          body="Courses timed to seating · allergen flags · wine pairing notes"
          className="rotate-[2deg]"
        />
      </div>
      <div className="absolute top-[42%] left-[28%] z-15 hidden w-[30%] max-w-[160px] md:block">
        <RestaurantDetailCard
          title="Guest profile"
          body="Preferences · past visits · celebration notes"
          className="rotate-[-1.5deg] opacity-95"
        />
      </div>
    </div>
  );
}
