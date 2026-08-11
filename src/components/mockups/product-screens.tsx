import { cn } from "@/lib/utils";
import { useId } from "react";

type ScreenProps = {
  className?: string;
};

function StatusPill({
  label,
  tone,
}: {
  label: string;
  tone: "success" | "warning" | "muted" | "info";
}) {
  const tones = {
    success: "border-emerald-400/30 bg-emerald-500/15 text-emerald-200/90",
    warning: "border-amber-400/30 bg-amber-500/15 text-amber-200/90",
    muted: "border-white/12 bg-white/6 text-white/50",
    info: "border-indigo-400/30 bg-indigo-500/15 text-indigo-200/90",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-1.5 py-0.5 text-[6px] font-medium md:text-[7px]",
        tones[tone],
      )}
    >
      {label}
    </span>
  );
}

export function HotelBookingDesktop({ className }: ScreenProps) {
  const rooms = [
    {
      name: "Harbor Suite",
      price: "₺4.200",
      note: "gece",
      amenities: ["Deniz manzarası", "Kahvaltı"],
      tone: "from-emerald-700/50 to-teal-800/40",
      selected: true,
    },
    {
      name: "Cove Room",
      price: "₺2.850",
      note: "gece",
      amenities: ["Balkon", "Wi‑Fi"],
      tone: "from-teal-800/45 to-emerald-900/35",
      selected: false,
    },
    {
      name: "Tide Loft",
      price: "₺3.600",
      note: "gece",
      amenities: ["Şömine", "Mini bar"],
      tone: "from-emerald-900/40 to-teal-900/30",
      selected: false,
    },
  ];

  return (
    <div
      className={cn(
        "flex h-full min-h-[180px] flex-col bg-[#10302e] p-3 text-[7px] leading-snug text-white/75 md:p-4 md:text-[8px]",
        className,
      )}
    >
      <header className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <div className="flex h-4 w-4 items-center justify-center rounded-md bg-emerald-500/25 text-[6px] font-semibold text-emerald-100 md:h-5 md:w-5 md:text-[7px]">
            H
          </div>
          <span className="text-[8px] font-semibold tracking-wide text-white/90 md:text-[9px]">
            Harbor
          </span>
        </div>
        <nav className="flex items-center gap-1">
          {["Odalar", "Deneyim", "Rezervasyon"].map((item, i) => (
            <span
              key={item}
              className={cn(
                "rounded-md px-1.5 py-0.5 md:px-2 md:py-1",
                i === 2
                  ? "bg-amber-500/25 text-amber-100/90"
                  : "text-white/45",
              )}
            >
              {item}
            </span>
          ))}
        </nav>
      </header>

      <div className="mt-3 rounded-lg border border-white/8 bg-linear-to-r from-emerald-950/70 to-teal-900/40 p-2.5 md:mt-4 md:p-3">
        <p className="text-[6px] uppercase tracking-wider text-emerald-300/60 md:text-[7px]">
          Sahil kaçamağı
        </p>
        <p className="mt-0.5 text-[9px] font-medium text-white/90 md:text-[10px]">
          Ege kıyısında sakin bir konaklama
        </p>
      </div>

      <div className="mt-2 grid grid-cols-3 gap-1.5 md:mt-3 md:gap-2">
        {[
          { label: "Giriş", value: "12 Ağu 2026" },
          { label: "Çıkış", value: "15 Ağu 2026" },
          { label: "Misafir", value: "2 yetişkin" },
        ].map((field) => (
          <div
            key={field.label}
            className="rounded-md border border-white/10 bg-white/5 px-2 py-1.5 md:px-2.5 md:py-2"
          >
            <span className="text-[6px] text-white/40 md:text-[7px]">{field.label}</span>
            <p className="mt-0.5 text-[7px] font-medium text-amber-200/85 md:text-[8px]">
              {field.value}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-2 grid flex-1 grid-cols-3 gap-1.5 md:mt-3 md:gap-2">
        {rooms.map((room) => (
          <article
            key={room.name}
            className={cn(
              "flex flex-col rounded-lg border p-1.5 md:p-2",
              room.selected
                ? "border-amber-400/25 bg-amber-500/8 ring-1 ring-amber-400/15"
                : "border-white/8 bg-white/4",
            )}
          >
            <div
              className={cn(
                "flex aspect-[4/3] items-end rounded-md bg-linear-to-br p-1.5",
                room.tone,
              )}
            >
              <span className="rounded bg-black/35 px-1 py-0.5 text-[5px] text-white/70 md:text-[6px]">
                {room.name}
              </span>
            </div>
            <p className="mt-1 text-[7px] font-medium text-white/85 md:text-[8px]">
              {room.name}
            </p>
            <p className="text-[7px] text-amber-300/80 md:text-[8px]">
              {room.price}
              <span className="text-white/40"> / {room.note}</span>
            </p>
            <div className="mt-1 flex flex-wrap gap-0.5">
              {room.amenities.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-white/10 bg-white/6 px-1 py-0.5 text-[5px] text-white/55 md:text-[6px]"
                >
                  {chip}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <footer className="mt-2 flex items-center justify-between rounded-lg border border-white/8 bg-white/4 px-2.5 py-2 md:mt-3 md:px-3">
        <div>
          <p className="text-[6px] text-white/40 md:text-[7px]">Toplam · 3 gece</p>
          <p className="text-[8px] font-semibold text-white/90 md:text-[9px]">₺12.600</p>
        </div>
        <button
          type="button"
          className="rounded-md bg-amber-500/35 px-2.5 py-1 text-[7px] font-medium text-amber-50/95 md:px-3 md:py-1.5 md:text-[8px]"
        >
          Reserve
        </button>
      </footer>
    </div>
  );
}

export function HotelBookingMobile({ className }: ScreenProps) {
  const steps = ["Tarihler", "Oda", "Misafir"];
  const activeStep = 1;

  return (
    <div
      className={cn(
        "flex min-h-[140px] flex-col bg-[#0f2a28] p-2.5 text-[6px] text-white/70 md:min-h-[160px] md:p-3 md:text-[7px]",
        className,
      )}
    >
      <div className="flex items-center gap-1.5">
        {steps.map((step, i) => (
          <div key={step} className="flex flex-1 flex-col gap-1">
            <div
              className={cn(
                "h-0.5 rounded-full",
                i <= activeStep ? "bg-amber-400/55" : "bg-white/10",
              )}
            />
            <span
              className={cn(
                "text-[5px] md:text-[6px]",
                i === activeStep ? "text-amber-200/85" : "text-white/35",
              )}
            >
              {step}
            </span>
          </div>
        ))}
      </div>

      <p className="mt-2 text-[7px] font-medium text-white/85 md:text-[8px]">
        Adım 2 · Oda seçimi
      </p>

      <div className="mt-2 space-y-1.5">
        {[
          { name: "Harbor Suite", price: "₺4.200", selected: true },
          { name: "Cove Room", price: "₺2.850", selected: false },
        ].map((room) => (
          <div
            key={room.name}
            className={cn(
              "flex items-center gap-2 rounded-md border p-2",
              room.selected
                ? "border-amber-400/25 bg-amber-500/10"
                : "border-white/8 bg-white/4",
            )}
          >
            <div className="h-8 w-8 shrink-0 rounded bg-linear-to-br from-emerald-700/45 to-teal-800/35" />
            <div className="min-w-0 flex-1">
              <p className="text-[7px] font-medium text-white/85 md:text-[8px]">{room.name}</p>
              <p className="text-[6px] text-amber-300/75 md:text-[7px]">{room.price} / gece</p>
            </div>
            <div
              className={cn(
                "h-3 w-3 rounded-full border",
                room.selected ? "border-amber-400 bg-amber-400/30" : "border-white/20",
              )}
            />
          </div>
        ))}
      </div>

      <div className="mt-auto rounded-md bg-amber-500/28 py-1.5 text-center text-[7px] font-medium text-amber-50/90 md:py-2 md:text-[8px]">
        Devam · Misafir bilgileri
      </div>
    </div>
  );
}

export function FinanceDashboard({ className }: ScreenProps) {
  const areaId = useId();
  const nav = ["Overview", "Invoices", "Cash", "Teams"];
  const kpis = [
    { label: "Revenue", value: "₺284K", sub: "Bu çeyrek" },
    { label: "Payables", value: "₺41K", sub: "Vadesi yakın" },
    { label: "Runway", value: "8.2 ay", sub: "Nakit rezervi" },
  ];
  const invoices = [
    { id: "INV-1042", client: "Meridian Labs", amount: "₺18.400", status: "Paid" as const },
    { id: "INV-1043", client: "Coastline Co.", amount: "₺9.750", status: "Due" as const },
    { id: "INV-1044", client: "Northwind", amount: "₺6.200", status: "Due" as const },
  ];

  return (
    <div
      className={cn(
        "flex h-full min-h-[180px] bg-[#161e34] text-[7px] text-white/70 md:text-[8px]",
        className,
      )}
    >
      <aside className="flex w-[22%] min-w-[52px] flex-col border-r border-white/8 bg-[#1e2838]/80 p-2 md:p-2.5">
        <p className="text-[7px] font-semibold text-indigo-200/80 md:text-[8px]">Ledger</p>
        <nav className="mt-2 space-y-0.5">
          {nav.map((item, i) => (
            <span
              key={item}
              className={cn(
                "block rounded-md px-1.5 py-1 md:px-2",
                i === 0 ? "bg-indigo-500/20 text-indigo-100/90" : "text-white/45",
              )}
            >
              {item}
            </span>
          ))}
        </nav>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col p-2 md:p-3">
        <header className="flex items-center justify-between">
          <p className="text-[8px] font-medium text-white/85 md:text-[9px]">Finans özeti</p>
          <span className="rounded-md border border-white/10 bg-white/5 px-1.5 py-0.5 text-[6px] text-white/50 md:text-[7px]">
            Ağu 2026
          </span>
        </header>

        <div className="mt-2 grid grid-cols-3 gap-1.5 md:mt-3 md:gap-2">
          {kpis.map((kpi) => (
            <div
              key={kpi.label}
              className="rounded-lg border border-white/8 bg-white/4 p-2 md:p-2.5"
            >
              <p className="text-[6px] text-white/40 md:text-[7px]">{kpi.label}</p>
              <p className="mt-0.5 font-mono text-[9px] font-semibold text-white/90 md:text-[10px]">
                {kpi.value}
              </p>
              <p className="text-[5px] text-white/35 md:text-[6px]">{kpi.sub}</p>
            </div>
          ))}
        </div>

        <div className="mt-2 flex-1 rounded-lg border border-white/8 bg-[#1e2838]/70 p-2 md:mt-3 md:p-2.5">
          <div className="flex items-center justify-between">
            <p className="text-[6px] text-white/45 md:text-[7px]">Nakit akışı</p>
            <span className="text-[5px] text-indigo-300/60 md:text-[6px]">Son 90 gün</span>
          </div>
          <svg
            viewBox="0 0 200 56"
            className="mt-1.5 h-14 w-full md:h-16"
            preserveAspectRatio="none"
            aria-hidden
          >
            <defs>
              <linearGradient id={areaId} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#6366f1" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0 42 L20 36 L40 38 L60 28 L80 30 L100 22 L120 26 L140 18 L160 20 L180 14 L200 16 L200 56 L0 56 Z"
              fill={`url(#${areaId})`}
            />
            <path
              d="M0 42 L20 36 L40 38 L60 28 L80 30 L100 22 L120 26 L140 18 L160 20 L180 14 L200 16"
              fill="none"
              stroke="#a5b4fc"
              strokeWidth="1.5"
              strokeOpacity="0.75"
            />
          </svg>
        </div>

        <div className="mt-2 overflow-hidden rounded-lg border border-white/8 md:mt-2.5">
          <div className="grid grid-cols-[1.1fr_1fr_0.7fr_auto] gap-1 border-b border-white/6 bg-white/4 px-2 py-1 text-[5px] text-white/35 md:text-[6px]">
            <span>Fatura</span>
            <span>Müşteri</span>
            <span>Tutar</span>
            <span>Durum</span>
          </div>
          {invoices.map((row) => (
            <div
              key={row.id}
              className="grid grid-cols-[1.1fr_1fr_0.7fr_auto] items-center gap-1 border-b border-white/4 px-2 py-1 last:border-0 md:py-1.5"
            >
              <span className="font-mono text-[6px] text-white/55 md:text-[7px]">{row.id}</span>
              <span className="truncate text-[6px] text-white/60 md:text-[7px]">{row.client}</span>
              <span className="font-mono text-[6px] text-white/70 md:text-[7px]">{row.amount}</span>
              <StatusPill
                label={row.status}
                tone={row.status === "Paid" ? "success" : "warning"}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function FinanceMobileNotify({ className }: ScreenProps) {
  const items = [
    {
      title: "Ödeme alındı",
      detail: "INV-1042 · Meridian Labs",
      amount: "+ ₺18.400",
      time: "09:14",
      highlight: true,
    },
    {
      title: "Fatura vadesi",
      detail: "INV-1043 · Coastline Co.",
      amount: "₺9.750",
      time: "Dün",
      highlight: false,
    },
    {
      title: "Onay bekliyor",
      detail: "Masraf · Seyahat",
      amount: "₺2.180",
      time: "Pzt",
      highlight: false,
    },
  ];

  return (
    <div
      className={cn(
        "flex min-h-[120px] flex-col gap-1.5 bg-[#1e2838] p-2 md:min-h-[140px] md:p-2.5",
        className,
      )}
    >
      <p className="text-[7px] font-medium text-white/80 md:text-[8px]">Bildirimler</p>
      {items.map((item) => (
        <div
          key={item.title + item.time}
          className={cn(
            "rounded-lg border p-2",
            item.highlight
              ? "border-indigo-500/25 bg-indigo-500/10"
              : "border-white/8 bg-white/4",
          )}
        >
          <div className="flex items-start justify-between gap-1">
            <p className="text-[7px] font-medium text-white/80 md:text-[8px]">{item.title}</p>
            <span className="text-[5px] text-white/35 md:text-[6px]">{item.time}</span>
          </div>
          <p className="mt-0.5 text-[6px] text-white/50 md:text-[7px]">{item.detail}</p>
          <p
            className={cn(
              "mt-1 font-mono text-[7px] md:text-[8px]",
              item.highlight ? "text-emerald-300/85" : "text-white/65",
            )}
          >
            {item.amount}
          </p>
        </div>
      ))}
    </div>
  );
}

export function EcommerceProduct({ className }: ScreenProps) {
  return (
    <div
      className={cn(
        "flex min-h-[140px] flex-col bg-[#faf3ea] p-2.5 text-[6px] text-[#3d2818] md:min-h-[160px] md:p-3 md:text-[7px]",
        className,
      )}
    >
      <div className="relative aspect-square overflow-hidden rounded-lg bg-linear-to-br from-[#d4956a]/55 to-[#8b5a3c]/45">
        <span className="absolute bottom-1.5 left-1.5 rounded bg-black/30 px-1.5 py-0.5 text-[5px] text-white/85 md:text-[6px]">
          Linen Tunic
        </span>
      </div>
      <p className="mt-2 text-[8px] font-semibold md:text-[9px]">Linen Tunic</p>
      <p className="text-[7px] text-[#8b5a3c]/80 md:text-[8px]">₺890 · Ücretsiz kargo</p>
      <div className="mt-2 flex items-center gap-1">
        <span className="text-[6px] text-[#8b5a3c]/60 md:text-[7px]">Beden</span>
        {["S", "M", "L"].map((size, i) => (
          <span
            key={size}
            className={cn(
              "flex h-4 w-4 items-center justify-center rounded border text-[6px] md:h-5 md:w-5 md:text-[7px]",
              i === 1
                ? "border-[#c4784a]/50 bg-[#c4784a]/15 font-medium"
                : "border-[#c4784a]/20 text-[#8b5a3c]/70",
            )}
          >
            {size}
          </span>
        ))}
      </div>
      <button
        type="button"
        className="mt-auto rounded-md bg-[#c4784a]/85 py-1.5 text-center text-[7px] font-medium text-[#fff8f0] md:py-2 md:text-[8px]"
      >
        Sepete ekle
      </button>
    </div>
  );
}

export function EcommerceCart({ className }: ScreenProps) {
  const items = [
    { name: "Linen Tunic", variant: "M · Kum", price: "₺890" },
    { name: "Ceramic Vase", variant: "Tek", price: "₺420" },
  ];

  return (
    <div
      className={cn(
        "flex min-h-[140px] flex-col bg-[#f5ebe0] p-2.5 text-[6px] text-[#3d2818] md:min-h-[160px] md:p-3 md:text-[7px]",
        className,
      )}
    >
      <p className="text-[8px] font-semibold text-[#8b5a3c] md:text-[9px]">Sepet · 2 ürün</p>
      {items.map((item) => (
        <div
          key={item.name}
          className="mt-2 flex gap-2 rounded-lg border border-[#c4784a]/15 bg-white/50 p-1.5"
        >
          <div className="h-8 w-8 shrink-0 rounded bg-linear-to-br from-[#c4784a]/35 to-[#8b5a3c]/25" />
          <div className="min-w-0 flex-1">
            <p className="text-[7px] font-medium md:text-[8px]">{item.name}</p>
            <p className="text-[6px] text-[#8b5a3c]/65 md:text-[7px]">{item.variant}</p>
          </div>
          <p className="font-mono text-[7px] font-medium md:text-[8px]">{item.price}</p>
        </div>
      ))}
      <div className="mt-auto space-y-1 border-t border-[#c4784a]/15 pt-2">
        <div className="flex justify-between text-[6px] md:text-[7px]">
          <span className="text-[#8b5a3c]/65">Ara toplam</span>
          <span className="font-mono font-medium">₺1.310</span>
        </div>
        <button
          type="button"
          className="w-full rounded-md bg-[#c4784a]/85 py-1.5 text-[7px] font-medium text-[#fff8f0] md:py-2 md:text-[8px]"
        >
          Ödemeye geç
        </button>
      </div>
    </div>
  );
}

export function EcommerceCheckout({ className }: ScreenProps) {
  const fields = [
    { label: "Adres", value: "Moda Cd. 12, Kadıköy" },
    { label: "Kargo", value: "Standart · 2–3 gün" },
    { label: "Ödeme", value: "•••• 4821 · Tek çekim" },
  ];

  return (
    <div
      className={cn(
        "flex min-h-[140px] flex-col bg-[#f0e4d8] p-2.5 text-[6px] text-[#3d2818] md:min-h-[160px] md:p-3 md:text-[7px]",
        className,
      )}
    >
      <p className="text-[8px] font-semibold text-[#8b5a3c] md:text-[9px]">Ödeme</p>
      <div className="mt-2 space-y-1.5">
        {fields.map((field) => (
          <div
            key={field.label}
            className="rounded-md border border-[#c4784a]/15 bg-white/55 px-2 py-1.5"
          >
            <p className="text-[5px] uppercase tracking-wide text-[#8b5a3c]/55 md:text-[6px]">
              {field.label}
            </p>
            <p className="mt-0.5 text-[7px] font-medium md:text-[8px]">{field.value}</p>
          </div>
        ))}
      </div>
      <div className="mt-2 flex justify-between rounded-md bg-white/45 px-2 py-1.5">
        <span className="text-[6px] text-[#8b5a3c]/65 md:text-[7px]">Toplam</span>
        <span className="font-mono text-[8px] font-semibold md:text-[9px]">₺1.310</span>
      </div>
      <button
        type="button"
        className="mt-auto rounded-md bg-[#8b5a3c]/90 py-1.5 text-[7px] font-medium text-[#fff8f0] md:py-2 md:text-[8px]"
      >
        Siparişi tamamla
      </button>
    </div>
  );
}

export function EducationDesktop({ className }: ScreenProps) {
  const courses = [
    { name: "Biochemistry 101", progress: 68, active: true },
    { name: "Clinical Ethics", progress: 42, active: false },
    { name: "Patient Care", progress: 15, active: false },
    { name: "Research Methods", progress: 0, active: false },
  ];
  const chapters = [
    { title: "1. Cell structure", done: true },
    { title: "2. Enzyme kinetics", done: true },
    { title: "3. Metabolic pathways", done: false, current: true },
    { title: "4. Lab safety", done: false },
  ];

  return (
    <div
      className={cn(
        "flex h-full min-h-[160px] bg-[#eef6f0] text-[7px] text-[#1a3328] md:text-[8px]",
        className,
      )}
    >
      <aside className="flex w-[30%] min-w-[88px] flex-col border-r border-[#b8d4c4]/50 bg-[#e4f0e8] p-2 md:p-3">
        <p className="text-[8px] font-semibold text-[#2d5a45] md:text-[9px]">Campus Learn</p>
        <p className="mt-0.5 text-[6px] text-[#4a7560]/75 md:text-[7px]">Dönem · Güz 2026</p>
        <div className="mt-2 space-y-1.5">
          {courses.map((course) => (
            <div
              key={course.name}
              className={cn(
                "rounded-lg border px-2 py-1.5 md:px-2.5 md:py-2",
                course.active
                  ? "border-[#5a9e78]/35 bg-[#d4ebe0]/80"
                  : "border-[#b8d4c4]/40 bg-white/50",
              )}
            >
              <p className="truncate text-[7px] font-medium md:text-[8px]">{course.name}</p>
              <div className="mt-1 h-1 overflow-hidden rounded-full bg-[#b8d4c4]/35">
                <div
                  className="h-full rounded-full bg-[#5a9e78]/70"
                  style={{ width: `${course.progress}%` }}
                />
              </div>
              <p className="mt-0.5 text-[5px] text-[#4a7560]/70 md:text-[6px]">
                %{course.progress} tamamlandı
              </p>
            </div>
          ))}
        </div>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col p-2 md:p-3">
        <header className="flex items-center justify-between">
          <div>
            <p className="text-[6px] uppercase tracking-wide text-[#4a7560]/70 md:text-[7px]">
              Ders oynatıcı
            </p>
            <p className="text-[8px] font-semibold md:text-[9px]">3. Metabolic pathways</p>
          </div>
          <span className="rounded-md border border-[#b8d4c4]/50 bg-white/60 px-1.5 py-0.5 text-[6px] md:text-[7px]">
            11:30
          </span>
        </header>

        <div className="relative mt-2 flex-1 overflow-hidden rounded-xl bg-[#1a3328] md:mt-3">
          <div className="absolute inset-0 bg-linear-to-br from-[#2d5a45]/50 to-[#1a3328]" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 md:h-11 md:w-11">
              <div className="ml-0.5 h-0 w-0 border-y-[5px] border-l-[8px] border-y-transparent border-l-emerald-200/75 md:border-y-[6px] md:border-l-[10px]" />
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/55 to-transparent p-2">
            <div className="h-1 overflow-hidden rounded-full bg-white/15">
              <div className="h-full w-[38%] rounded-full bg-[#7bc4a0]/70" />
            </div>
            <div className="mt-1 flex justify-between text-[5px] text-white/50 md:text-[6px]">
              <span>04:12</span>
              <span>11:30</span>
            </div>
          </div>
        </div>

        <div className="mt-2 grid grid-cols-2 gap-2 md:mt-2.5">
          <div className="rounded-lg border border-[#b8d4c4]/45 bg-white/55 p-2">
            <p className="text-[6px] font-medium text-[#4a7560] md:text-[7px]">Bölümler</p>
            <ul className="mt-1 space-y-0.5">
              {chapters.map((ch) => (
                <li
                  key={ch.title}
                  className={cn(
                    "text-[6px] md:text-[7px]",
                    ch.current
                      ? "font-medium text-[#2d5a45]"
                      : ch.done
                        ? "text-[#4a7560]/75"
                        : "text-[#4a7560]/55",
                  )}
                >
                  {ch.title}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-[#b8d4c4]/45 bg-white/55 p-2">
            <p className="text-[6px] font-medium text-[#4a7560] md:text-[7px]">Notlar</p>
            <p className="mt-1 text-[6px] leading-relaxed text-[#1a3328]/75 md:text-[7px]">
              ATP üretimi ve glikoliz özeti. Sonraki derste Krebs döngüsü.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CrmDesktop({ className }: ScreenProps) {
  const contacts = [
    { name: "Elif Yılmaz", company: "Meridian Labs", tag: "Sıcak" },
    { name: "Jonas Park", company: "Coastline Co.", tag: "Takip" },
    { name: "Sara Demir", company: "Northwind", tag: "Yeni" },
  ];
  const columns = [
    { title: "Lead", cards: ["Studio Atlas", "Blue Harbor"] },
    { title: "Qualified", cards: ["Meridian Labs"] },
    { title: "Proposal", cards: ["Coastline Co."] },
    { title: "Won", cards: ["Northwind"] },
  ];

  return (
    <div
      className={cn(
        "flex h-full min-h-[160px] flex-col bg-[#f8f9fc] p-2.5 text-[7px] text-[#1e2433] md:p-3 md:text-[8px]",
        className,
      )}
    >
      <header className="flex items-center justify-between">
        <p className="text-[8px] font-semibold md:text-[9px]">CRM · Pipeline</p>
        <span className="rounded-md bg-[#5b7cff]/12 px-1.5 py-0.5 text-[6px] text-[#5b7cff] md:text-[7px]">
          + Kişi ekle
        </span>
      </header>

      <div className="mt-2 grid flex-1 grid-cols-[0.9fr_1.1fr] gap-2 md:gap-3">
        <div className="rounded-lg border border-[#dfe3ef] bg-white p-2">
          <p className="text-[6px] font-medium text-[#6b7289] md:text-[7px]">Kişiler</p>
          <ul className="mt-1.5 space-y-1">
            {contacts.map((c) => (
              <li
                key={c.name}
                className="flex items-center justify-between rounded-md border border-[#eef0f6] px-1.5 py-1 md:px-2 md:py-1.5"
              >
                <div>
                  <p className="text-[7px] font-medium md:text-[8px]">{c.name}</p>
                  <p className="text-[6px] text-[#6b7289] md:text-[7px]">{c.company}</p>
                </div>
                <span className="rounded-full bg-[#5b7cff]/10 px-1 py-0.5 text-[5px] text-[#5b7cff] md:text-[6px]">
                  {c.tag}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-4 gap-1 overflow-hidden md:gap-1.5">
          {columns.map((col) => (
            <div key={col.title} className="flex min-w-0 flex-col rounded-lg bg-[#eef0f6]/80 p-1 md:p-1.5">
              <p className="text-[6px] font-medium text-[#6b7289] md:text-[7px]">{col.title}</p>
              <div className="mt-1 space-y-1">
                {col.cards.map((card) => (
                  <div
                    key={card}
                    className="rounded-md border border-white bg-white px-1 py-1 text-[6px] font-medium shadow-sm md:px-1.5 md:py-1.5 md:text-[7px]"
                  >
                    {card}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function AnalyticsDesktop({ className }: ScreenProps) {
  const filters = ["Son 30 gün", "Tüm kanallar", "Web + Mobil"];
  const bars = [42, 58, 36, 72, 48, 64, 52];

  return (
    <div
      className={cn(
        "flex h-full min-h-[160px] flex-col bg-[#263243] p-2.5 text-[7px] text-white/70 md:p-3 md:text-[8px]",
        className,
      )}
    >
      <header className="flex items-center justify-between">
        <p className="text-[8px] font-semibold text-white/90 md:text-[9px]">Analytics</p>
        <div className="flex gap-1">
          {filters.map((f, i) => (
            <span
              key={f}
              className={cn(
                "rounded-md px-1.5 py-0.5 text-[5px] md:text-[6px]",
                i === 0 ? "bg-[#5b7cff]/25 text-[#a5b4fc]" : "bg-white/6 text-white/45",
              )}
            >
              {f}
            </span>
          ))}
        </div>
      </header>

      <div className="mt-2 grid grid-cols-3 gap-1.5 md:mt-3 md:gap-2">
        {[
          { label: "Oturum", value: "24.8K" },
          { label: "Dönüşüm", value: "%3.2" },
          { label: "Ort. süre", value: "4:18" },
        ].map((stat) => (
          <div key={stat.label} className="rounded-lg border border-white/8 bg-white/4 p-2">
            <p className="text-[6px] text-white/40 md:text-[7px]">{stat.label}</p>
            <p className="font-mono text-[9px] font-semibold text-white/90 md:text-[10px]">
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-2 flex flex-1 gap-2 md:mt-3">
        <div className="flex flex-1 flex-col rounded-lg border border-white/8 bg-[#202b3a]/80 p-2">
          <p className="text-[6px] text-white/45 md:text-[7px]">Haftalık trafik</p>
          <div className="mt-auto flex h-16 items-end gap-1 md:h-20">
            {bars.map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t bg-[#5b7cff]/55"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
        <div className="w-[38%] rounded-lg border border-white/8 bg-[#202b3a]/80 p-2">
          <p className="text-[6px] text-white/45 md:text-[7px]">Kaynaklar</p>
          <ul className="mt-2 space-y-1">
            {[
              { name: "Organik", pct: "42%" },
              { name: "Doğrudan", pct: "28%" },
              { name: "Referral", pct: "18%" },
            ].map((src) => (
              <li key={src.name} className="flex justify-between text-[6px] md:text-[7px]">
                <span className="text-white/55">{src.name}</span>
                <span className="font-mono text-white/75">{src.pct}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function AdminPanel({ className }: ScreenProps) {
  const users = [
    { name: "Ayşe K.", role: "Admin", perm: true },
    { name: "Marcus T.", role: "Editor", perm: true },
    { name: "Lena S.", role: "Viewer", perm: false },
  ];

  return (
    <div
      className={cn(
        "flex h-full min-h-[160px] flex-col bg-[#111318] p-2.5 text-[7px] text-white/70 md:p-3 md:text-[8px]",
        className,
      )}
    >
      <header className="flex items-center justify-between">
        <p className="text-[8px] font-semibold text-white/90 md:text-[9px]">Admin · Kullanıcılar</p>
        <span className="rounded-md border border-white/10 px-1.5 py-0.5 text-[6px] md:text-[7px]">
          Davet gönder
        </span>
      </header>

      <div className="mt-2 overflow-hidden rounded-lg border border-white/8 md:mt-3">
        <div className="grid grid-cols-[1fr_0.7fr_0.5fr] gap-2 border-b border-white/6 bg-white/4 px-2 py-1 text-[5px] text-white/35 md:text-[6px]">
          <span>Kullanıcı</span>
          <span>Rol</span>
          <span>İzin</span>
        </div>
        {users.map((user) => (
          <div
            key={user.name}
            className="grid grid-cols-[1fr_0.7fr_0.5fr] items-center gap-2 border-b border-white/4 px-2 py-1.5 last:border-0"
          >
            <span className="text-[7px] font-medium text-white/80 md:text-[8px]">{user.name}</span>
            <span className="text-[6px] text-white/55 md:text-[7px]">{user.role}</span>
            <div
              className={cn(
                "h-3 w-6 rounded-full border",
                user.perm
                  ? "border-emerald-400/40 bg-emerald-500/25"
                  : "border-white/15 bg-white/6",
              )}
            >
              <div
                className={cn(
                  "h-2 w-2 rounded-full bg-white/80",
                  user.perm ? "ml-3 mt-0.5" : "ml-0.5 mt-0.5",
                )}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-2 rounded-lg border border-white/8 bg-white/4 p-2 md:mt-3">
        <p className="text-[6px] font-medium text-white/55 md:text-[7px]">Rol izinleri</p>
        <div className="mt-1 flex flex-wrap gap-1">
          {["Okuma", "Yazma", "Yayın", "Silme"].map((perm, i) => (
            <span
              key={perm}
              className={cn(
                "rounded-full border px-1.5 py-0.5 text-[5px] md:text-[6px]",
                i < 3
                  ? "border-emerald-400/25 bg-emerald-500/10 text-emerald-200/80"
                  : "border-white/10 text-white/35",
              )}
            >
              {perm}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function AiWorkspace({ className }: ScreenProps) {
  const nodes = [
    { id: "ingest", label: "Ingest", sub: "12 kaynak", x: 8, y: 28 },
    { id: "classify", label: "Classify", sub: "Etiketle", x: 32, y: 14 },
    { id: "review", label: "Review", sub: "3 bekliyor", x: 56, y: 28 },
    { id: "sync", label: "Sync", sub: "CRM", x: 78, y: 14 },
  ];

  return (
    <div
      className={cn(
        "relative h-full min-h-[160px] overflow-hidden bg-[#202b3a] p-2 md:p-3",
        className,
      )}
    >
      <header className="relative z-10 flex items-center justify-between text-[7px] md:text-[8px]">
        <p className="font-semibold text-white/85">Workflow · v2</p>
        <span className="rounded-md border border-[#5b7cff]/25 bg-[#5b7cff]/10 px-1.5 py-0.5 text-[6px] text-[#a5b4fc] md:text-[7px]">
          Çalışıyor
        </span>
      </header>

      <svg
        viewBox="0 0 100 50"
        className="absolute inset-x-2 top-8 h-[calc(100%-2.5rem)] w-[calc(100%-1rem)] md:inset-x-3 md:top-10"
        aria-hidden
      >
        <path
          d="M18 28 L32 18 L56 28 L78 18"
          fill="none"
          stroke="#5b7cff"
          strokeOpacity="0.35"
          strokeWidth="0.6"
          strokeDasharray="1.5 1"
        />
        <path
          d="M32 18 L32 28 M56 28 L56 18"
          fill="none"
          stroke="#5b7cff"
          strokeOpacity="0.2"
          strokeWidth="0.4"
        />
      </svg>

      {nodes.map((node) => (
        <div
          key={node.id}
          className="absolute z-10 rounded-md border border-[#5b7cff]/30 bg-[#5b7cff]/10 px-2 py-1.5 shadow-sm md:px-2.5 md:py-2"
          style={{ left: `${node.x}%`, top: `${node.y}%` }}
        >
          <p className="text-[7px] font-medium text-[#c7d2fe] md:text-[8px]">{node.label}</p>
          <p className="text-[5px] text-white/45 md:text-[6px]">{node.sub}</p>
        </div>
      ))}
    </div>
  );
}

export function CmsDesktop({ className }: ScreenProps) {
  const posts = [
    { title: "Product launch notes", status: "Draft", date: "3 Ağu" },
    { title: "Q3 roadmap", status: "Review", date: "1 Ağu" },
    { title: "Team handbook", status: "Published", date: "28 Tem" },
  ];

  return (
    <div
      className={cn(
        "flex h-full min-h-[160px] bg-[#fafafa] text-[7px] text-[#1a1a1a] md:text-[8px]",
        className,
      )}
    >
      <aside className="flex w-[34%] min-w-[90px] flex-col border-r border-[#e5e5e5] bg-white p-2 md:p-2.5">
        <p className="text-[8px] font-semibold md:text-[9px]">İçerik</p>
        <ul className="mt-2 space-y-1">
          {posts.map((post, i) => (
            <li
              key={post.title}
              className={cn(
                "rounded-md border px-2 py-1.5 md:py-2",
                i === 0
                  ? "border-[#5b7cff]/25 bg-[#5b7cff]/6"
                  : "border-[#eee] bg-[#fafafa]",
              )}
            >
              <p className="truncate text-[7px] font-medium md:text-[8px]">{post.title}</p>
              <div className="mt-0.5 flex justify-between text-[5px] text-[#888] md:text-[6px]">
                <span>{post.status}</span>
                <span>{post.date}</span>
              </div>
            </li>
          ))}
        </ul>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col p-2 md:p-3">
        <div className="flex items-center justify-between border-b border-[#eee] pb-2">
          <p className="text-[8px] font-semibold md:text-[9px]">Product launch notes</p>
          <span className="rounded-md bg-[#5b7cff]/12 px-1.5 py-0.5 text-[6px] text-[#5b7cff] md:text-[7px]">
            Kaydet
          </span>
        </div>
        <div className="mt-2 flex-1 space-y-2 rounded-lg border border-[#eee] bg-white p-2 md:p-2.5">
          <p className="text-[9px] font-semibold md:text-[10px]">Launch checklist</p>
          <p className="text-[7px] leading-relaxed text-[#555] md:text-[8px]">
            Final QA tamamlandı. Pazarlama sayfası ve e-posta şablonları onay bekliyor.
          </p>
          <ul className="space-y-1 text-[6px] text-[#666] md:text-[7px]">
            <li>· Hero görseli güncellendi</li>
            <li>· FAQ bölümü eklendi</li>
            <li>· Analytics event’leri doğrulandı</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export function SupportTimeline({ className }: ScreenProps) {
  const steps = [
    { label: "Ticket açıldı", detail: "#4821 · Ödeme sorunu", done: true },
    { label: "İncelemede", detail: "Finans ekibi atandı", done: true },
    { label: "Çözüldü", detail: "Müşteri bilgilendirildi", done: false },
  ];

  return (
    <div
      className={cn(
        "flex h-full flex-col rounded-[1.25rem] border border-white/8 bg-[#111318]/90 p-3 text-[7px] text-white/70 md:p-4 md:text-[8px]",
        className,
      )}
    >
      <p className="font-medium text-white/85">Destek · #4821</p>
      <div className="mt-3 space-y-0">
        {steps.map((step, i) => (
          <div key={step.label} className="flex gap-2.5">
            <div className="flex flex-col items-center">
              <div
                className={cn(
                  "flex h-4 w-4 items-center justify-center rounded-full border",
                  step.done
                    ? "border-emerald-400/40 bg-emerald-500/15"
                    : "border-white/15 bg-white/5",
                )}
              >
                {step.done && <div className="h-1.5 w-1.5 rounded-full bg-emerald-400/80" />}
              </div>
              {i < steps.length - 1 && (
                <div
                  className={cn(
                    "my-0.5 min-h-[18px] w-px flex-1",
                    step.done ? "bg-emerald-400/30" : "bg-white/10",
                  )}
                />
              )}
            </div>
            <div className="pb-3">
              <p className="text-[7px] font-medium text-white/80 md:text-[8px]">{step.label}</p>
              <p className="text-[6px] text-white/45 md:text-[7px]">{step.detail}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-auto space-y-1 border-t border-white/8 pt-2">
        {["Logları kontrol et", "Müşteriye yanıt"].map((item, i) => (
          <label key={item} className="flex items-center gap-2 text-[6px] md:text-[7px]">
            <span
              className={cn(
                "flex h-3 w-3 items-center justify-center rounded border",
                i === 0 ? "border-emerald-400/40 bg-emerald-500/15" : "border-white/15",
              )}
            >
              {i === 0 && <span className="text-[5px] text-emerald-300">✓</span>}
            </span>
            {item}
          </label>
        ))}
      </div>
    </div>
  );
}

export function UiUxCompare({ className }: ScreenProps) {
  return (
    <div className={cn("flex h-full items-stretch gap-2 p-2 md:gap-3 md:p-3", className)}>
      <div className="flex w-1/2 flex-col rounded-xl border border-dashed border-white/18 bg-white/3 p-2 md:p-2.5">
        <p className="text-[6px] text-white/40 md:text-[7px]">Wireframe</p>
        <div className="mt-2 space-y-2">
          <div className="rounded-md border border-white/12 p-2">
            <p className="text-[6px] text-white/35 md:text-[7px]">Başlık alanı</p>
            <div className="mt-1.5 rounded border border-white/10 px-2 py-3 text-[6px] text-white/25 md:text-[7px]">
              [ Hero metni ]
            </div>
          </div>
          <div className="rounded-md border border-white/12 p-2">
            <p className="text-[6px] text-white/35 md:text-[7px]">Kart grid</p>
            <div className="mt-1.5 grid grid-cols-2 gap-1">
              <div className="rounded border border-white/10 py-4 text-center text-[5px] text-white/25">
                Kart A
              </div>
              <div className="rounded border border-white/10 py-4 text-center text-[5px] text-white/25">
                Kart B
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-4 items-center justify-center">
        <div className="h-px w-full bg-linear-to-r from-transparent via-[#5b7cff]/45 to-transparent" />
      </div>

      <div className="flex w-1/2 flex-col rounded-xl border border-white/10 bg-[#111318]/85 p-2 md:p-2.5">
        <p className="text-[6px] text-[#a5b4fc] md:text-[7px]">UI · v1</p>
        <div className="mt-2 space-y-2">
          <div className="rounded-md border border-[#5b7cff]/20 bg-[#5b7cff]/8 p-2">
            <p className="text-[7px] font-semibold text-white/90 md:text-[8px]">
              Dijital ürün stüdyosu
            </p>
            <p className="mt-0.5 text-[6px] text-white/50 md:text-[7px]">
              Net hiyerarşi, okunaklı tipografi
            </p>
          </div>
          <div className="grid grid-cols-2 gap-1">
            {[
              { title: "Web", sub: "Kurumsal" },
              { title: "Mobil", sub: "MVP" },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-md border border-white/8 bg-white/5 p-2"
              >
                <p className="text-[7px] font-medium text-white/85 md:text-[8px]">{card.title}</p>
                <p className="text-[5px] text-white/45 md:text-[6px]">{card.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
