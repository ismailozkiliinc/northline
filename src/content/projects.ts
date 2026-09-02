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
      tr: "Doğrudan rezervasyon odaklı web deneyimi.",
      en: "A direct-booking web experience.",
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
      tr: "Sakin bir sahil kasabası butik oteli için doğrudan rezervasyon odaklı web deneyimi. Oda tipleri, müsaitlik ve iletişim akışları gerçek bir müşteri adına tasarlanmış tasarlanmış arayüzdür.",
      en: "A direct-booking web experience for a calm coastal boutique hotel. Room types, availability, and contact flows are interfaces designed for direct booking and brand storytelling.",
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
      tr: "OTA listelerinde tekrarlayan görsel dili, butik otellerin fiyat şeffaflığı beklentisini ve mobilde hızlı iletişim (WhatsApp / form) tercihini inceledik. Proje kapsamında gerçek kullanıcı verisi kullanılmadı.",
      en: "We reviewed OTA visual patterns, boutique pricing transparency expectations, and mobile preference for quick contact (WhatsApp / form). No real user data was used in this project scope.",
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
      tr: ["Next.js", "TypeScript", "Tailwind CSS", "Headless CMS", "Form API"],
      en: ["Next.js", "TypeScript", "Tailwind CSS", "Headless CMS", "Form API"],
    },
    architecture: {
      tr: "Statik + ISR sayfalar, CMS’ten oda ve deneyim içerikleri, form gönderimleri sunucu tarafı doğrulama ile. Görsel optimizasyon ve locale desteği (TR/EN) planlandı.",
      en: "Static + ISR pages, room and experience content from CMS, form submissions with server-side validation. Image optimization and locale support (TR/EN) planned.",
    },
    testing: {
      tr: "Responsive kırılımlar, form doğrulama, erişilebilirlik kontrolleri (kontrast, klavye) ve Core Web Vitals hedefleri proje kapsamında tanımlandı.",
      en: "Responsive breakpoints, form validation, accessibility checks (contrast, keyboard), and Core Web Vitals targets defined for the project scope. No live traffic testing performed.",
    },
    results: {
      tr: "Doğrudan rezervasyon kanalı, mobil deneyim ve içerik yapısı marka hikâyesini destekleyecek şekilde kurgulandı.",
      en: "Direct booking channel, mobile experience, and content structure built to support the brand story.",
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
      tr: "Nakit akışı ve faturaları tek ekranda gösteren SaaS arayüzü.",
      en: "A SaaS interface showing cash flow and invoices in one view.",
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
      tr: "Indigo grid estetiğinde SaaS paneli: nakit akışı, fatura durumu ve ekip görevleri tek ekranda. Gerçek bir ürün değil; nakit akışı, faturalar ve ekip görevlerini tek ekranda birleştiren finans arayüzü.",
      en: "An indigo-grid SaaS dashboard: cash flow, invoice status, and team tasks in one view. Finance software typology with cash flow, invoices, and team tasks in one view.",
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
      tr: "Yaygın muhasebe panellerindeki bilgi yoğunluğu, tablo + grafik dengesi ve rol bazlı görünürlük ihtiyacı incelendi. Proje kapsamında marka ve kullanıcı verisi proje gereksinimlerine göre modellendi.",
      en: "We reviewed information density in common accounting dashboards, table + chart balance, and role-based visibility needs. Marka ve kullanıcı verisi gerçek proje gereksinimlerine göre modellendi.",
    },
    flows: {
      tr: "Giriş → dashboard özeti → fatura listesi → fatura detay → görev atama. Ayarlar ve entegrasyonlar ikincil navigasyonda. Onboarding akışı wireframe seviyesinde tasarlandı.",
      en: "Sign-in → dashboard summary → invoice list → invoice detail → task assignment. Settings and integrations in secondary nav. Onboarding flow designed at wireframe level.",
    },
    designSystem: {
      tr: "Indigo-mor grid, keskin kart sınırları, monospace rakamlar ve yoğun veri tabloları. Durum renkleri: success, warning, muted. Dark-first; light tema ikincil.",
      en: "Indigo-purple grid, sharp card borders, monospace numerals, and dense data tables. Status colors: success, warning, muted. Dark-first; light theme secondary.",
    },
    tech: {
      tr: ["Next.js", "TypeScript", "PostgreSQL", "Chart kütüphanesi", "Auth"],
      en: ["Next.js", "TypeScript", "PostgreSQL", "Chart library", "Auth"],
    },
    architecture: {
      tr: "Multi-tenant hazır şema, API route’lar ile CRUD, sunucu tarafı filtreleme ve sayfalama. Gerçek entegrasyonlar (banka, e-fatura) kapsam dışı bırakıldı.",
      en: "Multi-tenant-ready schema, CRUD via API routes, server-side filtering and pagination. Real integrations (banking, e-invoice) out of scope.",
    },
    testing: {
      tr: "Tablo erişilebilirliği, boş durum ekranları, hata mesajları ve büyük veri seti performansı test sürecinde tanımlandı.",
      en: "Table accessibility, empty states, error messages, and large dataset performance defined in test scenarios.",
    },
    results: {
      tr: "Nakit akışı, fatura takibi ve ekip görevleri tek panelde birleştirildi; rol bazlı görünürlük ve performans hedefleri tanımlandı.",
      en: "Cash flow, invoice tracking, and team tasks unified in one panel with role-based visibility and performance targets.",
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
      tr: "Üretici hikâyesini satışa bağlayan e-ticaret vitrini.",
      en: "A storefront connecting maker story to purchase.",
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
      tr: ["UI/UX tasarım", "E-ticaret geliştirme", "Ödeme entegrasyonu"],
      en: ["UI/UX design", "E-commerce development", "Payment integration"],
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
      tr: "Sıcak bakır tonlarında e-ticaret vitrini: koleksiyonlar, ürün hikâyesi ve sepet akışı. Ödeme ve stok entegrasyonları production aşamasında kapsamlandı.",
      en: "A warm copper-toned e-commerce storefront: collections, product story, and cart flow. Payment and inventory integrations scoped for production rollout.",
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
      tr: "Ana sayfa → koleksiyon → ürün detay → sepet → checkout. Hesap oluşturma opsiyonel; misafir checkout öncelikli.",
      en: "Home → collection → product detail → cart → checkout. Account creation optional; guest checkout prioritized.",
    },
    designSystem: {
      tr: "Bakır, krem ve kömür tonları; serif display başlıklar; ürün fotoğrafı odaklı asimetrik grid. Mikro animasyon: sepete ekleme geri bildirimi.",
      en: "Copper, cream, and charcoal tones; serif display headings; photo-led asymmetric grid. Micro-motion: add-to-cart feedback.",
    },
    tech: {
      tr: ["Next.js", "TypeScript", "Headless commerce", "Stripe test modu", "CMS"],
      en: ["Next.js", "TypeScript", "Headless commerce", "Stripe test mode", "CMS"],
    },
    architecture: {
      tr: "Ürün ve koleksiyon içerikleri CMS’ten; sepet oturum tabanlı; checkout API endpoint. Envanter senkronizasyonu production aşamasında planlandı.",
      en: "Product and collection content from CMS; session-based cart; checkout API. Inventory sync planned for production phase.",
    },
    testing: {
      tr: "Sepet edge case’leri, varyant seçimi, boş sepet, ödeme hata durumları ve mobil checkout adımları test senaryolarına alındı.",
      en: "Cart edge cases, variant selection, empty cart, payment error states, and mobile checkout steps included in test scenarios.",
    },
    results: {
      tr: "Koleksiyon vitrini, ürün hikâyesi ve sepet akışı marka deneyimini satışa bağlayacak şekilde tasarlandı.",
      en: "Collection storefront, product storytelling, and cart flow designed to connect brand experience to purchase.",
    },
    screens: {
      tr: [
        "Ana sayfa: öne çıkan koleksiyon ve üretici hikâyesi",
        "Koleksiyon grid: filtre ve sıralama",
        "Ürün detay: galeri, varyant, stok uyarısı",
        "Sepet: miktar, kargo özeti",
        "Checkout: adres, ödeme, sipariş onayı",
      ],
      en: [
        "Home: featured collection and maker story",
        "Collection grid: filter and sort",
        "Product detail: gallery, variant, stock notice",
        "Cart: quantity, shipping summary",
        "Checkout: address, payment, order confirmation",
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
      tr: "Hasta yolculuğu ve klinik koordinasyonu tek panelde gösteren sağlık arayüzü.",
      en: "A healthcare interface showing patient journey and clinical coordination in one panel.",
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
      tr: "Sakin teal tonlarda sağlık yönetim arayüzü: hasta yolculuğu, randevu akışı ve klinik görev paneli. Hasta yolculuğu, randevu akışı ve klinik koordinasyon tek panelde.",
      en: "A calm teal healthcare management interface: patient journey, appointment flow, and clinical task panel. Patient journey, appointments, and clinical coordination in a unified panel.",
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
      tr: "Hasta portallarında randevu durumu, reçete özeti ve mesajlaşma yerleşimleri; klinik panellerde görev listesi ve hasta zaman çizelgesi kalıpları incelendi. Proje kapsamında hasta portalı ve klinik panel kalıpları arayüz tasarımına yansıtıldı.",
      en: "We reviewed appointment status, prescription summary, and messaging placement in patient portals; task lists and patient timelines in clinical dashboards. Patient portal and clinical dashboard patterns informed the interface design.",
    },
    flows: {
      tr: "Hasta özeti → randevu geçmişi → aktif tedavi planı → görev / mesaj → belge yükleme. Koordinatör paneli ayrı giriş.",
      en: "Patient summary → appointment history → active care plan → task / message → document upload. Coordinator panel on separate sign-in.",
    },
    designSystem: {
      tr: "Teal ve açık arka plan, yumuşak köşeler, okunabilir tipografi ve sakin durum renkleri. Klinik yoğunlukta bilgi hiyerarşisi; dikkat dağıtmayan bildirim katmanı.",
      en: "Teal and light background, soft corners, readable typography, and calm status colors. Information hierarchy suited to clinical density; non-distracting notification layer.",
    },
    tech: {
      tr: ["Next.js", "TypeScript", "PostgreSQL", "Auth rolleri", "Form API"],
      en: ["Next.js", "TypeScript", "PostgreSQL", "Role-based auth", "Form API"],
    },
    architecture: {
      tr: "Hasta, randevu ve görev hiyerarşisi; olay kayıtları sunucu tarafında; belge depolama API endpoint. HL7 / FHIR entegrasyonu ve gerçek EHR bağlantısı kapsam dışı.",
      en: "Patient, appointment, and task hierarchy; event logs server-side; document storage via API endpoint. HL7 / FHIR integration and live EHR connection out of scope.",
    },
    testing: {
      tr: "Rol bazlı erişim, form doğrulama, boş durum ekranları, klavye navigasyonu ve erişilebilirlik kontrastı test sürecinde tanımlandı.",
      en: "Role-based access, form validation, empty states, keyboard navigation, and accessibility contrast defined in test scenarios.",
    },
    results: {
      tr: "Hasta yolculuğu, randevu akışı ve klinik koordinasyon paneli erişilebilirlik ve rol bazlı güvenlik ile teslim edildi.",
      en: "Patient journey, appointment flow, and clinical coordination panel delivered with accessibility and role-based security.",
    },
    screens: {
      tr: [
        "Hasta özeti: aktif plan, son randevu, bekleyen görevler",
        "Randevu akışı: müsaitlik, onay, hatırlatma durumu",
        "Klinik panel: görev listesi, hasta zaman çizelgesi",
        "Mesajlaşma: koordinatör–hasta iletişimi",
        "Belge merkezi: rapor ve reçete yükleme",
      ],
      en: [
        "Patient summary: active plan, last appointment, pending tasks",
        "Appointment flow: availability, confirmation, reminder status",
        "Clinical panel: task list, patient timeline",
        "Messaging: coordinator–patient communication",
        "Document hub: report and prescription upload",
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
      tr: "Rezervasyon ve sipariş akışını birleştiren restoran deneyimi.",
      en: "A restaurant experience combining reservation and ordering flows.",
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
      tr: "Koyu lüks estetiğinde restoran arayüzü: masa rezervasyonu, menü keşfi ve sipariş özeti. POS, ödeme ve stok entegrasyonları production aşamasında kapsamlandı.",
      en: "A dark luxury restaurant interface: table reservation, menu discovery, and order summary. POS, payment, and inventory integrations scoped for production rollout.",
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
      tr: "Lüks restoran sitelerinde görsel anlatım, masa kapasitesi gösterimi ve menü kategorisi yerleşimi incelendi. Proje kapsamında sahte doluluk oranı veya gelir metrikleri kullanılmadı.",
      en: "We reviewed visual storytelling, table capacity display, and menu category placement on luxury restaurant sites. Luxury restaurant site patterns informed reservation and menu layout.",
    },
    flows: {
      tr: "Ana sayfa → tarih / kişi sayısı seçimi → masa onayı → menü önizleme → sipariş özeti → teşekkür. Alternatif: etkinlik menüsü → paket talebi → iletişim.",
      en: "Home → date / party size selection → table confirmation → menu preview → order summary → thank you. Alternate: event menu → package request → contact.",
    },
    designSystem: {
      tr: "Kömür, altın vurgu ve derin siyah arka plan; serif display başlıklar; fotoğraf odaklı tam genişlik bölümler. Hareket minimal — yalnızca kart hover ve geçişler.",
      en: "Charcoal, gold accent, and deep black background; serif display headings; photo-led full-width sections. Motion stays minimal — card hover and transitions only.",
    },
    tech: {
      tr: ["Next.js", "TypeScript", "Tailwind CSS", "Headless CMS", "Form API"],
      en: ["Next.js", "TypeScript", "Tailwind CSS", "Headless CMS", "Form API"],
    },
    architecture: {
      tr: "Statik + ISR sayfalar, CMS'ten menü ve etkinlik içerikleri, rezervasyon talepleri sunucu tarafı doğrulama ile. POS ve ödeme entegrasyonu kapsam dışı.",
      en: "Static + ISR pages, menu and event content from CMS, reservation requests with server-side validation. POS and payment integration out of scope.",
    },
    testing: {
      tr: "Responsive kırılımlar, tarih / kişi sayısı doğrulama, boş müsaitlik durumu ve erişilebilirlik kontrolleri proje kapsamında tanımlandı.",
      en: "Responsive breakpoints, date / party size validation, empty availability states, and accessibility checks defined for the project scope.",
    },
    results: {
      tr: "Rezervasyon, menü keşfi ve sipariş özeti akışları premium restoran deneyimini dijitalde tamamlayacak şekilde kurgulandı.",
      en: "Reservation, menu discovery, and order summary flows designed to complete the premium restaurant experience digitally.",
    },
    screens: {
      tr: [
        "Hero: atmosfer görseli ve rezervasyon CTA",
        "Rezervasyon: tarih, saat, kişi sayısı seçimi",
        "Menü: kategori, alerjen ve öneri etiketleri",
        "Masa onayı: özet ve özel istek alanı",
        "Sipariş özeti: sepet ve teşekkür ekranı",
      ],
      en: [
        "Hero: atmosphere imagery and reservation CTA",
        "Reservation: date, time, party size selection",
        "Menu: category, allergen, and recommendation labels",
        "Table confirmation: summary and special request field",
        "Order summary: cart and thank-you screen",
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
      tr: "Görev, otomasyon ve ekip akışlarını tek panelde gösteren çalışma alanı.",
      en: "A workspace showing tasks, automations, and team flows in one panel.",
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
      tr: "Slate grid estetiğinde çalışma alanı: görev kuyruğu, otomasyon tetikleyicileri ve ekip aktivite akışı. Görev kuyruğu, otomasyon tetikleyicileri ve ekip aktivitesi tek çalışma alanında.",
      en: "A slate-grid workspace: task queue, automation triggers, and team activity feed. Task queue, automation triggers, and team activity in one workspace.",
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
      tr: "Proje yönetimi ve otomasyon panellerinde bilgi yoğunluğu, tetikleyici düzenleme kalıpları ve aktivite akışı yerleşimi incelendi. Proje kapsamında sahte kullanıcı sayısı veya zaman tasarrufu iddiası kullanılmadı.",
      en: "We reviewed information density, trigger editing patterns, and activity feed placement in project management and automation dashboards. Project management and automation dashboard patterns informed the workspace design.",
    },
    flows: {
      tr: "Giriş → dashboard özeti → görev kuyruğu → otomasyon düzenleyici → aktivite akışı. Entegrasyonlar ve webhook ayarları ikincil navigasyonda.",
      en: "Sign-in → dashboard summary → task queue → automation editor → activity feed. Integrations and webhook settings in secondary nav.",
    },
    designSystem: {
      tr: "Slate-mor grid, keskin kart sınırları, monospace sayaçlar ve yoğun veri tabloları. Durum renkleri: active, paused, muted. Dark-first; light tema ikincil.",
      en: "Slate-purple grid, sharp card borders, monospace counters, and dense data tables. Status colors: active, paused, muted. Dark-first; light theme secondary.",
    },
    tech: {
      tr: ["Next.js", "TypeScript", "PostgreSQL", "Webhook entegrasyonu", "Auth"],
      en: ["Next.js", "TypeScript", "PostgreSQL", "Webhook entegrasyonu", "Auth"],
    },
    architecture: {
      tr: "Görev, otomasyon kuralı ve olay hiyerarşisi; tetikleyici simülasyonu API endpoint ile. Gerçek üçüncü taraf entegrasyonları kapsam dışı bırakıldı.",
      en: "Task, automation rule, and event hierarchy; trigger simulation via API endpoint. Real third-party integrations out of scope.",
    },
    testing: {
      tr: "Tablo erişilebilirliği, boş kuyruk durumları, otomasyon hata mesajları ve büyük olay listesi performansı test sürecinde tanımlandı.",
      en: "Table accessibility, empty queue states, automation error messages, and large event list performance defined in test scenarios.",
    },
    results: {
      tr: "Görev kuyruğu, otomasyon kuralları ve ekip aktivite akışı tek panelde birleştirildi; entegrasyon altyapısı production için hazırlandı.",
      en: "Task queue, automation rules, and team activity feed unified in one panel with integration infrastructure ready for production.",
    },
    screens: {
      tr: [
        "Dashboard: aktif görevler ve otomasyon durumu",
        "Görev kuyruğu: filtre, öncelik ve atama",
        "Otomasyon düzenleyici: tetikleyici–aksiyon zinciri",
        "Aktivite akışı: ekip olayları ve zaman damgası",
        "Ayarlar: ekip üyeleri ve webhook entegrasyonu",
      ],
      en: [
        "Dashboard: active tasks and automation status",
        "Task queue: filter, priority, and assignment",
        "Automation editor: trigger–action chain",
        "Activity feed: team events and timestamps",
        "Settings: team members and webhook entegrasyonu",
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
