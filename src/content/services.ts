import type { Service } from "./types";

export const services: Service[] = [
  {
    id: "web",
    href: "/hizmetler/web",
    icon: "Globe",
    title: {
      tr: "Kurumsal Web Siteleri",
      en: "Corporate websites",
    },
    description: {
      tr: "Markanızı net anlatan, SEO uyumlu ve yönetilebilir web deneyimleri — landing’den çok dilli kurumsal yapıya.",
      en: "Clear brand storytelling with SEO-ready, manageable builds — from landing pages to multilingual corporate sites.",
    },
    bullets: {
      tr: [
        "CMS ile güncellenebilir sayfalar",
        "Performans ve erişilebilirlik odaklı geliştirme",
        "Form, blog ve kariyer modülleri",
      ],
      en: [
        "CMS-editable pages",
        "Performance and accessibility-focused engineering",
        "Forms, blog, and careers modules",
      ],
    },
    includes: {
      tr: [
        "Keşif ve bilgi mimarisi",
        "UI tasarım ve responsive geliştirme",
        "Temel SEO yapılandırması",
        "Yayın ve el değiştirme dokümantasyonu",
      ],
      en: [
        "Discovery and information architecture",
        "UI design and responsive development",
        "Baseline SEO setup",
        "Launch and handoff documentation",
      ],
    },
    processNotes: {
      tr: "İçerik ve marka varlıkları müşteriden; yapı ve teknik kararlar birlikte netleştirilir. Haftalık demo ile ilerleme paylaşılır.",
      en: "Content and brand assets come from the client; structure and technical decisions are clarified together. Progress shared via weekly demos.",
    },
  },
  {
    id: "mobile",
    href: "/hizmetler/mobil",
    icon: "Smartphone",
    title: {
      tr: "Mobil Uygulamalar",
      en: "Mobile apps",
    },
    description: {
      tr: "iOS ve Android için ölçeklenebilir ürünler — kimlik doğrulama, ödeme ve mağaza yayın süreci dahil.",
      en: "Scalable iOS and Android products — including auth, payments, and store launch guidance.",
    },
    bullets: {
      tr: [
        "Native veya cross-platform (Flutter) seçenekleri",
        "Push bildirim ve derin link planlaması",
        "App Store / Play Store yayın desteği",
      ],
      en: [
        "Native or cross-platform (Flutter) options",
        "Push notification and deep link planning",
        "App Store / Play Store launch support",
      ],
    },
    includes: {
      tr: [
        "Ürün akışları ve UI tasarım",
        "Frontend + API entegrasyonu",
        "Test cihaz matrisi",
        "Store metadata ve inceleme hazırlığı",
      ],
      en: [
        "Product flows and UI design",
        "Frontend + API integration",
        "Device test matrix",
        "Store metadata and review preparation",
      ],
    },
    processNotes: {
      tr: "Store hesapları ve geliştirici sertifikaları müşteri adına açılır; teknik build ve metadata hazırlığı bizden.",
      en: "Store accounts and developer certificates are opened in the client’s name; we prepare builds and metadata.",
    },
  },
  {
    id: "ui-ux",
    href: "/hizmetler/ui-ux",
    icon: "Palette",
    title: {
      tr: "UI/UX ve Ürün Tasarımı",
      en: "UI/UX & product design",
    },
    description: {
      tr: "Araştırmadan tasarım sistemine — kullanılabilir, tutarlı arayüzler ve tıklanabilir prototipler.",
      en: "From research to design systems — usable, consistent interfaces and clickable prototypes.",
    },
    bullets: {
      tr: [
        "Kullanıcı akışları ve wireframe",
        "UI kit ve bileşen kütüphanesi",
        "Figma dev handoff",
      ],
      en: [
        "User flows and wireframes",
        "UI kit and component library",
        "Figma dev handoff",
      ],
    },
    includes: {
      tr: [
        "Keşif ve rakip incelemesi",
        "Wireframe ve UI ekranları",
        "Tasarım sistemi dokümantasyonu",
        "Prototip (temel etkileşim)",
      ],
      en: [
        "Discovery and competitive review",
        "Wireframes and UI screens",
        "Design system documentation",
        "Prototype (core interactions)",
      ],
    },
    processNotes: {
      tr: "Tasarım onay kapıları yazılı kayıt altına alınır. Geliştirme ayrı sözleşmeyle veya aynı projede devam edebilir.",
      en: "Design approval gates are recorded in writing. Engineering can continue under the same engagement or a separate scope.",
    },
  },
  {
    id: "saas",
    href: "/hizmetler/saas",
    icon: "Layers",
    title: {
      tr: "Özel Yazılım ve SaaS",
      en: "Custom software & SaaS",
    },
    description: {
      tr: "CRM, rezervasyon, panel ve iş akışı uygulamaları — ölçeklenebilir mimari ve net rol yönetimi.",
      en: "CRM, booking, admin panels, and workflow apps — scalable architecture and clear role management.",
    },
    bullets: {
      tr: [
        "Multi-tenant veya tek kiracı mimari",
        "API-first geliştirme",
        "Admin ve raporlama panelleri",
      ],
      en: [
        "Multi-tenant or single-tenant architecture",
        "API-first development",
        "Admin and reporting dashboards",
      ],
    },
    includes: {
      tr: [
        "Ürün brief ve teknik mimari taslağı",
        "Veritabanı şeması ve auth",
        "Çekirdek özellik geliştirme",
        "Deploy ve izleme kurulumu (temel)",
      ],
      en: [
        "Product brief and technical architecture draft",
        "Database schema and auth",
        "Core feature development",
        "Deploy and monitoring setup (baseline)",
      ],
    },
    processNotes: {
      tr: "Kapsam fazlara bölünür; MVP önce, genişleme sonra. Üçüncü parti entegrasyonlar keşifte netleştirilir.",
      en: "Scope is phased; MVP first, expansion later. Third-party integrations clarified during discovery.",
    },
  },
  {
    id: "ecommerce",
    href: "/hizmetler/e-ticaret",
    icon: "ShoppingCart",
    title: {
      tr: "E-Ticaret",
      en: "E-commerce",
    },
    description: {
      tr: "Ürün kataloğu, ödeme, stok ve sipariş yönetimini dönüşüm odaklı kuruyoruz.",
      en: "Catalog, checkout, inventory, and order management built for conversion.",
    },
    bullets: {
      tr: [
        "Headless veya platform tabanlı seçenekler",
        "Ödeme ve kargo entegrasyonları",
        "Kupon, varyant ve stok kuralları",
      ],
      en: [
        "Headless or platform-based options",
        "Payment and shipping integrations",
        "Coupons, variants, and stock rules",
      ],
    },
    includes: {
      tr: [
        "Mağaza UX ve checkout akışı",
        "Ürün ve koleksiyon yönetimi",
        "Ödeme sağlayıcı entegrasyonu",
        "Temel analitik olayları",
      ],
      en: [
        "Store UX and checkout flow",
        "Product and collection management",
        "Payment provider integration",
        "Baseline analytics events",
      ],
    },
    processNotes: {
      tr: "Yasal metinler, vergi ve lojistik kuralları müşteri sorumluluğunda; teknik uygulama tarafında destek verilir.",
      en: "Legal copy, tax, and logistics rules remain the client’s responsibility; we support technical implementation.",
    },
  },
  {
    id: "ai",
    href: "/hizmetler/ai",
    icon: "Sparkles",
    title: {
      tr: "Yapay Zekâ ve Otomasyon",
      en: "AI & automation",
    },
    description: {
      tr: "Chatbot, doküman işleme ve iş akışı otomasyonları — insan onayı ve veri güvenliği öncelikli.",
      en: "Assistants, document workflows, and ops automation — with human approval and data safety first.",
    },
    bullets: {
      tr: [
        "RAG tabanlı bilgi asistanları",
        "Form ve e-posta otomasyonları",
        "Mevcut panellere entegrasyon",
      ],
      en: [
        "RAG-based knowledge assistants",
        "Form and email automations",
        "Integration into existing panels",
      ],
    },
    includes: {
      tr: [
        "Kullanım senaryosu ve veri envanteri",
        "Prompt / akış tasarımı",
        "API entegrasyonu ve guardrail’ler",
        "İnsan-onaylı kritik adımlar",
      ],
      en: [
        "Use case and data inventory",
        "Prompt / flow design",
        "API integration and guardrails",
        "Human-in-the-loop for critical steps",
      ],
    },
    processNotes: {
      tr: "Hangi verinin modele gittiği ve saklandığı keşifte yazılır. Üretim ortamı için ayrı güvenlik değerlendirmesi önerilir.",
      en: "What data enters and is stored by models is documented in discovery. A separate security review is recommended for production.",
    },
  },
  {
    id: "support",
    href: "/hizmetler",
    icon: "LifeBuoy",
    title: {
      tr: "Bakım ve Büyüme",
      en: "Care & growth",
    },
    description: {
      tr: "Yayın sonrası güvenlik yamaları, performans, SEO ve özellik geliştirmeleri — retainer veya talep bazlı.",
      en: "Post-launch security patches, performance, SEO, and feature iteration — retainer or on-demand.",
    },
    bullets: {
      tr: [
        "Aylık güvenlik ve bağımlılık güncellemeleri",
        "Hata triyajı ve küçük iyileştirmeler",
        "Analitik ve dönüşüm önerileri (rapor, hedef yok)",
      ],
      en: [
        "Monthly security and dependency updates",
        "Bug triage and small improvements",
        "Analytics and conversion recommendations (reports, no guaranteed targets)",
      ],
    },
    includes: {
      tr: [
        "SLA tanımlı yanıt süreleri (pakete göre)",
        "Yedekleme ve izleme kontrolü",
        "Küçük içerik ve UI düzeltmeleri",
        "Aylık durum özeti",
      ],
      en: [
        "SLA-defined response times (per package)",
        "Backup and monitoring checks",
        "Small content and UI fixes",
        "Monthly status summary",
      ],
    },
    processNotes: {
      tr: "Bakım kapsamı mevcut kod tabanının durumuna göre keşifte netleştirilir. Büyük yeni özellikler ayrı sprint olarak planlanır.",
      en: "Care scope is clarified in discovery based on the existing codebase. Major new features are planned as separate sprints.",
    },
  },
];

export function getServiceById(id: string): Service | undefined {
  return services.find((s) => s.id === id);
}

export function getAllServiceIds(): string[] {
  return services.map((s) => s.id);
}
