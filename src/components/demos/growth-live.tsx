"use client";

import { motion } from "framer-motion";
import { CountUp } from "@/components/demos/count-up";
import { CampaignStage, DeviceComposition, ProductLaptop, ProductPhone } from "@/components/demos/campaign-scene";
import { LineChart } from "@/components/demos/product-uis";
import { useLiveSequence } from "@/components/demos/use-live-sequence";

const ADS = [
  { brand: "VELA", line: "Summer drop", tone: "from-[#1c1917] to-[#44403c]" },
  { brand: "VELA", line: "Night edition", tone: "from-[#312e81] to-[#1e1b4b]" },
];

function SocialAd({ i }: { i: number }) {
  const ad = ADS[i];
  return (
    <div className="flex h-full flex-col bg-white">
      <div className="flex items-center gap-1.5 px-2 py-1.5">
        <span className="h-3 w-3 rounded-full bg-[#111827]" />
        <span className="text-[7px] font-semibold">vela.studio · Sponsored</span>
      </div>
      <div className={`min-h-0 flex-1 bg-gradient-to-br ${ad.tone} px-3 py-4 text-white`}>
        <p className="text-[8px] tracking-[0.2em] uppercase opacity-70">{ad.brand}</p>
        <p className="font-display text-[15px] font-bold leading-tight">{ad.line}</p>
        <p className="mt-2 text-[8px] text-white/70">Shop the collection</p>
      </div>
      <div className="px-2 py-1.5 text-[7px] text-[#64748b]">Like · Comment · Share</div>
    </div>
  );
}

function AdsDashboard({ roas, ctr }: { roas: string; ctr: string }) {
  return (
    <div className="h-full bg-white px-3 pt-2 text-[#111827]">
      <div className="flex items-center justify-between">
        <p className="font-display text-[10px] font-bold">Campaigns</p>
        <span className="rounded-full bg-indigo-50 px-1.5 py-0.5 text-[6px] font-semibold text-indigo-600">Live</span>
      </div>
      <p className="mt-1 text-[7px] text-[#64748b]">VELA performance</p>
      <div className="mt-2 grid grid-cols-3 gap-1">
        {[
          ["ROAS", roas],
          ["CTR", ctr],
          ["Conv.", "+28%"],
        ].map(([l, v]) => (
          <div key={l} className="rounded-md bg-[#f8faff] px-1.5 py-1">
            <p className="text-[6px] text-[#94a3b8]">{l}</p>
            <p className="font-display text-[10px] font-bold">{v}</p>
          </div>
        ))}
      </div>
      <LineChart className="mt-2 h-12 w-full" duration={2} delay={0.2} />
    </div>
  );
}

export function AdsLive() {
  const { ref, reduce, step } = useLiveSequence(3, 2800, 2200);
  const i = reduce || step >= 2 ? 1 : 0;
  const roas = reduce ? "3.2×" : (["1.4×", "2.1×", "3.2×"] as const)[step];
  const ctr = reduce || step >= 1 ? "2.4%" : "1.2%";

  return (
    <CampaignStage contained>
      <div ref={ref} className="absolute inset-0" />
      <DeviceComposition
        layout="laptop-phone"
        laptop={
          <ProductLaptop url="ads.niscraft.com">
            <AdsDashboard roas={roas} ctr={ctr} />
          </ProductLaptop>
        }
        phone={
          <ProductPhone>
            <SocialAd i={i} />
          </ProductPhone>
        }
      />
      <div className="pointer-events-none absolute bottom-[10%] left-[7%] z-20">
        <p className="font-display text-2xl font-bold text-[#111827] md:text-3xl">{roas}</p>
        <p className="text-[10px] tracking-wider text-[#64748b] uppercase">ROAS</p>
      </div>
    </CampaignStage>
  );
}

const COMPETITORS = [
  { host: "linear.app", title: "Linear — Design tools", blurb: "Issue tracking for high-performing teams." },
  { host: "vercel.com", title: "Vercel — Frontend cloud", blurb: "Build and deploy modern web products." },
];

export function SeoLive() {
  const { ref, reduce, step } = useLiveSequence(3, 2400, 2600);
  const pos = reduce ? 1 : ([7, 4, 1] as const)[step];

  const niscraft = {
    host: "niscraft.com",
    title: "NISCRAFT — Premium digital product studio",
    blurb: "Web, mobile, AI software and performance systems.",
  };

  const results =
    pos === 1
      ? [niscraft, COMPETITORS[0], COMPETITORS[1]]
      : pos === 4
        ? [COMPETITORS[0], niscraft, COMPETITORS[1]]
        : [COMPETITORS[0], COMPETITORS[1], niscraft];

  return (
    <CampaignStage contained>
      <div ref={ref} className="absolute inset-0" />
      <DeviceComposition
        layout="monitor"
        laptop={
          <ProductLaptop url="search.google.com">
            <div className="flex h-full bg-white">
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1.5 border-b border-[#eef2f7] px-2 py-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#e2e8f0]" />
                  <span className="h-1.5 w-1.5 rounded-full bg-[#e2e8f0]" />
                  <span className="flex-1 rounded-full bg-[#f1f5f9] px-2 py-0.5 text-[7px] text-[#334155]">
                    premium digital product studio
                  </span>
                </div>
                <ul className="space-y-1 p-2">
                  {results.map((r) => {
                    const featured = r.host === "niscraft.com";
                    return (
                      <motion.li
                        key={r.host}
                        layout
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        className={`rounded-md px-1.5 py-1 ${featured ? "bg-indigo-50 ring-1 ring-indigo-200" : ""}`}
                      >
                        <p className="text-[7px] text-emerald-700">{r.host}</p>
                        <p className="text-[8px] font-semibold text-[#1d4ed8]">{r.title}</p>
                        {featured ? (
                          <p className="text-[7px] font-bold text-indigo-600">Position {pos}</p>
                        ) : (
                          <p className="text-[7px] text-[#64748b]">{r.blurb}</p>
                        )}
                      </motion.li>
                    );
                  })}
                </ul>
              </div>
              <aside className="w-[38%] border-l border-[#eef2f7] bg-[#f8faff] p-2">
                <p className="text-[6.5px] tracking-wider text-[#94a3b8] uppercase">Organic</p>
                <p className="font-display text-[13px] font-bold">
                  <CountUp to={42} prefix="+" suffix="%" duration={1.8} delay={0.4} replay={step} />
                </p>
                <LineChart className="mt-1 h-8 w-full" duration={2} delay={0.25} />
                <p className="mt-2 text-[7px] font-semibold text-[#334155]">Keywords +128</p>
              </aside>
            </div>
          </ProductLaptop>
        }
      />
      <div className="absolute right-[8%] bottom-[10%] z-20">
        <div className="rounded-xl border border-white/80 bg-white/90 px-3 py-2 shadow-sm backdrop-blur-md">
          <p className="text-[9px] text-[#94a3b8]">Position</p>
          <p className="font-display text-2xl font-bold text-[#111827]">{pos}</p>
        </div>
      </div>
    </CampaignStage>
  );
}
