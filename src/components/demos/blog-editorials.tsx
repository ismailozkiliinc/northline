"use client";

import { useEffect, useState, type ReactNode } from "react";
import { useReducedMotion } from "framer-motion";
import { CampaignStage } from "@/components/demos/campaign-scene";
import { CountUp } from "@/components/demos/count-up";

function ChecklistEditorial() {
  const rows = ["Hero & IA", "SEO basics", "CMS fields", "Forms", "Launch"];
  return (
    <div className="flex h-full flex-col justify-center bg-[#f7f5f0] p-5">
      <p className="text-[9px] tracking-[0.22em] text-[#a8a29e] uppercase">Field notes</p>
      <p className="mt-1 font-display text-lg font-bold text-[#111827]">Launch list</p>
      <ul className="mt-4 space-y-2">
        {rows.map((r, i) => (
          <li key={r} className="flex items-center gap-2 text-[11px] font-medium text-[#334155]">
            <span className={`h-1.5 w-1.5 rounded-full ${i < 3 ? "bg-indigo-500" : "bg-[#d6d3d1]"}`} />
            {r}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProcessEditorial() {
  return (
    <div className="flex h-full items-center justify-center gap-2 px-4">
      {["Discover", "Flows", "Build", "Store"].map((s, i) => (
        <div key={s} className="flex items-center gap-2">
          <div className="rounded-xl border border-[#e8ecf4] bg-white px-2.5 py-2 text-[10px] font-semibold shadow-sm">
            {s}
          </div>
          {i < 3 ? <span className="text-indigo-300">→</span> : null}
        </div>
      ))}
    </div>
  );
}

function FlutterNativeEditorial() {
  return (
    <div className="grid h-full grid-cols-2 gap-3 p-3">
      <div className="rounded-2xl bg-[#f5f7ff] p-3">
        <p className="text-[8px] tracking-[0.16em] text-indigo-400 uppercase">Flutter</p>
        <p className="mt-2 font-display text-sm font-bold">One codebase</p>
        <p className="mt-1 text-[9px] text-[#64748b]">Shared UI · faster MVP</p>
      </div>
      <div className="rounded-2xl bg-[#111827] p-3 text-white">
        <p className="text-[8px] tracking-[0.16em] text-white/40 uppercase">Native</p>
        <p className="mt-2 font-display text-sm font-bold">Swift · Kotlin</p>
        <p className="mt-1 text-[9px] text-white/50">Platform depth</p>
      </div>
    </div>
  );
}

function CommerceEditorial() {
  const [bag, setBag] = useState(0);
  const reduce = useReducedMotion();
  useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(() => setBag((b) => (b ? 0 : 1)), 2200);
    return () => window.clearInterval(id);
  }, [reduce]);
  return (
    <div className="flex h-full items-end justify-between gap-3 p-4">
      <div>
        <p className="text-[9px] tracking-[0.18em] text-[#a8a29e] uppercase">Arc lamp</p>
        <p className="font-display text-2xl font-bold text-[#111827]">Arc lamp</p>
      </div>
      <div className="rounded-full bg-[#111827] px-3 py-1.5 text-[10px] font-semibold text-white">
        {bag ? "Bag 1" : "Add to bag"}
      </div>
    </div>
  );
}

function PricingEditorial() {
  return (
    <div className="space-y-1.5 p-4">
      {["Web ₺64k", "Mobile ₺48k", "AI ₺22k"].map((x) => (
        <div key={x} className="flex justify-between rounded-lg bg-[#f8faff] px-3 py-2 text-[11px] font-semibold">
          {x}
        </div>
      ))}
      <p className="pt-1 font-display text-xl font-bold">₺134k</p>
    </div>
  );
}

function MvpEditorial() {
  return (
    <div className="grid h-full grid-cols-3 gap-2 p-3">
      {["Backlog", "Build", "Done"].map((c, i) => (
        <div key={c} className="rounded-xl bg-[#f8faff] p-2">
          <p className="text-[9px] font-semibold">{c}</p>
          <div className={`mt-2 h-8 rounded-md ${i === 1 ? "bg-indigo-100" : "bg-white"}`} />
        </div>
      ))}
    </div>
  );
}

function UiuxEditorial() {
  return (
    <div className="flex h-full items-center justify-center gap-3 p-4">
      {["#111827", "#4f6ef7", "#eef2ff"].map((c) => (
        <span key={c} className="h-12 w-12 rounded-xl shadow-sm ring-2 ring-white" style={{ background: c }} />
      ))}
      <p className="font-display text-3xl font-bold">Aa</p>
    </div>
  );
}

function SeoEditorial() {
  return (
    <div className="flex h-full flex-col justify-center p-5">
      <p className="text-[9px] tracking-[0.18em] text-emerald-700 uppercase">Organic</p>
      <p className="mt-2 font-display text-2xl font-bold leading-tight text-[#111827]">
        Rank is a product of structure.
      </p>
      <p className="mt-3 text-[11px] text-[#64748b]">Index · intent · internal links</p>
    </div>
  );
}

function ArchitectureEditorial() {
  return (
    <div className="grid h-full grid-cols-2 gap-2 p-4">
      {["API", "Queue", "Store", "Edge"].map((x) => (
        <div key={x} className="flex items-center justify-center rounded-2xl bg-[#0b1020] text-[11px] font-semibold text-white">
          {x}
        </div>
      ))}
    </div>
  );
}

function AiEditorial() {
  return (
    <div className="flex h-full items-center justify-center gap-2 p-4 text-[10px] font-semibold">
      {["Lead", "AI", "Qualified"].map((n, i) => (
        <span key={n} className="flex items-center gap-2">
          <span className={`rounded-full px-2.5 py-1 ${i === 2 ? "bg-indigo-600 text-white" : "bg-white ring-1 ring-[#e8ecf4]"}`}>
            {n}
          </span>
          {i < 2 ? <span className="text-indigo-300">→</span> : null}
        </span>
      ))}
    </div>
  );
}

function MarketingEditorial() {
  return (
    <div className="flex h-full items-end justify-between p-4">
      <div>
        <p className="text-[9px] tracking-wider text-[#64748b] uppercase">ROAS</p>
        <p className="font-display text-3xl font-bold">
          <CountUp to={3.2} suffix="×" />
        </p>
      </div>
      <div className="rounded-lg bg-[#111827] px-3 py-4 text-white">
        <p className="text-[8px] tracking-[0.2em] uppercase opacity-60">VELA</p>
        <p className="font-display text-sm font-bold">Night edition</p>
      </div>
    </div>
  );
}

const MAP: Record<string, () => ReactNode> = {
  "web-checklist": () => <ChecklistEditorial />,
  web: () => <ChecklistEditorial />,
  "mobile-process": () => <ProcessEditorial />,
  "flutter-native": () => <FlutterNativeEditorial />,
  ecommerce: () => <CommerceEditorial />,
  pricing: () => <PricingEditorial />,
  mvp: () => <MvpEditorial />,
  uiux: () => <UiuxEditorial />,
  seo: () => <SeoEditorial />,
  ai: () => <AiEditorial />,
  architecture: () => <ArchitectureEditorial />,
  marketing: () => <MarketingEditorial />,
};

export function BlogEditorial({ kind }: { kind: string }) {
  const Live = MAP[kind] ?? ChecklistEditorial;
  return (
    <CampaignStage>
      <div className="absolute inset-3">{Live()}</div>
    </CampaignStage>
  );
}
