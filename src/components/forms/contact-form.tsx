"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import type { ReactNode } from "react";
import { z } from "zod";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(6),
  company: z.string().min(1),
  services: z.array(z.string()).min(1),
  budget: z.string().min(1),
  message: z.string().min(10),
  consent: z.boolean().refine((v) => v === true, {
    message: "consent_required",
  }),
});

type FormValues = z.infer<typeof schema>;

const inputClass =
  "contact-field w-full rounded-[14px] border border-[#e2e8f0] bg-[#f4f6fa] px-4 py-3.5 text-sm text-[#111827] outline-none transition-[border-color,box-shadow,background-color] duration-200 placeholder:text-[#94a3b8] focus:border-[#6366f1] focus:bg-white focus:shadow-[0_0_0_4px_rgba(99,102,241,0.1)]";

export function ContactForm() {
  const t = useTranslations("start");
  const tc = useTranslations("contact");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { consent: false, services: [], budget: "" },
  });

  async function onSubmit(data: FormValues) {
    setStatus("loading");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          type: data.services.join(", "),
          source: "contact",
        }),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-sm text-[#111827]">
        {t("successBody")}
      </p>
    );
  }

  const services = tc.raw("serviceOptions") as { value: string; label: string }[];
  const budgets = tc.raw("budgetOptions") as { value: string; label: string }[];

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-6 sm:grid-cols-2">
      <Field label={t("fields.name")} error={Boolean(errors.name)}>
        <input id="contact-name" {...register("name")} className={inputClass} autoComplete="name" />
      </Field>
      <Field label={t("fields.email")} error={Boolean(errors.email)}>
        <input
          id="contact-email"
          type="email"
          {...register("email")}
          className={inputClass}
          autoComplete="email"
        />
      </Field>
      <Field label={t("fields.phone")} error={Boolean(errors.phone)}>
        <input id="contact-phone" {...register("phone")} className={inputClass} autoComplete="tel" />
      </Field>
      <Field label={t("fields.company")} error={Boolean(errors.company)}>
        <input
          id="contact-company"
          {...register("company")}
          className={inputClass}
          autoComplete="organization"
        />
      </Field>

      <div className="sm:col-span-2">
        <Field label={tc("serviceLabel")} error={Boolean(errors.services)}>
          <Controller
            name="services"
            control={control}
            render={({ field }) => (
              <div className="flex flex-wrap gap-2" role="group" aria-label={tc("serviceLabel")}>
                {services.map((opt) => {
                  const selected = field.value.includes(opt.value);
                  return (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => {
                        const next = selected
                          ? field.value.filter((v) => v !== opt.value)
                          : [...field.value, opt.value];
                        field.onChange(next);
                      }}
                      className={cn(
                        "contact-chip rounded-full border px-3.5 py-2 text-sm font-medium transition-all duration-200",
                        selected
                          ? "border-[#6366f1] bg-[rgba(99,102,241,0.08)] text-[#111827] shadow-[0_1px_0_rgba(99,102,241,0.12)]"
                          : "border-[#e2e8f0] bg-[#f8faff] text-[#475569] hover:-translate-y-px hover:border-[#cbd5e1]",
                      )}
                    >
                      {opt.label}
                    </button>
                  );
                })}
              </div>
            )}
          />
        </Field>
      </div>

      <div className="sm:col-span-2">
        <Field label={tc("budgetLabel")} error={Boolean(errors.budget)}>
          <Controller
            name="budget"
            control={control}
            render={({ field }) => (
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5" role="radiogroup" aria-label={tc("budgetLabel")}>
                {budgets.map((opt) => {
                  const selected = field.value === opt.value;
                  return (
                    <button
                      key={opt.value}
                      type="button"
                      role="radio"
                      aria-checked={selected}
                      onClick={() => field.onChange(opt.value)}
                      className={cn(
                        "contact-chip rounded-[14px] border px-3 py-3 text-left text-xs font-semibold leading-snug transition-all duration-200 sm:text-[0.8125rem]",
                        selected
                          ? "border-[#6366f1] bg-[rgba(99,102,241,0.08)] text-[#111827] shadow-[0_1px_0_rgba(99,102,241,0.12)]"
                          : "border-[#e2e8f0] bg-[#f8faff] text-[#475569] hover:-translate-y-px hover:border-[#cbd5e1]",
                      )}
                    >
                      {opt.label}
                    </button>
                  );
                })}
              </div>
            )}
          />
        </Field>
      </div>

      <div className="sm:col-span-2">
        <Field label={t("fields.message")} error={Boolean(errors.message)}>
          <textarea
            id="contact-message"
            rows={6}
            placeholder={tc("messagePlaceholder")}
            {...register("message")}
            className={cn(inputClass, "min-h-[9.5rem] resize-y")}
          />
        </Field>
      </div>

      <label className="flex items-start gap-3 text-sm leading-relaxed text-[#64748b] sm:col-span-2">
        <input type="checkbox" {...register("consent")} className="mt-1 accent-[#6366f1]" />
        <span>{t("consent")}</span>
      </label>
      {errors.consent && (
        <p className="text-xs text-danger sm:col-span-2">{t("consentError")}</p>
      )}

      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={status === "loading"}
          className="contact-submit group flex min-h-[54px] w-full items-center justify-center gap-2 rounded-[14px] bg-[#111827] px-6 text-sm font-semibold text-white shadow-[0_12px_32px_rgba(15,23,42,0.18)] transition-all duration-[250ms] ease-out hover:-translate-y-0.5 hover:bg-[#0f172a] hover:shadow-[0_16px_40px_rgba(15,23,42,0.24)] disabled:opacity-60"
        >
          {status === "loading" ? "…" : (
            <>
              {tc("formCta")}
              <ArrowRight
                className="h-4 w-4 transition-transform duration-[250ms] ease-out group-hover:translate-x-1"
                aria-hidden
              />
            </>
          )}
        </button>
        <p className="mt-3 text-center text-xs text-[#94a3b8]">{tc("formTrust")}</p>
      </div>

      {status === "error" && (
        <p className="text-sm text-danger sm:col-span-2">{tc("error")}</p>
      )}
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: boolean;
  children: ReactNode;
}) {
  return (
    <div>
      <label className="mb-2.5 block text-xs font-medium tracking-wide text-[#64748b]">{label}</label>
      {children}
      {error && <p className="mt-1.5 text-xs text-danger">{label}</p>}
    </div>
  );
}
