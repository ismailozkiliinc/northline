"use client";

import { motion } from "framer-motion";
import { CampaignStage, DeviceComposition, ProductLaptop } from "@/components/demos/campaign-scene";
import { CountUp } from "@/components/demos/count-up";
import { LineChart } from "@/components/demos/product-uis";
import { useLiveSequence } from "@/components/demos/use-live-sequence";

function SoftwareDesk() {
  return (
    <div className="flex h-full bg-[#f7f8fc] text-[#111827]">
      <aside className="hidden w-[22%] flex-col border-r border-[#e8ecf4] bg-white p-2 sm:flex">
        <p className="font-display text-[9px] font-bold">Northline OS</p>
        <p className="mt-0.5 text-[6px] text-[#94a3b8]">Production</p>
        <div className="mt-2 space-y-0.5 text-[7px] font-semibold text-[#64748b]">
          {["Overview", "Pipeline", "Customers", "Automations"].map((x, i) => (
            <div key={x} className={`rounded-md px-1.5 py-1 ${i === 0 ? "bg-indigo-50 text-indigo-600" : ""}`}>
              {x}
            </div>
          ))}
        </div>
      </aside>
      <div className="flex min-w-0 flex-1 flex-col p-2.5">
        <div className="grid grid-cols-3 gap-1.5">
          {[
            ["MRR", "₺186k", "+12%"],
            ["Active", "2,408", "+8%"],
            ["Uptime", "99.98%", "SLA"],
          ].map(([l, v, n]) => (
            <div key={l} className="rounded-lg border border-[#eef2f7] bg-white px-2 py-1.5">
              <p className="text-[6px] tracking-wider text-[#94a3b8] uppercase">{l}</p>
              <p className="font-display text-[12px] font-bold">{v}</p>
              <p className="text-[6px] text-emerald-600">{n}</p>
            </div>
          ))}
        </div>
        <div className="mt-2 min-h-0 flex-1 rounded-lg border border-[#eef2f7] bg-white px-2 py-1.5">
          <p className="text-[7px] font-semibold">Revenue</p>
          <LineChart className="mt-1 h-[72%] w-full" duration={2} delay={0.2} />
        </div>
      </div>
    </div>
  );
}

export function SoftwareLive() {
  const { ref, reduce, step } = useLiveSequence(10, 900, 2200);
  const built = reduce || step >= 8;

  return (
    <CampaignStage contained>
      <div ref={ref} className="absolute inset-0" />
      <DeviceComposition
        layout="monitor"
        laptop={
          <ProductLaptop url="os.northline.studio">
            <SoftwareDesk />
          </ProductLaptop>
        }
      />
      <div className="absolute bottom-[10%] left-[8%] z-20 hidden sm:block">
        <motion.div
          className="rounded-xl border border-white/80 bg-[#0b1220]/92 px-3 py-2 font-mono text-[9px] text-[#cbd5e1] shadow-[0_16px_32px_rgba(15,23,42,0.16)] backdrop-blur-md"
          animate={{ opacity: built ? 1 : 0.7 }}
          transition={{ duration: 0.45 }}
        >
          <p className="text-white/45">$ deploy production</p>
          <p className={built ? "text-emerald-400" : "text-white/50"}>{built ? "✓ Live · 4 regions" : "shipping…"}</p>
        </motion.div>
      </div>
      <div className="absolute top-[12%] right-[8%] z-20 hidden md:block">
        <div className="rounded-xl border border-white/80 bg-white/92 px-3 py-2 shadow-sm backdrop-blur-md">
          <p className="text-[8px] text-[#94a3b8]">Active users</p>
          <p className="font-display text-lg font-bold text-[#111827]">
            <CountUp to={2408} duration={1.6} />
          </p>
        </div>
      </div>
    </CampaignStage>
  );
}
