"use client";

import type { ReactNode } from "react";
import { useId } from "react";
import { motion } from "framer-motion";
import { CountUp } from "@/components/demos/count-up";
import { cn } from "@/lib/utils";

export function TechChip({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "rounded-full border border-white/80 bg-white/88 px-2.5 py-1 font-mono text-[9px] font-semibold tracking-[0.14em] text-[#334155] uppercase shadow-[0_10px_24px_rgba(15,23,42,0.08)] backdrop-blur-md",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function LineChart({
  className,
  d = "M2 26 C18 24, 30 12, 48 14 S78 8, 98 6",
  duration = 1.8,
  delay = 0,
}: {
  className?: string;
  d?: string;
  duration?: number;
  delay?: number;
}) {
  const gid = useId();
  return (
    <svg viewBox="0 0 100 32" className={className} aria-hidden>
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6366f1" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={`${d} L100 32 L0 32 Z`} fill={`url(#${gid})`} />
      <motion.path
        d={d}
        fill="none"
        stroke="#4f6ef7"
        strokeWidth="1.8"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      />
    </svg>
  );
}

export function BarChart({ values = [42, 68, 54, 88, 72, 96] }: { values?: number[] }) {
  return (
    <div className="flex h-full items-end gap-[3px]">
      {values.map((v, i) => (
        <motion.span
          key={i}
          className="flex-1 rounded-[2px] bg-gradient-to-t from-indigo-500 to-violet-400"
          initial={{ height: "8%" }}
          animate={{ height: `${v}%` }}
          transition={{ duration: 0.95, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
        />
      ))}
    </div>
  );
}

export function OrbitWebsite({
  pieces = 4,
  className,
}: {
  pieces?: number;
  className?: string;
}) {
  return (
    <div data-scrollpane className={cn("flex h-full min-h-full flex-col bg-white text-[#111827]", className)}>
      <header className="flex shrink-0 items-center justify-between px-2.5 py-1.5">
        <span className="font-display text-[8px] font-bold tracking-tight">Orbit</span>
        {pieces >= 1 ? (
          <motion.nav
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-1.5 text-[6px] font-medium text-[#64748b]"
          >
            <span>Platform</span>
            <span>Customers</span>
            <span>Pricing</span>
            <span className="rounded-full bg-[#111827] px-1.5 py-0.5 text-white">Get access</span>
          </motion.nav>
        ) : (
          <span className="h-3 w-16 rounded-full bg-[#eef2f7]" />
        )}
      </header>

      <section className="grid shrink-0 grid-cols-[1.05fr_0.95fr] gap-2 px-2.5 pb-1.5">
        <div>
          {pieces >= 2 ? (
            <>
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="font-display text-[11px] leading-[1.12] font-bold tracking-tight"
              >
                Product infrastructure for teams that ship
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.12 }}
                className="mt-1 text-[6px] leading-relaxed text-[#64748b]"
              >
                Releases, access, and analytics in one operating surface.
              </motion.p>
              <motion.span
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.22 }}
                className="mt-1.5 inline-flex rounded-full bg-[#111827] px-2 py-0.5 text-[6px] font-semibold text-white"
              >
                Start a workspace
              </motion.span>
            </>
          ) : null}
        </div>
        <div className="relative min-h-[46px] overflow-hidden rounded-md bg-[#0b1020] p-1.5">
          {pieces >= 2 ? (
            <>
              <p className="text-[5.5px] font-semibold tracking-wider text-indigo-300 uppercase">Revenue</p>
              <p className="font-display text-[10px] font-bold text-white">
                <CountUp to={142800} prefix="₺" duration={2.1} delay={0.35} />
              </p>
              <LineChart className="mt-0.5 h-7 w-full" />
            </>
          ) : null}
        </div>
      </section>

      {pieces >= 3 ? (
        <div className="grid shrink-0 grid-cols-4 gap-1 px-2.5">
          {[
            ["Users", "12.4k"],
            ["Conv.", "4.8%"],
            ["Sessions", "86k"],
            ["Sales", "₺94k"],
          ].map(([l, v]) => (
            <div key={l} className="rounded-md bg-[#f4f6ff] px-1 py-1">
              <p className="text-[5.5px] text-[#94a3b8]">{l}</p>
              <p className="font-display text-[8px] font-bold">{v}</p>
            </div>
          ))}
        </div>
      ) : null}

      {pieces >= 4 ? (
        <div className="mt-1.5 grid min-h-0 flex-1 grid-cols-[1.2fr_0.8fr] gap-1 px-2.5 pb-2">
          <div className="flex min-h-0 flex-col rounded-md bg-[#f8faff] p-1.5">
            <p className="text-[5.5px] font-semibold tracking-wider text-[#94a3b8] uppercase">Performance</p>
            <div className="mt-1 min-h-0 flex-1">
              <BarChart />
            </div>
          </div>
          <div className="space-y-1">
            {[
              ["Release 14.2", "Ready"],
              ["Access review", "3 pending"],
              ["Incident log", "Clear"],
            ].map(([t, s]) => (
              <div key={t} className="rounded-md border border-[#eef2f7] px-1.5 py-1">
                <p className="text-[6px] font-semibold">{t}</p>
                <p className="text-[5.5px] text-[#64748b]">{s}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="min-h-0 flex-1 bg-[#f8faff]" />
      )}
    </div>
  );
}

function PhoneIsland() {
  return <div className="mx-auto mt-1 h-2.5 w-10 rounded-full bg-[#0c1018]" />;
}

function PhoneTabs({ active }: { active: "home" | "analytics" | "profile" }) {
  return (
    <div className="mt-auto grid grid-cols-3 border-t border-[#e8ecf4] bg-white/95 px-1 py-1 text-center text-[6px] font-semibold">
      {(["home", "analytics", "profile"] as const).map((tab) => (
        <span key={tab} className={tab === active ? "text-indigo-600" : "text-[#94a3b8]"}>
          {tab === "home" ? "Home" : tab === "analytics" ? "Analytics" : "Activity"}
        </span>
      ))}
    </div>
  );
}

export function OrbitPhoneHome() {
  return (
    <div className="flex h-full flex-col bg-[#f5f7ff] text-[#111827]">
      <PhoneIsland />
      <div className="flex min-h-0 flex-1 flex-col px-2 pt-2">
        <p className="text-[7px] text-[#94a3b8]">Orbit · Today</p>
        <p className="font-display text-[14px] font-bold">Focus 72</p>
        <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-indigo-100">
          <motion.div
            className="h-full origin-left rounded-full bg-indigo-500"
            initial={{ scaleX: 0.18 }}
            animate={{ scaleX: 0.72 }}
            transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
        <div className="mt-1.5 grid grid-cols-2 gap-1">
          <div className="rounded-lg bg-white p-1.5 shadow-sm">
            <p className="text-[6px] text-[#94a3b8]">Deep work</p>
            <p className="text-[9px] font-bold">90 min</p>
          </div>
          <div className="rounded-lg bg-white p-1.5 shadow-sm">
            <p className="text-[6px] text-[#94a3b8]">Deploys</p>
            <p className="text-[9px] font-bold">4 live</p>
          </div>
        </div>
        <div className="mt-1.5 min-h-0 flex-1 rounded-lg bg-white p-1.5 shadow-sm">
          <p className="text-[6.5px] font-semibold">Sessions</p>
          <LineChart className="h-full max-h-14 w-full" />
        </div>
      </div>
      <PhoneTabs active="home" />
    </div>
  );
}

export function OrbitPhoneAnalytics() {
  return (
    <div className="flex h-full flex-col bg-white text-[#111827]">
      <PhoneIsland />
      <div className="flex min-h-0 flex-1 flex-col px-2 pt-2">
        <p className="font-display text-[11px] font-bold">Analytics</p>
        <p className="font-display text-[16px] font-bold text-indigo-600">
          <CountUp to={12.4} suffix="k" />
        </p>
        <p className="text-[6.5px] text-emerald-600">Users · +18% this week</p>
        <LineChart className="mt-1.5 w-full" />
        <div className="mt-1.5 min-h-0 flex-1">
          <BarChart values={[40, 62, 48, 80, 70, 94, 76]} />
        </div>
        <div className="mt-1 grid grid-cols-2 gap-1 pb-1">
          <div className="rounded-md bg-[#f4f6ff] px-1.5 py-1 text-[7px] font-semibold">Conv. 4.8%</div>
          <div className="rounded-md bg-[#f4f6ff] px-1.5 py-1 text-[7px] font-semibold">Sales ₺94k</div>
        </div>
      </div>
      <PhoneTabs active="analytics" />
    </div>
  );
}

export function OrbitPhoneProfile() {
  return (
    <div className="flex h-full flex-col bg-[#0f172a] text-white">
      <PhoneIsland />
      <div className="flex min-h-0 flex-1 flex-col items-center px-2 pt-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-500 text-[10px] font-bold">
          MC
        </div>
        <p className="mt-1.5 font-display text-[12px] font-bold">Maya Chen</p>
        <p className="text-[7px] text-white/50">Product lead</p>
        <svg viewBox="0 0 64 64" className="mt-2 h-16 w-16" aria-hidden>
          <circle cx="32" cy="32" r="24" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="6" />
          <motion.circle
            cx="32"
            cy="32"
            r="24"
            fill="none"
            stroke="#818cf8"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray="150"
            initial={{ strokeDashoffset: 150 }}
            animate={{ strokeDashoffset: 38 }}
            transition={{ duration: 1.2 }}
            transform="rotate(-90 32 32)"
          />
        </svg>
        <p className="font-display text-sm font-bold">72%</p>
        <p className="text-[7px] text-white/50">Weekly activity</p>
        <div className="mt-2 w-full rounded-lg bg-white/8 px-2 py-1.5 text-[7px]">Deep work · 90 min block</div>
      </div>
      <PhoneTabs active="profile" />
    </div>
  );
}

export function OrbitPhoneDetail() {
  return (
    <div className="flex h-full flex-col bg-white text-[#111827]">
      <PhoneIsland />
      <div className="flex min-h-0 flex-1 flex-col px-2 pt-2">
        <p className="text-[7px] text-[#94a3b8]">← Session</p>
        <p className="mt-1 font-display text-[12px] font-bold">Deep work</p>
        <p className="text-[7px] text-[#64748b]">90 min focus block</p>
        <div className="mt-2 rounded-lg bg-[#f5f7ff] p-2">
          <p className="text-[6px] text-[#94a3b8]">Progress</p>
          <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-indigo-100">
            <motion.div className="h-full origin-left rounded-full bg-indigo-500" initial={{ scaleX: 0 }} animate={{ scaleX: 0.72 }} transition={{ duration: 1.1 }} />
          </div>
        </div>
        <div className="mt-2 rounded-lg border border-[#eef2f7] px-2 py-1.5 text-[7px]">
          Notes committed · 4 files
        </div>
        <div className="mt-auto mb-2 rounded-full bg-[#111827] py-1.5 text-center text-[8px] font-semibold text-white">
          End session
        </div>
      </div>
      <PhoneTabs active="home" />
    </div>
  );
}

export const PRODUCT_CODE = [
  { c: "kw", t: "export default " },
  { c: "fn", t: "function " },
  { c: "id", t: "Product" },
  { c: "op", t: "() {" },
  { c: "nl", t: "\n" },
  { c: "kw", t: "  return (" },
  { c: "nl", t: "\n" },
  { c: "tg", t: "    <main>" },
  { c: "nl", t: "\n" },
  { c: "tg", t: "      <Hero />" },
  { c: "nl", t: "\n" },
  { c: "tg", t: "      <Features />" },
  { c: "nl", t: "\n" },
  { c: "tg", t: "      <Projects />" },
  { c: "nl", t: "\n" },
  { c: "tg", t: "    </main>" },
  { c: "nl", t: "\n" },
  { c: "op", t: "  );" },
  { c: "nl", t: "\n" },
  { c: "op", t: "}" },
];

const CODE_COLOR: Record<string, string> = {
  kw: "text-[#c084fc]",
  fn: "text-[#38bdf8]",
  id: "text-[#fbbf24]",
  tg: "text-[#86efac]",
  op: "text-[#cbd5e1]",
  nl: "",
};

export function CodeLines({ visible = 20 }: { visible?: number }) {
  const tokens = PRODUCT_CODE.slice(0, visible);
  return (
    <pre className="font-mono text-[7px] leading-[1.55] whitespace-pre">
      {tokens.map((tok, i) =>
        tok.c === "nl" ? (
          "\n"
        ) : (
          <span key={i} className={CODE_COLOR[tok.c]}>
            {tok.t}
          </span>
        ),
      )}
      <motion.span
        className="inline-block h-2.5 w-px bg-indigo-300 align-middle"
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.7, repeat: Infinity }}
      />
    </pre>
  );
}

export function VsCodeWorkspace({ lines = 20, preview = 3 }: { lines?: number; preview?: number }) {
  return (
    <div className="flex h-full bg-[#0b1220] text-[#e2e8f0]">
      <aside className="hidden w-[22%] border-r border-white/8 bg-[#080d18] p-1.5 sm:block">
        <p className="text-[6px] tracking-[0.16em] text-white/35 uppercase">Explorer</p>
        <div className="mt-1.5 space-y-0.5 text-[6.5px] text-white/55">
          <p className="text-indigo-300">app</p>
          <p className="pl-1.5">page.tsx</p>
          <p className="pl-1.5 text-white">product.tsx</p>
          <p className="text-indigo-300">components</p>
          <p className="pl-1.5">hero.tsx</p>
        </div>
      </aside>
      <div className="min-w-0 flex-1 border-r border-white/8 p-2">
        <p className="mb-1 text-[6px] text-white/35">product.tsx · TypeScript React</p>
        <CodeLines visible={lines} />
      </div>
      <div className="flex w-[42%] flex-col bg-white text-[#111827]">
        <div className="flex shrink-0 items-center justify-between border-b border-[#eef2f7] px-2 py-1">
          <span className="text-[6.5px] font-semibold">Live preview</span>
          <span className="rounded-full bg-emerald-50 px-1.5 py-0.5 text-[6px] font-semibold text-emerald-700">
            {lines >= 16 ? "Saved · localhost:3000" : "localhost:3000"}
          </span>
        </div>
        <div className="min-h-0 flex-1 overflow-hidden">
          <OrbitWebsite pieces={Math.min(4, preview + 1)} className="h-full" />
        </div>
      </div>
    </div>
  );
}

const AI_STEPS = ["New Lead", "AI Analysis", "Qualified 94%", "CRM Updated", "Email Generated", "Completed"];

export function AiWorkspaceUi({ phase = 5 }: { phase?: number }) {
  const prompts = [
    "Qualify inbound lead from Acme",
    "Score fit, pull CRM history…",
    "Write CRM note + follow-up",
  ];
  const prompt = prompts[Math.min(prompts.length - 1, Math.floor(phase / 2))];

  return (
    <div className="flex h-full bg-[#f7f8fc] text-[#111827]">
      <aside className="w-[28%] border-r border-[#e8ecf4] bg-white p-1.5">
        <p className="font-display text-[8px] font-bold">Northline AI</p>
        <div className="mt-1.5 space-y-0.5 text-[6.5px]">
          {["Conversations", "Automations", "Data", "Integrations"].map((item, i) => (
            <div
              key={item}
              className={`rounded-md px-1.5 py-1 font-semibold ${i === 1 ? "bg-indigo-50 text-indigo-600" : "text-[#64748b]"}`}
            >
              {item}
            </div>
          ))}
        </div>
      </aside>
      <div className="flex min-w-0 flex-1 flex-col p-2">
        <div className="rounded-md border border-[#e8ecf4] bg-white px-2 py-1.5">
          <p className="text-[6px] tracking-wider text-[#94a3b8] uppercase">Prompt</p>
          <p className="font-mono text-[7.5px] text-[#111827]">{prompt}</p>
        </div>
        <div className="mt-1.5 grid min-h-0 flex-1 grid-cols-3 gap-1">
          {AI_STEPS.map((s, i) => (
            <div
              key={s}
              className={`flex flex-col justify-between rounded-md px-1.5 py-1.5 ${
                phase >= i ? "bg-indigo-600 text-white" : "bg-white text-[#94a3b8] ring-1 ring-[#e8ecf4]"
              }`}
            >
              <p className="text-[5.5px] opacity-70">{String(i + 1).padStart(2, "0")}</p>
              <p className="text-[6.5px] font-semibold">{s}</p>
            </div>
          ))}
        </div>
        <div className="mt-1.5 grid grid-cols-2 gap-1">
          <div className="rounded-md bg-white p-1.5 ring-1 ring-[#eef2f7]">
            <p className="text-[6px] text-[#94a3b8]">CRM</p>
            <p className="text-[8px] font-bold">{phase >= 3 ? "Acme · Qualified 94%" : "Waiting…"}</p>
          </div>
          <div className="rounded-md bg-white p-1.5 ring-1 ring-[#eef2f7]">
            <p className="text-[6px] text-[#94a3b8]">Email</p>
            <p className="text-[8px] font-bold">{phase >= 4 ? "Sent 09:14" : "Queued"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ShopWebsite({ step = 3 }: { step?: number }) {
  return (
    <div className="relative h-full overflow-hidden bg-[#faf8f5] text-[#1c1917]">
      <header className="flex items-center justify-between px-3 py-1.5">
        <span className="font-display text-[9px] font-bold tracking-[0.18em]">ATELIER</span>
        <span className="text-[7px]">Bag {step >= 3 ? 1 : 0}</span>
      </header>
      <div className="grid h-[calc(100%-22px)] grid-cols-2 gap-1 px-2 pb-2">
        <div className="overflow-hidden rounded-md">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <motion.img
            src="/images/campaign/atelier-campaign.jpg"
            alt=""
            className="h-full w-full object-cover"
            animate={{ scale: step === 0 ? 1.04 : 1, rotate: step === 0 ? 0.6 : 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
        <div className="flex flex-col py-1">
          <p className="text-[7px] tracking-[0.16em] text-[#a8a29e] uppercase">Arc lamp</p>
          <p className="font-display text-[13px] font-bold">₺890</p>
          <div className="mt-1 flex gap-1">
            {["Brass", "Ceramic", "Linen"].map((v, i) => (
              <span
                key={v}
                className={`rounded-full px-1.5 py-0.5 text-[6px] font-semibold ${
                  (step === 0 ? 0 : step === 1 ? 1 : 2) === i ? "bg-[#1c1917] text-white" : "bg-white text-[#78716c]"
                }`}
              >
                {v}
              </span>
            ))}
          </div>
          <div
            className={`mt-auto rounded-full py-1 text-center text-[7px] font-semibold ${
              step >= 2 ? "bg-[#1c1917] text-white" : "bg-white text-[#1c1917]"
            }`}
          >
            {step >= 3 ? "Added · Bag 1" : "Add to cart"}
          </div>
        </div>
      </div>
      {step >= 4 ? (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute right-2 bottom-2 w-[46%] rounded-md bg-white p-2 shadow-[0_12px_24px_rgba(28,25,23,0.12)]"
        >
          <p className="text-[6px] tracking-wider text-[#a8a29e] uppercase">Mini cart</p>
          <p className="text-[8px] font-semibold">Arc lamp · ₺890</p>
          <p className="text-[7px] text-[#78716c]">Qty 1</p>
        </motion.div>
      ) : null}
    </div>
  );
}

export function ShopPhone({ step = 3 }: { step?: number }) {
  return (
    <div className="flex h-full flex-col overflow-hidden bg-white px-2.5 pt-6 text-[#1c1917]">
      <p className="text-[8px] tracking-[0.16em] text-[#a8a29e] uppercase">Atelier</p>
      <p className="font-display text-[12px] font-bold">Arc lamp</p>
      <div className="mt-1.5 h-16 overflow-hidden rounded-lg">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/campaign/atelier-campaign.jpg" alt="" className="h-full w-full object-cover" />
      </div>
      <p className="mt-1.5 font-display text-sm font-bold">₺890</p>
      <div className="mt-auto mb-3 rounded-full bg-[#1c1917] py-1.5 text-center text-[8px] font-semibold text-white">
        {step >= 3 ? "Bag 1" : "Add to cart"}
      </div>
    </div>
  );
}

export function AtlasWebsite() {
  return (
    <div className="flex h-full flex-col overflow-hidden bg-white text-[#111827]">
      <header className="flex items-center justify-between border-b border-[#eef2f7] px-3 py-1.5">
        <span className="font-display text-[9px] font-bold tracking-tight">Atlas Counsel</span>
        <nav className="flex items-center gap-2 text-[6.5px] font-medium text-[#64748b]">
          <span>Practice</span>
          <span>People</span>
          <span>Insights</span>
          <span className="rounded-full bg-[#111827] px-1.5 py-0.5 text-white">Consult</span>
        </nav>
      </header>
      <div className="grid min-h-0 flex-1 grid-cols-[1.05fr_0.95fr]">
        <div className="flex flex-col justify-center px-3 py-2">
          <p className="text-[5.5px] font-semibold tracking-[0.18em] text-indigo-500 uppercase">Istanbul · London</p>
          <p className="mt-1 font-display text-[12px] leading-[1.12] font-bold tracking-tight">
            Counsel for modern enterprise
          </p>
          <p className="mt-1 text-[6.5px] leading-relaxed text-[#64748b]">
            Corporate, disputes, and data advisory — built as a digital-first practice.
          </p>
          <span className="mt-2 inline-flex w-fit rounded-full bg-[#111827] px-2 py-0.5 text-[6px] font-semibold text-white">
            Book a call
          </span>
        </div>
        <div className="relative min-h-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/scenes/atlas-interior.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />
        </div>
      </div>
      <div className="grid grid-cols-3 border-t border-[#eef2f7]">
        {[
          ["Corporate", "M&A · Governance"],
          ["Disputes", "Arbitration"],
          ["Data", "Privacy · AI"],
        ].map(([t, d]) => (
          <div key={t} className="border-r border-[#eef2f7] px-2 py-1.5 last:border-r-0">
            <p className="text-[7px] font-semibold">{t}</p>
            <p className="text-[5.5px] text-[#94a3b8]">{d}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function AtlasPhone() {
  return (
    <div className="flex h-full flex-col overflow-hidden bg-white text-[#111827]">
      <p className="px-2.5 pt-7 font-display text-[10px] font-bold">Atlas</p>
      <p className="px-2.5 text-[7px] text-[#64748b]">Counsel</p>
      <div className="mx-2 mt-2 h-[42%] overflow-hidden rounded-xl">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/scenes/atlas-interior.jpg" alt="" className="h-full w-full object-cover" />
      </div>
      <div className="mt-2 space-y-1 px-2.5">
        {["Practice", "People", "Insights"].map((x) => (
          <div key={x} className="rounded-lg bg-[#f8faff] px-2 py-1.5 text-[8px] font-semibold">
            {x}
          </div>
        ))}
      </div>
      <div className="mx-2.5 mt-auto mb-3 rounded-full bg-[#111827] py-1.5 text-center text-[8px] font-semibold text-white">
        Consult
      </div>
    </div>
  );
}

export function ReviewWebsite() {
  return (
    <div className="flex h-full flex-col overflow-hidden bg-[#111827] text-white">
      <header className="flex items-center justify-between px-3 py-1.5">
        <span className="font-display text-[9px] font-bold">North Review</span>
        <span className="text-[6px] tracking-[0.16em] text-white/40 uppercase">Vol. 04</span>
      </header>
      <div className="min-h-0 flex-1 px-3">
        <p className="text-[6px] tracking-[0.18em] text-indigo-300 uppercase">Editorial</p>
        <p className="mt-1 font-display text-[13px] leading-[1.1] font-bold">Making products that feel inevitable</p>
        <p className="mt-2 text-[6.5px] leading-relaxed text-white/55">
          Studio notes on craft, systems, and the quiet work between brief and launch.
        </p>
        <div className="mt-3 grid grid-cols-3 gap-1">
          {["Culture", "Product", "Craft"].map((x, i) => (
            <div key={x} className="rounded-md bg-white/8 px-1.5 py-2">
              <p className="text-[5.5px] text-white/35">0{i + 1}</p>
              <p className="text-[7px] font-semibold">{x}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between border-t border-white/10 px-3 py-1.5 text-[6px] text-white/40">
        <span>TR / EN</span>
        <span>Read issue →</span>
      </div>
    </div>
  );
}
