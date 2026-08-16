"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { CampaignStage, DeviceComposition, ProductLaptop } from "@/components/demos/campaign-scene";

export function BriefLive() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.35 });
  const reduce = useReducedMotion();
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (!inView || reduce) return;
    const id = window.setInterval(() => setStep((s) => (s + 1) % 4), 1500);
    return () => window.clearInterval(id);
  }, [inView, reduce]);

  const s = reduce ? 3 : step;
  const rows = [
    ["Hizmet", "Web + Mobile"],
    ["Bütçe", "₺80–150k"],
    ["Takvim", "Q2 2026"],
  ];

  return (
    <CampaignStage contained>
      <div ref={ref} className="absolute inset-0" />
      <DeviceComposition
        layout="monitor"
        laptop={
          <ProductLaptop url="brief.northline.studio">
            <div className="flex h-full flex-col bg-white px-3 pt-3">
              <p className="text-[8px] font-semibold tracking-[0.18em] text-indigo-400 uppercase">Brief</p>
              <div className="mt-2 space-y-1">
                {rows.map(([k, v], i) => (
                  <div key={k} className="flex items-center justify-between rounded-md bg-[#f8faff] px-2 py-1 text-[8px]">
                    <span className="text-[#94a3b8]">{k}</span>
                    <span className="font-semibold text-[#111827]">{s >= i ? v : "—"}</span>
                  </div>
                ))}
              </div>
              <div className={`mt-2 rounded-full py-1 text-center text-[8px] font-semibold ${s >= 3 ? "bg-brand-gradient text-white" : "bg-[#eef2f7] text-[#94a3b8]"}`}>
                {s >= 3 ? "Brief alındı" : "Send"}
              </div>
            </div>
          </ProductLaptop>
        }
      />
    </CampaignStage>
  );
}

export function PricingLive() {
  return (
    <CampaignStage contained>
      <DeviceComposition
        layout="monitor"
        laptop={
          <ProductLaptop url="scope.northline.studio">
            <div className="h-full bg-white px-3 pt-3">
              <p className="font-display text-[10px] font-bold">Scope</p>
              {["Web ₺64k", "Mobile ₺48k", "AI ₺22k"].map((x) => (
                <div key={x} className="mt-1 rounded-md bg-[#f8faff] px-2 py-1 text-[8px] font-medium">
                  {x}
                </div>
              ))}
              <p className="mt-2 font-display text-base font-bold">₺134k</p>
            </div>
          </ProductLaptop>
        }
      />
    </CampaignStage>
  );
}

export function MvpLive() {
  return (
    <CampaignStage contained>
      <DeviceComposition
        layout="monitor"
        laptop={
          <ProductLaptop url="board.northline.studio">
            <div className="grid h-full grid-cols-3 gap-1 bg-[#f4f6ff] p-2">
              {["Backlog", "Build", "Done"].map((c) => (
                <div key={c} className="rounded-md bg-white p-1.5 text-[7px] font-semibold">
                  {c}
                </div>
              ))}
            </div>
          </ProductLaptop>
        }
      />
    </CampaignStage>
  );
}
