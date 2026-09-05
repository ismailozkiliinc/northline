import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export async function CtaBand({ className }: { className?: string }) {
  const t = await getTranslations("ctaBand");
  const meeting = siteConfig.calendly;

  return (
    <section
      className={cn("border-t border-white/8 bg-transparent", className)}
      aria-labelledby="cta-band-title"
    >
      <div className="container-page py-16 md:py-24 lg:py-28">
        <div className="relative z-[1] max-w-xl">
          <p className="mb-5 text-[11px] tracking-[0.24em] text-indigo-400 uppercase">
            {t("eyebrow")}
          </p>
          <h2
            id="cta-band-title"
            className="max-w-[12ch] font-display text-[clamp(2.5rem,6vw,5rem)] font-semibold tracking-tight text-balance text-[#F7F9FC]"
          >
            {t("title")}
          </h2>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-[#98A2B3]">
            {t("subtitle")}
          </p>
          <div className="mt-12 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="/proje-baslat">{t("primary")}</Link>
            </Button>
            {meeting ? (
              <Button asChild size="lg" variant="secondary" className="w-full sm:w-auto">
                <a href={meeting} target="_blank" rel="noopener noreferrer">
                  {t("meeting")}
                </a>
              </Button>
            ) : (
              <Button asChild size="lg" variant="secondary" className="w-full sm:w-auto">
                <Link href="/iletisim">{t("meeting")}</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
