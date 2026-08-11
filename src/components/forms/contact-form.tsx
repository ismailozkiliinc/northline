"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
  consent: z.boolean().refine((v) => v === true, {
    message: "consent_required",
  }),
});

type FormValues = z.infer<typeof schema>;

export function ContactForm() {
  const t = useTranslations("start");
  const tc = useTranslations("contact");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { consent: false },
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
      <p className="rounded-2xl border border-success/30 bg-success/10 p-6 text-sm text-fg">
        {t("successBody")}
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div>
        <label htmlFor="contact-name" className="mb-2 block text-sm text-muted">
          {t("fields.name")}
        </label>
        <input
          id="contact-name"
          {...register("name")}
          className="w-full rounded-xl border border-border-strong bg-surface px-4 py-3 text-sm text-fg outline-none transition-[border-color,box-shadow] focus:border-accent/60 focus:shadow-[0_0_0_3px_var(--accent-soft)]"
          autoComplete="name"
        />
        {errors.name && (
          <p className="mt-1 text-xs text-danger">Required</p>
        )}
      </div>
      <div>
        <label htmlFor="contact-email" className="mb-2 block text-sm text-muted">
          {t("fields.email")}
        </label>
        <input
          id="contact-email"
          type="email"
          {...register("email")}
          className="w-full rounded-xl border border-border-strong bg-surface px-4 py-3 text-sm text-fg outline-none transition-[border-color,box-shadow] focus:border-accent/60 focus:shadow-[0_0_0_3px_var(--accent-soft)]"
          autoComplete="email"
        />
        {errors.email && (
          <p className="mt-1 text-xs text-danger">Valid email required</p>
        )}
      </div>
      <div>
        <label htmlFor="contact-message" className="mb-2 block text-sm text-muted">
          {t("fields.message")}
        </label>
        <textarea
          id="contact-message"
          rows={5}
          {...register("message")}
          className="w-full resize-y rounded-xl border border-border-strong bg-surface px-4 py-3 text-sm text-fg outline-none transition-[border-color,box-shadow] focus:border-accent/60 focus:shadow-[0_0_0_3px_var(--accent-soft)]"
        />
        {errors.message && (
          <p className="mt-1 text-xs text-danger">Min 10 characters</p>
        )}
      </div>
      <label className="flex items-start gap-3 text-sm leading-relaxed text-muted">
        <input
          type="checkbox"
          {...register("consent")}
          className="mt-1 accent-accent"
        />
        <span>{t("consent")}</span>
      </label>
      {errors.consent && (
        <p className="text-xs text-danger">{t("consentError")}</p>
      )}
      <Button type="submit" disabled={status === "loading"}>
        {status === "loading" ? "…" : tc("formCta")}
      </Button>
      {status === "error" && (
        <p className="text-sm text-danger">Something went wrong. Try again.</p>
      )}
    </form>
  );
}
