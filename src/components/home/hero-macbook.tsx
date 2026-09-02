"use client";

import { BarChart, LineChart, OrbitWebsite } from "@/components/demos/product-uis";
import { CountUp } from "@/components/demos/count-up";
import { cn } from "@/lib/utils";

const MACBOOK = {
  frame: "/images/hero/devices/macbook-frame.png?v=2",
  aspectRatio: 1536 / 1024,
  screen: { left: 20.352, top: 4.988, width: 59.035, height: 57.115 },
} as const;

const IPHONE = {
  frame: "/images/hero/devices/iphone-frame.png?v=9",
  aspectRatio: 720 / 1548,
  screen: {
    left: 3.611,
    top: 1.034,
    width: 92.778,
    height: 97.674,
    radius: "7.784% / 3.439%",
  },
} as const;

function OrbitBrowserScreen() {
  return (
    <div className="flex h-full w-full flex-col overflow-hidden bg-white">
      <div className="flex shrink-0 items-center gap-2 border-b border-[#eef2f7] bg-[#fbfcfe] px-2.5 py-1.5">
        <div className="flex items-center gap-1">
          <span className="h-[6px] w-[6px] rounded-full bg-[#f9a8d4]" />
          <span className="h-[6px] w-[6px] rounded-full bg-[#fde68a]" />
          <span className="h-[6px] w-[6px] rounded-full bg-[#bbf7d0]" />
        </div>
        <div className="mx-auto flex h-[14px] max-w-[55%] flex-1 items-center justify-center rounded-full bg-white px-2 font-mono text-[5.5px] text-[#94a3b8] ring-1 ring-[#e8ecf4]">
          orbit.niscraft.com
        </div>
        <span className="rounded-full bg-[#eef2ff] px-1.5 py-0.5 text-[5px] font-semibold tracking-wide text-[#6366f1]">
          AI
        </span>
      </div>
      <div className="min-h-0 flex-1 overflow-hidden [&_[data-scrollpane]]:h-full">
        <OrbitWebsite pieces={4} className="!h-full !min-h-0" live />
      </div>
    </div>
  );
}

function OrbitPhoneScreen() {
  return (
    <div className="flex h-full w-full flex-col bg-[#f4f6fb] text-[#0f172a]">
      <div className="mx-auto mt-[3.5%] h-[2.8%] min-h-[8px] w-[28%] shrink-0 rounded-full bg-black" aria-hidden />

      <div className="flex shrink-0 items-end justify-between gap-1.5 px-[5%] pb-0.5 pt-[4%]">
        <div className="min-w-0">
          <p className="text-[5.5px] font-semibold tracking-[0.16em] text-[#94a3b8] uppercase">
            Orbit
          </p>
          <p className="font-display text-[10px] font-bold leading-none tracking-tight">Live pulse</p>
        </div>
        <span className="shrink-0 rounded-full bg-[#0b1020] px-1.5 py-0.5 text-[5px] font-semibold text-indigo-200">
          AI
        </span>
      </div>

      <div className="mx-[4.5%] shrink-0 rounded-[10px] bg-[#0b1020] px-2.5 py-2 text-white">
        <p className="text-[5px] font-semibold tracking-[0.14em] text-indigo-300 uppercase">Revenue</p>
        <p className="mt-0.5 font-display text-[13px] leading-none font-bold tracking-tight">
          <CountUp to={142800} prefix="₺" duration={2} delay={0.15} />
        </p>
        <p className="mt-0.5 text-[5.5px] font-medium text-emerald-400">+18.4% vs last week</p>
        <LineChart className="mt-1 h-7 w-full" live />
      </div>

      <div className="mx-[4.5%] mt-[2%] grid shrink-0 grid-cols-2 gap-1">
        {[
          ["Users", "12.4k", "+8%"],
          ["Conv.", "4.8%", "+0.6"],
          ["Sessions", "86k", "+12%"],
          ["Sales", "₺94k", "+9%"],
        ].map(([label, value, delta]) => (
          <div key={label} className="rounded-[8px] bg-white px-2 py-1.5 shadow-[0_1px_6px_rgba(15,23,42,0.05)]">
            <p className="text-[5px] font-medium text-[#94a3b8]">{label}</p>
            <p className="font-display text-[9px] leading-none font-bold tracking-tight">{value}</p>
            <p className="text-[4.5px] font-semibold text-emerald-600">{delta}</p>
          </div>
        ))}
      </div>

      <div className="mx-[4.5%] mt-[2%] flex min-h-0 flex-1 flex-col rounded-[8px] bg-white p-2 shadow-[0_1px_6px_rgba(15,23,42,0.05)]">
        <div className="mb-1 flex shrink-0 items-center justify-between">
          <p className="text-[5px] font-semibold tracking-[0.12em] text-[#94a3b8] uppercase">
            Performance
          </p>
          <p className="text-[5px] font-semibold text-[#6366f1]">7d</p>
        </div>
        <div className="min-h-0 flex-1">
          <BarChart values={[36, 52, 44, 70, 62, 86, 96]} live />
        </div>
      </div>

      <div className="mt-auto shrink-0 border-t border-[#e8ecf4] bg-white px-[4%] pt-1.5 pb-[6%]">
        <div className="grid grid-cols-3 text-center text-[5.5px] font-semibold">
          {(["Home", "Analytics", "Activity"] as const).map((tab, i) => (
            <span key={tab} className={cn(i === 1 ? "text-[#6366f1]" : "text-[#94a3b8]")}>
              {tab}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function MacBookDevice() {
  return (
    <div
      className="relative w-full"
      style={{
        aspectRatio: MACBOOK.aspectRatio,
        filter:
          "drop-shadow(0 28px 48px rgba(15,23,42,0.16)) drop-shadow(0 8px 18px rgba(15,23,42,0.08))",
      }}
    >
      <div
        className="absolute overflow-hidden bg-white"
        style={{
          zIndex: 1,
          left: `${MACBOOK.screen.left}%`,
          top: `${MACBOOK.screen.top}%`,
          width: `${MACBOOK.screen.width}%`,
          height: `${MACBOOK.screen.height}%`,
          borderRadius: "0.4rem",
        }}
      >
        <OrbitBrowserScreen />
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={MACBOOK.frame}
        alt=""
        draggable={false}
        className="pointer-events-none absolute inset-0 z-[2] h-full w-full select-none object-contain object-center"
      />
    </div>
  );
}

function IPhoneDevice() {
  return (
    <div className="relative w-full" style={{ aspectRatio: IPHONE.aspectRatio }}>
      <div
        className="pointer-events-none absolute inset-x-[6%] -bottom-[5%] top-[6%] -z-10 rounded-[22%] bg-[rgba(15,23,42,0.2)] blur-[20px]"
        aria-hidden
      />

      <div
        className="absolute overflow-hidden bg-[#f4f6fb]"
        style={{
          left: `${IPHONE.screen.left}%`,
          top: `${IPHONE.screen.top}%`,
          width: `${IPHONE.screen.width}%`,
          height: `${IPHONE.screen.height}%`,
          borderRadius: IPHONE.screen.radius,
        }}
      >
        <OrbitPhoneScreen />
      </div>

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={IPHONE.frame}
        alt=""
        draggable={false}
        className="pointer-events-none absolute inset-0 z-[2] h-full w-full select-none object-fill"
        style={{
          filter:
            "drop-shadow(0 16px 28px rgba(15,23,42,0.28)) drop-shadow(0 4px 10px rgba(15,23,42,0.14))",
        }}
      />
    </div>
  );
}

export function HeroMacbook() {
  return (
    <div
      className="relative flex h-full w-full items-center justify-center overflow-visible"
      aria-hidden
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div
          className="absolute left-1/2 top-[45%] h-[75%] w-[85%] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(99,102,241,0.11) 0%, rgba(139,92,246,0.05) 45%, transparent 70%)",
            filter: "blur(52px)",
          }}
        />
      </div>

      <div className="relative flex w-full max-w-[min(100%,920px)] items-end justify-center gap-0 overflow-visible">
        <div className="relative z-[1] w-[min(76%,620px)] shrink-0">
          <MacBookDevice />
        </div>

        <div className="relative z-[3] -ml-[2%] mb-[1%] w-[min(22%,190px)] shrink-0 sm:w-[min(21%,200px)] md:w-[min(20%,210px)]">
          <IPhoneDevice />
        </div>
      </div>
    </div>
  );
}
