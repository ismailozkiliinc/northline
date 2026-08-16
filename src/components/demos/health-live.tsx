"use client";

import {
  CampaignStage,
  DeviceComposition,
  ProductLaptop,
  ProductPhone,
} from "@/components/demos/campaign-scene";

function CarePathDesk() {
  return (
    <div className="flex h-full flex-col overflow-hidden bg-[#f4fbfa] px-3 pt-2.5">
      <div className="flex items-center justify-between">
        <p className="font-display text-[10px] font-bold text-teal-900">Care Path</p>
        <span className="rounded-full bg-teal-700 px-1.5 py-0.5 text-[6px] font-semibold text-white">Live</span>
      </div>
      <p className="text-[7px] text-teal-700/70">Klinik koordinasyon</p>
      <div className="mt-2 grid grid-cols-3 gap-1">
        {["Keşif", "Tedavi", "Takip"].map((s, i) => (
          <div
            key={s}
            className={`rounded-md bg-white p-1.5 text-[7px] font-semibold ${i === 1 ? "ring-1 ring-teal-300 text-teal-800" : "text-teal-800/70"}`}
          >
            {s}
            {i === 1 ? <span className="mt-1 block h-0.5 w-full rounded-full bg-teal-500" /> : null}
          </div>
        ))}
      </div>
      <div className="mt-2 rounded-md bg-white px-2 py-1.5">
        <p className="text-[7px] text-teal-700/70">Hasta</p>
        <p className="text-[8px] font-semibold text-teal-950">A. Demir · Suite 4</p>
      </div>
      <p className="mt-auto mb-2 text-[8px] font-semibold text-teal-900">Sonraki · 28 Nis 10:30</p>
    </div>
  );
}

function CarePathPhone() {
  return (
    <div className="flex h-full flex-col overflow-hidden bg-[#f4fbfa] px-2.5 pt-6 text-teal-950">
      <p className="text-[8px] tracking-[0.16em] text-teal-700/60 uppercase">Care Path</p>
      <p className="mt-1 font-display text-[12px] font-bold">A. Demir</p>
      <p className="text-[8px] text-teal-700/70">Suite 4 · Tedavi</p>
      <div className="mt-3 space-y-1.5">
        {["Keşif", "Tedavi", "Takip"].map((s, i) => (
          <div
            key={s}
            className={`rounded-lg px-2 py-1.5 text-[8px] font-semibold ${i === 1 ? "bg-teal-700 text-white" : "bg-white text-teal-800/70"}`}
          >
            {s}
          </div>
        ))}
      </div>
      <p className="mt-auto mb-3 text-[8px] font-semibold text-teal-900">28 Nis · 10:30</p>
    </div>
  );
}

export function HealthLive({ contained = false }: { contained?: boolean }) {
  void contained;
  return (
    <CampaignStage contained>
      <DeviceComposition
        layout="tablet-laptop"
        laptop={
          <ProductLaptop url="carepath.health">
            <CarePathDesk />
          </ProductLaptop>
        }
        phone={
          <ProductPhone>
            <CarePathPhone />
          </ProductPhone>
        }
      />
    </CampaignStage>
  );
}
