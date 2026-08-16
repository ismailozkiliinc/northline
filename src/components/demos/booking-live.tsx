"use client";

import { motion } from "framer-motion";
import {
  CampaignStage,
  DeviceComposition,
  ProductLaptop,
  ProductPhone,
} from "@/components/demos/campaign-scene";
import { useLiveSequence } from "@/components/demos/use-live-sequence";

function ReserveDesk({ step }: { step: number }) {
  return (
    <div className="relative h-full overflow-hidden bg-[#f7f4ef] text-[#1c1917]">
      <header className="flex items-center justify-between px-3 py-1.5">
        <span className="font-display text-[9px] font-bold tracking-[0.14em]">RESERVE</span>
        <span className="text-[7px]">{step >= 1 ? "Table 12 · 20:30" : "Select table"}</span>
      </header>
      <div className="grid h-[calc(100%-22px)] grid-cols-2">
        <div className="relative overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/campaign/reserve-campaign.jpg" alt="" className="h-full w-full object-cover" />
          {step >= 1 ? (
            <motion.span
              className="absolute top-[46%] left-[42%] h-3 w-3 rounded-full border-2 border-white bg-amber-300"
              initial={{ scale: 0.7, opacity: 0.5 }}
              animate={{ scale: [1, 1.12, 1], opacity: 1 }}
              transition={{ duration: 1.4, times: [0, 0.45, 1] }}
            />
          ) : null}
        </div>
        <div className="flex flex-col p-2">
          <p className="text-[7px] tracking-[0.16em] text-[#8a7a64] uppercase">Dining</p>
          <p className="font-display text-[11px] font-bold">Tasting menu</p>
          <p className="mt-1 text-[7px] text-[#78716c]">{step >= 2 ? "20:30" : "Time"}</p>
          <p className="text-[7px] text-[#78716c]">{step >= 3 ? "4 guests · Available" : "Party"}</p>
          <div className="mt-auto rounded-full bg-[#1c1917] py-1 text-center text-[7px] font-semibold text-white">
            {step >= 4 ? "Reserved" : "Reserve"}
          </div>
        </div>
      </div>
    </div>
  );
}

function ReservePhone({ step }: { step: number }) {
  return (
    <div className="flex h-full flex-col overflow-hidden bg-[#f7f4ef] px-2.5 pt-6">
      <p className="text-[8px] tracking-[0.18em] text-[#8a7a64] uppercase">Table Reserve</p>
      <p className="mt-1 font-display text-[11px] font-bold text-[#1c1917]">Table 12</p>
      <p className="mt-2 text-[8px] text-[#78716c]">
        {step >= 2 ? "20:30" : "—"} · {step >= 3 ? "4 guests" : "—"}
      </p>
      <div className="mt-auto mb-2 rounded-full bg-[#1c1917] py-1.5 text-center text-[8px] font-semibold text-white">
        {step >= 4 ? "Reserved" : "Hold table"}
      </div>
    </div>
  );
}

export function BookingLive({ contained = false }: { contained?: boolean }) {
  void contained;
  const { ref, reduce, step } = useLiveSequence(5, 1700, 2200);
  const s = reduce ? 4 : step;

  return (
    <CampaignStage contained>
      <div ref={ref} className="absolute inset-0" />
      <DeviceComposition
        layout="browser-phone"
        laptop={
          <ProductLaptop url="reserve.table">
            <ReserveDesk step={s} />
          </ProductLaptop>
        }
        phone={
          <ProductPhone>
            <ReservePhone step={s} />
          </ProductPhone>
        }
      />
    </CampaignStage>
  );
}
