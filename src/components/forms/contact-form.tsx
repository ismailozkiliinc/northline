"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { useForm } from "react-hook-form";
import type { ReactNode } from "react";
import { z } from "zod";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(6),
  company: z.string().min(1),
  type: z.string().min(1),
  budget: z.string().min(1),
  message: z.string().min(10),
  consent: z.boolean().refine((v) => v === true, {
    message: "consent_required",
  }),
});

type FormValues = z.infer<typeof schema>;

const fieldClass =
  "w-full rounded-xl border border-[#e2e8f0] bg-[#f8faff] px-4 py-3 text-sm text-[#111827] outline-none transition-[border-color,box-shadow] focus:border-indigo-400 focus:bg-white focus:shadow-[0_0_0_4px_rgba(99,102,241,0.12)]";

export function ContactForm() {
  const t = useTranslations("start");
  const tc = useTranslations("contact");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { consent: false, type: "", budget: "" },
  });

  async function onSubmit(data: FormValues) {
    setStatus("loading");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, source: "contact" }),
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
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-5 sm:grid-cols-2">
      <Field label={t("fields.name")} error={Boolean(errors.name)}>
        <input id="contact-name" {...register("name")} className={fieldClass} autoComplete="name" />
      </Field>
      <Field label={t("fields.email")} error={Boolean(errors.email)}>
        <input
          id="contact-email"
          type="email"
          {...register("email")}
          className={fieldClass}
          autoComplete="email"
        />
      </Field>
      <Field label={t("fields.phone")} error={Boolean(errors.phone)}>
        <input id="contact-phone" {...register("phone")} className={fieldClass} autoComplete="tel" />
      </Field>
      <Field label={t("fields.company")} error={Boolean(errors.company)}>
        <input
          id="contact-company"
          {...register("company")}
          className={fieldClass}
          autoComplete="organization"
        />
      </Field>
      <Field label={tc("serviceLabel")} error={Boolean(errors.type)}>
        <select id="contact-service" {...register("type")} className={fieldClass}>
          <option value="">{tc("selectPlaceholder")}</option>
          {services.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </Field>
      <Field label={tc("budgetLabel")} error={Boolean(errors.budget)}>
        <select id="contact-budget" {...register("budget")} className={fieldClass}>
          <option value="">{tc("selectPlaceholder")}</option>
          {budgets.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </Field>
      <div className="sm:col-span-2">
        <Field label={t("fields.message")} error={Boolean(errors.message)}>
          <textarea
            id="contact-message"
            rows={5}
            {...register("message")}
            className={cn(fieldClass, "resize-y")}
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
          className="btn-brand-gradient group inline-flex h-12 items-center gap-2 rounded-full px-7 text-sm font-semibold disabled:opacity-60"
        >
          {status === "loading" ? "…" : tc("formCta")}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
        </button>
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
      <label className="mb-2 block text-xs font-medium tracking-wide text-[#64748b]">{label}</label>
      {children}
      {error && <p className="mt-1 text-xs text-danger">{label}</p>}
    </div>
  );
}
