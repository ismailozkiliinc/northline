"use client";

import { cn } from "@/lib/utils";
import { ReviewWebsite } from "@/components/demos/product-uis";

function Stage({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn("relative h-full w-full min-w-0 overflow-hidden", className)}>{children}</div>;
}

/** About — studio process, no devices */
export function ProcessStudio() {
  const phases = [
    { n: "01", t: "Idea", d: "Brief" },
    { n: "02", t: "Strategy", d: "Scope" },
    { n: "03", t: "Design", d: "System" },
    { n: "04", t: "Build", d: "Product" },
    { n: "05", t: "Launch", d: "Live" },
  ];
  return (
    <Stage className="bg-[#f6f7fb]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_10%,rgba(79,110,247,0.12),transparent_42%)]" />
      <p className="absolute top-5 left-5 text-[10px] font-semibold tracking-[0.22em] text-indigo-400 uppercase">
        Studio process
      </p>
      <ol className="relative flex h-full flex-col justify-center gap-2.5 px-5 py-10 md:px-8">
        {phases.map((p, i) => (
          <li
            key={p.n}
            className="flex items-center gap-4 rounded-2xl border border-white bg-white/90 px-4 py-3 shadow-[0_14px_36px_rgba(15,23,42,0.06)] backdrop-blur-sm"
            style={{ width: `${88 - i * 4}%`, marginLeft: `${i * 3}%` }}
          >
            <span className="font-mono text-[11px] font-semibold tracking-[0.18em] text-indigo-400">{p.n}</span>
            <span className="font-display text-lg font-bold text-[#111827]">{p.t}</span>
            <span className="ml-auto text-[11px] tracking-wide text-[#94a3b8]">{p.d}</span>
          </li>
        ))}
      </ol>
    </Stage>
  );
}

/** Services index hero — live capability mosaic */
export function CapabilityMesh() {
  return (
    <Stage className="bg-[#f4f6fb] p-2 md:p-3">
      <div className="grid h-full grid-cols-3 grid-rows-2 gap-2 md:gap-3">
        <div className="overflow-hidden rounded-2xl bg-white shadow-[0_12px_28px_rgba(15,23,42,0.05)]">
          <div className="flex items-center gap-1 border-b border-[#eef2f7] px-2 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-[#f9a8d4]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#fde68a]" />
            <span className="h-1.5 flex-1 rounded-full bg-[#f1f5f9] text-center text-[6px] text-[#94a3b8]">atlas.counsel</span>
          </div>
          <p className="px-2 pt-2 font-display text-[11px] font-bold text-[#111827]">Atlas Counsel</p>
          <p className="px-2 text-[8px] text-[#64748b]">Corporate digital vitrine</p>
        </div>
        <div className="flex flex-col justify-end overflow-hidden rounded-2xl bg-[#111827] p-3 text-white">
          <p className="text-[8px] tracking-[0.16em] text-white/40 uppercase">Campaign</p>
          <p className="mt-auto font-display text-sm font-bold">Horizon</p>
          <p className="text-[9px] text-white/50">Paid → site → CRM</p>
        </div>
        <div className="rounded-2xl border border-[#e8ecf4] bg-white p-3">
          <p className="text-[8px] text-emerald-700">northline.studio</p>
          <p className="mt-1 text-[11px] font-semibold text-[#1d4ed8]">Organic · Position 1</p>
          <p className="mt-1 text-[8px] text-[#64748b]">premium digital studio</p>
        </div>
        <div className="rounded-2xl bg-[#f3f1ec] p-3">
          <p className="text-[8px] tracking-[0.16em] text-[#a8a29e] uppercase">Brand</p>
          <p className="mt-2 font-display text-lg font-bold text-[#111827]">Aa</p>
          <div className="mt-2 flex gap-1">
            {["#111827", "#4F6EF7", "#EEF2FF"].map((c) => (
              <span key={c} className="h-4 w-4 rounded-full" style={{ background: c }} />
            ))}
          </div>
        </div>
        <div className="rounded-2xl bg-[#0b1020] p-3 text-white">
          <p className="font-mono text-[8px] text-indigo-300">ingest → model → CRM</p>
          <p className="mt-2 font-display text-sm font-bold">Orbit AI</p>
        </div>
        <div className="rounded-2xl border border-emerald-100 bg-white p-3">
          <p className="text-[9px] tracking-[0.16em] text-emerald-600 uppercase">SEO</p>
          <p className="mt-1 font-display text-lg font-bold text-[#111827]">Query fit</p>
          <p className="text-[10px] text-[#64748b]">Intent · structure · links</p>
        </div>
      </div>
    </Stage>
  );
}

/** Real website surface — filled magazine, not empty cards */
export function WebMagazineLive() {
  return (
    <Stage className="rounded-2xl">
      <ReviewWebsite />
    </Stage>
  );
}

/** Services UI/UX — identity materials, no empty frames */
export function UxJourneyLive() {
  return (
    <Stage className="rounded-2xl">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/scenes/brand-desk.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(28,25,23,0.55),transparent_50%)]" />
      <div className="absolute bottom-5 left-5 text-white">
        <p className="text-[10px] tracking-[0.2em] uppercase opacity-70">Identity</p>
        <p className="font-display text-xl font-bold">Northline system</p>
      </div>
      <div className="absolute top-5 right-5 flex gap-1.5">
        {["#111827", "#4F6EF7", "#EEF2FF"].map((c) => (
          <span key={c} className="h-8 w-8 rounded-lg ring-2 ring-white/70" style={{ background: c }} />
        ))}
      </div>
    </Stage>
  );
}

/** Services AI — node graph, not Pulse dashboard */
export function AiGraphLive() {
  return (
    <Stage className="bg-[#0b1020]">
      <svg viewBox="0 0 320 220" className="h-full w-full" aria-hidden>
        <path d="M40 110 H120 M120 110 L180 50 M120 110 L180 170 M180 50 H280 M180 170 H280" stroke="#4f6ef7" strokeWidth="1.4" fill="none" opacity="0.7" />
        {[
          [40, 110, "Event"],
          [120, 110, "Router"],
          [180, 50, "Model"],
          [180, 170, "CRM"],
          [280, 50, "Mail"],
          [280, 170, "Log"],
        ].map(([x, y, label]) => (
          <g key={String(label)} transform={`translate(${x},${y})`}>
            <rect x="-28" y="-14" width="56" height="28" rx="8" fill="#111827" stroke="#6366f1" />
            <text textAnchor="middle" y="4" fill="#e2e8f0" fontSize="8" fontFamily="ui-sans-serif">
              {label}
            </text>
          </g>
        ))}
      </svg>
    </Stage>
  );
}

/** Services ecommerce — photo lookbook, not browser+phone shop */
export function ShopLookbook() {
  return (
    <Stage className="rounded-2xl">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/scenes/lookbook.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(28,25,23,0.55),transparent_55%)]" />
      <div className="absolute bottom-5 left-5 text-white">
        <p className="text-[10px] tracking-[0.2em] uppercase opacity-70">Lookbook</p>
        <p className="font-display text-xl font-bold">Lookbook</p>
      </div>
      <div className="absolute top-5 right-5 rounded-full bg-white px-3 py-1 text-[11px] font-semibold text-[#111827]">
        ₺890
      </div>
    </Stage>
  );
}

/** Blog hero — editorial masthead, no software dashboard */
export function EditorialMasthead() {
  return (
    <Stage className="rounded-2xl border border-[#e8ecf4] bg-[#f7f5f0] p-6 md:p-8">
      <p className="text-[10px] font-semibold tracking-[0.22em] text-[#a8a29e] uppercase">Northline Review</p>
      <p className="mt-4 font-display text-[clamp(1.8rem,4vw,2.6rem)] font-bold leading-[1.05] tracking-tight text-[#111827]">
        Notes on
        <br />
        making
        <br />
        products.
      </p>
      <div className="mt-6 flex gap-6 border-t border-[#e8e4dc] pt-4 text-[11px] tracking-wider text-[#78716c] uppercase">
        <span>Vol. 04</span>
        <span>Studio</span>
        <span>TR / EN</span>
      </div>
    </Stage>
  );
}

/** Service detail — SaaS product surface */
export function SaasModulesLive() {
  return (
    <Stage className="rounded-2xl border border-[#e8ecf4] bg-[#f7f8fc]">
      <div className="flex h-full">
        <aside className="hidden w-[28%] flex-col border-r border-[#e8ecf4] bg-white p-3 sm:flex">
          <p className="font-display text-[11px] font-bold">Northline OS</p>
          <p className="text-[8px] text-[#94a3b8]">Production</p>
          <div className="mt-3 space-y-1 text-[10px] font-semibold text-[#64748b]">
            {["Overview", "Billing", "Roles", "Jobs"].map((x, i) => (
              <div key={x} className={`rounded-md px-2 py-1.5 ${i === 0 ? "bg-indigo-50 text-indigo-600" : ""}`}>
                {x}
              </div>
            ))}
          </div>
        </aside>
        <div className="grid min-w-0 flex-1 grid-cols-2 gap-2 p-3">
          {[
            ["MRR", "₺186k"],
            ["Seats", "48"],
            ["Jobs", "1,204"],
            ["Uptime", "99.98%"],
          ].map(([k, v]) => (
            <div key={k} className="rounded-xl bg-white px-3 py-4 shadow-sm">
              <p className="text-[10px] tracking-wider text-[#94a3b8] uppercase">{k}</p>
              <p className="mt-1 font-display text-lg font-bold text-[#111827]">{v}</p>
            </div>
          ))}
        </div>
      </div>
    </Stage>
  );
}

/** Service detail web — IA tree */
export function SiteMapLive() {
  return (
    <Stage className="flex items-center justify-center bg-[#f8faff]">
      <div className="text-center">
        <div className="inline-block rounded-xl border border-indigo-100 bg-white px-4 py-2 font-display text-sm font-bold shadow-sm">
          Home
        </div>
        <div className="mx-auto h-6 w-px bg-indigo-200" />
        <div className="flex justify-center gap-3">
          {["Work", "Studio", "Contact"].map((x) => (
            <div key={x} className="rounded-lg bg-white px-3 py-2 text-[11px] font-semibold text-[#334155] shadow-sm">
              {x}
            </div>
          ))}
        </div>
      </div>
    </Stage>
  );
}

/** Service detail mobile — single phone-less app store card */
export function AppStoreCardLive() {
  return (
    <Stage className="flex items-center justify-center p-6">
      <div className="w-full max-w-xs rounded-3xl border border-[#e8ecf4] bg-white p-5 shadow-[0_20px_50px_rgba(15,23,42,0.08)]">
        <div className="h-16 w-16 rounded-2xl bg-brand-gradient" />
        <p className="mt-4 font-display text-xl font-bold text-[#111827]">Navia</p>
        <p className="text-sm text-[#64748b]">Field operations</p>
        <div className="mt-4 h-10 rounded-full bg-[#111827] text-center text-[12px] font-semibold leading-10 text-white">
          Get
        </div>
      </div>
    </Stage>
  );
}

/** Homepage marketing — creative + funnel */
export function CampaignBoardLive() {
  return (
    <Stage className="rounded-2xl bg-[#0f172a]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/scenes/ads-creative.jpg" alt="" className="absolute inset-0 h-full w-full object-cover opacity-80" />
      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(15,23,42,0.88),rgba(15,23,42,0.25))]" />
      <div className="relative flex h-full flex-col justify-between p-5 text-white">
        <p className="text-[10px] font-semibold tracking-[0.2em] text-indigo-200 uppercase">Campaign</p>
        <div>
          <p className="font-display text-2xl font-bold">Horizon</p>
          <p className="mt-1 text-sm text-white/70">Reach · Engage · Convert</p>
          <p className="mt-3 text-[11px] text-white/55">Paid media · landing · CRM</p>
        </div>
      </div>
    </Stage>
  );
}

/** Service AI detail — sequential pipeline, not node graph or devices */
export function AiPipelineLive() {
  const steps = [
    { t: "Ingest", s: "Events" },
    { t: "Reason", s: "Model" },
    { t: "Act", s: "CRM" },
    { t: "Learn", s: "Log" },
  ];
  return (
    <Stage className="rounded-2xl border border-[#e8ecf4] bg-[#f8faff] p-5">
      <p className="text-[10px] font-semibold tracking-[0.16em] text-indigo-400 uppercase">Automation</p>
      <ol className="mt-4 space-y-2">
        {steps.map((s, i) => (
          <li key={s.t} className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-[0_8px_24px_rgba(15,23,42,0.04)]">
            <span className="font-mono text-[11px] text-indigo-400">0{i + 1}</span>
            <span className="font-display text-sm font-bold text-[#111827]">{s.t}</span>
            <span className="ml-auto text-[11px] text-[#94a3b8]">{s.s}</span>
          </li>
        ))}
      </ol>
    </Stage>
  );
}

/** Homepage SEO — SERP surface, no laptop chrome */
export function SerpBoardLive() {
  return (
    <Stage className="rounded-2xl border border-[#e8ecf4] bg-white p-5">
      <div className="flex items-center gap-2 rounded-full bg-[#f1f5f9] px-3 py-2 text-[11px] text-[#334155]">
        <span className="h-2 w-2 rounded-full bg-indigo-400" />
        premium digital product studio
      </div>
      <ul className="mt-4 space-y-3">
        <li className="rounded-xl bg-indigo-50 px-3 py-2.5 ring-1 ring-indigo-100">
          <p className="text-[10px] text-emerald-700">northline.studio</p>
          <p className="text-sm font-semibold text-[#1d4ed8]">Northline — Digital product studio</p>
          <p className="text-[10px] font-semibold text-indigo-600">Position 1 · organic</p>
        </li>
        <li className="px-3 py-1.5">
          <p className="text-[10px] text-[#94a3b8]">competitor.example</p>
          <p className="text-[12px] font-medium text-[#1d4ed8]">Design tools for teams</p>
        </li>
        <li className="px-3 py-1.5">
          <p className="text-[10px] text-[#94a3b8]">cloud.example</p>
          <p className="text-[12px] font-medium text-[#1d4ed8]">Frontend infrastructure</p>
        </li>
      </ul>
    </Stage>
  );
}

export function BrandBoardLive() {
  return (
    <Stage className="bg-[#f3f1ec] p-4 md:p-5">
      <div className="grid h-full grid-cols-[1.1fr_0.9fr] gap-3">
        <div className="flex flex-col justify-between rounded-2xl bg-white p-4 shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
          <p className="text-[9px] tracking-[0.2em] text-[#a8a29e] uppercase">Wordmark</p>
          <p className="font-display text-3xl font-bold tracking-tight text-[#111827]">North</p>
          <div className="flex gap-2">
            {["#111827", "#4F6EF7", "#EEF2FF", "#F8FAFC"].map((c) => (
              <span key={c} className="h-8 flex-1 rounded-lg" style={{ background: c }} />
            ))}
          </div>
        </div>
        <div className="grid grid-rows-2 gap-3">
          <div className="rounded-2xl bg-[#111827] p-4 text-white shadow-sm">
            <p className="text-[8px] tracking-[0.18em] text-white/40 uppercase">Card</p>
            <p className="mt-5 font-display text-sm font-bold">Northline</p>
            <p className="text-[10px] text-white/55">Digital studio</p>
          </div>
          <div className="rounded-2xl border border-[#e8e4dc] bg-white p-4">
            <p className="text-[8px] tracking-[0.18em] text-[#a8a29e] uppercase">Type</p>
            <p className="mt-2 font-display text-xl font-bold text-[#111827]">Aa</p>
            <p className="text-[10px] text-[#78716c]">Plus Jakarta · Geist</p>
          </div>
        </div>
      </div>
    </Stage>
  );
}

/** Service detail UI/UX — type and color specimen */
export function UiSpecLive() {
  return (
    <Stage className="rounded-2xl border border-[#e8ecf4] bg-white p-5">
      <p className="text-[10px] font-semibold tracking-[0.16em] text-indigo-400 uppercase">Type + color</p>
      <p className="mt-3 font-display text-4xl font-bold tracking-tight text-[#111827]">Aa</p>
      <p className="mt-1 text-sm text-[#64748b]">Plus Jakarta · Geist · 14 / 18 / 40</p>
      <div className="mt-5 flex gap-2">
        {["#111827", "#4F6EF7", "#EEF2FF", "#F8FAFC"].map((c) => (
          <span key={c} className="h-12 flex-1 rounded-xl ring-1 ring-[#e8ecf4]" style={{ background: c }} />
        ))}
      </div>
      <p className="mt-4 text-[11px] tracking-wide text-[#94a3b8]">Radius 16 / 24 · Space 8 · 16 · 24</p>
    </Stage>
  );
}

/** Service detail ecommerce — merchandising grid, not campaign photo */
export function ProductGridLive() {
  return (
    <Stage className="rounded-2xl bg-[#f7f5f0] p-3">
      <div className="grid h-full grid-cols-2 gap-2">
        {[
          ["Arc lamp", "Object"],
          ["Ceramic", "Table"],
          ["Linen", "Set"],
          ["Glass", "Stem"],
        ].map(([t, k]) => (
          <div key={t} className="rounded-xl bg-white p-3 shadow-sm">
            <div className="h-16 rounded-lg bg-[#ebe6dc]" />
            <p className="mt-2 font-display text-sm font-bold text-[#111827]">{t}</p>
            <p className="text-[10px] text-[#a8a29e]">{k}</p>
          </div>
        ))}
      </div>
    </Stage>
  );
}

/** Service detail support — operations queue, not OS dashboard */
export function SupportQueueLive() {
  const rows = [
    ["NL-204", "Live", "Priority"],
    ["NL-211", "Queued", "Setup"],
    ["NL-218", "Done", "Release"],
  ];
  return (
    <Stage className="rounded-2xl border border-[#e8ecf4] bg-white p-4">
      <p className="text-[10px] font-semibold tracking-[0.16em] text-indigo-400 uppercase">Operations</p>
      <ul className="mt-3 space-y-2">
        {rows.map(([id, state, label]) => (
          <li key={id} className="flex items-center justify-between rounded-xl bg-[#f8faff] px-3 py-3">
            <span className="font-mono text-[11px] text-[#64748b]">{id}</span>
            <span className="text-sm font-semibold text-[#111827]">{label}</span>
            <span className="text-[10px] tracking-wide text-indigo-500 uppercase">{state}</span>
          </li>
        ))}
      </ul>
    </Stage>
  );
}
