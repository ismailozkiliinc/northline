"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Eye, EyeOff, Loader2 } from "lucide-react";

const isDev = process.env.NODE_ENV !== "production";

export function AdminLoginForm({ next }: { next: string }) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, remember }),
    });

    const data = (await res.json()) as { error?: string; ok?: boolean; next?: string };

    if (!res.ok || data.error) {
      setError(data.error ?? "Giriş başarısız.");
      setLoading(false);
      return;
    }

    router.push(data.next ?? next ?? "/admin");
    router.refresh();
  }

  return (
    <form className="admin-card w-full max-w-md p-8" onSubmit={handleSubmit}>
      <p className="text-xs font-semibold tracking-[0.16em] text-[#6366f1] uppercase">NISCRAFT Admin</p>
      <h1 className="mt-2 font-display text-2xl font-bold tracking-tight">Yönetim paneline giriş</h1>
      <p className="mt-2 text-sm text-[#64748b]">Yetkili hesabınızla devam edin.</p>

      {isDev ? (
        <div className="mt-3 rounded-lg border border-[#e0e7ff] bg-[#f8faff] px-3 py-2.5 text-xs text-[#475569]">
          <p>Geliştirme ortamı: `ADMIN_EMAIL` / `ADMIN_PASSWORD` ortam değişkenlerini kullanın.</p>
        </div>
      ) : null}

      {error ? (
        <div className="mt-4 rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">{error}</div>
      ) : null}

      <div className="mt-6 space-y-4">
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium">E-posta</span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="admin-input"
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium">Şifre</span>
          <div className="relative">
            <input
              name="password"
              type={show ? "text" : "password"}
              required
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="admin-input pr-10"
            />
            <button
              type="button"
              className="absolute top-1/2 right-3 -translate-y-1/2 text-[#94a3b8]"
              onClick={() => setShow((v) => !v)}
              aria-label={show ? "Hide password" : "Show password"}
            >
              {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
        </label>
        <label className="flex items-center gap-2 text-sm text-[#64748b]">
          <input
            name="remember"
            type="checkbox"
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
            className="rounded border-[#cbd5e1]"
          />
          Beni hatırla
        </label>
      </div>

      <button type="submit" disabled={loading} className="admin-btn admin-btn-primary mt-6 w-full">
        {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
        Giriş yap
      </button>
    </form>
  );
}
