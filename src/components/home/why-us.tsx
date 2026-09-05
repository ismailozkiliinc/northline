import { getTranslations } from "next-intl/server";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/motion/reveal";

export async function WhyUs() {
  const t = await getTranslations("why");
  const items = t.raw("items") as { title: string; desc: string }[];

  return (
    <section className="border-t border-border bg-transparent py-20 md:py-28">
      <div className="container-page">
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />
        <ul className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <Reveal key={item.title} as="li" delay={i * 0.05}>
              <p className="mb-3 font-mono text-xs text-accent">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="font-display text-base font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.desc}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
