import { cn } from "@/lib/utils";

const micro = "text-[6.5px] leading-snug md:text-[7.5px]";

function AreaChart({ className, gid = "nl-area" }: { className?: string; gid?: string }) {
  return (
    <svg viewBox="0 0 260 72" className={cn("h-full w-full", className)} aria-hidden>
      <defs>
        <linearGradient id={`${gid}-fill`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6366f1" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d="M0 54 C28 52, 44 38, 70 36 S110 40, 138 24 S186 18, 214 14 S240 22, 260 16 L260 72 L0 72 Z" fill={`url(#${gid}-fill)`} />
      <path d="M0 54 C28 52, 44 38, 70 36 S110 40, 138 24 S186 18, 214 14 S240 22, 260 16" fill="none" stroke="#4f6ef7" strokeWidth="2.2" />
      <circle cx="214" cy="14" r="3" fill="#8b5cf6" />
    </svg>
  );
}

function Bars() {
  const vals = [42, 58, 49, 72, 63, 86, 70, 92, 78, 88];
  return (
    <div className="flex h-full items-end gap-[3px]">
      {vals.map((h, i) => (
        <div
          key={i}
          className="flex-1 rounded-[3px] bg-indigo-400/80"
          style={{ height: `${h}%`, opacity: 0.45 + (i / vals.length) * 0.55 }}
        />
      ))}
    </div>
  );
}

export function UiOrbitWeb() {
  const rows = [
    ["ORB-2041", "Northline Cloud", "Live", "99.98%"],
    ["ORB-2038", "Harbor API", "Watch", "99.2%"],
    ["ORB-2033", "Ledger Core", "Live", "99.99%"],
  ];
  return (
    <div className={cn("flex h-full bg-white", micro)}>
      <aside className="flex w-[17%] flex-col gap-1.5 border-r border-[#eef2f7] bg-[#f8faff] p-2">
        <div className="mb-1 flex items-center gap-1">
          <span className="flex h-4 w-4 items-center justify-center rounded-md bg-brand-gradient text-[7px] font-bold text-white">O</span>
          <span className="font-display text-[9px] font-bold text-[#111827]">Orbit</span>
        </div>
        {["Overview", "Systems", "Releases", "Access", "Audit"].map((l, i) => (
          <p key={l} className={cn("rounded-md px-1.5 py-1", i === 0 ? "bg-white font-semibold text-indigo-600 shadow-sm" : "text-[#94a3b8]")}>
            {l}
          </p>
        ))}
      </aside>
      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex items-center justify-between border-b border-[#f1f5f9] px-3 py-1.5">
          <p className="font-display text-[11px] font-bold text-[#111827]">Command center</p>
          <span className="rounded-full bg-indigo-50 px-2 py-0.5 text-[7px] font-semibold text-indigo-600">Production</span>
        </header>
        <div className="grid min-h-0 flex-1 grid-cols-[1.15fr_0.85fr] gap-2 p-2">
          <div className="flex min-h-0 flex-col">
            <div className="grid grid-cols-4 gap-1.5">
              {[
                ["Uptime", "99.99%", "30d"],
                ["Deploys", "148", "+12"],
                ["P95", "182ms", "-8%"],
                ["Errors", "0.04%", "SLO"],
              ].map(([k, v, s]) => (
                <div key={k} className="rounded-lg border border-[#eef2f7] bg-[#fbfcff] px-1.5 py-1">
                  <p className="text-[6px] tracking-wide text-[#94a3b8] uppercase">{k}</p>
                  <p className="font-display text-[10px] font-bold text-[#111827]">{v}</p>
                  <p className="text-[6px] text-indigo-500">{s}</p>
                </div>
              ))}
            </div>
            <div className="mt-1.5 min-h-0 flex-1 rounded-lg border border-[#eef2f7] bg-white p-1.5">
              <p className="mb-1 text-[6px] font-semibold tracking-wide text-[#94a3b8] uppercase">Throughput</p>
              <AreaChart className="h-[72%]" gid="orbit-throughput" />
            </div>
            <div className="mt-1.5 overflow-hidden rounded-lg border border-[#eef2f7]">
              {rows.map((r) => (
                <div key={r[0]} className="flex items-center gap-2 border-b border-[#f8fafc] px-2 py-[3px] last:border-0">
                  <span className="w-10 font-mono text-[6px] text-[#94a3b8]">{r[0]}</span>
                  <span className="flex-1 truncate text-[#334155]">{r[1]}</span>
                  <span className="rounded-full bg-emerald-50 px-1.5 py-[1px] text-[6px] font-medium text-emerald-700">{r[2]}</span>
                  <span className="font-semibold text-[#111827]">{r[3]}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex min-h-0 flex-col rounded-xl bg-[linear-gradient(165deg,#eef2ff_0%,#f8faff_48%,#ffffff_100%)] p-2 ring-1 ring-indigo-100">
            <p className="text-[6px] font-semibold tracking-[0.16em] text-indigo-400 uppercase">Platform</p>
            <p className="mt-1 font-display text-[12px] font-bold tracking-tight text-[#111827]">
              The operating system for modern teams
            </p>
            <p className="mt-1 text-[7px] leading-relaxed text-[#64748b]">
              Observability, release control, and access in one product surface.
            </p>
            <div className="mt-2 flex gap-1">
              <span className="rounded-full bg-[#111827] px-2 py-1 text-[6px] font-semibold text-white">Get access</span>
              <span className="rounded-full bg-white px-2 py-1 text-[6px] font-medium text-indigo-600 ring-1 ring-indigo-100">Docs</span>
            </div>
            <div className="mt-auto grid grid-cols-3 gap-1 pt-2">
              {["Observability", "Automations", "Access"].map((f) => (
                <div key={f} className="rounded-lg bg-white/90 px-1 py-1 ring-1 ring-[#e8ecf4]">
                  <p className="font-semibold text-[#111827]">{f}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function UiOrbitMobile() {
  return (
    <div className={cn("flex h-full flex-col bg-[#f8faff] px-2.5 pb-3 pt-7", micro)}>
      <div className="flex items-center justify-between">
        <p className="font-display text-[11px] font-bold text-[#111827]">Orbit</p>
        <span className="h-5 w-5 rounded-full bg-brand-gradient" />
      </div>
      <p className="mt-2 text-[7px] text-[#94a3b8]">System health</p>
      <p className="font-display text-[18px] font-bold tracking-tight text-[#111827]">99.99%</p>
      <div className="mt-2 grid grid-cols-2 gap-1.5">
        {[
          ["Deploys", "12"],
          ["Alerts", "0"],
        ].map(([k, v]) => (
          <div key={k} className="rounded-2xl bg-white p-2 ring-1 ring-[#e8ecf4]">
            <p className="text-[#94a3b8]">{k}</p>
            <p className="font-display text-[13px] font-bold text-[#111827]">{v}</p>
          </div>
        ))}
      </div>
      <div className="mt-2 min-h-0 flex-1 space-y-1.5">
        {["Release 2.4 shipped", "SLO recovered", "Access review"].map((x, i) => (
          <div key={x} className="rounded-2xl bg-white px-2 py-1.5 ring-1 ring-[#e8ecf4]">
            <p className="font-semibold text-[#111827]">{x}</p>
            <p className="text-[6px] text-[#94a3b8]">{i === 0 ? "2m ago" : "Today"}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function UiLumenHome() {
  return (
    <div className={cn("flex h-full flex-col bg-[#f7f8ff] px-2.5 pb-3 pt-7", micro)}>
      <p className="text-[7px] text-[#94a3b8]">Good morning</p>
      <p className="font-display text-[13px] font-bold text-[#111827]">Today’s focus</p>
      <div className="mx-auto mt-2 flex h-[34%] w-[62%] items-center justify-center">
        <svg viewBox="0 0 100 100" className="h-full w-full" aria-hidden>
          <circle cx="50" cy="50" r="36" fill="none" stroke="#e0e7ff" strokeWidth="8" />
          <circle
            cx="50"
            cy="50"
            r="36"
            fill="none"
            stroke="#4f6ef7"
            strokeWidth="8"
            strokeDasharray="170 226"
            strokeLinecap="round"
            transform="rotate(-90 50 50)"
          />
          <text x="50" y="48" textAnchor="middle" fill="#111827" fontSize="15" fontWeight="700">
            72
          </text>
          <text x="50" y="60" textAnchor="middle" fill="#64748b" fontSize="6">
            score
          </text>
        </svg>
      </div>
      <div className="mt-1 space-y-1.5">
        {[
          ["Deep work", "90m · 08:30"],
          ["Walk", "4.2 km"],
          ["Recovery", "Sleep 7h"],
        ].map(([t, d]) => (
          <div key={t} className="flex items-center justify-between rounded-2xl bg-white px-2 py-1.5 ring-1 ring-indigo-100/80">
            <span className="font-semibold text-[#111827]">{t}</span>
            <span className="text-[#64748b]">{d}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function UiLumenAnalytics() {
  return (
    <div className={cn("flex h-full flex-col bg-white px-2.5 pb-3 pt-7", micro)}>
      <p className="font-display text-[12px] font-bold text-[#111827]">Analytics</p>
      <div className="mt-2 grid grid-cols-3 gap-1">
        {[["12.4k", "steps"], ["7.2h", "sleep"], ["+18%", "week"]].map(([n, l]) => (
          <div key={l} className="rounded-xl bg-[#f8faff] py-2 text-center">
            <p className="font-display text-[11px] font-bold text-indigo-600">{n}</p>
            <p className="text-[6px] text-[#94a3b8]">{l}</p>
          </div>
        ))}
      </div>
      <div className="mt-2 h-[28%] rounded-xl bg-[#f8faff] px-2 pt-2">
        <AreaChart gid="lumen-week" />
      </div>
      <div className="mt-2 min-h-0 flex-1 rounded-xl bg-[#f8faff] p-2">
        <Bars />
      </div>
    </div>
  );
}

export function UiLumenActivity() {
  return (
    <div className={cn("flex h-full flex-col bg-[#f8faff] px-2.5 pb-3 pt-7", micro)}>
      <p className="font-display text-[12px] font-bold text-[#111827]">Activity</p>
      {[
        ["08:12", "Commute", "24 min"],
        ["09:40", "Deep work", "Block"],
        ["13:10", "Walk", "1.8 km"],
        ["19:20", "Recovery", "Wind down"],
      ].map(([t, n, m]) => (
        <div key={t} className="mt-1.5 flex items-center gap-2 rounded-2xl bg-white px-2 py-1.5 ring-1 ring-[#e8ecf4]">
          <span className="w-8 font-mono text-[6px] text-indigo-400">{t}</span>
          <span className="flex-1 font-semibold text-[#111827]">{n}</span>
          <span className="text-[#94a3b8]">{m}</span>
        </div>
      ))}
    </div>
  );
}

export function UiLumenDetail() {
  return (
    <div className={cn("flex h-full flex-col bg-white px-2.5 pb-3 pt-7", micro)}>
      <p className="text-[7px] text-[#94a3b8]">Session</p>
      <p className="font-display text-[13px] font-bold text-[#111827]">Deep work</p>
      <div className="mt-2 rounded-2xl bg-[#f8faff] p-2.5 ring-1 ring-indigo-100">
        <p className="text-[7px] text-[#64748b]">Focus block</p>
        <p className="font-display text-[16px] font-bold text-indigo-600">90 min</p>
        <p className="mt-1 text-[7px] text-[#94a3b8]">08:30 – 10:00 · Calendar</p>
      </div>
      <div className="mt-2 space-y-1.5">
        {["Do not disturb", "Notes synced", "Score +6"].map((x) => (
          <div key={x} className="rounded-xl bg-[#f8faff] px-2 py-1.5 font-medium text-[#334155]">
            {x}
          </div>
        ))}
      </div>
      <div className="mt-auto rounded-full bg-brand-gradient py-1.5 text-center font-semibold text-white">
        End session
      </div>
    </div>
  );
}

export function UiCipherWorkspace() {
  return (
    <div className={cn("flex h-full bg-white", micro)}>
      <aside className="w-[18%] space-y-1.5 border-r border-[#eef2f7] bg-[#f8faff] p-2">
        <p className="font-display text-[9px] font-bold text-[#111827]">Cipher</p>
        {["Workspace", "Flows", "Models", "Eval"].map((l, i) => (
          <p key={l} className={cn("rounded-md px-1 py-1", i === 0 ? "bg-white font-semibold text-indigo-600" : "text-[#94a3b8]")}>
            {l}
          </p>
        ))}
      </aside>
      <div className="grid min-w-0 flex-1 grid-cols-[0.9fr_1.1fr_0.9fr] gap-1.5 p-2">
        <div className="flex flex-col rounded-xl bg-[#f8faff] p-1.5 ring-1 ring-[#e8ecf4]">
          <p className="mb-1 text-[6px] font-semibold tracking-wide text-indigo-400 uppercase">Prompt</p>
          <div className="rounded-lg bg-white p-1.5 text-[#334155] ring-1 ring-[#eef2f7]">
            Qualify inbound demos and draft a follow-up in the account voice.
          </div>
          <div className="mt-1.5 rounded-lg bg-indigo-50 p-1.5 text-indigo-700">
            Context: 18 leads · CRM attached
          </div>
          <span className="mt-auto rounded-md bg-[#111827] py-1 text-center font-semibold text-white">Run</span>
        </div>
        <div className="flex flex-col rounded-xl border border-[#eef2f7] bg-white p-1.5">
          <p className="mb-1 text-[6px] font-semibold tracking-wide text-[#94a3b8] uppercase">Generated brief</p>
          <p className="font-display text-[10px] font-bold text-[#111827]">Harbor Stay — demo intent</p>
          <p className="mt-1 leading-relaxed text-[#475569]">
            High intent (94). Budget in range. Recommend a 30-min product walkthrough focused on booking conversions.
          </p>
          <div className="mt-2 space-y-1">
            {["Next step: send calendar", "Owner: Growth", "CRM synced"].map((x) => (
              <p key={x} className="rounded-md bg-[#f8faff] px-1.5 py-1 text-[#334155]">{x}</p>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-1.5">
          <p className="text-[6px] font-semibold tracking-wide text-indigo-400 uppercase">Automation</p>
          {["Lead score", "Draft email", "Update CRM"].map((s, i) => (
            <div key={s} className="rounded-lg bg-[#f8faff] px-1.5 py-1.5 ring-1 ring-[#e8ecf4]">
              <p className="font-semibold text-[#111827]">{s}</p>
              <p className="text-[6px] text-emerald-600">{i === 2 ? "Done" : "Queued"}</p>
            </div>
          ))}
          <div className="mt-auto rounded-lg bg-white p-1.5 ring-1 ring-indigo-100">
            <p className="text-[#94a3b8]">Eval</p>
            <p className="font-display text-[12px] font-bold text-[#111827]">94.2%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function UiCipherAssistant() {
  return (
    <div className={cn("flex h-full flex-col bg-white p-2.5", micro)}>
      <p className="font-semibold text-indigo-500">Assistant</p>
      <div className="mt-2 ml-auto max-w-[86%] rounded-2xl bg-indigo-50 px-2 py-1.5 text-[#334155]">
        Prioritize Harbor and Ledger. Draft two follow-ups.
      </div>
      <div className="mt-1.5 max-w-[92%] rounded-2xl bg-[#f8faff] px-2 py-1.5 text-[#111827] ring-1 ring-indigo-100">
        Two drafts ready. Harbor: product walkthrough. Ledger: invoice automation demo.
      </div>
      <div className="mt-auto h-7 rounded-full bg-[#f8faff] px-2.5 text-[#94a3b8] ring-1 ring-[#e8ecf4] [line-height:1.75rem]">
        Ask Cipher…
      </div>
    </div>
  );
}

export function UiNorthSystem() {
  return (
    <div className={cn("grid h-full grid-cols-[0.85fr_1.15fr] bg-[#f8faff]", micro)}>
      <div className="flex flex-col gap-2 border-r border-[#eef2f7] bg-white p-2.5">
        <p className="font-semibold tracking-[0.16em] text-indigo-400 uppercase">Tokens</p>
        <div className="flex gap-1">
          {["#111827", "#4f6ef7", "#8b5cf6", "#EEF2FF"].map((c) => (
            <span key={c} className="h-7 flex-1 rounded-md ring-1 ring-[#e8ecf4]" style={{ background: c }} />
          ))}
        </div>
        <p className="font-display text-[22px] font-bold text-[#111827]">Aa</p>
        <p className="text-[#64748b]">Plus Jakarta · 12 / 16 / 24 / 40</p>
        <div className="mt-1 space-y-1">
          <div className="rounded-lg bg-brand-gradient py-1.5 text-center font-semibold text-white">Primary / hover</div>
          <div className="rounded-lg border border-indigo-200 py-1.5 text-center text-indigo-600">Secondary</div>
          <div className="rounded-lg bg-[#f1f5f9] py-1.5 text-center text-[#94a3b8]">Disabled</div>
        </div>
      </div>
      <div className="flex flex-col p-2.5">
        <p className="font-semibold tracking-[0.16em] text-[#94a3b8] uppercase">Applied UI</p>
        <div className="mt-1.5 rounded-xl bg-white p-2 ring-1 ring-[#e8ecf4]">
          <div className="flex items-center justify-between">
            <p className="font-display text-[11px] font-bold text-[#111827]">Settings</p>
            <span className="rounded-full bg-indigo-50 px-1.5 py-0.5 font-semibold text-indigo-600">Live</span>
          </div>
          {["Workspace", "Members", "Billing"].map((r, i) => (
            <div key={r} className={cn("mt-1.5 flex items-center justify-between rounded-lg px-2 py-1.5", i === 1 ? "bg-[#f8faff]" : "bg-white")}>
              <span className="font-medium text-[#334155]">{r}</span>
              <span className="text-indigo-400">›</span>
            </div>
          ))}
        </div>
        <div className="mt-2 grid grid-cols-2 gap-1.5">
          <div className="rounded-lg bg-white p-1.5 ring-1 ring-[#e8ecf4]">
            <p className="text-[#94a3b8]">Input / focus</p>
            <div className="mt-1 h-5 rounded-md ring-2 ring-indigo-400" />
          </div>
          <div className="rounded-lg bg-white p-1.5 ring-1 ring-[#e8ecf4]">
            <p className="text-[#94a3b8]">Card / hover</p>
            <div className="mt-1 h-8 rounded-md bg-[#f8faff] shadow-sm" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function UiNorthPhone() {
  return (
    <div className={cn("flex h-full flex-col bg-white px-2.5 pb-3 pt-7", micro)}>
      <p className="font-display text-[12px] font-bold text-[#111827]">Account</p>
      <div className="mt-2 flex items-center gap-2 rounded-2xl bg-[#f8faff] p-2 ring-1 ring-indigo-100">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-gradient text-[9px] font-bold text-white">N</span>
        <div>
          <p className="font-semibold text-[#111827]">Ada North</p>
          <p className="text-[#94a3b8]">Product lead</p>
        </div>
      </div>
      {["Notifications", "Appearance", "Security"].map((x) => (
        <div key={x} className="mt-1.5 flex items-center justify-between rounded-2xl bg-[#f8faff] px-2 py-1.5">
          <span className="font-medium text-[#334155]">{x}</span>
          <span className="h-3.5 w-6 rounded-full bg-indigo-500/80" />
        </div>
      ))}
    </div>
  );
}

export function UiHaloStore() {
  const items = [
    { n: "Arc lamp", p: "€240", c: "#dde3f3" },
    { n: "Oak tray", p: "€86", c: "#ead9c6" },
    { n: "Wool throw", p: "€160", c: "#d7cce8" },
    { n: "Ceramic", p: "€54", c: "#cfe4e2" },
  ];
  return (
    <div className={cn("flex h-full flex-col bg-white", micro)}>
      <header className="flex items-center justify-between px-3 py-1.5">
        <span className="font-display text-[10px] font-bold tracking-[0.18em] text-[#111827]">HALO</span>
        <span className="rounded-full bg-[#111827] px-2 py-0.5 font-medium text-white">Bag 2</span>
      </header>
      <div className="mx-2 grid grid-cols-[1.15fr_0.85fr] gap-2">
        <div className="rounded-xl bg-[#f4f6ff] p-2.5">
          <p className="text-[6px] font-semibold tracking-[0.18em] text-indigo-400 uppercase">Spring edit</p>
          <p className="mt-1 font-display text-[13px] font-bold tracking-tight text-[#111827]">Objects made to stay</p>
          <p className="mt-1 text-[#64748b]">Limited studio drop · numbered pieces</p>
          <span className="mt-2 inline-block rounded-full bg-[#111827] px-2.5 py-1 font-semibold text-white">Shop the edit</span>
        </div>
        <div className="overflow-hidden rounded-xl bg-[#e8ecf7]">
          <div className="flex h-full items-end justify-center p-3">
            <div className="h-[78%] w-[42%] rounded-sm bg-white/80 shadow-sm" />
            <div className="ml-2 h-[54%] w-[28%] rounded-full bg-indigo-200/80" />
          </div>
        </div>
      </div>
      <div className="mt-2 grid min-h-0 flex-1 grid-cols-4 gap-1.5 px-2 pb-2">
        {items.map((item) => (
          <div key={item.n} className="overflow-hidden rounded-lg border border-[#eef2f7] bg-[#fbfcff]">
            <div className="h-9" style={{ background: item.c }} />
            <div className="p-1">
              <p className="font-semibold text-[#111827]">{item.n}</p>
              <p className="font-medium text-indigo-500">{item.p}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function UiHaloPdp() {
  return (
    <div className={cn("flex h-full flex-col bg-[#f8faff] px-2 pb-3 pt-7", micro)}>
      <p className="text-[#94a3b8]">Halo · Lighting</p>
      <p className="font-display text-[13px] font-bold text-[#111827]">Arc lamp</p>
      <div className="mt-2 h-[30%] rounded-2xl bg-[#dde3f3]" />
      <div className="mt-2 flex gap-1.5">
        {["Brass", "Black", "Clay"].map((s, i) => (
          <span key={s} className={cn("rounded-full px-2 py-1", i === 0 ? "bg-[#111827] text-white" : "bg-white text-[#334155] ring-1 ring-[#e8ecf4]")}>
            {s}
          </span>
        ))}
      </div>
      <p className="mt-2 font-display text-[16px] font-bold text-[#111827]">€240</p>
      <div className="mt-auto rounded-full bg-[#111827] py-1.5 text-center font-semibold text-white">Add to bag</div>
    </div>
  );
}

export function UiHaloCart() {
  return (
    <div className={cn("flex h-full flex-col bg-white px-2 pb-3 pt-7", micro)}>
      <p className="font-display text-[12px] font-bold text-[#111827]">Bag</p>
      {[
        ["Arc lamp", "Brass · €240"],
        ["Oak tray", "Natural · €86"],
      ].map(([n, m]) => (
        <div key={n} className="mt-1.5 flex items-center gap-2 rounded-2xl bg-[#f8faff] p-2 ring-1 ring-[#e8ecf4]">
          <span className="h-8 w-8 rounded-md bg-[#dde3f3]" />
          <div>
            <p className="font-semibold text-[#111827]">{n}</p>
            <p className="text-[#64748b]">{m}</p>
          </div>
        </div>
      ))}
      <div className="mt-auto">
        <div className="mb-2 flex justify-between text-[#334155]">
          <span>Total</span>
          <span className="font-display text-[13px] font-bold">€326</span>
        </div>
        <div className="rounded-full bg-[#111827] py-1.5 text-center font-semibold text-white">Checkout</div>
      </div>
    </div>
  );
}

export function UiCipherEval() {
  return (
    <div className={cn("flex h-full flex-col bg-white p-2", micro)}>
      <p className="font-semibold text-[#94a3b8]">Eval · 7d</p>
      <p className="font-display text-[14px] font-bold text-[#111827]">94.2%</p>
      <div className="mt-2 h-12">
        <AreaChart gid="cipher-eval" />
      </div>
      <p className="mt-1 text-indigo-500">+2.1 pts vs last week</p>
    </div>
  );
}
