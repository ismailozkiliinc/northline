import { getLocale, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/navigation";
import { getServiceById } from "@/content/services";
import type { ServiceId } from "@/content/types";
import { CtaBand } from "@/components/shared/cta-band";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { ServiceVisual } from "@/components/shared/premium-visual";

const ID_MAP: Record<string, ServiceId> = {
  web: "web",
  mobil: "mobile",
  "ui-ux": "ui-ux",
  saas: "saas",
  "e-ticaret": "ecommerce",
  ai: "ai",
};

export function resolveServiceId(segment: string): ServiceId | undefined {
  return ID_MAP[segment];
}

export function serviceHrefForId(id: ServiceId) {
  const service = getServiceById(id);
  return service?.href ?? "/hizmetler";
}

export async function ServiceDetailContent({ segment }: { segment: string }) {
  const serviceId = resolveServiceId(segment);
  if (!serviceId) notFound();

  const service = getServiceById(serviceId);
  if (!service) notFound();

  const locale = (await getLocale()) as "tr" | "en";
  const t = await getTranslations("services");

  return (
    <>
      <section className="border-b border-border bg-bg-secondary py-14 md:py-20">
        <div className="container-page grid items-center gap-10 overflow-hidden lg:grid-cols-[minmax(0,0.38fr)_minmax(0,0.62fr)] lg:gap-12">
          <div>
            <p className="mb-3 text-xs tracking-[0.2em] text-accent uppercase">
              {t("eyebrow")}
            </p>
            <h1 className="font-display text-[clamp(2rem,3.8vw,3.25rem)] font-semibold tracking-tight text-balance">
              {service.title[locale]}
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
              {service.description[locale]}
            </p>
            <Button asChild size="lg" className="mt-8">
              <Link href="/proje-baslat">{t("cta")}</Link>
            </Button>
          </div>
          <div className="relative h-[340px] min-w-0 overflow-hidden md:h-[440px]">
            <ServiceVisual id={serviceId} alt={service.title[locale]} className="h-full" />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-page grid gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-xl font-semibold">
              {locale === "tr" ? "Alt yetkinlikler" : "Capabilities"}
            </h2>
            <ul className="mt-5 grid gap-3">
              {service.bullets[locale].map((b) => (
                <li
                  key={b}
                  className="rounded-[var(--radius-control)] border border-border bg-surface/50 px-4 py-3 text-sm text-muted"
                >
                  {b}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-display text-xl font-semibold">
              {locale === "tr" ? "Teslimatlar" : "Deliverables"}
            </h2>
            <ul className="mt-5 space-y-3">
              {service.includes[locale].map((item) => (
                <li key={item} className="flex gap-3 text-sm text-muted">
                  <span className="text-accent">▸</span>
                  {item}
                </li>
              ))}
            </ul>
            <h2 className="mt-10 font-display text-xl font-semibold">
              {locale === "tr" ? "Süreç" : "Process"}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {service.processNotes[locale]}
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
