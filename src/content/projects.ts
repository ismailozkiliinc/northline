import type { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "harbor-stay",
    status: "demo",
    featured: true,
    coverTone: "gradient-teal-calm-hospitality",
    presentation: "cinematic",
    shortTitle: {
      tr: "Butik konaklama",
      en: "Boutique stay",
    },
    solution: {
      tr: "Doğrudan rezervasyon odaklı demo web deneyimi.",
      en: "A direct-booking demo web experience.",
    },
    title: {
      tr: "Harbor Stay — Butik konaklama deneyimi",
      en: "Harbor Stay — Boutique stay experience",
    },
    sector: {
      tr: "Otel ve turizm",
      en: "Hospitality & tourism",
    },
    services: {
      tr: ["UI/UX tasarım", "Web geliştirme", "Rezervasyon akışı"],
      en: ["UI/UX design", "Web development", "Booking flow"],
    },
    platforms: {
      tr: ["Web", "Mobil tarayıcı"],
      en: ["Web", "Mobile browser"],
    },
    problem: {
      tr: "Butik oteller genelde dağınık kanallarda (OTA, telefon, sosyal medya) rezervasyon alıyor; marka deneyimi parçalanıyor ve doğrudan rezervasyon oranı düşük kalıyor.",
      en: "Boutique hotels often take bookings across fragmented channels (OTAs, phone, social), splitting the brand experience and limiting direct reservations.",
    },
    summary: {
      tr: "Sakin bir sahil kasabası butik oteli için doğrudan rezervasyon odaklı demo web deneyimi. Oda tipleri, müsaitlik ve iletişim akışları gerçek bir müşteri adına tasarlanmış örnek arayüzdür.",
      en: "A direct-booking demo web experience for a calm coastal boutique hotel. Room types, availability, and contact flows are sample interfaces designed without a real client brand.",
    },
    goals: {
      tr: [
        "Doğrudan rezervasyon talebini artırmak",
        "Oda ve deneyim hikâyesini net anlatmak",
        "Mobilde hızlı karar ve iletişim sağlamak",
      ],
      en: [
        "Increase direct booking inquiries",
        "Tell the room and experience story clearly",
        "Enable fast mobile decisions and contact",
      ],
    },
    audience: {
      tr: "Hafta sonu kaçamağı ve kısa konaklama arayan çiftler ile iş seyahatinde sakin konaklama tercih eden profesyoneller.",
      en: "Couples seeking weekend escapes and professionals who prefer calm stays on business trips.",
    },
    research: {
      tr: "OTA listelerinde tekrarlayan görsel dili, butik otellerin fiyat şeffaflığı beklentisini ve mobilde hızlı iletişim (WhatsApp / form) tercihini inceledik. Demo senaryoda gerçek kullanıcı verisi kullanılmadı.",
      en: "We reviewed OTA visual patterns, boutique pricing transparency expectations, and mobile preference for quick contact (WhatsApp / form). No real user data was used in this demo scenario.",
    },
    flows: {
      tr: "Ana sayfa → oda keşfi → müsaitlik / talep formu → teşekkür. Alternatif: deneyimler sayfası → paket talebi → iletişim. Her adımda net CTA ve geri dönüş yolu tanımlandı.",
      en: "Home → room discovery → availability / inquiry form → thank you. Alternate: experiences → package request → contact. Each step defines a clear CTA and return path.",
    },
    designSystem: {
      tr: "Sakin teal ve kum tonları, geniş boşluklar, yumuşak köşeler ve fotoğraf odaklı grid. Tipografi: Plus Jakarta Sans display, Geist body. Hareket minimal — yalnızca kart hover ve sayfa geçişlerinde.",
      en: "Calm teal and sand tones, generous spacing, soft corners, and photo-led grids. Typography: Plus Jakarta Sans display, Geist body. Motion stays minimal — card hover and page transitions only.",
    },
    tech: {
      tr: ["Next.js", "TypeScript", "Tailwind CSS", "Headless CMS (demo)", "Form API"],
      en: ["Next.js", "TypeScript", "Tailwind CSS", "Headless CMS (demo)", "Form API"],
    },
    architecture: {
      tr: "Statik + ISR sayfalar, CMS’ten oda ve deneyim içerikleri, form gönderimleri sunucu tarafı doğrulama ile. Görsel optimizasyon ve locale desteği (TR/EN) planlandı.",
      en: "Static + ISR pages, room and experience content from CMS, form submissions with server-side validation. Image optimization and locale support (TR/EN) planned.",
    },
    testing: {
      tr: "Responsive kırılımlar, form doğrulama, erişilebilirlik kontrolleri (kontrast, klavye) ve Core Web Vitals hedefleri demo kapsamında tanımlandı. Canlı trafik testi yapılmadı.",
      en: "Responsive breakpoints, form validation, accessibility checks (contrast, keyboard), and Core Web Vitals targets defined for the demo scope. No live traffic testing performed.",
    },
    results: {
      tr: "Bu bir demo case study’dir. Doğrulanmış metrik veya canlı iş sonucu henüz yok; gerçek müşteri projesi tamamlandığında güncellenecektir.",
      en: "This is a demo case study. No verified metrics or live business outcomes yet; it will be updated when a real client project completes.",
    },
    screens: {
      tr: [
        "Hero: manzara ve doğrudan rezervasyon CTA",
        "Oda listesi: filtre, fiyat aralığı ve kapasite",
        "Oda detay: galeri, olanaklar, müsaitlik formu",
        "Deneyimler: yerel aktivite kartları",
        "İletişim: harita, form ve hızlı mesaj kanalları",
      ],
      en: [
        "Hero: scenery and direct booking CTA",
        "Room listing: filters, price range, capacity",
        "Room detail: gallery, amenities, availability form",
        "Experiences: local activity cards",
        "Contact: map, form, and quick message channels",
      ],
    },
  },
  {
    slug: "ledger-flow",
    status: "demo",
    featured: true,
    coverTone: "gradient-indigo-grid-saas",
    presentation: "dashboard",
    shortTitle: {
      tr: "Finans paneli",
      en: "Finance dashboard",
    },
    solution: {
      tr: "Nakit akışı ve faturaları tek ekranda gösteren demo SaaS arayüzü.",
      en: "A demo SaaS interface showing cash flow and invoices in one view.",
    },
    title: {
      tr: "Ledger Flow — Finans ekipleri için SaaS paneli",
      en: "Ledger Flow — SaaS dashboard for finance teams",
    },
    sector: {
      tr: "SaaS ve girişimler",
      en: "SaaS & startups",
    },
    services: {
      tr: ["Ürün stratejisi", "UI/UX tasarım", "Web uygulaması geliştirme"],
      en: ["Product strategy", "UI/UX design", "Web app development"],
    },
    platforms: {
      tr: ["Web", "Tablet"],
      en: ["Web", "Tablet"],
    },
    problem: {
      tr: "KOBİ finans ekipleri gelir-gider, fatura ve nakit akışını Excel ve birbirinden kopuk araçlarla takip ediyor; raporlama geç kalıyor ve hata riski artıyor.",
      en: "SMB finance teams track revenue, expenses, invoices, and cash flow in Excel and disconnected tools; reporting lags and error risk grows.",
    },
    summary: {
      tr: "Indigo grid estetiğinde demo SaaS paneli: nakit akışı, fatura durumu ve ekip görevleri tek ekranda. Gerçek bir ürün değil; finans yazılımı tipolojisini anlatan örnek arayüz.",
      en: "An indigo-grid demo SaaS dashboard: cash flow, invoice status, and team tasks in one view. Not a live product — a sample interface illustrating finance software typology.",
    },
    goals: {
      tr: [
        "Kritik metrikleri tek bakışta sunmak",
        "Fatura ve ödeme durumunu hızlı filtrelemek",
        "Ekip görevlerini iş akışına bağlamak",
      ],
      en: [
        "Surface critical metrics at a glance",
        "Filter invoice and payment status quickly",
        "Connect team tasks to workflow",
      ],
    },
    audience: {
      tr: "5–50 kişilik şirketlerin finans operasyon sorumluları ve kurucu-ekip üyeleri.",
      en: "Finance ops owners and founder-operators at companies with 5–50 people.",
    },
    research: {
      tr: "Yaygın muhasebe panellerindeki bilgi yoğunluğu, tablo + grafik dengesi ve rol bazlı görünürlük ihtiyacı incelendi. Demo senaryoda sahte müşteri logosu veya kullanıcı sayısı kullanılmadı.",
      en: "We reviewed information density in common accounting dashboards, table + chart balance, and role-based visibility needs. No fake client logos or user counts in this demo.",
    },
    flows: {
      tr: "Giriş → dashboard özeti → fatura listesi → fatura detay → görev atama. Ayarlar ve entegrasyonlar ikincil navigasyonda. Onboarding demo akışı wireframe seviyesinde bırakıldı.",
      en: "Sign-in → dashboard summary → invoice list → invoice detail → task assignment. Settings and integrations in secondary nav. Onboarding demo flow left at wireframe level.",
    },
    designSystem: {
      tr: "Indigo-mor grid, keskin kart sınırları, monospace rakamlar ve yoğun veri tabloları. Durum renkleri: success, warning, muted. Dark-first; light tema ikincil.",
      en: "Indigo-purple grid, sharp card borders, monospace numerals, and dense data tables. Status colors: success, warning, muted. Dark-first; light theme secondary.",
    },
    tech: {
      tr: ["Next.js", "TypeScript", "PostgreSQL (demo şema)", "Chart kütüphanesi", "Auth (demo)"],
      en: ["Next.js", "TypeScript", "PostgreSQL (demo schema)", "Chart library", "Auth (demo)"],
    },
    architecture: {
      tr: "Multi-tenant hazır demo şema, API route’lar ile CRUD, sunucu tarafı filtreleme ve sayfalama. Gerçek entegrasyonlar (banka, e-fatura) kapsam dışı bırakıldı.",
      en: "Multi-tenant-ready demo schema, CRUD via API routes, server-side filtering and pagination. Real integrations (banking, e-invoice) out of scope.",
    },
    testing: {
      tr: "Tablo erişilebilirliği, boş durum ekranları, hata mesajları ve büyük veri seti performansı demo senaryolarında tanımlandı.",
      en: "Table accessibility, empty states, error messages, and large dataset performance defined in demo scenarios.",
    },
    results: {
      tr: "Demo proje — doğrulanmış dönüşüm veya kullanım metrikleri yok. Canlı müşteri verisi eklendiğinde bu bölüm güncellenecektir.",
      en: "Demo project — no verified conversion or usage metrics. This section will update when live client data is available.",
    },
    screens: {
      tr: [
        "Dashboard: nakit akışı grafiği ve KPI kartları",
        "Faturalar: filtre, durum etiketleri, toplu işlem",
        "Fatura detay: satır kalemleri, ödeme geçmişi",
        "Görevler: kanban ve atama paneli",
        "Ayarlar: ekip üyeleri ve rol görünürlüğü",
      ],
      en: [
        "Dashboard: cash flow chart and KPI cards",
        "Invoices: filters, status labels, bulk actions",
        "Invoice detail: line items, payment history",
        "Tasks: kanban and assignment panel",
        "Settings: team members and role visibility",
      ],
    },
  },
  {
    slug: "atelier-shop",
    status: "demo",
    featured: true,
    coverTone: "gradient-copper-warm-ecommerce",
    presentation: "mobile-strip",
    shortTitle: {
      tr: "El yapımı mağaza",
      en: "Handmade store",
    },
    solution: {
      tr: "Üretici hikâyesini satışa bağlayan demo e-ticaret vitrini.",
      en: "A demo storefront connecting maker story to purchase.",
    },
    title: {
      tr: "Atelier Shop — El yapımı ürün mağazası",
      en: "Atelier Shop — Handmade product store",
    },
    sector: {
      tr: "E-ticaret",
      en: "E-commerce",
    },
    services: {
      tr: ["UI/UX tasarım", "E-ticaret geliştirme", "Ödeme entegrasyonu (demo)"],
      en: ["UI/UX design", "E-commerce development", "Payment integration (demo)"],
    },
    platforms: {
      tr: ["Web", "Mobil tarayıcı"],
      en: ["Web", "Mobile browser"],
    },
    problem: {
      tr: "El yapımı ve sınırlı üretim ürünlerde stok az, hikâye önemli; genel pazar yeri şablonları üretici markayı ve ürün hikâyesini yeterince taşımıyor.",
      en: "For handmade and limited-run products, stock is low and story matters; generic marketplace templates fail to carry the maker brand and product narrative.",
    },
    summary: {
      tr: "Sıcak bakır tonlarında demo e-ticaret vitrini: koleksiyonlar, ürün hikâyesi ve sepet akışı. Gerçek ödeme veya stok sistemi bağlı değil.",
      en: "A warm copper-toned demo e-commerce storefront: collections, product story, and cart flow. No live payment or inventory system connected.",
    },
    goals: {
      tr: [
        "Üretici hikâyesini satışa bağlamak",
        "Sınırlı stok ve varyant seçimini net göstermek",
        "Mobilde hızlı sepet ve checkout deneyimi sunmak",
      ],
      en: [
        "Connect maker story to purchase",
        "Show limited stock and variants clearly",
        "Deliver fast mobile cart and checkout experience",
      ],
    },
    audience: {
      tr: "Tasarım ve el yapımı ürünlere ilgi duyan, hikâye odaklı alışveriş yapan online müşteriler.",
      en: "Online shoppers interested in design and handmade goods who value story-driven purchases.",
    },
    research: {
      tr: "Bağımsız marka sitelerinde koleksiyon anlatımı, ürün detayında malzeme/üretim bilgisi ve güven sinyalleri (iade, kargo) incelendi.",
      en: "We reviewed collection storytelling on indie brand sites, material/production details on product pages, and trust signals (returns, shipping).",
    },
    flows: {
      tr: "Ana sayfa → koleksiyon → ürün detay → sepet → checkout (demo). Hesap oluşturma opsiyonel; misafir checkout öncelikli.",
      en: "Home → collection → product detail → cart → checkout (demo). Account creation optional; guest checkout prioritized.",
    },
    designSystem: {
      tr: "Bakır, krem ve kömür tonları; serif display başlıklar; ürün fotoğrafı odaklı asimetrik grid. Mikro animasyon: sepete ekleme geri bildirimi.",
      en: "Copper, cream, and charcoal tones; serif display headings; photo-led asymmetric grid. Micro-motion: add-to-cart feedback.",
    },
    tech: {
      tr: ["Next.js", "TypeScript", "Headless commerce (demo)", "Stripe test modu", "CMS"],
      en: ["Next.js", "TypeScript", "Headless commerce (demo)", "Stripe test mode", "CMS"],
    },
    architecture: {
      tr: "Ürün ve koleksiyon içerikleri CMS’ten; sepet oturum tabanlı; checkout demo endpoint. Envanter senkronizasyonu mock.",
      en: "Product and collection content from CMS; session-based cart; demo checkout endpoint. Inventory sync mocked.",
    },
    testing: {
      tr: "Sepet edge case’leri, varyant seçimi, boş sepet, ödeme hata durumları ve mobil checkout adımları test senaryolarına alındı.",
      en: "Cart edge cases, variant selection, empty cart, payment error states, and mobile checkout steps included in test scenarios.",
    },
    results: {
      tr: "Demo e-ticaret arayüzü — satış, dönüşüm veya AOV metrikleri doğrulanmadı. Gerçek mağaza lansmanı sonrası güncellenecek.",
      en: "Demo e-commerce interface — sales, conversion, or AOV metrics not verified. Will update after a real store launch.",
    },
    screens: {
      tr: [
        "Ana sayfa: öne çıkan koleksiyon ve üretici hikâyesi",
        "Koleksiyon grid: filtre ve sıralama",
        "Ürün detay: galeri, varyant, stok uyarısı",
        "Sepet: miktar, kargo özeti",
        "Checkout: adres, ödeme (demo), sipariş onayı",
      ],
      en: [
        "Home: featured collection and maker story",
        "Collection grid: filter and sort",
        "Product detail: gallery, variant, stock notice",
        "Cart: quantity, shipping summary",
        "Checkout: address, payment (demo), order confirmation",
      ],
    },
  },
  {
    slug: "campus-learn",
    status: "demo",
    featured: true,
    coverTone: "gradient-teal-clinical-healthcare",
    presentation: "banner",
    shortTitle: {
      tr: "Sağlık yolu",
      en: "Care Path",
    },
    solution: {
      tr: "Hasta yolculuğu ve klinik koordinasyonu tek panelde gösteren demo sağlık arayüzü.",
      en: "A demo healthcare interface showing patient journey and clinical coordination in one panel.",
    },
    title: {
      tr: "Care Path — Sağlık yönetim platformu",
      en: "Care Path — Healthcare management platform",
    },
    sector: {
      tr: "Sağlık",
      en: "Healthcare",
    },
    services: {
      tr: ["UI/UX tasarım", "Web uygulaması", "Klinik akış tasarımı"],
      en: ["UI/UX design", "Web application", "Clinical flow design"],
    },
    platforms: {
      tr: ["Web", "Tablet", "Mobil tarayıcı"],
      en: ["Web", "Tablet", "Mobile browser"],
    },
    problem: {
      tr: "Klinik ekipler randevu, hasta dosyası ve takip görevlerini birbirinden kopuk sistemlerde yönetiyor; bakım yolculuğu parçalanıyor ve koordinasyon gecikebiliyor.",
      en: "Clinical teams manage appointments, patient records, and follow-up tasks in disconnected systems; the care journey fragments and coordination can lag.",
    },
    summary: {
      tr: "Sakin teal tonlarda demo sağlık yönetim arayüzü: hasta yolculuğu, randevu akışı ve klinik görev paneli. Gerçek hasta verisi, kurum logosu veya doğrulanmış klinik sonuç içermez.",
      en: "A calm teal demo healthcare management interface: patient journey, appointment flow, and clinical task panel. Contains no real patient data, institution logos, or verified clinical outcomes.",
    },
    goals: {
      tr: [
        "Hasta yolculuğunu uçtan uca görünür kılmak",
        "Randevu ve takip görevlerini tek akışta toplamak",
        "Klinisyen ve koordinatör rollerini net ayırmak",
      ],
      en: [
        "Make the patient journey visible end to end",
        "Consolidate appointments and follow-up tasks in one flow",
        "Separate clinician and coordinator roles clearly",
      ],
    },
    audience: {
      tr: "Poliklinik ve küçük klinik ekipleri, hasta koordinasyonu yapan sağlık operasyon sorumluları.",
      en: "Outpatient and small clinic teams, plus health operations staff coordinating patient care.",
    },
    research: {
      tr: "Hasta portallarında randevu durumu, reçete özeti ve mesajlaşma yerleşimleri; klinik panellerde görev listesi ve hasta zaman çizelgesi kalıpları incelendi. Demo senaryoda sahte hasta sayısı veya iyileşme oranı kullanılmadı.",
      en: "We reviewed appointment status, prescription summary, and messaging placement in patient portals; task lists and patient timelines in clinical dashboards. No fake patient counts or recovery rates in this demo.",
    },
    flows: {
      tr: "Hasta özeti → randevu geçmişi → aktif tedavi planı → görev / mesaj (demo) → belge yükleme (placeholder). Koordinatör paneli ayrı giriş.",
      en: "Patient summary → appointment history → active care plan → task / message (demo) → document upload (placeholder). Coordinator panel on separate sign-in.",
    },
    designSystem: {
      tr: "Teal ve açık arka plan, yumuşak köşeler, okunabilir tipografi ve sakin durum renkleri. Klinik yoğunlukta bilgi hiyerarşisi; dikkat dağıtmayan bildirim katmanı.",
      en: "Teal and light background, soft corners, readable typography, and calm status colors. Information hierarchy suited to clinical density; non-distracting notification layer.",
    },
    tech: {
      tr: ["Next.js", "TypeScript", "PostgreSQL (demo şema)", "Auth rolleri", "Form API"],
      en: ["Next.js", "TypeScript", "PostgreSQL (demo schema)", "Role-based auth", "Form API"],
    },
    architecture: {
      tr: "Hasta, randevu ve görev hiyerarşisi; olay kayıtları sunucu tarafında; belge depolama demo endpoint. HL7 / FHIR entegrasyonu ve gerçek EHR bağlantısı kapsam dışı.",
      en: "Patient, appointment, and task hierarchy; event logs server-side; document storage via demo endpoint. HL7 / FHIR integration and live EHR connection out of scope.",
    },
    testing: {
      tr: "Rol bazlı erişim, form doğrulama, boş durum ekranları, klavye navigasyonu ve erişilebilirlik kontrastı demo senaryolarında tanımlandı.",
      en: "Role-based access, form validation, empty states, keyboard navigation, and accessibility contrast defined in demo scenarios.",
    },
    results: {
      tr: "Demo sağlık arayüzü — randevu süresi, hasta memnuniyeti veya klinik verimlilik metrikleri doğrulanmadı. Gerçek kurum projesi tamamlandığında güncellenecektir.",
      en: "Demo healthcare interface — appointment duration, patient satisfaction, or clinical efficiency metrics not verified. Will update when a real institution project completes.",
    },
    screens: {
      tr: [
        "Hasta özeti: aktif plan, son randevu, bekleyen görevler",
        "Randevu akışı: müsaitlik, onay, hatırlatma durumu",
        "Klinik panel: görev listesi, hasta zaman çizelgesi",
        "Mesajlaşma: koordinatör–hasta iletişimi (demo)",
        "Belge merkezi: rapor ve reçete yükleme (placeholder)",
      ],
      en: [
        "Patient summary: active plan, last appointment, pending tasks",
        "Appointment flow: availability, confirmation, reminder status",
        "Clinical panel: task list, patient timeline",
        "Messaging: coordinator–patient communication (demo)",
        "Document hub: report and prescription upload (placeholder)",
      ],
    },
  },
  {
    slug: "table-reserve",
    status: "demo",
    featured: true,
    coverTone: "gradient-charcoal-luxury-dining",
    presentation: "cinematic",
    shortTitle: {
      tr: "Masa rezervasyonu",
      en: "Table reserve",
    },
    solution: {
      tr: "Rezervasyon ve sipariş akışını birleştiren demo restoran deneyimi.",
      en: "A demo restaurant experience combining reservation and ordering flows.",
    },
    title: {
      tr: "Table Reserve — Lüks restoran rezervasyon ve sipariş",
      en: "Table Reserve — Luxury restaurant reservation & ordering",
    },
    sector: {
      tr: "Yeme-içme ve konaklama",
      en: "Food & beverage",
    },
    services: {
      tr: ["UI/UX tasarım", "Web geliştirme", "Rezervasyon akışı"],
      en: ["UI/UX design", "Web development", "Reservation flow"],
    },
    platforms: {
      tr: ["Web", "Mobil tarayıcı"],
      en: ["Web", "Mobile browser"],
    },
    problem: {
      tr: "Fine dining restoranlar rezervasyonu telefon veya üçüncü taraf uygulamalarda alıyor; marka deneyimi parçalanıyor, masa ve menü bilgisi dağınık kalıyor.",
      en: "Fine dining restaurants take reservations by phone or third-party apps; the brand experience splits and table plus menu information stays scattered.",
    },
    summary: {
      tr: "Koyu lüks estetiğinde demo restoran arayüzü: masa rezervasyonu, menü keşfi ve sipariş özeti. Gerçek POS, ödeme veya stok sistemi bağlı değil.",
      en: "A dark luxury demo restaurant interface: table reservation, menu discovery, and order summary. No live POS, payment, or inventory system connected.",
    },
    goals: {
      tr: [
        "Rezervasyon talebini marka içinde toplamak",
        "Menü ve deneyim hikâyesini satışa bağlamak",
        "Mobilde hızlı masa seçimi ve onay sağlamak",
      ],
      en: [
        "Keep reservation requests within the brand",
        "Connect menu and experience story to purchase",
        "Enable fast mobile table selection and confirmation",
      ],
    },
    audience: {
      tr: "Özel akşam yemeği ve deneyim arayan şehirli misafirler; restoran operasyon ve rezervasyon ekipleri.",
      en: "Urban guests seeking special dinners and experiences; restaurant operations and reservation teams.",
    },
    research: {
      tr: "Lüks restoran sitelerinde görsel anlatım, masa kapasitesi gösterimi ve menü kategorisi yerleşimi incelendi. Demo senaryoda sahte doluluk oranı veya gelir metrikleri kullanılmadı.",
      en: "We reviewed visual storytelling, table capacity display, and menu category placement on luxury restaurant sites. No fake occupancy rates or revenue metrics in this demo.",
    },
    flows: {
      tr: "Ana sayfa → tarih / kişi sayısı seçimi → masa onayı → menü önizleme → sipariş özeti (demo) → teşekkür. Alternatif: etkinlik menüsü → paket talebi → iletişim.",
      en: "Home → date / party size selection → table confirmation → menu preview → order summary (demo) → thank you. Alternate: event menu → package request → contact.",
    },
    designSystem: {
      tr: "Kömür, altın vurgu ve derin siyah arka plan; serif display başlıklar; fotoğraf odaklı tam genişlik bölümler. Hareket minimal — yalnızca kart hover ve geçişler.",
      en: "Charcoal, gold accent, and deep black background; serif display headings; photo-led full-width sections. Motion stays minimal — card hover and transitions only.",
    },
    tech: {
      tr: ["Next.js", "TypeScript", "Tailwind CSS", "Headless CMS (demo)", "Form API"],
      en: ["Next.js", "TypeScript", "Tailwind CSS", "Headless CMS (demo)", "Form API"],
    },
    architecture: {
      tr: "Statik + ISR sayfalar, CMS'ten menü ve etkinlik içerikleri, rezervasyon talepleri sunucu tarafı doğrulama ile. POS ve ödeme entegrasyonu kapsam dışı.",
      en: "Static + ISR pages, menu and event content from CMS, reservation requests with server-side validation. POS and payment integration out of scope.",
    },
    testing: {
      tr: "Responsive kırılımlar, tarih / kişi sayısı doğrulama, boş müsaitlik durumu ve erişilebilirlik kontrolleri demo kapsamında tanımlandı.",
      en: "Responsive breakpoints, date / party size validation, empty availability states, and accessibility checks defined for the demo scope.",
    },
    results: {
      tr: "Demo restoran arayüzü — rezervasyon dönüşümü, masa doluluk veya sipariş hacmi metrikleri doğrulanmadı. Gerçek restoran lansmanı sonrası güncellenecektir.",
      en: "Demo restaurant interface — reservation conversion, table occupancy, or order volume metrics not verified. Will update after a real restaurant launch.",
    },
    screens: {
      tr: [
        "Hero: atmosfer görseli ve rezervasyon CTA",
        "Rezervasyon: tarih, saat, kişi sayısı seçimi",
        "Menü: kategori, alerjen ve öneri etiketleri",
        "Masa onayı: özet ve özel istek alanı",
        "Sipariş özeti: demo sepet ve teşekkür ekranı",
      ],
      en: [
        "Hero: atmosphere imagery and reservation CTA",
        "Reservation: date, time, party size selection",
        "Menu: category, allergen, and recommendation labels",
        "Table confirmation: summary and special request field",
        "Order summary: demo cart and thank-you screen",
      ],
    },
  },
  {
    slug: "pulse-flow",
    status: "demo",
    featured: true,
    coverTone: "gradient-slate-workflow-automation",
    presentation: "dashboard",
    shortTitle: {
      tr: "İş akışı paneli",
      en: "Workflow hub",
    },
    solution: {
      tr: "Görev, otomasyon ve ekip akışlarını tek panelde gösteren demo çalışma alanı.",
      en: "A demo workspace showing tasks, automations, and team flows in one panel.",
    },
    title: {
      tr: "Pulse Flow — Otomasyon odaklı çalışma alanı",
      en: "Pulse Flow — Automation-focused workspace",
    },
    sector: {
      tr: "SaaS ve girişimler",
      en: "SaaS & startups",
    },
    services: {
      tr: ["Ürün stratejisi", "UI/UX tasarım", "Web uygulaması geliştirme"],
      en: ["Product strategy", "UI/UX design", "Web app development"],
    },
    platforms: {
      tr: ["Web", "Tablet"],
      en: ["Web", "Tablet"],
    },
    problem: {
      tr: "Operasyon ekipleri görev takibi, otomasyon kuralları ve ekip bildirimlerini farklı araçlarda yönetiyor; iş akışı parçalanıyor ve bağlam kaybolabiliyor.",
      en: "Operations teams manage task tracking, automation rules, and team notifications across separate tools; workflows fragment and context gets lost.",
    },
    summary: {
      tr: "Slate grid estetiğinde demo çalışma alanı: görev kuyruğu, otomasyon tetikleyicileri ve ekip aktivite akışı. Gerçek entegrasyon veya canlı otomasyon motoru bağlı değil.",
      en: "A slate-grid demo workspace: task queue, automation triggers, and team activity feed. No live integrations or automation engine connected.",
    },
    goals: {
      tr: [
        "Görev ve otomasyon durumunu tek bakışta sunmak",
        "Tetikleyici–aksiyon akışlarını görselleştirmek",
        "Ekip aktivitesini iş bağlamında göstermek",
      ],
      en: [
        "Surface task and automation status at a glance",
        "Visualize trigger–action flows",
        "Show team activity in work context",
      ],
    },
    audience: {
      tr: "5–30 kişilik ekiplerin operasyon sorumluları, proje koordinatörleri ve kurucu-ekip üyeleri.",
      en: "Operations owners, project coordinators, and founder-operators at teams of 5–30 people.",
    },
    research: {
      tr: "Proje yönetimi ve otomasyon panellerinde bilgi yoğunluğu, tetikleyici düzenleme kalıpları ve aktivite akışı yerleşimi incelendi. Demo senaryoda sahte kullanıcı sayısı veya zaman tasarrufu iddiası kullanılmadı.",
      en: "We reviewed information density, trigger editing patterns, and activity feed placement in project management and automation dashboards. No fake user counts or time-saved claims in this demo.",
    },
    flows: {
      tr: "Giriş → dashboard özeti → görev kuyruğu → otomasyon düzenleyici (demo) → aktivite akışı. Entegrasyonlar ve webhook ayarları ikincil navigasyonda.",
      en: "Sign-in → dashboard summary → task queue → automation editor (demo) → activity feed. Integrations and webhook settings in secondary nav.",
    },
    designSystem: {
      tr: "Slate-mor grid, keskin kart sınırları, monospace sayaçlar ve yoğun veri tabloları. Durum renkleri: active, paused, muted. Dark-first; light tema ikincil.",
      en: "Slate-purple grid, sharp card borders, monospace counters, and dense data tables. Status colors: active, paused, muted. Dark-first; light theme secondary.",
    },
    tech: {
      tr: ["Next.js", "TypeScript", "PostgreSQL (demo şema)", "Webhook mock", "Auth (demo)"],
      en: ["Next.js", "TypeScript", "PostgreSQL (demo schema)", "Webhook mock", "Auth (demo)"],
    },
    architecture: {
      tr: "Görev, otomasyon kuralı ve olay hiyerarşisi; tetikleyici simülasyonu demo endpoint ile. Gerçek üçüncü taraf entegrasyonları kapsam dışı bırakıldı.",
      en: "Task, automation rule, and event hierarchy; trigger simulation via demo endpoint. Real third-party integrations out of scope.",
    },
    testing: {
      tr: "Tablo erişilebilirliği, boş kuyruk durumları, otomasyon hata mesajları ve büyük olay listesi performansı demo senaryolarında tanımlandı.",
      en: "Table accessibility, empty queue states, automation error messages, and large event list performance defined in demo scenarios.",
    },
    results: {
      tr: "Demo çalışma alanı — görev tamamlama oranı, otomasyon kullanımı veya verimlilik metrikleri doğrulanmadı. Canlı müşteri verisi eklendiğinde güncellenecektir.",
      en: "Demo workspace — task completion rate, automation usage, or efficiency metrics not verified. Will update when live client data is available.",
    },
    screens: {
      tr: [
        "Dashboard: aktif görevler ve otomasyon durumu",
        "Görev kuyruğu: filtre, öncelik ve atama",
        "Otomasyon düzenleyici: tetikleyici–aksiyon zinciri (demo)",
        "Aktivite akışı: ekip olayları ve zaman damgası",
        "Ayarlar: ekip üyeleri ve webhook mock",
      ],
      en: [
        "Dashboard: active tasks and automation status",
        "Task queue: filter, priority, and assignment",
        "Automation editor: trigger–action chain (demo)",
        "Activity feed: team events and timestamps",
        "Settings: team members and webhook mock",
      ],
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getDemoProjects(): Project[] {
  return projects.filter((p) => p.status === "demo");
}
