import { setRequestLocale } from "next-intl/server";

export default async function AdminPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const hasAuth =
    Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL) &&
    Boolean(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

  return (
    <div className="container-page py-16">
      <p className="mb-3 text-xs tracking-wider text-accent uppercase">Admin</p>
      <h1 className="font-display text-3xl font-semibold">Northline Admin</h1>
      <p className="mt-4 max-w-xl text-muted">
        {hasAuth
          ? "Supabase bağlandı. Auth ile korumalı panel sonraki sprintte tamamlanır."
          : "Supabase Auth bağlandığında panel aktif olur. Başvurular şimdilik .data/leads.json veya leads tablosunda birikir."}
      </p>
      <ul className="mt-8 list-disc space-y-2 pl-5 text-sm text-muted">
        <li>Lead durumları: new → contacted → meeting → proposal → won / lost</li>
        <li>İçerik seed: src/content + src/messages</li>
        <li>API: /api/lead</li>
      </ul>
    </div>
  );
}
