import { getTranslations } from "next-intl/server";
import { Reveal } from "@/components/motion/reveal";

const principleKeys = [
  "designDev",
  "weekly",
  "responsive",
  "qa",
  "ownership",
  "support",
] as const;

export async function Principles() {
  const t = await getTranslations("principles");

  return (
    <section className="section-paper border-t border-border-ink py-24 md:py-32">
      <div className="container-page">
        <div className="mb-14 max-w-2xl">
          <p className="mb-4 text-[11px] tracking-[0.24em] text-accent uppercase">{t("eyebrow")}</p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-semibold tracking-tight text-ink text-balance">
            {t("title")}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-muted">{t("subtitle")}</p>
        </div>
        <ul className="grid gap-px overflow-hidden rounded-[var(--radius-card)] border border-border-ink bg-border-ink sm:grid-cols-2 lg:grid-cols-3">
          {principleKeys.map((key, i) => (
            <Reveal key={key} as="li" delay={i * 0.04}>
              <div className="h-full bg-paper p-7 md:p-9">
                <span className="font-mono text-xs text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                  {t(`items.${key}.title`)}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  {t(`items.${key}.desc`)}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
