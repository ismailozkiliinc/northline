"use client";

import { useRef, useState, type ReactNode } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll } from "framer-motion";
import { LineChart } from "@/components/demos/product-uis";
import { cn } from "@/lib/utils";

type Step = {
  num: string;
  title: string;
  body: string;
};

function StrategyScene() {
  return (
    <div className="relative h-full overflow-hidden bg-[#eef1f7]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_8%_0%,rgba(79,110,247,0.14),transparent_48%)]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(15,23,42,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.04) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative grid h-full grid-rows-[auto_1fr_auto] gap-2.5 p-3 md:p-4">
        <header className="flex items-center justify-between">
          <p className="text-[10px] font-semibold tracking-[0.2em] text-indigo-500 uppercase">Lumen · discovery board</p>
          <span className="rounded-full bg-white px-2.5 py-1 text-[9px] font-semibold text-[#334155] shadow-sm">
            Slice locked · 4 weeks
          </span>
        </header>

        <div className="grid min-h-0 grid-cols-[1.15fr_0.85fr] gap-2.5">
          <article className="flex min-h-0 flex-col rounded-2xl border border-white bg-white p-3.5 shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[9px] font-semibold tracking-[0.18em] text-indigo-400 uppercase">Project brief</p>
                <h3 className="mt-1 font-display text-[15px] font-bold tracking-tight text-[#111827] md:text-lg">
                  Direct booking for a boutique stay
                </h3>
              </div>
              <span className="shrink-0 rounded-md bg-[#111827] px-2 py-1 font-mono text-[8px] text-white">v0.3</span>
            </div>
            <p className="mt-2 text-[11px] leading-relaxed text-[#64748b]">
              First slice: room story, availability hold, WhatsApp handoff. Payments and OTA inventory stay out.
            </p>
            <dl className="mt-3 grid grid-cols-2 gap-1.5 text-[11px]">
              {[
                ["North star", "Direct inquiries"],
                ["Primary user", "Weekend couple"],
                ["Buyer", "Ops lead, 90s on mobile"],
                ["Constraint", "No new PMS"],
              ].map(([k, v]) => (
                <div key={k} className="rounded-xl bg-[#f4f6fb] px-2.5 py-2">
                  <dt className="text-[8px] tracking-[0.14em] text-[#94a3b8] uppercase">{k}</dt>
                  <dd className="mt-0.5 font-semibold text-[#111827]">{v}</dd>
                </div>
              ))}
            </dl>
          </article>

          <div className="relative min-h-0">
            <div className="rounded-2xl border border-white bg-white/95 p-3 shadow-sm">
              <p className="text-[9px] font-semibold tracking-[0.16em] text-[#94a3b8] uppercase">User flow</p>
              <ol className="mt-3 space-y-1.5">
                {[
                  ["01", "Land", "Quiet courtyard hero"],
                  ["02", "Room", "Garden room story"],
                  ["03", "Hold", "Dates + guests"],
                  ["04", "Request", "WhatsApp with context"],
                ].map(([n, t, d], i) => (
                  <li key={n} className="flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#111827] font-mono text-[8px] text-white">
                      {n}
                    </span>
                    <span className="min-w-[3.4rem] text-[11px] font-semibold text-[#111827]">{t}</span>
                    <span className="truncate text-[10px] text-[#94a3b8]">{d}</span>
                    {i < 3 ? <span className="ml-auto text-[10px] text-indigo-300">↓</span> : null}
                  </li>
                ))}
              </ol>
            </div>
            <aside className="absolute -right-1 -top-1 w-[58%] rotate-[4deg] rounded-xl border border-amber-100 bg-[#fffbeb] p-2.5 shadow-[0_14px_28px_rgba(15,23,42,0.1)]">
              <p className="text-[8px] tracking-[0.16em] text-amber-700 uppercase">Note</p>
              <p className="mt-1 text-[11px] font-semibold leading-snug text-[#111827]">Persona: ops. If it is not clear in 90s, it is out.</p>
            </aside>
            <aside className="absolute -bottom-1 -left-2 hidden w-[62%] -rotate-2 rounded-xl border border-indigo-100 bg-white p-2.5 shadow-sm sm:block">
              <p className="text-[8px] tracking-[0.16em] text-indigo-400 uppercase">Scope</p>
              <p className="mt-1 text-[11px] font-semibold text-[#334155]">In: request. Out: payments. Later: PMS.</p>
            </aside>
          </div>
        </div>

        <div className="grid grid-cols-[0.9fr_1.1fr] gap-2.5">
          <div className="rounded-2xl border border-white bg-white p-3">
            <p className="text-[9px] font-semibold tracking-[0.16em] text-[#94a3b8] uppercase">Research</p>
            <div className="mt-2 space-y-1.5">
              {[
                ["5 interviews", "Front desk still copies from OTA"],
                ["Heatmap", "Calendar buried below fold"],
                ["Goal", "Request without calling"],
              ].map(([k, v]) => (
                <div key={k} className="flex items-start gap-2 rounded-lg bg-[#f8faff] px-2.5 py-1.5">
                  <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
                  <p className="text-[10px] leading-snug text-[#334155]">
                    <span className="font-semibold">{k} · </span>
                    {v}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-white bg-white p-3">
            <p className="text-[9px] font-semibold tracking-[0.16em] text-[#94a3b8] uppercase">Roadmap</p>
            <div className="mt-3 grid grid-cols-4 gap-1">
              {[
                ["W1", "Research", "100%"],
                ["W2", "Flows", "70%"],
                ["W3", "UI", "20%"],
                ["W4", "Slice", "—"],
              ].map(([w, t, p]) => (
                <div key={w} className="rounded-lg bg-[#eef2ff] px-1.5 py-2">
                  <p className="font-mono text-[8px] text-indigo-400">{w}</p>
                  <p className="mt-0.5 text-[10px] font-semibold text-[#3730a3]">{t}</p>
                  <div className="mt-1.5 h-1 overflow-hidden rounded-full bg-white">
                    <div
                      className="h-full rounded-full bg-indigo-500"
                      style={{ width: p === "—" ? "8%" : p }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DesignScene() {
  return (
    <div className="flex h-full overflow-hidden bg-[#dfe3ed]">
      <aside className="hidden w-10 flex-col items-center gap-2.5 bg-[#1c2030] py-3 text-white/45 sm:flex">
        {["↖", "◻", "T", "◎", "▭"].map((x, i) => (
          <span
            key={x}
            className={cn(
              "flex h-7 w-7 items-center justify-center rounded-lg text-[11px]",
              i === 1 ? "bg-white/12 text-white" : "hover:bg-white/8",
            )}
          >
            {x}
          </span>
        ))}
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex items-center gap-3 border-b border-black/8 bg-[#eceff5] px-3 py-2">
          <span className="flex gap-1">
            <span className="h-2 w-2 rounded-full bg-[#f9a8d4]" />
            <span className="h-2 w-2 rounded-full bg-[#fde68a]" />
            <span className="h-2 w-2 rounded-full bg-[#86efac]" />
          </span>
          <p className="font-display text-[11px] font-bold text-[#111827]">Lumen Stay · product</p>
          <span className="rounded bg-white px-1.5 py-0.5 text-[8px] font-semibold tracking-wide text-[#64748b]">
            Draft · 1440
          </span>
          <span className="ml-auto hidden text-[9px] text-[#94a3b8] md:inline">Auto layout · 8 / 16 / 24</span>
        </header>

        <div className="grid min-h-0 flex-1 grid-cols-[4.5rem_1fr_7.5rem]">
          <div className="hidden space-y-1.5 overflow-hidden border-r border-black/6 bg-[#f4f5f8] p-2 text-[8px] sm:block">
            <p className="tracking-[0.16em] text-[#94a3b8] uppercase">Layers</p>
            {["Frame / Desktop", "  Hero", "  Room card", "  CTA / Reserve", "Frame / Mobile"].map((x, i) => (
              <p
                key={x}
                className={cn("truncate rounded px-1 py-0.5", i === 0 ? "bg-indigo-100 font-semibold text-indigo-700" : "text-[#64748b]")}
              >
                {x}
              </p>
            ))}
          </div>

          <div className="relative min-w-0 overflow-hidden bg-[radial-gradient(circle_at_1px_1px,rgba(15,23,42,0.08)_1px,transparent_0)] [background-size:18px_18px] p-3">
            <div className="relative mx-auto h-full max-w-[92%] overflow-hidden rounded-xl bg-white shadow-[0_22px_48px_rgba(15,23,42,0.16)] ring-2 ring-indigo-500/80">
              <div className="flex items-center justify-between border-b border-[#eef2f7] px-3 py-2">
                <span className="font-display text-[11px] font-bold">Lumen Stay</span>
                <span className="rounded-full bg-[#111827] px-2 py-0.5 text-[8px] font-semibold text-white">Reserve</span>
              </div>
              <div className="grid h-[calc(100%-34px)] grid-cols-[1.05fr_0.95fr]">
                <div className="p-3">
                  <p className="text-[8px] tracking-[0.16em] text-indigo-400 uppercase">Garden room</p>
                  <p className="mt-1 font-display text-sm font-bold leading-tight text-[#111827]">Quiet courtyard, two nights</p>
                  <p className="mt-2 text-[10px] leading-relaxed text-[#64748b]">
                    Check-in 15:00 · garden breakfast · late checkout on request.
                  </p>
                  <div className="mt-3 flex gap-1.5">
                    <span className="rounded-md bg-[#111827] px-2.5 py-1.5 text-[9px] font-semibold text-white">Primary / 16</span>
                    <span className="rounded-md border border-[#e8ecf4] px-2.5 py-1.5 text-[9px] text-[#334155]">Ghost / 16</span>
                  </div>
                </div>
                <div className="relative bg-[#e8edf8]">
                  <div className="absolute inset-3 rounded-lg bg-gradient-to-br from-slate-200 via-indigo-100 to-[#c7d2fe]" />
                  <span className="absolute top-5 left-5 h-[72px] w-[72px] rounded-md border-[1.5px] border-indigo-500 bg-white/20" />
                  <span className="absolute top-4 left-[90px] rounded bg-indigo-600 px-1.5 py-0.5 text-[8px] font-semibold text-white">
                    144 × 144
                  </span>
                  <span className="absolute top-[86px] left-5 h-1.5 w-[72px] bg-indigo-500" />
                  <span className="absolute top-5 left-[76px] h-[72px] w-1.5 bg-indigo-500" />
                </div>
              </div>
            </div>
            <div className="absolute right-2 top-8 hidden w-[88px] overflow-hidden rounded-lg border border-white bg-white shadow-sm md:block">
              <div className="h-16 bg-gradient-to-br from-slate-200 to-indigo-100" />
              <p className="px-1.5 py-1 text-[7px] font-semibold">Mobile · 390</p>
            </div>
            <div className="pointer-events-none absolute right-[28%] bottom-[18%] hidden md:block" aria-hidden>
              <svg width="18" height="22" viewBox="0 0 18 22">
                <path d="M1 1 L1 17 L6 13 L9 21 L12 20 L9 12 L16 12 Z" fill="#111827" stroke="white" strokeWidth="1" />
              </svg>
            </div>
          </div>

          <aside className="hidden space-y-2 overflow-hidden border-l border-black/6 bg-white p-2 lg:block">
            <p className="text-[8px] tracking-[0.16em] text-[#94a3b8] uppercase">Inspect</p>
            <div>
              <p className="text-[8px] text-[#94a3b8]">Fill</p>
              <div className="mt-1 flex gap-1">
                {["#111827", "#4F6EF7", "#EEF2FF", "#F8FAFF"].map((c) => (
                  <span key={c} className="h-4 w-4 rounded-[4px] ring-1 ring-[#e8ecf4]" style={{ background: c }} />
                ))}
              </div>
            </div>
            <div>
              <p className="text-[8px] text-[#94a3b8]">Type</p>
              <p className="mt-0.5 font-display text-lg font-bold leading-none">Aa</p>
              <p className="text-[8px] text-[#64748b]">Plus Jakarta · 24/32</p>
            </div>
            <div className="rounded-md bg-[#f8faff] px-1.5 py-1.5 font-mono text-[8px] text-[#334155]">
              radius/16
              <br />
              space/24
            </div>
          </aside>
        </div>

        <footer className="flex items-center gap-2 border-t border-black/8 bg-white px-3 py-2">
          <p className="text-[8px] tracking-[0.16em] text-[#94a3b8] uppercase">Library</p>
          <span className="rounded-md bg-[#111827] px-2 py-1 text-[8px] font-semibold text-white">Button</span>
          <span className="rounded-md border border-[#e8ecf4] px-2 py-1 text-[8px]">Input</span>
          <span className="rounded-full bg-[#eef2ff] px-2 py-1 text-[8px] font-semibold text-indigo-600">Chip</span>
          <span className="rounded-md bg-[#f8faff] px-2 py-1 font-mono text-[8px] text-[#64748b]">Card / Room</span>
        </footer>
      </div>
    </div>
  );
}

function CodeLine({ n, children }: { n: string; children: ReactNode }) {
  return (
    <li className="flex gap-3">
      <span className="w-5 shrink-0 text-right text-white/22">{n}</span>
      <span className="min-w-0 truncate">{children}</span>
    </li>
  );
}

function BuildScene() {
  return (
    <div className="flex h-full overflow-hidden bg-[#0b1020] text-[#cbd5e1]">
      <aside className="hidden w-[22%] flex-col border-r border-white/8 bg-[#080c18] py-3 text-[10px] sm:flex">
        <p className="px-3 text-[8px] tracking-[0.18em] text-white/30 uppercase">Explorer</p>
        <ul className="mt-2 space-y-0.5 px-2 font-mono">
          {[
            ["app/", false],
            ["  hold/page.tsx", false],
            ["lib/", false],
            ["  hold-room.ts", true],
            ["  db.ts", false],
            ["schema.sql", false],
          ].map(([f, on]) => (
            <li
              key={String(f)}
              className={cn("rounded px-1.5 py-1", on ? "bg-white/8 text-indigo-200" : "text-white/45")}
            >
              {f}
            </li>
          ))}
        </ul>
        <div className="mt-auto space-y-1.5 px-3">
          <div className="rounded-lg bg-white/5 px-2 py-1.5">
            <p className="text-[8px] text-white/35">Postgres · eu-west</p>
            <p className="font-mono text-[9px] text-emerald-300">holds · 12 open</p>
          </div>
          <div className="rounded-lg bg-white/5 px-2 py-1.5">
            <p className="text-[8px] text-white/35">Deploy</p>
            <p className="font-mono text-[9px] text-indigo-200">preview · ready</p>
          </div>
        </div>
      </aside>

      <div className="flex min-w-0 flex-[1.2] flex-col border-r border-white/8">
        <div className="flex items-center gap-1 border-b border-white/8 px-2 py-1.5 text-[10px]">
          <span className="rounded-t bg-white/8 px-2 py-1 font-mono text-indigo-200">hold-room.ts</span>
          <span className="px-2 py-1 font-mono text-white/30">schema.sql</span>
        </div>
        <ol className="min-h-0 flex-1 space-y-0.5 overflow-hidden px-3 py-3 font-mono text-[11px] leading-5">
          <CodeLine n="11">
            <span className="text-white/30">{"// availability hold — first product slice"}</span>
          </CodeLine>
          <CodeLine n="12">
            <span className="text-[#c4b5fd]">export async function </span>
            <span className="text-[#93c5fd]">holdRoom</span>
            <span>(slug: string) {"{"}</span>
          </CodeLine>
          <CodeLine n="13">
            <span>  const slot = </span>
            <span className="text-[#c4b5fd]">await </span>
            <span className="text-[#93c5fd]">db</span>
            <span>.availability.find(slug);</span>
          </CodeLine>
          <CodeLine n="14">
            <span className="text-[#c4b5fd]">  if </span>
            <span>(!slot.open) </span>
            <span className="text-[#c4b5fd]">throw new </span>
            <span className="text-[#fda4af]">ConflictError</span>
            <span>();</span>
          </CodeLine>
          <CodeLine n="15">
            <span className="text-[#c4b5fd]">  return </span>
            <span className="text-[#93c5fd]">reserve</span>
            <span>({"{ slug, channel: "}</span>
            <span className="text-[#86efac]">&quot;direct&quot;</span>
            <span> {"}"});</span>
          </CodeLine>
          <CodeLine n="16">
            <span>{"}"}</span>
          </CodeLine>
          <CodeLine n="18">
            <span className="text-[#c4b5fd]">export function </span>
            <span className="text-[#93c5fd]">Confirm</span>
            <span>({"{ hold }: Props) {"}</span>
          </CodeLine>
          <CodeLine n="19">
            <span>  return &lt;</span>
            <span className="text-[#93c5fd]">Status </span>
            <span>hold={"{hold}"} region=</span>
            <span className="text-[#86efac]">&quot;eu-west&quot;</span>
            <span> /&gt;;</span>
          </CodeLine>
          <CodeLine n="20">
            <span>{"}"}</span>
          </CodeLine>
        </ol>
        <div className="flex items-center justify-between border-t border-white/8 px-3 py-2 font-mono text-[10px]">
          <span className="text-emerald-300">✓ typecheck · tests 14/14 · 0 errors</span>
          <span className="text-white/35">main · preview</span>
        </div>
      </div>

      <div className="hidden w-[36%] flex-col bg-[#111827] p-3 sm:flex">
        <p className="text-[8px] tracking-[0.18em] text-white/35 uppercase">Preview · component</p>
        <div className="mt-2 flex-1 rounded-xl bg-white p-3 text-[#111827]">
          <p className="text-[8px] tracking-[0.16em] text-indigo-400 uppercase">Hold</p>
          <p className="mt-1 font-display text-sm font-bold">Garden room</p>
          <p className="mt-1 text-[11px] text-[#64748b]">12 Oct · 2 nights · direct</p>
          <div className="mt-3 rounded-lg bg-emerald-50 px-2 py-2 text-[11px] font-semibold text-emerald-700">
            Slot reserved · eu-west
          </div>
        </div>
        <div className="mt-2 space-y-1.5 font-mono text-[9px]">
          <div className="flex justify-between rounded-lg bg-white/5 px-2 py-1.5 text-indigo-200">
            <span>POST /api/hold</span>
            <span className="text-emerald-300">201</span>
          </div>
          <div className="rounded-lg bg-white/5 px-2 py-1.5 text-white/50">
            CI · build passing · 38s
          </div>
        </div>
      </div>
    </div>
  );
}

function GrowScene() {
  return (
    <div className="relative h-full overflow-hidden bg-[#f4f6fb]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_88%_0%,rgba(16,185,129,0.12),transparent_44%),radial-gradient(ellipse_at_0%_90%,rgba(79,110,247,0.1),transparent_42%)]" />
      <div className="relative grid h-full grid-rows-[auto_1fr_auto] gap-2.5 p-3 md:p-4">
        <div className="grid grid-cols-4 gap-2">
          {[
            ["LCP", "1.2s", "Good"],
            ["INP", "48ms", "Stable"],
            ["Organic", "Intent", "Stay + garden"],
            ["Release", "v2.4", "Live"],
          ].map(([k, v, n]) => (
            <div key={k} className="rounded-xl border border-white bg-white px-2.5 py-2.5 shadow-[0_10px_24px_rgba(15,23,42,0.04)]">
              <p className="text-[8px] tracking-wider text-[#94a3b8] uppercase">{k}</p>
              <p className="mt-0.5 font-display text-base font-bold text-[#111827] md:text-lg">{v}</p>
              <p className="text-[9px] text-emerald-600">{n}</p>
            </div>
          ))}
        </div>

        <div className="grid min-h-0 grid-cols-[1.2fr_0.8fr] gap-2.5">
          <div className="flex min-h-0 flex-col rounded-2xl border border-white bg-white p-3 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-[9px] font-semibold tracking-[0.16em] text-[#94a3b8] uppercase">Requests · 30 days</p>
              <span className="text-[10px] font-semibold text-indigo-500">Direct channel</span>
            </div>
            <LineChart className="mt-2 min-h-0 flex-1" d="M2 24 C16 22, 28 18, 40 16 S62 10, 78 9 S92 7, 98 5" />
            <ul className="mt-1 flex justify-between text-[9px] text-[#94a3b8]">
              <li>W1</li>
              <li>W2</li>
              <li>W3</li>
              <li>W4</li>
            </ul>
          </div>
          <div className="flex min-h-0 flex-col rounded-2xl border border-white bg-white p-3">
            <p className="text-[9px] font-semibold tracking-[0.16em] text-[#94a3b8] uppercase">Funnel</p>
            <ul className="mt-3 flex-1 space-y-2.5">
              {[
                ["Visit", "100%", "100%"],
                ["Room", "41%", "41%"],
                ["Hold", "19%", "19%"],
                ["Request", "12%", "12%"],
              ].map(([l, p, w]) => (
                <li key={l}>
                  <div className="mb-1 flex justify-between text-[11px] font-semibold">
                    <span>{l}</span>
                    <span className="text-[#94a3b8]">{p}</span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-[#eef2f7]">
                    <div className="h-full rounded-full bg-indigo-500" style={{ width: w }} />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-[1fr_1fr] gap-2.5">
          <div className="rounded-2xl border border-white bg-white px-3 py-2.5">
            <p className="text-[9px] font-semibold tracking-[0.16em] text-[#94a3b8] uppercase">Search queries</p>
            <ul className="mt-2 space-y-1 text-[11px]">
              {[
                ["boutique stay garden", "P3 → P1"],
                ["courtyard room weekend", "New"],
              ].map(([q, s]) => (
                <li key={q} className="flex items-center justify-between">
                  <span className="truncate text-[#334155]">{q}</span>
                  <span className="ml-2 shrink-0 text-[10px] font-semibold text-emerald-600">{s}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-white bg-white px-3 py-2.5">
            <p className="text-[9px] font-semibold tracking-[0.16em] text-[#94a3b8] uppercase">After launch</p>
            <ul className="mt-2 grid grid-cols-2 gap-1.5 text-[10px] font-semibold text-[#334155]">
              {["Search console", "Form complete", "CWV watch", "Next slice"].map((x) => (
                <li key={x} className="rounded-lg bg-[#f8faff] px-2 py-1.5">
                  {x}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

const SCENES = [StrategyScene, DesignScene, BuildScene, GrowScene];

export function AboutProcessShowcase({
  eyebrow,
  title,
  body,
  steps,
}: {
  eyebrow: string;
  title: string;
  body: string;
  steps: Step[];
}) {
  const reduce = useReducedMotion();
  const pinRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const userLock = useRef(false);
  const lastScroll = useRef(0);
  const { scrollYProgress } = useScroll({
    target: pinRef,
    offset: ["start 0.42", "end 0.58"],
  });

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    if (reduce) return;
    if (typeof window !== "undefined" && window.matchMedia("(max-width: 1023px)").matches) return;
    if (userLock.current && Math.abs(value - lastScroll.current) < 0.03) return;
    userLock.current = false;
    lastScroll.current = value;
    const next = Math.min(steps.length - 1, Math.max(0, Math.floor(value * steps.length)));
    setActive(next);
  });

  const select = (index: number, lock: boolean) => {
    if (lock) userLock.current = true;
    setActive(index);
  };

  const Scene = SCENES[active] ?? StrategyScene;

  return (
    <section className="relative overflow-hidden border-t border-[#eef2f7] bg-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.45]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(79,110,247,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(79,110,247,0.06) 1px, transparent 1px)",
          backgroundSize: "52px 52px",
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_78%_12%,rgba(79,110,247,0.11),transparent_44%),radial-gradient(ellipse_at_8%_88%,rgba(139,92,246,0.07),transparent_40%)]" />

      <div className="container-page relative pt-20 pb-8 md:pt-28">
        <p className="mb-4 text-xs font-semibold tracking-[0.22em] text-brand-gradient uppercase">{eyebrow}</p>
        <h2 className="max-w-[16ch] font-display text-[clamp(1.85rem,3.6vw,3rem)] font-bold leading-[1.1] tracking-[-0.03em] text-[#111827]">
          {title}
        </h2>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-[#475569]">{body}</p>
      </div>

      <div ref={pinRef} className="relative lg:h-[240vh]">
        <div className="container-page pb-20 lg:sticky lg:top-[calc(var(--nav-h)+0.75rem)] lg:flex lg:h-[calc(100svh-var(--nav-h)-1.5rem)] lg:items-center lg:pb-10">
          <div className="grid w-full items-center gap-8 lg:grid-cols-[minmax(0,0.36fr)_minmax(0,0.64fr)] lg:gap-10">
            <nav aria-label={eyebrow} className="relative">
              <div className="absolute top-4 bottom-4 left-[15px] hidden w-px bg-[#e8ecf4] lg:block" aria-hidden />
              <div
                className="absolute top-4 left-[15px] hidden w-px bg-brand-gradient lg:block"
                style={{ height: `calc(${((active + 1) / Math.max(steps.length, 1)) * 100}% - 2rem)` }}
                aria-hidden
              />
              <ol className="grid grid-cols-2 gap-2 lg:grid-cols-1 lg:gap-1" role="tablist">
                {steps.map((step, index) => {
                  const on = index === active;
                  return (
                    <li key={step.num}>
                      <button
                        type="button"
                        role="tab"
                        aria-selected={on}
                        onClick={() => select(index, true)}
                        onMouseEnter={() => select(index, false)}
                        className={cn(
                          "w-full rounded-2xl px-4 py-4 text-left transition-colors duration-300",
                          on ? "bg-white shadow-[0_16px_40px_-20px_rgba(79,110,247,0.35)]" : "hover:bg-white/70",
                        )}
                      >
                        <span
                          className={cn(
                            "font-mono text-[11px] font-semibold tracking-[0.2em]",
                            on ? "text-brand-gradient" : "text-[#94a3b8]",
                          )}
                        >
                          {step.num}
                        </span>
                        <span
                          className={cn(
                            "mt-1 block font-display text-xl font-bold tracking-tight uppercase md:text-2xl",
                            on ? "text-[#111827]" : "text-[#64748b]",
                          )}
                        >
                          {step.title}
                        </span>
                        <span className={cn("mt-2 hidden text-sm leading-relaxed lg:block", on ? "text-[#475569]" : "text-[#94a3b8]")}>
                          {step.body}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ol>
            </nav>

            <div
              className="relative h-[420px] overflow-hidden rounded-[1.75rem] border border-[#e8ecf4] bg-white shadow-[0_24px_60px_-28px_rgba(15,23,42,0.22)] md:h-[500px] lg:h-[min(580px,calc(100svh-var(--nav-h)-6rem))]"
              role="tabpanel"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  className="h-full w-full"
                  initial={reduce ? false : { opacity: 0, y: 14, scale: 0.985 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={reduce ? undefined : { opacity: 0, y: -10, scale: 0.99 }}
                  transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Scene />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
