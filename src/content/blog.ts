import type { BlogPost } from "./types";

export const blogPosts: BlogPost[] = [
  {
    slug: "corporate-website-checklist",
    title: {
      tr: "Kurumsal web sitesi kontrol listesi",
      en: "Corporate website checklist",
    },
    excerpt: {
      tr: "Yayına almadan önce kontrol etmeniz gereken yapı, içerik, SEO ve güven unsurları — sahte istatistik olmadan pratik liste.",
      en: "Structure, content, SEO, and trust items to verify before launch — a practical list without fake stats.",
    },
    category: "web",
    seoTitle: {
      tr: "Kurumsal web sitesi kontrol listesi | Northline",
      en: "Corporate website checklist | Northline",
    },
    seoDescription: {
      tr: "Kurumsal site lansmanı öncesi bilgi mimarisi, SEO, erişilebilirlik ve güven sinyalleri için pratik kontrol listesi.",
      en: "Practical pre-launch checklist for information architecture, SEO, accessibility, and trust signals on corporate sites.",
    },
    publishedAt: "2025-11-12",
    updatedAt: "2026-01-08",
    author: "Northline",
    relatedService: "web",
    body: {
      tr: `## Neden bir kontrol listesi?

Kurumsal web sitesi çoğu zaman "tasarım bitti" denildiğinde bitmiş sayılır. Oysa yayın, sürekli güncellenen bir ürünün başlangıcıdır. Bu liste, lansman öncesi gözden kaçan maddeleri toparlar.

## Bilgi mimarisi ve navigasyon

- Ana menü 7±2 maddeyi aşmıyor mu?
- Her hizmet sayfasında net bir sonraki adım (CTA) var mı?
- Footer'da yasal sayfalar (gizlilik, KVKK) erişilebilir mi?
- 404 sayfası yönlendirme sunuyor mu?

## İçerik ve güven

- İletişim kanalları (e-posta, telefon, form) güncel mi?
- Ekip veya şirket bilgisi doğrulanabilir mi?
- Referans veya logo kullanıyorsanız izin alındı mı?
- Placeholder metin kalmadı mı?

## SEO temelleri

- Her sayfada benzersiz title ve meta description
- Open Graph ve sosyal paylaşım görselleri
- sitemap.xml ve robots.txt
- Canonical URL'ler (www / non-www, TR / EN)

## Performans ve erişilebilirlik

- Görseller optimize (WebP/AVIF, boyut)
- Klavye ile gezinme ve odak halkaları
- Renk kontrastı WCAG AA hedefi
- Core Web Vitals ölçümü (Lighthouse veya field data)

## Teknik ve güvenlik

- HTTPS zorunlu
- Form spam koruması
- CMS kullanıcı rolleri ve güçlü parola politikası
- Yedekleme planı

## Lansman sonrası

- Analitik ve (varsa) cookie onayı
- Arama konsolu kaydı
- İçerik güncelleme sorumlusu atanmış mı?

## Sonuç

Bu liste kesin süre veya dönüşüm oranı vaat etmez; yayın kalitesini artırmak için kullanılır. Projenize özel madde eklemek için keşif görüşmesinde birlikte netleştirebiliriz.`,
      en: `## Why a checklist?

A corporate site is often treated as "done" when design is approved. Launch is actually the start of a living product. This list catches items that slip before go-live.

## Information architecture and navigation

- Does primary nav stay within roughly 7±2 items?
- Does each service page have a clear next step (CTA)?
- Are legal pages (privacy, notices) reachable in the footer?
- Does the 404 page offer a way back?

## Content and trust

- Are contact channels (email, phone, form) current?
- Is company or team information verifiable?
- If you show logos or references, do you have permission?
- Is placeholder copy removed?

## SEO basics

- Unique title and meta description per page
- Open Graph and social share images
- sitemap.xml and robots.txt
- Canonical URLs (www / non-www, locales)

## Performance and accessibility

- Optimized images (WebP/AVIF, sizing)
- Keyboard navigation and focus rings
- Color contrast targeting WCAG AA
- Core Web Vitals measurement (Lighthouse or field data)

## Technical and security

- HTTPS enforced
- Form spam protection
- CMS roles and strong password policy
- Backup plan

## After launch

- Analytics and (if used) cookie consent
- Search console registration
- Owner assigned for content updates

## Conclusion

This checklist does not promise fixed timelines or conversion rates; it improves launch quality. We can tailor items to your project during discovery.`,
    },
  },
  {
    slug: "mobile-app-process",
    title: {
      tr: "Mobil uygulama geliştirme süreci",
      en: "Mobile app development process",
    },
    excerpt: {
      tr: "Keşiften store yayınına kadar mobil projede beklenen adımlar, teslimler ve onay noktaları.",
      en: "Expected steps, deliverables, and approval gates from discovery to store release.",
    },
    category: "mobile",
    seoTitle: {
      tr: "Mobil uygulama geliştirme süreci | Northline",
      en: "Mobile app development process | Northline",
    },
    seoDescription: {
      tr: "Mobil uygulama projelerinde keşif, tasarım, geliştirme, test ve App Store / Play Store yayın adımları.",
      en: "Discovery, design, engineering, QA, and App Store / Play Store release steps for mobile projects.",
    },
    publishedAt: "2025-10-03",
    updatedAt: "2026-02-14",
    author: "Northline",
    relatedService: "mobile",
    body: {
      tr: `## Mobil proje neden farklı?

Mobil uygulama web sitesinden farklı onay kapıları taşır: store politikaları, cihaz parçalanması, push izinleri ve offline beklentiler. Süreci baştan yazmak sürprizleri azaltır.

## 1. Keşif ve kapsam

Hedef platform (iOS, Android, ikisi), çekirdek akışlar, auth ve ödeme ihtiyacı netleştirilir. Store hesaplarının kime ait olacağı bu aşamada konuşulur.

## 2. Akış ve wireframe

Ekran grupları, navigasyon modeli (tab, stack, drawer) ve boş/hata durumları çizilir. Onay: bilgi mimarisi donmuş sayılır.

## 3. UI ve prototip

Marka ve platform guideline'ları (Human Interface / Material) ile UI seti. Tıklanabilir prototip kritik akışları doğrular.

## 4. Geliştirme sprintleri

API sözleşmeleri, auth, ana özellikler sprint demo'larıyla teslim edilir. Backend yoksa mock veya BaaS geçici kullanılabilir — production planı yazılı olmalı.

## 5. Test matrisi

Minimum cihaz/OS listesi, regresyon checklist'i ve store build (TestFlight / internal track) bu aşamada çalışır.

## 6. Store yayını

Metadata, ekran görüntüleri, gizlilik URL'si ve inceleme notları hazırlanır. Apple/Google onay süresi garanti edilemez.

## 7. Lansman sonrası

Crash raporlama, sürüm planı ve kullanıcı geri bildirimi kanalı kurulur. Büyüme metrikleri müşteri analitiğine bağlıdır — biz varsayılan hedef rakam vermeyiz.

## Özet

Şeffaf milestone'lar, yazılı kapsam ve haftalık demo mobil projede riski düşürür. Teklif öncesi kapsamınızı Proje Başlat sihirbazından iletebilirsiniz.`,
      en: `## Why mobile is different

Mobile apps add gates web does not: store policies, device fragmentation, push permissions, and offline expectations. Writing the process upfront reduces surprises.

## 1. Discovery and scope

Target platform (iOS, Android, both), core flows, auth, and payments are clarified. Store account ownership is agreed here.

## 2. Flows and wireframes

Screen groups, navigation model (tabs, stack, drawer), and empty/error states are mapped. Gate: information architecture considered frozen.

## 3. UI and prototype

UI set aligned to brand and platform guidelines (Human Interface / Material). Clickable prototype validates critical paths.

## 4. Engineering sprints

API contracts, auth, and core features ship via sprint demos. Without a backend, mock or BaaS may be temporary — production plan must be written.

## 5. Test matrix

Minimum device/OS list, regression checklist, and store build (TestFlight / internal track) run here.

## 6. Store release

Metadata, screenshots, privacy URL, and review notes prepared. Apple/Google review time cannot be guaranteed.

## 7. Post-launch

Crash reporting, release plan, and feedback channel established. Growth metrics depend on client analytics — we do not quote default target numbers.

## Summary

Transparent milestones, written scope, and weekly demos reduce risk on mobile. Share your scope via the project wizard before requesting a proposal.`,
    },
  },
  {
    slug: "flutter-vs-native",
    title: {
      tr: "Flutter mı, native mi?",
      en: "Flutter vs native?",
    },
    excerpt: {
      tr: "Tek kod tabanı ile iki platform mu, yoksa Swift/Kotlin mi? Kararı etkileyen gerçek faktörler — pazarlama iddiası değil.",
      en: "One codebase for two platforms or Swift/Kotlin? Real decision factors — not marketing claims.",
    },
    category: "mobile",
    seoTitle: {
      tr: "Flutter vs native karşılaştırması | Northline",
      en: "Flutter vs native comparison | Northline",
    },
    seoDescription: {
      tr: "Mobil uygulama stack seçiminde Flutter ve native geliştirmenin artıları, eksileri ve ne zaman hangisi.",
      en: "Pros, cons, and when to choose Flutter or native for mobile app stack decisions.",
    },
    publishedAt: "2025-09-18",
    updatedAt: "2026-01-22",
    author: "Northline",
    relatedService: "mobile",
    body: {
      tr: `## Kısa cevap

Doğru seçim projenin özelliklerine, ekip yetkinliğine ve üçüncü parti SDK ihtiyaçlarına bağlıdır. "Her zaman Flutter" veya "her zaman native" doğru değildir.

## Flutter ne zaman mantıklı?

- iOS ve Android birlikte, ortak UI ile hızlı MVP
- Standart auth, liste, form, API odaklı uygulamalar
- Tek ekip ile bakım maliyetini düşürme hedefi
- Özel donanım veya ağır platform API'si sınırlı

## Native ne zaman mantıklı?

- Platforma özel derin entegrasyon (HealthKit, ARKit, gelişmiş medya)
- Maksimum performans veya düşük gecikme kritik
- Mevcut native kod tabanı ve ekip
- Store'da platform guideline'ına sıkı uyum gereksinimi (nadir edge case)

## Maliyet ve süre

Flutter genelde iki platformu birlikte ucuzlatır; ancak köprü (plugin) yazımı gerektiğinde fark kapanır. Native iki ayrı kod tabanı demektir — uzun vadede feature parity maliyeti artar.

## Bakım

Flutter sürüm yükseltmeleri ve paket uyumluluğu takip gerektirir. Native'de iOS ve Android ayrı ayrı OS güncellemelerine tepki verir.

## Karar çerçevesi

Keşifte şu soruları sorarız: hangi SDK'lar şart, offline ihtiyacı var mı, ekip kim bakacak, MVP mi uzun vadeli ürün mü? Cevaplara göre öneri yazılır — sabit "kazanan" yok.

## Sonuç

Stack seçimi teknik ve iş kararıdır. Northline her iki yolu da uygular; projeye uygun olanı teklifte gerekçelendirir.`,
      en: `## Short answer

The right choice depends on features, team skills, and third-party SDK needs. Neither "always Flutter" nor "always native" is correct.

## When Flutter makes sense

- iOS and Android together with shared UI for a fast MVP
- Standard auth, lists, forms, API-driven apps
- Goal to lower maintenance with one team
- Limited custom hardware or heavy platform APIs

## When native makes sense

- Deep platform integration (HealthKit, ARKit, advanced media)
- Maximum performance or low latency is critical
- Existing native codebase and team
- Strict platform guideline edge cases (uncommon)

## Cost and timeline

Flutter often reduces cost for both platforms together; bridge/plugin work can close the gap. Native means two codebases — long-term feature parity costs more.

## Maintenance

Flutter needs version and package compatibility tracking. Native responds to iOS and Android OS updates separately.

## Decision frame

In discovery we ask: which SDKs are mandatory, is offline required, who maintains, MVP or long-term product? Recommendation follows — no fixed "winner."

## Conclusion

Stack choice is a technical and business decision. Northline builds both; we justify the fit in the proposal.`,
    },
  },
  {
    slug: "ecommerce-essential-features",
    title: {
      tr: "E-ticaret sitesinde olmazsa olmaz özellikler",
      en: "Essential e-commerce features",
    },
    excerpt: {
      tr: "Dönüşüm odaklı mağaza için ürün, checkout, güven ve operasyon tarafında minimum gereksinimler.",
      en: "Minimum requirements for product, checkout, trust, and operations in a conversion-focused store.",
    },
    category: "ecommerce",
    seoTitle: {
      tr: "E-ticaret olmazsa olmaz özellikler | Northline",
      en: "Essential e-commerce features | Northline",
    },
    seoDescription: {
      tr: "Online mağaza kurarken ürün kataloğu, ödeme, kargo, iade ve güven sinyalleri için temel özellik listesi.",
      en: "Baseline feature list for catalog, payments, shipping, returns, and trust when building an online store.",
    },
    publishedAt: "2025-08-27",
    updatedAt: "2026-03-01",
    author: "Northline",
    relatedService: "ecommerce",
    body: {
      tr: `## Mağaza sadece vitrin değil

E-ticaret sitesi ürün göstermekten ibaret değildir; stok, ödeme, lojistik ve müşteri iletişimi aynı sistemde buluşmalıdır.

## Ürün ve katalog

- Varyant (beden, renk) ve stok durumu
- Net fiyat, KDV bilgisi, indirim kuralları
- Yüksek kaliteli görseller ve zoom
- Arama ve filtreleme

## Sepet ve checkout

- Misafir checkout seçeneği
- Adres ve kargo yöntemi
- Ödeme (kart, havale — ihtiyaca göre)
- Sipariş özeti ve onay e-postası

## Güven sinyalleri

- İade ve teslimat politikası sayfaları
- İletişim ve şirket bilgisi
- Güvenli ödeme göstergeleri (PCI sağlayıcı üzerinden)
- Cookie / KVKK metinleri

## Operasyon

- Sipariş durumu (hazırlanıyor, kargoda)
- Stok düşümü ve oversell koruması
- Admin panel veya entegrasyon
- Temel rapor (sipariş listesi — gelişmiş BI ayrı)

## SEO ve performans

- Ürün URL yapısı ve schema (Product)
- Hızlı liste ve detay sayfaları
- Mobil checkout akışı kısa tutulmalı

## Bilinçli olarak sonraya bırakılabilecekler

- Sadakat programı, çok satıcı marketplace, gelişmiş kişiselleştirme, AR try-on — MVP sonrası değerlendirilir.

## Sonuç

Özellik listesi iş modelinize göre kısaltılır veya genişletilir. Keşifte "olmazsa olmaz" ile "faz 2" ayrımını birlikte yaparız.`,
      en: `## A store is not just a storefront

E-commerce is more than displaying products; inventory, payment, logistics, and customer comms must meet in one system.

## Product and catalog

- Variants (size, color) and stock status
- Clear pricing, tax info, discount rules
- Quality images and zoom
- Search and filters

## Cart and checkout

- Guest checkout option
- Address and shipping method
- Payment (card, transfer — as needed)
- Order summary and confirmation email

## Trust signals

- Returns and shipping policy pages
- Contact and company details
- Secure payment indicators (via PCI provider)
- Cookie / privacy notices

## Operations

- Order status (processing, shipped)
- Stock decrement and oversell protection
- Admin panel or integration
- Baseline reporting (order list — advanced BI separate)

## SEO and performance

- Product URL structure and Product schema
- Fast listing and detail pages
- Mobile checkout kept short

## Reasonably deferred

- Loyalty, multi-vendor marketplace, advanced personalization, AR try-on — evaluated post-MVP.

## Conclusion

The feature list shrinks or grows with your business model. In discovery we separate "must-have" from "phase 2" together.`,
    },
  },
  {
    slug: "website-pricing-factors",
    title: {
      tr: "Web sitesi fiyatını etkileyen faktörler",
      en: "What affects website pricing",
    },
    excerpt: {
      tr: "Neden her ajans farklı teklif verir? Kapsam, entegrasyon, içerik ve süreklilik maliyetlerini şeffafçe açıklıyoruz.",
      en: "Why quotes differ across studios — scope, integrations, content, and ongoing costs explained transparently.",
    },
    category: "strategy",
    seoTitle: {
      tr: "Web sitesi fiyat faktörleri | Northline",
      en: "Website pricing factors | Northline",
    },
    seoDescription: {
      tr: "Web projesi bütçesini belirleyen sayfa sayısı, CMS, dil, entegrasyon ve tasarım derinliği faktörleri.",
      en: "Factors that shape web project budgets: pages, CMS, locales, integrations, and design depth.",
    },
    publishedAt: "2025-07-15",
    updatedAt: "2026-02-02",
    author: "Northline",
    relatedService: "web",
    body: {
      tr: `## Sabit fiyat neden yok?

Her proje farklı sayfa, akış ve entegrasyon taşır. Paketler başlangıç çerçevesidir; kesin teklif keşif sonrası yazılır.

## Sayfa ve akış sayısı

Landing tek sayfadır; kurumsal sitede hizmet alt sayfaları, blog, kariyer ve form akışları maliyeti artırır.

## Tasarım derinliği

Wireframe-only ile pixel-perfect UI ve animasyon aynı iş değildir. Marka rehberi hazırsa tasarım süresi kısalır.

## CMS ve içerik

Kim içeriği girecek? Çok dilli yapı, rol bazlı editör ve onay akışı geliştirme süresini etkiler.

## Entegrasyonlar

CRM, rezervasyon, ödeme, ERP, canlı chat — her biri keşif, test ve bakım maliyeti ekler.

## Performans ve erişilebilirlik hedefi

"Çalışsın yeter" ile "Core Web Vitals ve WCAG hedefi" farklı test ve optimizasyon ister.

## Yayın sonrası

Hosting, domain, bakım retainer ve içerik güncellemesi proje bütçesinden ayrı düşünülmeli.

## Northline yaklaşımı

Fiyat talep üzerine; teklifte kapsam, milestone ve dahil/hariç maddeler yazılı olur. Sahte "başlangıç fiyatı" veya garantili ROI rakamı kullanmıyoruz.

## Sonuç

Bütçenizi keşifte paylaşmak uygun kapsam önermemize yardım eder — en ucuz değil, en net teklif hedeflenir.`,
      en: `## Why there is no flat price

Every project carries different pages, flows, and integrations. Packages frame the starting point; firm quotes follow discovery.

## Pages and flows

A landing is one page; corporate sites add service subpages, blog, careers, and form flows that increase cost.

## Design depth

Wireframe-only versus pixel-perfect UI and motion is not the same work. A ready brand guide shortens design time.

## CMS and content

Who enters content? Multilingual setup, roles, and approval flows affect build time.

## Integrations

CRM, booking, payments, ERP, live chat — each adds discovery, testing, and maintenance cost.

## Performance and accessibility targets

"Just work" versus Core Web Vitals and WCAG targets require different testing and optimization.

## After launch

Hosting, domain, care retainer, and content updates should be budgeted separately from the build.

## Northline approach

Price on request; proposals list scope, milestones, and in/out items in writing. We do not use fake "starting at" numbers or guaranteed ROI figures.

## Conclusion

Sharing your budget frame in discovery helps us propose fitting scope — clarity over cheapest quote.`,
    },
  },
  {
    slug: "building-an-mvp",
    title: {
      tr: "MVP nedir, ne zaman yeterli?",
      en: "What is an MVP, and when is it enough?",
    },
    excerpt: {
      tr: "Minimum uygulanabilir ürün kavramını abartmadan: neyi kesmeli, neyi kesmemeli, sonraki adım nasıl planlanır.",
      en: "Minimum viable product without hype: what to cut, what to keep, and how to plan what’s next.",
    },
    category: "product",
    seoTitle: {
      tr: "MVP rehberi | Northline",
      en: "MVP guide | Northline",
    },
    seoDescription: {
      tr: "SaaS ve mobil ürünlerde MVP kapsamı, doğrulama yöntemleri ve faz 2 planlaması için pratik rehber.",
      en: "Practical guide to MVP scope, validation methods, and phase 2 planning for SaaS and mobile products.",
    },
    publishedAt: "2025-06-04",
    updatedAt: "2026-01-30",
    author: "Northline",
    relatedService: "saas",
    body: {
      tr: `## MVP yanlış anlaşılma

MVP "ucuz ve eksik ürün" değildir. Tek bir değer önerisini uçtan uca çalışır halde sunan en küçük sürümdür.

## Ne kesilir?

- İkincil özellikler (sosyal paylaşım, gelişmiş raporlar)
- Otomasyonların manuel alternatifleri (ilk 10 müşteri için)
- Çoklu dil ve tema (tek dil / tek tema MVP)

## Ne kesilmez?

- Auth ve veri güvenliği temeli
- Ana kullanıcı akışının tamamlanması
- Hata ve boş durum ekranları
- Temel analitik olayları (ölçüm kurulumu)

## Doğrulama

MVP öncesi mülakat, landing testi veya concierge MVP mümkün. Lansman sonrası metrikler müşterinin analitik aracına bağlıdır — biz varsayılan büyüme yüzdesi vaat etmeyiz.

## Teknik borç

Bilinçli kısayollar dokümante edilmeli; faz 2'de refactor planı teklifte konuşulur.

## Faz 2

Backlog önceliklendirme: kullanıcı geri bildirimi + iş hedefi. Retainer veya yeni sprint sözleşmesi ile devam.

## Sonuç

MVP, hızlı öğrenme aracıdır. Kapsamını birlikte yazmak için keşif görüşmesi yeterli başlangıçtır.`,
      en: `## MVP misunderstood

An MVP is not a "cheap, broken product." It is the smallest release that delivers one value proposition end to end.

## What to cut

- Secondary features (social sharing, advanced reports)
- Manual alternatives to automation (for first customers)
- Multiple locales and themes (single locale / theme for MVP)

## What not to cut

- Auth and baseline data security
- Completion of the primary user flow
- Error and empty states
- Core analytics events (measurement setup)

## Validation

Interviews, landing tests, or concierge MVP before build are possible. Post-launch metrics depend on the client's analytics — we do not promise default growth percentages.

## Technical debt

Conscious shortcuts should be documented; phase 2 refactor is discussed in the proposal.

## Phase 2

Backlog prioritization: user feedback + business goals. Continue via retainer or new sprint contract.

## Conclusion

An MVP is a learning tool. A discovery call is enough to start writing scope together.`,
    },
  },
  {
    slug: "ui-ux-business-value",
    title: {
      tr: "UI/UX yatırımının iş değeri",
      en: "The business value of UI/UX",
    },
    excerpt: {
      tr: "Tasarımı süs olarak değil risk azaltma ve dönüşüm netliği aracı olarak görmek — abartılı ROI iddiası olmadan.",
      en: "Design as risk reduction and conversion clarity — without inflated ROI claims.",
    },
    category: "product",
    seoTitle: {
      tr: "UI/UX iş değeri | Northline",
      en: "UI/UX business value | Northline",
    },
    seoDescription: {
      tr: "UI/UX tasarımının geliştirme maliyeti, kullanılabilirlik ve marka güvenine etkisi — gerçekçi çerçeve.",
      en: "How UI/UX affects build cost, usability, and brand trust — a realistic frame.",
    },
    publishedAt: "2025-05-20",
    updatedAt: "2026-02-20",
    author: "Northline",
    relatedService: "ui-ux",
    body: {
      tr: `## Tasarım neden "lüks" değil?

Kötü akışlar geliştirmede rework, destek talebi ve kullanıcı kaybına yol açar. UI/UX, bu rework maliyetini önceden düşürmeyi hedefler.

## Geliştirme maliyetine etki

Onaylı wireframe ve UI seti ile geliştirici tahmini netleşir. Sprint ortasında "bunu böyle istemiyorduk" maliyeti düşer.

## Kullanılabilirlik

Görev tamamlama süresi, hata oranı ve form terk oranı tasarım kararlarıyla ilişkilidir — ancak her proje için önceden rakam vermek doğru değildir; ölçüm kurulumu gerekir.

## Marka güveni

Tutarlı tipografi, boşluk ve dil; profesyonellik sinyali verir. Özellikle B2B ve finans / sağlık yakını sektörlerde güven eşiğidir.

## Erişilebilirlik

WCAG hedefi yalnızca hukuk değil; daha geniş kitle ve daha iyi SEO yapısına da yardım eder.

## Ne satın almıyorsunuz?

Sınırsız revizyon, garantili %X dönüşüm artışı veya ödül jürisi vaadi. Satın aldığınız: araştırma destekli, dokümante, geliştirmeye hazır tasarım.

## Sonuç

UI/UX, ürünün ilk sürümünü daha pahalı değil; daha öngörülebilir yapar. Tasarım paketi veya tam ürün teklifi için iletişime geçebilirsiniz.`,
      en: `## Why design is not a "luxury"

Poor flows cause rework in engineering, support load, and user drop-off. UI/UX aims to reduce that rework upfront.

## Impact on build cost

Approved wireframes and UI sets clarify developer estimates. Mid-sprint "we did not want it this way" cost drops.

## Usability

Task completion time, error rate, and form abandonment relate to design decisions — but quoting numbers upfront for every project is wrong; measurement must be set up.

## Brand trust

Consistent typography, spacing, and tone signal professionalism. Especially in B2B and trust-sensitive sectors.

## Accessibility

WCAG targets are not only legal; they help reach more people and improve SEO structure.

## What you are not buying

Unlimited revisions, guaranteed %X conversion lift, or award jury promises. You buy research-informed, documented, build-ready design.

## Conclusion

UI/UX makes the first release more predictable, not necessarily more expensive. Contact us for a design package or full product proposal.`,
    },
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getBlogPostsByCategory(
  category: BlogPost["category"],
): BlogPost[] {
  return blogPosts.filter((p) => p.category === category);
}

export function getBlogPostsByService(
  serviceId: BlogPost["relatedService"],
): BlogPost[] {
  return blogPosts.filter((p) => p.relatedService === serviceId);
}
