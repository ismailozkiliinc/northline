import type { Package } from "./types";

const priceNote: Package["priceNote"] = {
  tr: "Fiyat talep üzerine — kapsam netleştikten sonra teklif hazırlanır.",
  en: "Price on request — a proposal is prepared once scope is clarified.",
};

export const packages: Package[] = [
  {
    id: "landing",
    title: {
      tr: "Landing Page",
      en: "Landing page",
    },
    forWhom: {
      tr: "Tek ürün veya kampanya lansmanı yapan ekipler; hızlı online vitrin ihtiyacı olan girişimler.",
      en: "Teams launching a single product or campaign; startups needing a fast online presence.",
    },
    includes: {
      tr: [
        "Tek sayfa bilgi mimarisi",
        "Responsive UI ve geliştirme",
        "İletişim / lead formu",
        "Temel SEO ve analitik kurulumu",
        "1 revizyon turu",
      ],
      en: [
        "Single-page information architecture",
        "Responsive UI and development",
        "Contact / lead form",
        "Baseline SEO and analytics setup",
        "1 revision round",
      ],
    },
    excludes: {
      tr: [
        "CMS ve çoklu sayfa yapısı",
        "E-ticaret ve ödeme",
        "Özel backend ve entegrasyonlar",
        "Çok dilli içerik (ayrı kapsam)",
      ],
      en: [
        "CMS and multi-page structure",
        "E-commerce and payments",
        "Custom backend and integrations",
        "Multilingual content (separate scope)",
      ],
    },
    timeline: {
      tr: "2–4 hafta (içerik hazırlığına bağlı)",
      en: "2–4 weeks (depends on content readiness)",
    },
    priceNote,
  },
  {
    id: "corporate",
    title: {
      tr: "Kurumsal Web Sitesi",
      en: "Corporate website",
    },
    forWhom: {
      tr: "Hizmet veya üretim şirketleri; güven veren, güncellenebilir kurumsal kimlik sitesi arayan ekipler.",
      en: "Service or product companies seeking a trustworthy, maintainable corporate site.",
    },
    includes: {
      tr: [
        "5–12 sayfa yapı (hakkımızda, hizmetler, iletişim vb.)",
        "CMS entegrasyonu",
        "Blog veya haber modülü (temel)",
        "Formlar ve harita entegrasyonu",
        "TR veya TR+EN (tek dil paket fiyatına dahil değilse ayrıca)",
      ],
      en: [
        "5–12 page structure (about, services, contact, etc.)",
        "CMS integration",
        "Blog or news module (baseline)",
        "Forms and map integration",
        "TR or TR+EN (second locale quoted separately if not included)",
      ],
    },
    excludes: {
      tr: [
        "Müşteri portalı ve auth",
        "Karmaşık üçüncü parti ERP entegrasyonları",
        "Profesyonel fotoğraf / video prodüksiyon",
        "Sürekli içerik yazımı",
      ],
      en: [
        "Client portal and auth",
        "Complex third-party ERP integrations",
        "Professional photo / video production",
        "Ongoing content writing",
      ],
    },
    timeline: {
      tr: "6–10 hafta",
      en: "6–10 weeks",
    },
    priceNote,
  },
  {
    id: "ecommerce",
    title: {
      tr: "E-Ticaret Mağazası",
      en: "E-commerce store",
    },
    forWhom: {
      tr: "Online satışa başlayan veya mevcut mağazasını yenilemek isteyen markalar.",
      en: "Brands starting online sales or rebuilding an existing store.",
    },
    includes: {
      tr: [
        "Mağaza UX ve ürün listeleme",
        "Sepet ve checkout akışı",
        "Ödeme sağlayıcı entegrasyonu (1 adet)",
        "Sipariş e-posta bildirimleri",
        "Temel stok / varyant yönetimi",
      ],
      en: [
        "Store UX and product listing",
        "Cart and checkout flow",
        "Payment provider integration (one)",
        "Order email notifications",
        "Baseline stock / variant management",
      ],
    },
    excludes: {
      tr: [
        "Pazaryeri (marketplace) çok satıcı modeli",
        "ERP / muhasebe entegrasyonları",
        "Fiziksel lojistik operasyon",
        "Ürün fotoğraf çekimi",
      ],
      en: [
        "Multi-vendor marketplace model",
        "ERP / accounting integrations",
        "Physical logistics operations",
        "Product photography",
      ],
    },
    timeline: {
      tr: "8–14 hafta",
      en: "8–14 weeks",
    },
    priceNote,
  },
  {
    id: "mobile-mvp",
    title: {
      tr: "Mobil MVP",
      en: "Mobile MVP",
    },
    forWhom: {
      tr: "Fikrini mağazada test etmek isteyen girişimler; sınırlı özellik seti ile hızlı yayın hedefleyen ekipler.",
      en: "Startups validating an idea in the store; teams targeting a limited feature set and fast release.",
    },
    includes: {
      tr: [
        "Çekirdek kullanıcı akışları (3–5 ekran grubu)",
        "Auth (e-posta veya sosyal — 1 yöntem)",
        "iOS veya Android (tek platform; ikincisi ayrı)",
        "Store metadata hazırlığı",
        "Temel crash raporlama",
      ],
      en: [
        "Core user flows (3–5 screen groups)",
        "Auth (email or social — one method)",
        "iOS or Android (one platform; second quoted separately)",
        "Store metadata preparation",
        "Baseline crash reporting",
      ],
    },
    excludes: {
      tr: [
        "Karmaşık ödeme ve abonelik",
        "Offline-first senkronizasyon",
        "Admin panel (ayrı kapsam)",
        "App Store optimizasyon ajans hizmetleri",
      ],
      en: [
        "Complex payments and subscriptions",
        "Offline-first sync",
        "Admin panel (separate scope)",
        "App Store optimization agency services",
      ],
    },
    timeline: {
      tr: "10–16 hafta",
      en: "10–16 weeks",
    },
    priceNote,
  },
  {
    id: "custom-app",
    title: {
      tr: "Özel Web / SaaS Uygulaması",
      en: "Custom web / SaaS app",
    },
    forWhom: {
      tr: "İş akışını yazılıma taşımak isteyen KOBİ ve kurumsal ekipler; panel, CRM veya rezervasyon ihtiyacı olanlar.",
      en: "SMB and enterprise teams digitizing workflows; those needing panels, CRM, or booking systems.",
    },
    includes: {
      tr: [
        "Keşif ve teknik mimari dokümanı",
        "Rol bazlı auth",
        "Admin + kullanıcı arayüzleri (MVP kapsamı)",
        "API ve veritabanı",
        "Staging ve production deploy",
      ],
      en: [
        "Discovery and technical architecture document",
        "Role-based auth",
        "Admin + user interfaces (MVP scope)",
        "API and database",
        "Staging and production deploy",
      ],
    },
    excludes: {
      tr: [
        "Sınırsız özellik listesi",
        "Legacy veri migrasyonu (ayrı teklif)",
        "7/24 NOC operasyonu",
        "Regülasyon danışmanlığı",
      ],
      en: [
        "Unlimited feature list",
        "Legacy data migration (separate quote)",
        "24/7 NOC operations",
        "Regulatory consulting",
      ],
    },
    timeline: {
      tr: "12–20+ hafta (MVP kapsamına göre)",
      en: "12–20+ weeks (depends on MVP scope)",
    },
    priceNote,
  },
  {
    id: "uiux",
    title: {
      tr: "UI/UX Tasarım Paketi",
      en: "UI/UX design package",
    },
    forWhom: {
      tr: "Geliştiricisi hazır olan ekipler veya yatırımcı sunumu öncesi tasarım ihtiyacı olan girişimler.",
      en: "Teams with engineering in place, or startups needing design before investor demos.",
    },
    includes: {
      tr: [
        "Kullanıcı akışları ve wireframe",
        "UI ekran seti (MVP kapsamı)",
        "Tasarım sistemi temeli",
        "Figma prototip",
        "Dev handoff notları",
      ],
      en: [
        "User flows and wireframes",
        "UI screen set (MVP scope)",
        "Design system foundation",
        "Figma prototype",
        "Dev handoff notes",
      ],
    },
    excludes: {
      tr: [
        "Frontend / backend geliştirme",
        "Kullanıcı araştırması saha çalışması (ayrı)",
        "Marka kimliği / logo tasarımı",
        "Sınırsız revizyon",
      ],
      en: [
        "Frontend / backend development",
        "Field user research (separate)",
        "Brand identity / logo design",
        "Unlimited revisions",
      ],
    },
    timeline: {
      tr: "4–8 hafta",
      en: "4–8 weeks",
    },
    priceNote,
  },
  {
    id: "care",
    title: {
      tr: "Bakım ve Destek",
      en: "Care & support",
    },
    forWhom: {
      tr: "Yayında olan web veya mobil ürününü güvenli ve güncel tutmak isteyen ekipler.",
      en: "Teams keeping a live web or mobile product secure and up to date.",
    },
    includes: {
      tr: [
        "Güvenlik ve bağımlılık güncellemeleri",
        "Hata triyajı (SLA’ya göre)",
        "Uptime / hata izleme kontrolü",
        "Aylık durum raporu",
        "Küçük içerik ve UI düzeltmeleri (saat kotası)",
      ],
      en: [
        "Security and dependency updates",
        "Bug triage (per SLA)",
        "Uptime / error monitoring checks",
        "Monthly status report",
        "Small content and UI fixes (hour allowance)",
      ],
    },
    excludes: {
      tr: [
        "Yeni büyük özellik geliştirme",
        "Altyapı maliyetleri (hosting, API)",
        "7/24 acil müdahale (ayrı SLA)",
        "Garantili uptime yüzdesi taahhüdü",
      ],
      en: [
        "Major new feature development",
        "Infrastructure costs (hosting, APIs)",
        "24/7 emergency response (separate SLA)",
        "Guaranteed uptime percentage commitment",
      ],
    },
    timeline: {
      tr: "Aylık retainer — minimum 3 ay önerilir",
      en: "Monthly retainer — 3-month minimum recommended",
    },
    priceNote,
  },
];

export function getPackageById(id: string): Package | undefined {
  return packages.find((p) => p.id === id);
}
