import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { ContactForm } from "@/components/forms/contact-form";
import { AiAssistant } from "@/components/home/ai-assistant";
import { SectionHeading } from "@/components/shared/section-heading";
import { PremiumVisual } from "@/components/shared/premium-visual";
import { Button } from "@/components/ui/button";
import { media } from "@/lib/media";
import { siteConfig } from "@/lib/site";
import { pageMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });
  return pageMetadata({
    title: t("title"),
    description: t("subtitle"),
    locale,
  });
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("contact");

  return (
    <>
      <section className="border-b border-border py-16 md:py-24">
        <div className="container-page">
          <SectionHeading as="h1" title={t("title")} subtitle={t("subtitle")} />
        </div>
      </section>

      <section className="border-b border-border py-10 md:py-12">
        <div className="container-wide">
          <div className="overflow-hidden rounded-[var(--radius-media)] border border-border shadow-[var(--shadow-depth)]">
            <PremiumVisual
              src={media.studio.lounge}
              alt={
                locale === "tr"
                  ? "Northline stüdyo toplantı alanı"
                  : "Northline studio meeting lounge"
              }
              className="w-full"
              priority
            />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-page grid gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <h2 className="font-display text-lg font-semibold">
              {locale === "tr" ? "Doğrudan iletişim" : "Direct contact"}
            </h2>
            <ul className="space-y-4 text-sm">
              <li>
                <span className="text-muted">{t("email")}: </span>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-accent">
                  {siteConfig.email}
                </a>
              </li>
              {siteConfig.phone && (
                <li>
                  <span className="text-muted">{t("phone")}: </span>
                  <a href={`tel:${siteConfig.phone}`} className="hover:text-accent">
                    {siteConfig.phone}
                  </a>
                </li>
              )}
              {siteConfig.whatsapp && (
                <li>
                  <span className="text-muted">{t("whatsapp")}: </span>
                  <a
                    href={`https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent"
                  >
                    WhatsApp
                  </a>
                </li>
              )}
              {siteConfig.calendly && (
                <li>
                  <span className="text-muted">{t("meeting")}: </span>
                  <a
                    href={siteConfig.calendly}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent"
                  >
                    Calendly
                  </a>
                </li>
              )}
            </ul>
            <Button asChild variant="secondary">
              <Link href="/proje-baslat">{t("startCta")}</Link>
            </Button>
            <AiAssistant />
          </div>
          <div>
            <h2 className="mb-6 font-display text-lg font-semibold">
              {locale === "tr" ? "Mesaj formu" : "Message form"}
            </h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
