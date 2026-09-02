"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useCallback, useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "northline-wizard";

const projectTypes = [
  "web",
  "mobile",
  "saas",
  "ecommerce",
  "uiux",
  "ai",
  "unsure",
] as const;

const statuses = ["idea", "design", "redesign", "legacy", "active"] as const;
const budgets = ["unknown", "starter", "mid", "enterprise", "custom"] as const;
const timelines = ["asap", "1_2", "3_4", "5plus", "flexible"] as const;
const channels = ["email", "phone", "whatsapp"] as const;

const FEATURES_BY_TYPE: Record<(typeof projectTypes)[number], string[]> = {
  web: ["cms", "blog", "multilang", "seo", "forms", "analytics"],
  mobile: ["auth", "push", "payments", "offline", "maps", "social"],
  saas: ["auth", "roles", "admin", "api", "reports", "integrations"],
  ecommerce: ["catalog", "checkout", "payments", "shipping", "inventory", "coupons"],
  uiux: ["wireframes", "ui", "prototype", "designSystem", "research"],
  ai: ["chatbot", "rag", "automation", "integration", "guardrails"],
  unsure: ["discovery"],
};

const FEATURE_LABELS: Record<string, { tr: string; en: string }> = {
  cms: { tr: "CMS / içerik yönetimi", en: "CMS / content management" },
  blog: { tr: "Blog / haberler", en: "Blog / news" },
  multilang: { tr: "Çok dilli yapı", en: "Multilingual" },
  seo: { tr: "SEO temelleri", en: "Baseline SEO" },
  forms: { tr: "Form ve lead toplama", en: "Forms and lead capture" },
  analytics: { tr: "Analitik kurulumu", en: "Analytics setup" },
  auth: { tr: "Kimlik doğrulama", en: "Authentication" },
  push: { tr: "Push bildirimleri", en: "Push notifications" },
  payments: { tr: "Ödeme entegrasyonu", en: "Payment integration" },
  offline: { tr: "Offline kullanım", en: "Offline usage" },
  maps: { tr: "Harita / konum", en: "Maps / location" },
  social: { tr: "Sosyal giriş", en: "Social sign-in" },
  roles: { tr: "Rol bazlı erişim", en: "Role-based access" },
  admin: { tr: "Admin paneli", en: "Admin panel" },
  api: { tr: "REST / GraphQL API", en: "REST / GraphQL API" },
  reports: { tr: "Raporlama", en: "Reporting" },
  integrations: { tr: "Üçüncü parti entegrasyonlar", en: "Third-party integrations" },
  catalog: { tr: "Ürün kataloğu", en: "Product catalog" },
  checkout: { tr: "Sepet ve checkout", en: "Cart and checkout" },
  shipping: { tr: "Kargo entegrasyonu", en: "Shipping integration" },
  inventory: { tr: "Stok yönetimi", en: "Inventory management" },
  coupons: { tr: "Kupon / indirim", en: "Coupons / discounts" },
  wireframes: { tr: "Wireframe ve akışlar", en: "Wireframes and flows" },
  ui: { tr: "UI ekran seti", en: "UI screen set" },
  prototype: { tr: "Tıklanabilir prototip", en: "Clickable prototype" },
  designSystem: { tr: "Tasarım sistemi", en: "Design system" },
  research: { tr: "Kullanıcı araştırması desteği", en: "User research support" },
  chatbot: { tr: "Chatbot / asistan", en: "Chatbot / assistant" },
  rag: { tr: "RAG / bilgi tabanı", en: "RAG / knowledge base" },
  automation: { tr: "İş akışı otomasyonu", en: "Workflow automation" },
  integration: { tr: "Mevcut sisteme entegrasyon", en: "Integration with existing systems" },
  guardrails: { tr: "İnsan onayı / guardrail", en: "Human approval / guardrails" },
  discovery: { tr: "Keşif görüşmesi ile netleştirme", en: "Clarify in discovery call" },
};

const wizardSchema = z.object({
  type: z.enum(projectTypes),
  status: z.enum(statuses),
  features: z.array(z.string()).min(1),
  budget: z.enum(budgets),
  timeline: z.enum(timelines),
  name: z.string().min(2),
  company: z.string().optional(),
  email: z.string().email(),
  phone: z.string().optional(),
  channel: z.enum(channels),
  message: z.string().optional(),
  website: z.string().max(0).optional(),
  consent: z.boolean().refine((v) => v === true, { message: "consent_required" }),
});

type WizardValues = z.infer<typeof wizardSchema>;

const defaultValues: Partial<WizardValues> = {
  type: "web",
  status: "idea",
  features: [],
  budget: "unknown",
  timeline: "flexible",
  channel: "email",
};

function loadStored(): Partial<WizardValues> | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Partial<WizardValues>) : null;
  } catch {
    return null;
  }
}

function saveStored(data: Partial<WizardValues>) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    /* ignore */
  }
}

export function ProjectWizard({ locale }: { locale: "tr" | "en" }) {
  const t = useTranslations("start");
  const tc = useTranslations("contact");
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);
  const [emailFailed, setEmailFailed] = useState(false);
  const totalSteps = 6;

  const form = useForm<WizardValues>({
    resolver: zodResolver(wizardSchema),
    defaultValues: defaultValues as WizardValues,
    mode: "onChange",
  });

  const { register, control, watch, setValue, getValues, trigger, handleSubmit, formState: { errors } } = form;
  const type = watch("type");
  const features = watch("features") ?? [];

  useEffect(() => {
    const stored = loadStored();
    if (stored) {
      Object.entries(stored).forEach(([k, v]) => {
        setValue(k as keyof WizardValues, v as never);
      });
    }
  }, [setValue]);

  useEffect(() => {
    const sub = watch((data) => saveStored(data as Partial<WizardValues>));
    return () => sub.unsubscribe();
  }, [watch]);

  useEffect(() => {
    const available = FEATURES_BY_TYPE[type] ?? [];
    const current = getValues("features") ?? [];
    const filtered = current.filter((f) => available.includes(f));
    if (filtered.length !== current.length) {
      setValue("features", filtered.length ? filtered : []);
    }
  }, [type, getValues, setValue]);

  const toggleFeature = useCallback(
    (id: string) => {
      const current = getValues("features") ?? [];
      const next = current.includes(id)
        ? current.filter((f) => f !== id)
        : [...current, id];
      setValue("features", next, { shouldValidate: true });
    },
    [getValues, setValue],
  );

  async function nextStep() {
    const fieldsByStep: (keyof WizardValues)[][] = [
      ["type"],
      ["status"],
      ["features"],
      ["budget"],
      ["timeline"],
      ["name", "email", "channel", "consent"],
    ];
    const ok = await trigger(fieldsByStep[step]);
    if (ok) setStep((s) => Math.min(s + 1, totalSteps - 1));
  }

  async function onSubmit(data: WizardValues) {
    if (data.website) {
      setDone(true);
      return;
    }
    const res = await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, website: data.website ?? "", source: "wizard" }),
    });
    const body = (await res.json().catch(() => ({}))) as {
      success?: boolean;
      ok?: boolean;
      error?: string;
      stored?: boolean;
      emailed?: boolean;
      warning?: string;
    };
    const accepted = body.success === true || body.ok === true;
    if (res.ok && accepted && (body.emailed === true || body.warning === "email_skipped_dev")) {
      localStorage.removeItem(STORAGE_KEY);
      setDone(true);
      return;
    }
    if (body.stored && (body.error === "email_failed" || body.emailed === false)) {
      localStorage.removeItem(STORAGE_KEY);
      setEmailFailed(true);
      return;
    }
  }

  if (emailFailed) {
    return (
      <div className="mx-auto max-w-lg rounded-2xl border border-amber-200 bg-amber-50 p-8 text-center">
        <p className="text-sm leading-relaxed text-[#111827]">{tc("emailFailed")}</p>
      </div>
    );
  }

  if (done) {
    return (
      <div className="mx-auto max-w-lg rounded-2xl border border-border bg-surface p-8 text-center">
        <h2 className="font-display text-2xl font-semibold">{t("successTitle")}</h2>
        <p className="mt-3 text-sm leading-relaxed text-muted">{t("successBody")}</p>
        {siteConfig.calendly ? (
          <Button asChild className="mt-6" size="lg">
            <a href={siteConfig.calendly} target="_blank" rel="noopener noreferrer">
              {t("bookMeeting")}
            </a>
          </Button>
        ) : (
          <Button asChild className="mt-6" size="lg">
            <Link href="/iletisim">{t("bookMeeting")}</Link>
          </Button>
        )}
      </div>
    );
  }

  const featureIds = FEATURES_BY_TYPE[type] ?? [];

  return (
    <div className="mx-auto max-w-2xl">
      <div className="mb-8 flex items-center gap-2">
        {Array.from({ length: totalSteps }).map((_, i) => (
          <div
            key={i}
            className={cn(
              "h-1 flex-1 rounded-full transition-colors",
              i <= step ? "bg-accent" : "bg-border",
            )}
            aria-hidden
          />
        ))}
      </div>
      <p className="mb-6 text-sm text-muted">
        {t("step")} {step + 1} {t("of")} {totalSteps}
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {step === 0 && (
          <fieldset className="space-y-3">
            <legend className="font-display text-lg font-medium">{t("steps.type")}</legend>
            {projectTypes.map((id) => (
              <label
                key={id}
                className={cn(
                  "flex cursor-pointer items-center gap-3 rounded-xl border p-4 transition-colors",
                  watch("type") === id
                    ? "border-accent bg-accent/10"
                    : "border-border hover:border-accent/50",
                )}
              >
                <input type="radio" value={id} {...register("type")} className="accent-accent" />
                <span>{t(`types.${id}`)}</span>
              </label>
            ))}
          </fieldset>
        )}

        {step === 1 && (
          <fieldset className="space-y-3">
            <legend className="font-display text-lg font-medium">{t("steps.status")}</legend>
            {statuses.map((id) => (
              <label
                key={id}
                className={cn(
                  "flex cursor-pointer items-center gap-3 rounded-xl border p-4 transition-colors",
                  watch("status") === id
                    ? "border-accent bg-accent/10"
                    : "border-border hover:border-accent/50",
                )}
              >
                <input type="radio" value={id} {...register("status")} className="accent-accent" />
                <span>{t(`statuses.${id}`)}</span>
              </label>
            ))}
          </fieldset>
        )}

        {step === 2 && (
          <fieldset className="space-y-3">
            <legend className="font-display text-lg font-medium">{t("steps.features")}</legend>
            <div className="grid gap-2 sm:grid-cols-2">
              {featureIds.map((id) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => toggleFeature(id)}
                  className={cn(
                    "rounded-xl border px-4 py-3 text-left text-sm transition-colors",
                    features.includes(id)
                      ? "border-accent bg-accent/10 text-fg"
                      : "border-border text-muted hover:border-accent/50",
                  )}
                >
                  {FEATURE_LABELS[id]?.[locale] ?? id}
                </button>
              ))}
            </div>
            {errors.features && (
              <p className="text-xs text-danger">Select at least one</p>
            )}
          </fieldset>
        )}

        {step === 3 && (
          <fieldset className="space-y-3">
            <legend className="font-display text-lg font-medium">{t("steps.budget")}</legend>
            {budgets.map((id) => (
              <label
                key={id}
                className={cn(
                  "flex cursor-pointer items-center gap-3 rounded-xl border p-4 transition-colors",
                  watch("budget") === id
                    ? "border-accent bg-accent/10"
                    : "border-border hover:border-accent/50",
                )}
              >
                <input type="radio" value={id} {...register("budget")} className="accent-accent" />
                <span>{t(`budgets.${id}`)}</span>
              </label>
            ))}
          </fieldset>
        )}

        {step === 4 && (
          <fieldset className="space-y-3">
            <legend className="font-display text-lg font-medium">{t("steps.timeline")}</legend>
            {timelines.map((id) => (
              <label
                key={id}
                className={cn(
                  "flex cursor-pointer items-center gap-3 rounded-xl border p-4 transition-colors",
                  watch("timeline") === id
                    ? "border-accent bg-accent/10"
                    : "border-border hover:border-accent/50",
                )}
              >
                <input type="radio" value={id} {...register("timeline")} className="accent-accent" />
                <span>{t(`timelines.${id}`)}</span>
              </label>
            ))}
          </fieldset>
        )}

        {step === 5 && (
          <div className="space-y-4">
            <h3 className="font-display text-lg font-medium">{t("steps.contact")}</h3>
            <div className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
              <label htmlFor="wizard-website">Website</label>
              <input
                id="wizard-website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                {...register("website")}
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm text-muted">{t("fields.name")}</label>
                <input
                  {...register("name")}
                  className="w-full rounded-xl border border-border-strong bg-surface px-4 py-3 text-sm text-fg outline-none transition-[border-color,box-shadow] focus:border-accent/60 focus:shadow-[0_0_0_3px_var(--accent-soft)]"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm text-muted">{t("fields.company")}</label>
                <input
                  {...register("company")}
                  className="w-full rounded-xl border border-border-strong bg-surface px-4 py-3 text-sm text-fg outline-none transition-[border-color,box-shadow] focus:border-accent/60 focus:shadow-[0_0_0_3px_var(--accent-soft)]"
                />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm text-muted">{t("fields.email")}</label>
                <input
                  type="email"
                  {...register("email")}
                  className="w-full rounded-xl border border-border-strong bg-surface px-4 py-3 text-sm text-fg outline-none transition-[border-color,box-shadow] focus:border-accent/60 focus:shadow-[0_0_0_3px_var(--accent-soft)]"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm text-muted">{t("fields.phone")}</label>
                <input
                  {...register("phone")}
                  className="w-full rounded-xl border border-border-strong bg-surface px-4 py-3 text-sm text-fg outline-none transition-[border-color,box-shadow] focus:border-accent/60 focus:shadow-[0_0_0_3px_var(--accent-soft)]"
                />
              </div>
            </div>
            <div>
              <label className="mb-1 block text-sm text-muted">{t("fields.channel")}</label>
              <Controller
                name="channel"
                control={control}
                render={({ field }) => (
                  <select
                    {...field}
                    className="w-full rounded-xl border border-border-strong bg-surface px-4 py-3 text-sm text-fg outline-none transition-[border-color,box-shadow] focus:border-accent/60 focus:shadow-[0_0_0_3px_var(--accent-soft)]"
                  >
                    {channels.map((c) => (
                      <option key={c} value={c}>
                        {t(`channels.${c}`)}
                      </option>
                    ))}
                  </select>
                )}
              />
            </div>
            <div>
              <label className="mb-1 block text-sm text-muted">{t("fields.message")}</label>
              <textarea
                rows={4}
                {...register("message")}
                className="w-full rounded-xl border border-border-strong bg-surface px-4 py-3 text-sm text-fg outline-none transition-[border-color,box-shadow] focus:border-accent/60 focus:shadow-[0_0_0_3px_var(--accent-soft)]"
              />
            </div>
            <label className="flex items-start gap-3 text-sm text-muted">
              <input type="checkbox" {...register("consent")} className="mt-1 accent-accent" />
              <span>{t("consent")}</span>
            </label>
            {errors.consent && (
              <p className="text-xs text-danger">{t("consentError")}</p>
            )}
          </div>
        )}

        <div className="flex gap-3 pt-4">
          {step > 0 && (
            <Button type="button" variant="secondary" onClick={() => setStep((s) => s - 1)}>
              {t("back")}
            </Button>
          )}
          {step < totalSteps - 1 ? (
            <Button type="button" onClick={nextStep}>
              {t("next")}
            </Button>
          ) : (
            <Button type="submit">{t("submit")}</Button>
          )}
        </div>
      </form>
    </div>
  );
}
