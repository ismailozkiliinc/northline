"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { CampaignStage, DeviceComposition, ProductPhone } from "@/components/demos/campaign-scene";

const LINES = ["Quiet luxury.", "Precision systems.", "One identity."];
const PALETTES = [
  ["#111827", "#4F6EF7", "#EEF2FF"],
  ["#0F172A", "#7C5CFC", "#F5F3FF"],
];

export function DesignSystemLive() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.3 });
  const reduce = useReducedMotion();
  const [tick, setTick] = useState(0);

  useEffect(() => {
    if (!inView || reduce) return;
    const id = window.setInterval(() => setTick((n) => n + 1), 2200);
    return () => window.clearInterval(id);
  }, [inView, reduce]);

  const line = LINES[tick % LINES.length];
  const palette = PALETTES[tick % PALETTES.length];
  const typeFace = tick % 2 === 0 ? "Plus Jakarta" : "Geist";

  return (
    <CampaignStage contained>
      <div ref={ref} className="absolute inset-0" />
      <DeviceComposition
        layout="tablet-laptop"
        laptop={
          <div className="flex h-full w-full overflow-hidden rounded-2xl border border-[#e8ecf4] bg-[#f7f6f3] shadow-[0_24px_56px_rgba(15,23,42,0.1)]">
            <div className="flex min-w-0 flex-1 flex-col p-4">
              <p className="text-[8px] font-semibold tracking-[0.2em] text-[#94a3b8] uppercase">Brand system</p>
              <motion.p
                key={line}
                className="mt-2 font-display text-[18px] font-bold tracking-tight text-[#111827]"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {line}
              </motion.p>
              <p className="mt-1 text-[8px] text-[#64748b]">{typeFace} · 14 / 24 / 40</p>
              <div className="mt-3 flex gap-1.5">
                {palette.map((c) => (
                  <span key={c} className="h-8 w-8 rounded-lg ring-1 ring-[#e8ecf4]" style={{ background: c }} />
                ))}
              </div>
              <div className="mt-3 grid min-h-0 flex-1 grid-cols-2 gap-2">
                <div className="rounded-xl bg-[#111827] px-3 py-3 text-white">
                  <p className="text-[7px] tracking-wider uppercase opacity-50">Wordmark</p>
                  <p className="font-display text-sm font-bold">VELA</p>
                </div>
                <div className="rounded-xl border border-[#e8ecf4] bg-white px-3 py-3">
                  <p className="text-[7px] text-[#94a3b8]">Stationery</p>
                  <p className="mt-1 h-8 rounded bg-[#eef2ff]" />
                </div>
              </div>
            </div>
          </div>
        }
        phone={
          <ProductPhone>
            <div className="flex h-full flex-col bg-[#111827] px-2.5 pt-7 text-white">
              <p className="text-[8px] tracking-[0.2em] uppercase opacity-50">VELA</p>
              <p className="font-display text-[13px] font-bold">{line}</p>
              <div className="mt-auto mb-4 flex gap-1">
                {palette.map((c) => (
                  <span key={c} className="h-4 w-4 rounded" style={{ background: c }} />
                ))}
              </div>
            </div>
          </ProductPhone>
        }
      />
    </CampaignStage>
  );
}
