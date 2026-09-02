"use client";

import { motion } from "framer-motion";
import {
  CampaignStage,
  DeviceComposition,
  ProductLaptop,
  ProductPhone,
} from "@/components/demos/campaign-scene";
import { AiWorkspaceUi } from "@/components/demos/product-uis";
import { useLiveSequence } from "@/components/demos/use-live-sequence";

function PulseMonitor({ phase }: { phase: number }) {
  return (
    <div className="flex h-full flex-col bg-[#0b1020] px-2.5 pt-7 text-white">
      <p className="text-[8px] tracking-[0.16em] text-white/40 uppercase">Pulse</p>
      <p className="mt-1 font-display text-[11px] font-bold">Workflow</p>
      <p className="mt-2 text-[8px] text-indigo-300">
        {phase >= 5 ? "Completed" : phase >= 3 ? "CRM updated" : "Processing"}
      </p>
      <div className="mt-3 space-y-1.5">
        {["Ingest", "Route", "Update"].map((row, i) => (
          <div
            key={row}
            className={`rounded bg-white/8 px-1.5 py-1 text-[7px] ${i <= Math.min(phase, 2) ? "text-white/80" : "text-white/35"}`}
          >
            {row}
          </div>
        ))}
      </div>
      <p className="mt-auto mb-4 font-mono text-[7px] text-emerald-400">{phase >= 5 ? "ok" : "running"}</p>
    </div>
  );
}

export function AiWorkflowLive({ contained = false }: { contained?: boolean }) {
  void contained;
  const { ref, reduce, step } = useLiveSequence(6, 1600, 2400);
  const active = reduce ? 5 : step;

  return (
    <CampaignStage contained>
      <div ref={ref} className="absolute inset-0" />
      <DeviceComposition
        layout="monitor"
        laptop={
          <ProductLaptop url="pulse.niscraft.com">
            <AiWorkspaceUi phase={active} />
          </ProductLaptop>
        }
        phone={
          <ProductPhone>
            <PulseMonitor phase={active} />
          </ProductPhone>
        }
      />
      <div className="absolute top-[12%] left-[6%] z-20 hidden md:block">
        <motion.div
          className="rounded-xl border border-white/80 bg-white/90 px-3 py-2 text-[10px] font-semibold shadow-sm backdrop-blur-md"
          animate={{ opacity: active >= 5 ? 1 : 0.5 }}
          transition={{ duration: 0.5 }}
        >
          {active >= 5 ? "Completed" : active >= 3 ? "CRM updated" : "Processing"}
        </motion.div>
      </div>
    </CampaignStage>
  );
}
