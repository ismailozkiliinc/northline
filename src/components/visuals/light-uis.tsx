import { cn } from "@/lib/utils";

const tx = "text-[8px] leading-snug md:text-[9px]";

function StayThumb({ variant }: { variant: 0 | 1 | 2 }) {
  const skies = ["#c7e6ef", "#d5e8f4", "#e8d9c8"];
  const waters = ["#5eb3c2", "#6bb8a8", "#7aa8c4"];
  return (
    <svg viewBox="0 0 160 90" className="h-full w-full" aria-hidden>
      <rect width="160" height="90" fill={skies[variant]} />
      <rect y="58" width="160" height="32" fill={waters[variant]} />
      <rect x="48" y="32" width="64" height="36" rx="3" fill="#f8fafc" />
      <rect x="54" y="38" width="16" height="12" rx="1" fill="#8ec5d4" />
      <rect x="74" y="38" width="16" height="12" rx="1" fill="#8ec5d4" />
      <rect x="94" y="38" width="12" height="22" rx="1" fill="#cbd5e1" />
    </svg>
  );
}

function ProductThumb({ tone }: { tone: string }) {
  return (
    <div className={cn("relative h-full w-full overflow-hidden", tone)}>
      <div className="absolute inset-x-[18%] top-[22%] bottom-[12%] rounded-sm bg-white/55" />
      <div className="absolute inset-x-[28%] top-[18%] h-[12%] rounded-full bg-white/35" />
    </div>
  );
}

export function UiHarbor() {
  const rooms = [
    { name: "Harbor Suite", meta: "2 kişi · Deniz manzarası", price: "₺4.200", v: 0 as const },
    { name: "Cove Room", meta: "2 kişi · Balkon", price: "₺2.850", v: 1 as const },
    { name: "Tide Loft", meta: "3 kişi · Teras", price: "₺3.600", v: 2 as const },
  ];
  return (
    <div className={cn("flex h-full flex-col bg-white", tx)}>
      <header className="flex items-center justify-between border-b border-teal-50 px-2.5 py-1.5">
        <span className="font-display text-[10px] font-bold tracking-tight text-[#115e59]">Harbor</span>
        <nav className="flex items-center gap-2 text-[8px] text-[#64748b]">
          <span>Odalar</span>
          <span>Deneyim</span>
          <span className="rounded-full bg-[#115e59] px-2 py-0.5 font-medium text-white">Rezerve</span>
        </nav>
      </header>
      <div className="relative mx-2 mt-2 h-[30%] overflow-hidden rounded-lg">
        <StayThumb variant={0} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#115e59]/55 to-transparent" />
        <div className="absolute bottom-1.5 left-2 right-2">
          <p className="text-[7px] tracking-wider text-white/80 uppercase">Doğrudan rezervasyon</p>
          <p className="font-display text-[11px] font-semibold text-white">Ege kıyısında butik konaklama</p>
        </div>
      </div>
      <div className="mx-2 mt-1.5 flex items-center gap-1 rounded-lg border border-teal-100 bg-[#f4fbfa] p-1">
        <span className="flex-1 rounded-md bg-white px-1.5 py-1 text-[7px] text-[#334155]">Bodrum</span>
        <span className="flex-1 rounded-md bg-white px-1.5 py-1 text-[7px] text-[#334155]">12–15 Nis</span>
        <span className="flex-1 rounded-md bg-white px-1.5 py-1 text-[7px] text-[#334155]">2 misafir</span>
        <span className="rounded-md bg-[#115e59] px-2 py-1 text-[7px] font-semibold text-white">Ara</span>
      </div>
      <div className="mt-1.5 grid min-h-0 flex-1 grid-cols-3 gap-1.5 px-2 pb-2">
        {rooms.map((room) => (
          <div key={room.name} className="flex flex-col overflow-hidden rounded-lg border border-teal-50 bg-[#f8fffe]">
            <div className="h-9">
              <StayThumb variant={room.v} />
            </div>
            <div className="p-1.5">
              <p className="font-semibold text-[#115e59]">{room.name}</p>
              <p className="text-[7px] text-[#64748b]">{room.meta}</p>
              <div className="mt-1 flex items-center justify-between">
                <span className="font-display text-[9px] font-bold text-teal-700">{room.price}</span>
                <span className="rounded bg-teal-600 px-1.5 py-0.5 text-[6px] font-semibold text-white">Seç</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function UiHarborBook() {
  return (
    <div className="flex h-full flex-col bg-white px-2 pb-2 pt-0.5">
      <p className="text-[8px] text-[#94a3b8]">Oda detayı</p>
      <p className="font-display text-[12px] font-bold text-[#115e59]">Harbor Suite</p>
      <div className="mt-1.5 h-[28%] overflow-hidden rounded-xl">
        <StayThumb variant={0} />
      </div>
      <div className="mt-2 space-y-1.5">
        <div className="flex justify-between rounded-xl bg-[#f4fbfa] px-2 py-1.5 text-[8px]">
          <span className="text-[#64748b]">Tarih</span>
          <span className="font-semibold text-[#115e59]">12–15 Nisan</span>
        </div>
        <div className="flex justify-between rounded-xl bg-[#f4fbfa] px-2 py-1.5 text-[8px]">
          <span className="text-[#64748b]">Misafir</span>
          <span className="font-semibold text-[#115e59]">2 kişi</span>
        </div>
        <div className="flex justify-between rounded-xl bg-[#f4fbfa] px-2 py-1.5 text-[8px]">
          <span className="text-[#64748b]">Toplam</span>
          <span className="font-display text-[11px] font-bold text-teal-700">₺12.600</span>
        </div>
      </div>
      <div className="mt-auto rounded-full bg-[#115e59] py-1.5 text-center text-[8px] font-semibold text-white">
        Rezervasyonu onayla
      </div>
    </div>
  );
}

export function UiLedger() {
  const rows = [
    { n: "INV-2041", c: "Nimbus Co", s: "Ödendi", tone: "text-emerald-600 bg-emerald-50", v: "₺18.400" },
    { n: "INV-2040", c: "Harbor Stay", s: "Bekliyor", tone: "text-amber-600 bg-amber-50", v: "₺6.250" },
    { n: "INV-2038", c: "Atelier", s: "Gecikti", tone: "text-rose-600 bg-rose-50", v: "₺2.980" },
    { n: "INV-2036", c: "Pulse Labs", s: "Ödendi", tone: "text-emerald-600 bg-emerald-50", v: "₺9.120" },
  ];
  return (
    <div className={cn("flex h-full bg-[#f8faff]", tx)}>
      <aside className="flex w-[19%] flex-col gap-1.5 border-r border-[#eef2f7] bg-white p-2">
        <div className="mb-1 flex h-6 w-6 items-center justify-center rounded-lg bg-brand-gradient text-[8px] font-bold text-white">L</div>
        {["Özet", "Faturalar", "Nakit", "Raporlar", "Ekip"].map((l, i) => (
          <p key={l} className={cn("rounded-md px-1.5 py-1 text-[7px]", i === 0 ? "bg-indigo-50 font-semibold text-indigo-600" : "text-[#94a3b8]")}>
            {l}
          </p>
        ))}
      </aside>
      <div className="flex min-w-0 flex-1 flex-col p-2">
        <div className="flex items-center justify-between">
          <p className="font-display text-[11px] font-bold text-[#111827]">Finans özeti</p>
          <span className="rounded-full bg-white px-2 py-0.5 text-[7px] text-[#64748b] ring-1 ring-[#e8ecf4]">30 gün</span>
        </div>
        <div className="mt-1.5 grid grid-cols-4 gap-1.5">
          {[
            ["Nakit", "₺142.800", "+8%"],
            ["Alacak", "₺38.200", "12 fatura"],
            ["Geciken", "₺6.250", "1 kalem"],
            ["Ortalama", "₺14.1k", "fatura"],
          ].map(([k, v, s]) => (
            <div key={k} className="rounded-lg border border-[#e8ecf4] bg-white px-1.5 py-1">
              <p className="text-[7px] text-[#94a3b8]">{k}</p>
              <p className="font-display text-[10px] font-bold text-[#111827]">{v}</p>
              <p className="text-[6px] text-indigo-500">{s}</p>
            </div>
          ))}
        </div>
        <div className="mt-1.5 rounded-lg border border-[#eef2f7] bg-white p-1.5">
          <p className="mb-1 text-[7px] font-medium text-[#64748b]">Nakit akışı</p>
          <svg viewBox="0 0 280 58" className="h-11 w-full" aria-hidden>
            <path d="M0 44 C28 42, 48 36, 70 34 S110 28, 140 22 S190 18, 220 14 S250 20, 280 12 L280 58 L0 58 Z" fill="rgba(99,102,241,0.14)" />
            <path d="M0 44 C28 42, 48 36, 70 34 S110 28, 140 22 S190 18, 220 14 S250 20, 280 12" fill="none" stroke="#6366f1" strokeWidth="2.2" />
          </svg>
        </div>
        <div className="mt-1.5 min-h-0 flex-1 overflow-hidden rounded-lg border border-[#eef2f7] bg-white">
          {rows.map((r) => (
            <div key={r.n} className="flex items-center gap-2 border-b border-[#f8fafc] px-2 py-1 last:border-0">
              <span className="w-12 font-mono text-[7px] text-[#94a3b8]">{r.n}</span>
              <span className="flex-1 truncate text-[7px] text-[#334155]">{r.c}</span>
              <span className={cn("rounded-full px-1.5 py-0.5 text-[6px] font-medium", r.tone)}>{r.s}</span>
              <span className="font-semibold text-[#111827]">{r.v}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function UiLedgerPay() {
  return (
    <div className="flex h-full flex-col bg-[#f8faff] px-2 pb-2">
      <p className="text-[8px] text-[#94a3b8]">Cüzdan</p>
      <p className="font-display text-[16px] font-bold text-[#111827]">₺142.800</p>
      <p className="text-[7px] text-emerald-600">Bu ay +₺12.400</p>
      <div className="mt-3 space-y-1.5">
        {["Transfer", "Fatura öde", "Rapor"].map((a) => (
          <div key={a} className="rounded-xl bg-white px-2 py-1.5 text-[8px] font-medium text-[#334155] ring-1 ring-[#e8ecf4]">
            {a}
          </div>
        ))}
      </div>
      <div className="mt-auto rounded-xl bg-white p-2 ring-1 ring-indigo-100">
        <p className="text-[7px] text-[#94a3b8]">Son işlem</p>
        <p className="text-[9px] font-semibold text-[#111827]">INV-2041 · ₺18.400</p>
      </div>
    </div>
  );
}

export function UiAtelier() {
  const items = [
    { name: "Linen Tunic", price: "₺890", tone: "bg-[#e8d5c4]" },
    { name: "Ceramic Vase", price: "₺420", tone: "bg-[#dcc4ae]" },
    { name: "Wool Throw", price: "₺1.150", tone: "bg-[#cbb8a4]" },
    { name: "Oak Tray", price: "₺340", tone: "bg-[#f0e6db]" },
  ];
  return (
    <div className={cn("flex h-full flex-col bg-[#fffaf6]", tx)}>
      <header className="flex items-center justify-between px-2.5 py-1.5">
        <span className="font-display text-[10px] font-bold text-[#3d2818]">Atelier</span>
        <span className="text-[7px] text-[#8b5a3c]">Yeni sezon · Sepet 2</span>
      </header>
      <div className="grid min-h-0 flex-1 grid-cols-4 gap-1.5 px-2 pb-2">
        {items.map((item) => (
          <div key={item.name} className="overflow-hidden rounded-lg border border-[#eadfd2] bg-white">
            <div className="h-[52%]">
              <ProductThumb tone={item.tone} />
            </div>
            <div className="p-1.5">
              <p className="font-medium text-[#3d2818]">{item.name}</p>
              <p className="text-[8px] font-semibold text-[#c4784a]">{item.price}</p>
              <span className="mt-1 inline-block rounded bg-[#c4784a] px-1.5 py-0.5 text-[6px] text-white">Sepet</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function UiAtelierCart() {
  return (
    <div className="flex h-full flex-col bg-[#fffaf6] px-2 pb-2">
      <p className="font-display text-[12px] font-bold text-[#3d2818]">Sepet</p>
      {[
        ["Linen Tunic", "M · ₺890"],
        ["Ceramic Vase", "Tek · ₺420"],
      ].map(([n, p]) => (
        <div key={n} className="mt-1.5 flex items-center gap-2 rounded-xl bg-white p-1.5 ring-1 ring-[#eadfd2]">
          <div className="h-8 w-8 rounded-md bg-[#e8d5c4]" />
          <div>
            <p className="text-[8px] font-semibold text-[#3d2818]">{n}</p>
            <p className="text-[7px] text-[#c4784a]">{p}</p>
          </div>
        </div>
      ))}
      <div className="mt-auto rounded-full bg-[#c4784a] py-1.5 text-center text-[8px] font-semibold text-white">
        Ödemeye geç · ₺1.310
      </div>
    </div>
  );
}

export function UiAtelierPay() {
  return (
    <div className="flex h-full flex-col bg-white px-2 pb-2">
      <p className="font-display text-[11px] font-bold text-[#3d2818]">Checkout</p>
      <div className="mt-2 space-y-1.5 text-[8px]">
        {["Teslimat", "Kart", "Sipariş özeti"].map((s, i) => (
          <div key={s} className={cn("rounded-xl px-2 py-1.5 ring-1", i === 1 ? "bg-[#fffaf6] ring-[#c4784a]/30" : "bg-[#f8fafc] ring-[#eadfd2]")}>
            {s}
          </div>
        ))}
      </div>
      <p className="mt-auto text-center font-display text-[14px] font-bold text-[#3d2818]">₺1.310</p>
    </div>
  );
}

export function UiCarePath() {
  return (
    <div className={cn("flex h-full bg-white", tx)}>
      <aside className="w-[20%] space-y-1.5 border-r border-teal-50 bg-[#f3fbf7] p-2">
        <p className="font-display text-[9px] font-bold text-teal-800">Care Path</p>
        {["Hastalar", "Randevu", "Planlar", "Mesaj"].map((l, i) => (
          <p key={l} className={cn("rounded-md px-1 py-1 text-[7px]", i === 0 ? "bg-teal-100 font-semibold text-teal-800" : "text-teal-700/55")}>{l}</p>
        ))}
      </aside>
      <div className="flex min-w-0 flex-1 flex-col gap-1.5 p-2">
        <div className="flex items-center justify-between">
          <p className="font-display text-[11px] font-bold text-[#134e4a]">Hasta paneli</p>
          <span className="rounded-full bg-teal-50 px-2 py-0.5 text-[7px] text-teal-700">Aktif plan</span>
        </div>
        <div className="grid grid-cols-3 gap-1.5">
          {[["Son ziyaret", "12 Nis"], ["Sonraki", "28 Nis 10:30"], ["Görev", "3 açık"]].map(([k, v]) => (
            <div key={k} className="rounded-lg border border-teal-100 bg-[#f3fbf7] px-1.5 py-1">
              <p className="text-[7px] text-teal-700/70">{k}</p>
              <p className="font-semibold text-teal-900">{v}</p>
            </div>
          ))}
        </div>
        <div className="grid flex-1 grid-cols-3 gap-1.5">
          {["Keşif", "Tedavi", "Takip"].map((s, i) => (
            <div key={s} className="rounded-lg border border-teal-100 bg-white p-1.5">
              <p className="text-[7px] font-semibold text-teal-800">{s}</p>
              {["Not alındı", "Plan yayında", "Kontrol"].slice(0, i + 1).map((n) => (
                <p key={n} className="mt-1 rounded bg-teal-50 px-1 py-0.5 text-[7px] text-teal-800">{n}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function UiTableReserve() {
  return (
    <div className={cn("flex h-full flex-col bg-[#faf8f5]", tx)}>
      <header className="flex items-center justify-between px-2.5 py-1.5">
        <span className="font-display text-[10px] font-bold text-[#1c1917]">Table Reserve</span>
        <span className="rounded-full bg-[#1c1917] px-2 py-0.5 text-[7px] text-[#faf8f5]">Rezervasyon</span>
      </header>
      <div className="grid min-h-0 flex-1 grid-cols-[1.15fr_0.85fr] gap-2 px-2 pb-2">
        <div className="flex flex-col rounded-xl border border-[#eadfd0] bg-white p-2">
          <p className="text-[7px] text-[#a8a29e]">Müsaitlik</p>
          <p className="font-display text-[12px] font-semibold text-[#1c1917]">12 Nisan · 20:30</p>
          <div className="mt-2 grid grid-cols-4 gap-1">
            {["18:00", "19:00", "20:30", "21:30"].map((h, i) => (
              <span key={h} className={cn("rounded-md py-1 text-center text-[7px]", i === 2 ? "bg-[#1c1917] text-white" : "bg-[#f5f0e8] text-[#57534e]")}>{h}</span>
            ))}
          </div>
          <p className="mt-2 text-[7px] text-[#78716c]">Masa 12 · 4 kişi · Tasting</p>
          <span className="mt-auto rounded-md bg-[#1c1917] py-1 text-center text-[7px] font-semibold text-white">Onayla</span>
        </div>
        <div className="space-y-1.5 rounded-xl border border-[#eadfd0] bg-white p-2">
          <p className="text-[7px] font-semibold text-[#78716c]">Menü</p>
          {[["Tasting", "₺2.400"], ["Şarap eşleşmesi", "₺890"], ["Teras", "Eklendi"]].map(([m, p]) => (
            <div key={m} className="flex items-center justify-between rounded-md bg-[#faf8f5] px-1.5 py-1">
              <span className="text-[#44403c]">{m}</span>
              <span className="text-[7px] text-[#a8a29e]">{p}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function UiPulse() {
  return (
    <div className={cn("flex h-full bg-white", tx)}>
      <aside className="w-[18%] space-y-1.5 border-r border-[#eef2f7] bg-[#f8faff] p-2">
        <p className="font-display text-[9px] font-bold text-[#111827]">Pulse</p>
        {["Akış", "Kurallar", "AI", "Log"].map((l, i) => (
          <p key={l} className={cn("text-[7px]", i === 2 ? "font-semibold text-indigo-600" : "text-[#94a3b8]")}>{l}</p>
        ))}
      </aside>
      <div className="flex min-w-0 flex-1 flex-col p-2">
        <p className="font-display text-[11px] font-bold text-[#111827]">Otomasyon</p>
        <div className="mt-1.5 grid flex-1 grid-cols-3 gap-1.5">
          {[
            { t: "Tetikleyici", c: ["Form doldu", "Yeni lead"] },
            { t: "AI adımı", c: ["Niyet tahmini", "Özet üret"] },
            { t: "Aksiyon", c: ["CRM güncelle", "Mail gitti"] },
          ].map((col) => (
            <div key={col.t} className="rounded-lg bg-[#f8faff] p-1.5">
              <p className="mb-1 text-[7px] font-semibold tracking-wide text-indigo-400 uppercase">{col.t}</p>
              {col.c.map((card) => (
                <div key={card} className="mb-1 rounded-md border border-[#e8ecf4] bg-white px-1.5 py-1 text-[8px] text-[#334155]">{card}</div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function UiAiChat() {
  return (
    <div className="flex h-full flex-col bg-white p-2">
      <p className="text-[8px] font-semibold text-indigo-500">Asistan</p>
      <div className="mt-2 ml-auto max-w-[80%] rounded-2xl bg-indigo-50 px-2 py-1.5 text-[8px] text-[#334155]">
        Lead’i nitelendir ve CRM’e yaz.
      </div>
      <div className="mt-1.5 max-w-[85%] rounded-2xl bg-[#f8faff] px-2 py-1.5 text-[8px] text-[#111827] ring-1 ring-indigo-100">
        Niyet: demo talebi. Skor 82. Kayıt açıldı.
      </div>
      <div className="mt-auto h-7 rounded-full bg-[#f8faff] ring-1 ring-[#e8ecf4]" />
    </div>
  );
}

export function UiFitnessHome() {
  return (
    <div className="flex h-full flex-col bg-[#f8faff] px-2 pb-2">
      <p className="text-[8px] text-[#94a3b8]">Bugün</p>
      <p className="font-display text-[13px] font-bold text-[#111827]">Antrenman</p>
      <div className="mt-2 rounded-2xl bg-brand-gradient p-2.5 text-white">
        <p className="text-[8px] opacity-80">Seans 03</p>
        <p className="font-display text-[12px] font-semibold">Üst vücut · 42 dk</p>
        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/25">
          <div className="h-full w-[68%] rounded-full bg-white" />
        </div>
      </div>
      {["Isınma 8 dk", "Bench 4x8", "Row 4x10"].map((x) => (
        <div key={x} className="mt-1.5 rounded-xl bg-white px-2 py-1.5 text-[8px] text-[#334155] ring-1 ring-[#e8ecf4]">{x}</div>
      ))}
    </div>
  );
}

export function UiFitnessStats() {
  return (
    <div className="flex h-full flex-col bg-white px-2 pb-2">
      <p className="font-display text-[12px] font-bold text-[#111827]">İlerleme</p>
      <div className="mt-2 grid grid-cols-3 gap-1">
        {[["12", "seans"], ["86%", "hedef"], ["4.2", "saat"]].map(([n, l]) => (
          <div key={l} className="rounded-xl bg-[#f8faff] py-2 text-center">
            <p className="font-display text-[12px] font-bold text-indigo-600">{n}</p>
            <p className="text-[6px] text-[#94a3b8]">{l}</p>
          </div>
        ))}
      </div>
      <svg viewBox="0 0 120 40" className="mt-3 w-full" aria-hidden>
        <path d="M0 30 C20 28, 40 18, 60 16 S100 10, 120 8" fill="none" stroke="#6366f1" strokeWidth="2" />
      </svg>
    </div>
  );
}

export function UiCorporateSite() {
  return (
    <div className={cn("flex h-full bg-white", tx)}>
      <div className="flex min-w-0 flex-[1.2] flex-col p-2.5">
        <header className="flex items-center justify-between">
          <span className="font-display text-[10px] font-bold text-[#111827]">Northline</span>
          <span className="rounded-full bg-brand-gradient px-2 py-0.5 text-[7px] text-white">Teklif Al</span>
        </header>
        <div className="mt-2 rounded-xl bg-gradient-to-r from-indigo-100 via-blue-50 to-violet-50 p-2.5">
          <p className="font-display text-[12px] font-bold text-[#111827]">Kurumsal dijital vitrin</p>
          <p className="mt-0.5 text-[7px] text-[#64748b]">Hizmetler · Çalışmalar · İletişim</p>
          <div className="mt-2 h-6 w-16 rounded-full bg-[#111827] text-center text-[7px] leading-6 text-white">Keşfet</div>
        </div>
        <div className="mt-2 grid flex-1 grid-cols-3 gap-1.5">
          {["Web", "SEO", "Yazılım"].map((s) => (
            <div key={s} className="rounded-lg border border-[#eef2f7] bg-[#f8faff] p-1.5">
              <p className="font-semibold text-[#111827]">{s}</p>
              <p className="mt-0.5 text-[7px] text-[#64748b]">Kapsam net, teslim görünür</p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-[36%] space-y-1 border-l border-[#eef2f7] bg-[#f8faff] p-2">
        <p className="text-[7px] font-semibold tracking-wider text-indigo-400 uppercase">Yayın kontrolü</p>
        {["Canonical", "HTTPS", "OG meta", "Kontrast AA", "404"].map((c) => (
          <div key={c} className="flex items-center gap-1.5 rounded-md bg-white px-1.5 py-1 ring-1 ring-[#e8ecf4]">
            <span className="text-[8px] text-emerald-600">✓</span>
            <span className="text-[7px] text-[#334155]">{c}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function UiPricingScope() {
  const plans = [
    { name: "Landing", items: ["6 sayfa", "Form", "SEO temel"] },
    { name: "Kurumsal", items: ["CMS", "TR / EN", "Blog"] },
    { name: "Ürün", items: ["Auth", "Panel", "API"] },
  ];
  return (
    <div className="flex h-full items-stretch justify-center gap-2 bg-[#f8faff] p-3">
      {plans.map((p, i) => (
        <div key={p.name} className={cn("flex w-[30%] flex-col rounded-xl border bg-white p-2 shadow-sm", i === 2 ? "border-indigo-200" : "border-[#e8ecf4]")}>
          <p className="font-display text-[10px] font-bold text-[#111827]">{p.name}</p>
          <ul className="mt-2 space-y-1">
            {p.items.map((it) => (
              <li key={it} className="text-[8px] text-[#475569]">· {it}</li>
            ))}
          </ul>
          <span className={cn("mt-auto rounded-md py-1 text-center text-[7px] font-semibold", i === 2 ? "bg-brand-gradient text-white" : "bg-[#f8faff] text-indigo-600")}>
            Teklif
          </span>
        </div>
      ))}
    </div>
  );
}

export function UiMvpBoard() {
  return (
    <div className="flex h-full flex-col bg-white p-2.5">
      <div className="flex items-center justify-between">
        <p className="font-display text-[11px] font-bold text-[#111827]">MVP kapsamı</p>
        <span className="rounded-full bg-indigo-50 px-1.5 py-0.5 text-[7px] font-semibold text-indigo-600">Faz 1</span>
      </div>
      <div className="mt-2 grid flex-1 grid-cols-2 gap-2">
        <div className="rounded-xl border border-emerald-100 bg-emerald-50/60 p-2">
          <p className="text-[8px] font-semibold text-emerald-800">Dahil</p>
          {["Kayıt / giriş", "Tek ana akış", "Temel rapor"].map((x) => (
            <p key={x} className="mt-1 rounded-md bg-white px-1.5 py-1 text-[8px] text-[#334155]">{x}</p>
          ))}
        </div>
        <div className="rounded-xl border border-[#eef2f7] bg-[#f8faff] p-2">
          <p className="text-[8px] font-semibold text-[#64748b]">Sonra</p>
          {["Çoklu rol", "Entegrasyon", "Native"].map((x) => (
            <p key={x} className="mt-1 rounded-md bg-white px-1.5 py-1 text-[8px] text-[#94a3b8]">{x}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export function UiUxCanvas() {
  return (
    <div className="grid h-full grid-cols-2 bg-[#f8faff]">
      <div className="border-r border-dashed border-slate-200 p-2.5">
        <p className="text-[7px] font-semibold tracking-wider text-slate-400 uppercase">Wireframe</p>
        <div className="mt-2 rounded border border-slate-300 px-1.5 py-1 text-[7px] text-slate-500">Nav · Logo · CTA</div>
        <div className="mt-2 rounded border border-slate-300 px-1.5 py-1.5 text-[7px] text-slate-500">Hero · value prop</div>
        <div className="mt-2 grid grid-cols-2 gap-1.5">
          <div className="rounded border border-slate-300 px-1 py-2 text-center text-[6px] text-slate-500">Kart A</div>
          <div className="rounded border border-slate-300 px-1 py-2 text-center text-[6px] text-slate-500">Kart B</div>
        </div>
        <div className="mt-2 rounded border border-slate-300 px-1.5 py-1 text-[7px] text-slate-500">Form · Submit</div>
      </div>
      <div className="bg-white p-2.5">
        <p className="text-[7px] font-semibold tracking-wider text-indigo-400 uppercase">UI kit</p>
        <div className="mt-2 flex gap-1">
          <span className="h-4 w-4 rounded bg-[#111827]" />
          <span className="h-4 w-4 rounded bg-indigo-500" />
          <span className="h-4 w-4 rounded bg-violet-400" />
        </div>
        <div className="mt-2 rounded-lg bg-brand-gradient py-1.5 text-center text-[8px] font-semibold text-white">Primary</div>
        <div className="mt-1.5 rounded-lg border border-indigo-100 py-1.5 text-center text-[8px] text-[#334155]">Ghost</div>
        <div className="mt-2 rounded-xl bg-indigo-50 p-2">
          <p className="font-display text-[10px] font-bold text-[#111827]">12 bileşen</p>
          <p className="text-[7px] text-[#64748b]">8 durum · 2 breakpoint</p>
        </div>
      </div>
    </div>
  );
}

export function UiFlutterApp() {
  return (
    <div className="flex h-full flex-col bg-white p-2">
      <span className="w-fit rounded-md bg-cyan-50 px-1.5 py-0.5 text-[7px] font-bold text-cyan-700">Flutter</span>
      <div className="mt-2 grid flex-1 grid-cols-2 gap-1.5">
        {["Kart", "Liste", "Grafik", "Form"].map((w) => (
          <div key={w} className="rounded-xl bg-[#f8faff] p-1.5">
            <p className="text-[8px] font-semibold text-[#334155]">{w}</p>
            <div className="mt-1 h-8 rounded-lg bg-white ring-1 ring-indigo-100" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function UiNativeApp() {
  return (
    <div className="flex h-full flex-col bg-[#f2f2f7] p-2">
      <span className="w-fit rounded-md bg-white px-1.5 py-0.5 text-[7px] font-bold text-[#111827] ring-1 ring-[#e5e5ea]">Native</span>
      <div className="mt-2 flex-1 space-y-1 rounded-2xl bg-white p-2">
        {["Push bildirimi", "Store yayın", "Platform API"].map((row) => (
          <div key={row} className="flex items-center justify-between border-b border-[#f2f2f7] py-1.5 last:border-0">
            <span className="text-[8px] text-[#1c1c1e]">{row}</span>
            <span className="h-3.5 w-6 rounded-full bg-[#34c759]/80" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function UiSeoBoard() {
  return (
    <div className="flex h-full flex-col bg-white p-2.5">
      <p className="font-display text-[11px] font-bold text-[#111827]">Arama görünürlüğü</p>
      <svg viewBox="0 0 240 70" className="mt-2 h-14 w-full" aria-hidden>
        <path d="M4 58 C40 54, 70 40, 100 36 S160 22, 200 14 L236 10" fill="none" stroke="#6366f1" strokeWidth="2.4" />
        <circle cx="200" cy="14" r="3.5" fill="#8b5cf6" />
      </svg>
      <div className="mt-1 grid grid-cols-3 gap-1.5 text-center">
        {[["12", "sorgu"], ["3", "ilk 10"], ["+18%", "trafik"]].map(([n, l]) => (
          <div key={l} className="rounded-lg bg-[#f8faff] py-1">
            <p className="font-display text-[11px] font-bold text-indigo-600">{n}</p>
            <p className="text-[6px] text-[#94a3b8]">{l}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function UiAdsBoard() {
  return (
    <div className="flex h-full flex-col bg-white p-2.5">
      <p className="font-display text-[11px] font-bold text-[#111827]">Kampanya özeti</p>
      <div className="mt-2 flex h-16 items-end gap-1">
        {[40, 62, 48, 80, 55, 92, 70, 84].map((h, i) => (
          <div key={i} className="flex-1 rounded-t bg-indigo-500/70" style={{ height: `${h}%` }} />
        ))}
      </div>
      <div className="mt-2 grid grid-cols-3 gap-1.5">
        {[["ROAS", "3.1x"], ["CTR", "2.4%"], ["CPA", "₺18"]].map(([k, v]) => (
          <div key={k} className="rounded-lg bg-[#f8faff] p-1.5">
            <p className="text-[7px] text-[#94a3b8]">{k}</p>
            <p className="font-display text-[11px] font-bold text-[#111827]">{v}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function UiTableBook() {
  return (
    <div className="flex h-full flex-col bg-[#faf8f5] px-2 pb-2">
      <p className="text-[8px] text-[#a8a29e]">Masa 12</p>
      <p className="font-display text-[12px] font-bold text-[#1c1917]">4 kişi · 20:30</p>
      <div className="mt-2 grid grid-cols-2 gap-1.5">
        {["12 Nis", "Tasting", "Teras", "Onay"].map((x, i) => (
          <div
            key={x}
            className={cn(
              "rounded-xl px-2 py-1.5 text-[8px]",
              i === 3 ? "bg-[#1c1917] font-semibold text-white" : "bg-white ring-1 ring-[#eadfd0] text-[#44403c]",
            )}
          >
            {x}
          </div>
        ))}
      </div>
      <div className="mt-auto rounded-full bg-[#1c1917] py-1.5 text-center text-[8px] font-semibold text-[#faf8f5]">
        Rezervasyonu tamamla
      </div>
    </div>
  );
}

export function UiPatientApp() {
  return (
    <div className="flex h-full flex-col bg-[#f3fbf7] px-2 pb-2">
      <p className="text-[8px] text-teal-700/70">Care Path</p>
      <p className="font-display text-[12px] font-bold text-[#134e4a]">Sonraki randevu</p>
      <div className="mt-2 rounded-2xl bg-white p-2.5 ring-1 ring-teal-100">
        <p className="text-[8px] text-teal-700/70">28 Nisan</p>
        <p className="font-display text-[13px] font-bold text-teal-900">10:30</p>
        <p className="mt-1 text-[8px] text-[#134e4a]">Kontrol · Dr. Elif K.</p>
      </div>
      {["İlaç hatırlatması", "Egzersiz 12 dk", "Mesaj gönder"].map((x) => (
        <div key={x} className="mt-1.5 rounded-xl bg-white px-2 py-1.5 text-[8px] text-[#134e4a] ring-1 ring-teal-100">
          {x}
        </div>
      ))}
    </div>
  );
}

export function UiFitnessPlan() {
  return (
    <div className="flex h-full flex-col bg-white px-2 pb-2">
      <p className="font-display text-[12px] font-bold text-[#111827]">Plan</p>
      {["Pzt · Push", "Çar · Pull", "Cum · Bacak", "Paz · Mobilite"].map((d, i) => (
        <div
          key={d}
          className={cn(
            "mt-1.5 rounded-xl px-2 py-1.5 text-[8px]",
            i === 0 ? "bg-indigo-50 font-semibold text-indigo-700" : "bg-[#f8faff] text-[#334155]",
          )}
        >
          {d}
        </div>
      ))}
    </div>
  );
}

export function UiIntakeForm() {
  return (
    <div className="flex h-full flex-col bg-white p-2.5">
      <p className="font-display text-[11px] font-bold text-[#111827]">Proje brief</p>
      <div className="mt-2 space-y-1.5">
        {[
          ["Hizmet", "Web + Mobile"],
          ["Bütçe", "₺80–150k"],
          ["Takvim", "Q2 2026"],
        ].map(([k, v]) => (
          <div key={k} className="flex items-center justify-between rounded-lg bg-[#f8faff] px-2 py-1.5">
            <span className="text-[7px] text-[#94a3b8]">{k}</span>
            <span className="text-[8px] font-semibold text-[#111827]">{v}</span>
          </div>
        ))}
      </div>
      <div className="mt-auto rounded-full bg-brand-gradient py-1.5 text-center text-[8px] font-semibold text-white">
        Projeyi başlatalım
      </div>
    </div>
  );
}

export const UiEcommerceStore = UiAtelier;
export const UiMobileApp = UiFitnessHome;
