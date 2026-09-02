"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  CampaignStage,
  DeviceComposition,
  ProductLaptop,
  ProductPhone,
} from "@/components/demos/campaign-scene";
import { useLiveSequence } from "@/components/demos/use-live-sequence";

function HarborSite() {
  const reduce = useReducedMotion();
  return (
    <div className="h-full bg-[#f7f4ef] text-[#1c1917]">
      <header className="flex items-center justify-between px-3 py-1.5">
        <span className="font-display text-[9px] font-bold tracking-[0.16em]">HARBOR</span>
        <span className="rounded-full bg-[#1c1917] px-1.5 py-0.5 text-[6px] text-[#faf8f5]">Reserve</span>
      </header>
      <div className="grid h-[calc(100%-22px)] grid-cols-2">
        <div className="overflow-hidden">
          <motion.img
            src="/images/campaign/harbor-campaign.jpg"
            alt=""
            className="h-full w-full origin-center object-cover"
            animate={reduce ? undefined : { scale: [1, 1.025] }}
            transition={{ duration: 14, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          />
        </div>
        <div className="flex flex-col p-2">
          <p className="text-[7px] tracking-[0.16em] text-[#8a7a64] uppercase">Bodrum</p>
          <p className="font-display text-[11px] font-bold">Harbor Suite</p>
          <p className="mt-1 text-[7px] text-[#78716c]">Direct booking · sea view</p>
          <p className="mt-auto font-display text-[13px] font-bold">₺12.600</p>
        </div>
      </div>
    </div>
  );
}

function HarborBookUi({ step }: { step: number }) {
  return (
    <div className="flex h-full flex-col bg-[#f7f4ef] px-2.5 pt-6 pb-3">
      <p className="text-[8px] tracking-[0.22em] text-[#8a7a64] uppercase">Harbor</p>
      <p className="mt-1 font-display text-[11px] font-bold text-[#1c1917]">Harbor Suite</p>
      <p className="mt-0.5 text-[8px] text-[#78716c]">Bodrum · deniz manzarası</p>
      <div className="mt-3 space-y-1.5">
        <div className={`rounded-lg px-2 py-1.5 text-[8px] ${step >= 0 ? "bg-white text-[#1c1917]" : "bg-white/50 text-[#78716c]"}`}>
          {step >= 0 ? "12–15 Nisan" : "Date"}
        </div>
        <div className={`rounded-lg px-2 py-1.5 text-[8px] ${step >= 1 ? "bg-white text-[#1c1917]" : "bg-white/50 text-[#78716c]"}`}>
          {step >= 1 ? "2 misafir" : "Guests"}
        </div>
        <div className={`rounded-lg px-2 py-1.5 text-[8px] ${step >= 2 ? "bg-white text-[#1c1917]" : "bg-white/50 text-[#78716c]"}`}>
          {step >= 2 ? "Harbor Suite" : "Room"}
        </div>
      </div>
      <p className="mt-auto font-display text-sm font-bold text-[#1c1917]">₺12.600</p>
      <div className="mt-1.5 rounded-full bg-[#1c1917] py-1.5 text-center text-[8px] font-semibold text-[#faf8f5]">
        {step >= 3 ? "Reserved" : "Reserve"}
      </div>
    </div>
  );
}

export function HotelLive({ contained = false }: { contained?: boolean }) {
  void contained;
  const { ref, reduce, step } = useLiveSequence(4, 1800, 2400);
  const s = reduce ? 3 : step;

  return (
    <CampaignStage contained>
      <div ref={ref} className="absolute inset-0" />
      <DeviceComposition
        layout="laptop-phone"
        laptop={
          <ProductLaptop url="harbor.stay">
            <HarborSite />
          </ProductLaptop>
        }
        phone={
          <ProductPhone>
            <HarborBookUi step={s} />
          </ProductPhone>
        }
      />
    </CampaignStage>
  );
}
