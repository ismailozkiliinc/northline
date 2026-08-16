"use client";

import { CountUp } from "@/components/demos/count-up";
import {
  CampaignStage,
  DeviceComposition,
  ProductLaptop,
  ProductPhone,
} from "@/components/demos/campaign-scene";
import { BarChart, LineChart } from "@/components/demos/product-uis";
import { motion } from "framer-motion";

function LedgerDesk() {
  return (
    <div className="h-full overflow-hidden bg-[#0b1020] px-2.5 pt-2 text-white">
      <div className="flex items-center justify-between">
        <p className="font-display text-[10px] font-bold">Ledger</p>
        <span className="rounded-full bg-emerald-400/15 px-1.5 py-0.5 text-[6px] font-semibold text-emerald-300">
          Live
        </span>
      </div>
      <p className="mt-1 font-display text-lg font-bold">
        <CountUp to={142800} prefix="₺" duration={2.2} />
      </p>
      <p className="text-[7px] text-emerald-400">Revenue · +8.2%</p>
      <LineChart className="mt-1 h-10 w-full" d="M2 22 C20 20, 36 10, 54 12 S80 7, 98 5" duration={2} delay={0.35} />
      <div className="mt-1.5 h-10">
        <BarChart values={[38, 55, 48, 72, 64, 90]} />
      </div>
    </div>
  );
}

function LedgerApp() {
  return (
    <div className="flex h-full flex-col overflow-hidden bg-[#0b1020] px-2.5 pt-6 text-white">
      <p className="text-[8px] tracking-[0.16em] text-white/40 uppercase">Ledger</p>
      <p className="mt-1 font-display text-lg font-bold">
        <CountUp to={142.8} prefix="₺" suffix="k" duration={1.8} delay={0.5} />
      </p>
      <p className="text-[8px] text-emerald-400">Cash flow +8.2%</p>
      <svg viewBox="0 0 120 32" className="mt-2 w-full" aria-hidden>
        <motion.path
          d="M0 24 C22 22, 40 12, 62 14 S96 8, 120 6"
          fill="none"
          stroke="#818cf8"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.6, delay: 0.25 }}
        />
      </svg>
      <div className="mt-auto mb-2 space-y-1">
        {["INV-2041 Paid", "INV-2040 Pending"].map((r, i) => (
          <motion.div
            key={r}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.7 + i * 0.18 }}
            className="rounded bg-white/8 px-1.5 py-1 text-[7px] text-white/70"
          >
            {r}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function FinanceLive({ contained = false }: { contained?: boolean }) {
  void contained;
  return (
    <CampaignStage contained>
      <DeviceComposition
        layout="monitor-detail"
        laptop={
          <ProductLaptop url="ledger.finance">
            <LedgerDesk />
          </ProductLaptop>
        }
        phone={
          <ProductPhone>
            <LedgerApp />
          </ProductPhone>
        }
      />
    </CampaignStage>
  );
}
