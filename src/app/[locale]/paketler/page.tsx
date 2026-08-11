import type { Metadata } from "next";
import { getLocale, getTranslations, setRequestLocale } from "next-intl/server";
import { packages } from "@/content/packages";
import { Link } from "@/i18n/navigation";
import { SectionHeading } from "@/components/shared/section-heading";
import { CtaBand } from "@/components/shared/cta-band";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { pageMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "packages" });
  return pageMetadata({
    title: t("title"),
    description: t("subtitle"),
    locale,
  });
}

export default async function PackagesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("packages");
  const loc = (await getLocale()) as "tr" | "en";

  return (
    <>
      <section className="border-b border-border py-16 md:py-24">
        <div className="container-page">
          <SectionHeading as="h1" title={t("title")} subtitle={t("subtitle")} />
        </div>
      </section>
      <section className="py-16 md:py-20">
        <div className="container-page">
          <ul className="grid gap-8 lg:grid-cols-2">
            {packages.map((pkg, i) => (
              <Reveal
                key={pkg.id}
                as="li"
                delay={i * 0.04}
                className="flex flex-col rounded-2xl border border-border bg-surface/40 p-6 md:p-8"
              >
                <h2 className="font-display text-xl font-semibold">{pkg.title[loc]}</h2>
                <p className="mt-3 text-sm text-muted">{pkg.forWhom[loc]}</p>
                <div className="mt-6 flex-1 space-y-6">
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-accent">
                      {t("includes")}
                    </h3>
                    <ul className="mt-2 space-y-1 text-sm text-muted">
                      {pkg.includes[loc].map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="text-accent">+</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-muted">
                      {t("excludes")}
                    </h3>
                    <ul className="mt-2 space-y-1 text-sm text-muted">
                      {pkg.excludes[loc].map((item) => (
                        <li key={item} className="flex gap-2">
                          <span>−</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-sm text-muted">
                    <span className="font-medium text-fg">{t("timeline")}: </span>
                    {pkg.timeline[loc]}
                  </p>
                </div>
                <Button asChild className="mt-6 w-full sm:w-auto">
                  <Link href="/proje-baslat">{t("cta")}</Link>
                </Button>
              </Reveal>
            ))}
          </ul>
          <p className="mt-10 text-center text-sm text-muted">{t("note")}</p>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
