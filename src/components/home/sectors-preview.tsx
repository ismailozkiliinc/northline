import { getTranslations } from "next-intl/server";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/motion/reveal";

export async function SectorsPreview() {
  const t = await getTranslations("sectors");
  const items = t.raw("items") as string[];

  return (
    <section className="border-t border-border bg-bg-secondary py-20 md:py-28">
      <div className="container-page">
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />
        <ul className="mt-12 flex flex-wrap gap-3">
          {items.map((item, i) => (
            <Reveal key={item} as="li" delay={i * 0.03}>
              <span className="inline-flex rounded-full border border-border bg-surface px-4 py-2 text-sm text-muted">
                {item}
              </span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
