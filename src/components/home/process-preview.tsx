import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/motion/reveal";

export async function ProcessPreview() {
  const t = await getTranslations("process");
  const steps = t.raw("steps") as { n: string; title: string }[];

  return (
    <section className="border-t border-border py-20 md:py-28">
      <div className="container-page">
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />
        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal key={step.n} as="li" delay={i * 0.04}>
              <div className="h-full rounded-2xl border border-border bg-surface/60 p-5">
                <span className="font-mono text-xs text-accent">{step.n}</span>
                <h3 className="mt-3 font-display text-base font-medium">{step.title}</h3>
              </div>
            </Reveal>
          ))}
        </ol>
        <div className="mt-8">
          <Link href="/surec" className="link-underline text-sm text-muted hover:text-fg">
            {t("title")} →
          </Link>
        </div>
      </div>
    </section>
  );
}
