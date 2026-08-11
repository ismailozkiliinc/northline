import type { FaqItem } from "./types";

export const faqItems: FaqItem[] = [
  {
    id: "duration",
    question: {
      tr: "Bir proje ne kadar sürer?",
      en: "How long does a project take?",
    },
    answer: {
      tr: "Kapsama bağlıdır. Landing sayfası birkaç hafta, kurumsal site birkaç ay, mobil MVP veya SaaS daha uzun sürebilir. Keşif görüşmesinden sonra yazılı zaman çizelgesi paylaşırız — sabit süre garantisi vermeyiz.",
      en: "It depends on scope. A landing page may take a few weeks, a corporate site a few months, and a mobile MVP or SaaS longer. We share a written timeline after discovery — we do not guarantee fixed durations.",
    },
  },
  {
    id: "pricing",
    question: {
      tr: "Fiyatlarınız nedir?",
      en: "What are your prices?",
    },
    answer: {
      tr: "Sabit fiyat listesi yoktur. Paketler başlangıç kapsamıdır; teklif projenin özelliklerine göre hazırlanır. Bütçe çerçevenizi keşifte paylaşmanız teklifi hızlandırır.",
      en: "There is no fixed price list. Packages are starting scopes; proposals match your features. Sharing a budget frame in discovery speeds up quoting.",
    },
  },
  {
    id: "ownership",
    question: {
      tr: "Kaynak kod ve tasarım dosyaları kime ait olur?",
      en: "Who owns the source code and design files?",
    },
    answer: {
      tr: "Sözleşmede belirtilen ödeme koşulları tamamlandığında kaynak kod, tasarım dosyaları ve proje varlıkları müşteriye devredilir. Lisanslı üçüncü parti bileşenler kendi lisanslarına tabidir.",
      en: "Once contractual payment terms are met, source code, design files, and project assets transfer to the client. Licensed third-party components remain under their own licenses.",
    },
  },
  {
    id: "app-store",
    question: {
      tr: "App Store ve Google Play yayınını siz mi yapıyorsunuz?",
      en: "Do you handle App Store and Google Play release?",
    },
    answer: {
      tr: "Evet — store hesapları müşteri adına açılır; build, metadata, ekran görüntüleri ve inceleme sürecinde teknik destek sağlarız. Apple/Google onay süreleri platforma bağlıdır ve garanti edilemez.",
      en: "Yes — store accounts are in the client’s name; we support builds, metadata, screenshots, and review. Apple/Google approval times depend on the platform and cannot be guaranteed.",
    },
  },
  {
    id: "nda",
    question: {
      tr: "NDA imzalıyor musunuz?",
      en: "Do you sign NDAs?",
    },
    answer: {
      tr: "Evet. Karşılıklı gizlilik sözleşmesi proje öncesi veya kickoff’ta imzalanabilir. Standart şablonumuz vardır; kurumsal NDA şablonunuz incelenerek uyarlanabilir.",
      en: "Yes. A mutual NDA can be signed before the project or at kickoff. We have a standard template; your corporate NDA can be reviewed and adapted.",
    },
  },
  {
    id: "international",
    question: {
      tr: "Yurt dışından müşteri kabul ediyor musunuz?",
      en: "Do you work with international clients?",
    },
    answer: {
      tr: "Evet. TR ve EN iletişim kuruyoruz; toplantılar uzaktan yapılır. Sözleşme ve faturalama ülkeye göre düzenlenir — vergi ve ödeme yöntemi keşifte netleştirilir.",
      en: "Yes. We communicate in TR and EN; meetings are remote. Contracts and invoicing are arranged per country — tax and payment method clarified in discovery.",
    },
  },
  {
    id: "payment-terms",
    question: {
      tr: "Ödeme planı nasıl işler?",
      en: "How does payment work?",
    },
    answer: {
      tr: "Genelde milestone bazlı: kickoff, tasarım onayı, geliştirme aşamaları ve teslim. Küçük projelerde iki taksit de mümkün. Detaylar teklif ve sözleşmede yazılır.",
      en: "Usually milestone-based: kickoff, design approval, development phases, and delivery. Two installments are possible on smaller projects. Details are in the proposal and contract.",
    },
  },
  {
    id: "revisions",
    question: {
      tr: "Kaç revizyon hakkı var?",
      en: "How many revisions are included?",
    },
    answer: {
      tr: "Her aşamada (wireframe, UI, geliştirme) tanımlı revizyon turu teklifte belirtilir. Sınırsız revizyon sunmuyoruz; kapsam dışı değişiklikler change request olarak planlanır.",
      en: "Defined revision rounds per phase (wireframe, UI, build) are stated in the proposal. We do not offer unlimited revisions; out-of-scope changes are planned as change requests.",
    },
  },
  {
    id: "hosting",
    question: {
      tr: "Hosting ve domain kim sağlar?",
      en: "Who provides hosting and domain?",
    },
    answer: {
      tr: "Domain ve hosting hesapları müşteri adına açılır; kurulum ve deploy desteği bizden. Altyapı maliyetleri (Vercel, AWS, vb.) müşteri faturasına yansır — biz markup uygulamayız.",
      en: "Domain and hosting accounts are in the client’s name; we support setup and deploy. Infrastructure costs (Vercel, AWS, etc.) bill to the client — we do not markup hosting.",
    },
  },
  {
    id: "content",
    question: {
      tr: "Metin ve görselleri siz mi hazırlıyorsunuz?",
      en: "Do you provide copy and visuals?",
    },
    answer: {
      tr: "Varsayılan olarak müşteri içerik sağlar. Placeholder metin ve stok alternatifleri geliştirme sürecinde kullanılabilir. Profesyonel metin yazarlığı ve fotoğraf çekimi ayrı teklifle eklenebilir.",
      en: "By default the client supplies content. Placeholder copy and stock alternatives may be used during build. Professional copywriting and photography can be added via separate quote.",
    },
  },
  {
    id: "support-after",
    question: {
      tr: "Yayın sonrası destek var mı?",
      en: "Is there post-launch support?",
    },
    answer: {
      tr: "Evet. Bakım paketi (care) ile güvenlik güncellemeleri, hata triyajı ve küçük iyileştirmeler sunulur. Retainer veya talep bazlı çalışılabilir; SLA teklifte tanımlanır.",
      en: "Yes. A care package covers security updates, bug triage, and small improvements. Retainer or on-demand; SLA defined in the proposal.",
    },
  },
  {
    id: "tech-stack",
    question: {
      tr: "Hangi teknolojileri kullanıyorsunuz?",
      en: "What technologies do you use?",
    },
    answer: {
      tr: "Web için ağırlıklı Next.js ve TypeScript; mobil için Flutter veya native; backend için Node ve PostgreSQL yaygın tercihlerimizdir. Proje ihtiyacına göre stack keşifte netleştirilir — her projede aynı değildir.",
      en: "For web we mainly use Next.js and TypeScript; for mobile Flutter or native; backend often Node and PostgreSQL. Stack is clarified in discovery per project — not identical every time.",
    },
  },
];

export function getFaqById(id: string): FaqItem | undefined {
  return faqItems.find((f) => f.id === id);
}
