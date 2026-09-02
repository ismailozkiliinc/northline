import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { pageMetadata } from "@/lib/metadata";

type LegalPageProps = {
  params: Promise<{ locale: string }>;
  titleKey: "privacy" | "kvkk" | "cookies" | "terms";
  sections: { tr: { heading: string; body: string }[]; en: { heading: string; body: string }[] };
};

export async function generateLegalMetadata(
  params: Promise<{ locale: string }>,
  titleKey: LegalPageProps["titleKey"],
): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "legal" });
  return pageMetadata({
    title: t(titleKey),
    description: t("placeholder"),
    locale,
  });
}

export async function LegalPageContent({
  params,
  titleKey,
  sections,
}: LegalPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("legal");
  const loc = locale as "tr" | "en";
  const content = sections[loc];

  return (
    <>
      <section className="border-b border-border py-16 md:py-24">
        <div className="container-page mx-auto max-w-3xl">
          <h1 className="font-display text-3xl font-semibold md:text-4xl">
            {t(titleKey)}
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            {loc === "tr"
              ? "Bu metin bilgilendirme amaçlıdır. Güncel hukuki danışmanlıkla gözden geçirilmesi önerilir."
              : "This text is informational. Review with legal counsel for your jurisdiction is recommended."}
          </p>
        </div>
      </section>
      <section className="py-16 md:py-20">
        <div className="container-page mx-auto max-w-3xl space-y-10">
          {content.map((section) => (
            <div key={section.heading}>
              <h2 className="font-display text-xl font-semibold">{section.heading}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
                {section.body}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

const privacySections = {
  tr: [
    {
      heading: "Veri sorumlusu",
      body: "NISCRAFT (niscraft.com) olarak iletişim formları ve proje başvuruları aracılığıyla toplanan kişisel verileriniz, hizmet sunumu ve iletişim amacıyla işlenir.",
    },
    {
      heading: "Toplanan veriler",
      body: "Ad, e-posta, telefon, şirket adı ve proje açıklaması gibi sizin tarafınızdan gönüllü olarak paylaşılan bilgiler toplanabilir.",
    },
    {
      heading: "Saklama süresi",
      body: "Veriler, meşru iş amacı için gerekli süre boyunca saklanır; talep halinde silinmesi için bize ulaşabilirsiniz.",
    },
    {
      heading: "Haklarınız",
      body: "KVKK kapsamındaki haklarınız için kvkk@niscraft.com adresine veya site iletişim formuna başvurabilirsiniz.",
    },
  ],
  en: [
    {
      heading: "Data controller",
      body: "NISCRAFT (niscraft.com) processes personal data collected via contact forms and project applications for service delivery and communication.",
    },
    {
      heading: "Data collected",
      body: "Information you voluntarily share such as name, email, phone, company, and project description may be collected.",
    },
    {
      heading: "Retention",
      body: "Data is kept for as long as needed for legitimate business purposes; you may request deletion by contacting us.",
    },
    {
      heading: "Your rights",
      body: "For privacy rights applicable in your jurisdiction, contact us via the site contact form or hello@niscraft.com.",
    },
  ],
};

const kvkkSections = {
  tr: [
    {
      heading: "Veri sorumlusu kimliği",
      body: "6698 sayılı KVKK kapsamında veri sorumlusu NISCRAFT dijital ürün stüdyosudur. Güncel iletişim bilgileri web sitesinde yer alır.",
    },
    {
      heading: "İşleme amaçları",
      body: "Teklif hazırlama, proje değerlendirme, sözleşme süreçleri ve müşteri ilişkileri yönetimi amacıyla kişisel veriler işlenebilir.",
    },
    {
      heading: "Aktarım",
      body: "Yalnızca hizmetin gerektirdiği ölçüde barındırma, e-posta ve analitik sağlayıcılarına aktarım yapılabilir. Aktarım yapılan taraflar sözleşmesel güvenlik yükümlülüklerine tabidir.",
    },
    {
      heading: "Başvuru",
      body: "KVKK m.11 kapsamındaki taleplerinizi yazılı olarak iletebilirsiniz. Yanıt süresi yasal çerçevede değerlendirilir.",
    },
  ],
  en: [
    {
      heading: "Controller identity",
      body: "Under Turkish KVKK (Law 6698), NISCRAFT acts as data controller. Current contact details are on the website.",
    },
    {
      heading: "Processing purposes",
      body: "Personal data may be processed for proposals, project evaluation, contracts, and client relationship management.",
    },
    {
      heading: "Transfers",
      body: "Data may be transferred to hosting, email, or analytics providers only as required for service delivery, under contractual safeguards.",
    },
    {
      heading: "Requests",
      body: "You may submit requests under KVKK Art. 11 in writing. Response timelines follow applicable law.",
    },
  ],
};

const cookieSections = {
  tr: [
    {
      heading: "Çerez nedir?",
      body: "Çerezler, tarayıcınıza kaydedilen küçük metin dosyalarıdır. Site işlevselliği ve (onayınızla) analitik için kullanılabilir.",
    },
    {
      heading: "Zorunlu çerezler",
      body: "Oturum, dil tercihi ve güvenlik için gerekli çerezler site çalışması için kullanılır; devre dışı bırakılamaz.",
    },
    {
      heading: "Analitik çerezler",
      body: "Onay vermeniz halinde anonim trafik ölçümü için analitik çerezler kullanılabilir. Reddetme seçeneği site altındaki çerez banner'ından yönetilir.",
    },
    {
      heading: "Tercih yönetimi",
      body: "Çerez tercihlerinizi istediğiniz zaman footer'daki bağlantı veya tarayıcı ayarları üzerinden güncelleyebilirsiniz.",
    },
  ],
  en: [
    {
      heading: "What are cookies?",
      body: "Cookies are small text files stored in your browser. They may be used for site functionality and (with consent) analytics.",
    },
    {
      heading: "Necessary cookies",
      body: "Session, locale, and security cookies are required for the site to work and cannot be disabled.",
    },
    {
      heading: "Analytics cookies",
      body: "With your consent, analytics cookies may measure anonymous traffic. Rejection is managed via the cookie banner.",
    },
    {
      heading: "Managing preferences",
      body: "You can update cookie preferences anytime via the footer link or browser settings.",
    },
  ],
};

const termsSections = {
  tr: [
    {
      heading: "Site kullanımı",
      body: "Bu web sitesi NISCRAFT'ın hizmetlerini tanıtmak içindir. İçerik bilgilendirme amaçlıdır; yazılı sözleşme olmadan bağlayıcı teklif oluşturmaz.",
    },
    {
      heading: "Fikri mülkiyet",
      body: "Sitedeki metin, görsel ve kod örnekleri NISCRAFT'a veya lisans verenlere aittir. İzinsiz kopyalama yasaktır.",
    },
    {
      heading: "Sorumluluk sınırı",
      body: "Site 'olduğu gibi' sunulur. Kesintisiz erişim veya içerik güncelliği garanti edilmez.",
    },
    {
      heading: "Uygulanacak hukuk",
      body: "Uyuşmazlıklarda Türkiye Cumhuriyeti kanunları uygulanır; yetkili mahkeme İstanbul'dur (yazılı sözleşmede farklı düzenleme varsa o geçerlidir).",
    },
  ],
  en: [
    {
      heading: "Use of site",
      body: "This website presents NISCRAFT services. Content is informational and does not form a binding offer without a written contract.",
    },
    {
      heading: "Intellectual property",
      body: "Text, visuals, and code samples belong to NISCRAFT or licensors. Unauthorized copying is prohibited.",
    },
    {
      heading: "Limitation of liability",
      body: "The site is provided 'as is'. Uninterrupted access or content freshness is not guaranteed.",
    },
    {
      heading: "Governing law",
      body: "Disputes are governed by the laws of Türkiye; courts in Istanbul have jurisdiction unless a written contract states otherwise.",
    },
  ],
};

export {
  privacySections,
  kvkkSections,
  cookieSections,
  termsSections,
};
