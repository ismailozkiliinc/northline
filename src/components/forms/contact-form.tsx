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
  message: z.string().min(10),
  website: z.string().max(0).optional(),
  consent: z.boolean().refine((v) => v === true, {
    message: "consent_required",
  }),
});

type FormValues = z.infer<typeof schema>;

const inputClass =
  "contact-field w-full rounded-[14px] border border-white/12 bg-[#f4f6fa] px-4 py-3.5 text-sm text-[#F7F9FC] outline-none transition-[border-color,box-shadow,background-color] duration-200 placeholder:text-[#98A2B3] focus:border-[#6366f1] focus:bg-transparent focus:shadow-[0_0_0_4px_rgba(99,102,241,0.1)] focus-visible:outline-none";

export function ContactForm() {
  const t = useTranslations("start");
  const tc = useTranslations("contact");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error" | "email_failed">("idle");

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { consent: false, services: [], website: "" },
  });

  async function onSubmit(data: FormValues) {
    if (status === "loading") return;
    if (data.website) {
      setStatus("success");
      return;
    }
    setStatus("loading");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          company: data.company,
          message: data.message,
          consent: data.consent,
          website: data.website ?? "",
          type: data.services.join(", "),
          source: "contact",
        }),
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
        setStatus("success");
        reset();
        return;
      }

      // Stored but email failed — do not show full success
      if (body.stored && (body.error === "email_failed" || body.emailed === false)) {
        setStatus("email_failed");
        return;
      }

      throw new Error(body.error ?? "failed");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-sm text-[#F7F9FC]" role="status">
        {t("successBody")}
      </p>
    );
  }

  if (status === "email_failed") {
    return (
      <p className="rounded-2xl border border-amber-200 bg-amber-50 p-6 text-sm text-[#F7F9FC]" role="status">
        {tc("emailFailed")}
      </p>
    );
  }

  const services = tc.raw("serviceOptions") as { value: string; label: string }[];

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-6 sm:grid-cols-2" noValidate>
      <div className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="contact-website">Website</label>
        <input
          id="contact-website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("website")}
        />
      </div>

      <Field label={t("fields.name")} htmlFor="contact-name" error={Boolean(errors.name)}>
        <input id="contact-name" {...register("name")} className={inputClass} autoComplete="name" required />
      </Field>
      <Field label={t("fields.email")} htmlFor="contact-email" error={Boolean(errors.email)}>
        <input
          id="contact-email"
          type="email"
          {...register("email")}
          className={inputClass}
          autoComplete="email"
          required
        />
      </Field>
      <Field label={t("fields.phone")} htmlFor="contact-phone" error={Boolean(errors.phone)}>
        <input id="contact-phone" {...register("phone")} className={inputClass} autoComplete="tel" required />
      </Field>
      <Field label={t("fields.company")} htmlFor="contact-company" error={Boolean(errors.company)}>
        <input
          id="contact-company"
          {...register("company")}
          className={inputClass}
          autoComplete="organization"
          required
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
                        "contact-chip rounded-full border px-3.5 py-2 text-sm font-medium transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6366f1]",
                        selected
                          ? "border-[#6366f1] bg-[rgba(99,102,241,0.08)] text-[#F7F9FC] shadow-[0_1px_0_rgba(99,102,241,0.12)]"
                          : "border-white/12 bg-transparent text-[#98A2B3] hover:-translate-y-px hover:border-[#cbd5e1]",
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
        <Field label={t("fields.message")} htmlFor="contact-message" error={Boolean(errors.message)}>
          <textarea
            id="contact-message"
            rows={6}
            placeholder={tc("messagePlaceholder")}
            {...register("message")}
            className={cn(inputClass, "min-h-[9.5rem] resize-y")}
            required
          />
        </Field>
      </div>

      <label className="flex items-start gap-3 text-sm leading-relaxed text-[#98A2B3] sm:col-span-2">
        <input type="checkbox" {...register("consent")} className="mt-1 accent-[#6366f1]" required />
        <span>{t("consent")}</span>
      </label>
      {errors.consent && (
        <p className="text-xs text-danger sm:col-span-2">{t("consentError")}</p>
      )}

      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={status === "loading"}
          className="contact-submit group flex min-h-[54px] w-full items-center justify-center gap-2 rounded-[14px] bg-[#111827] px-6 text-sm font-semibold text-white shadow-[0_12px_32px_rgba(15,23,42,0.18)] transition-all duration-[250ms] ease-out hover:-translate-y-0.5 hover:bg-[#0f172a] hover:shadow-[0_16px_40px_rgba(15,23,42,0.24)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6366f1] disabled:opacity-60"
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
        <p className="mt-3 text-center text-xs text-[#98A2B3]">{tc("formTrust")}</p>
      </div>

      {status === "error" && (
        <p className="text-sm text-danger sm:col-span-2" role="alert">{tc("error")}</p>
      )}
    </form>
  );
}

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor?: string;
  error?: boolean;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-2.5 block text-xs font-medium tracking-wide text-[#98A2B3]">
        {label}
      </label>
      {children}
      {error && <p className="mt-1.5 text-xs text-danger">{label}</p>}
    </div>
  );
}
