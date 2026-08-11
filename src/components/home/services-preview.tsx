import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { services } from "@/content/services";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/motion/reveal";

export async function ServicesPreview() {
  const t = await getTranslations("services");
  const locale = (await getLocale()) as "tr" | "en";

  return (
    <section className="border-t border-border py-20 md:py-28">
      <div className="container-page">
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />
        <ul className="mt-12 divide-y divide-border border-y border-border">
          {services.map((service, i) => (
            <Reveal key={service.id} as="li" delay={i * 0.04}>
              <Link
                href={service.href}
                className="group grid gap-3 py-6 transition-colors md:grid-cols-[14rem_1fr_auto] md:items-center md:gap-8 md:py-7"
              >
                <span className="font-display text-lg font-medium group-hover:text-accent">
                  {service.title[locale]}
                </span>
                <span className="text-sm leading-relaxed text-muted">
                  {service.description[locale]}
                </span>
                <span className="text-sm text-muted transition-transform group-hover:translate-x-1 group-hover:text-fg">
                  →
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
        <div className="mt-8">
          <Link href="/hizmetler" className="link-underline text-sm text-muted hover:text-fg">
            {t("viewAll")} →
          </Link>
        </div>
      </div>
    </section>
  );
}
