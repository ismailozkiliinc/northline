import { AdminLoginForm } from "@/components/admin/login-form";

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ next?: string }>;
}) {
  const { next } = await searchParams;
  return (
    <div className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.08),transparent_50%),#f8f9fc] p-6">
      <AdminLoginForm next={next ?? "/admin"} />
    </div>
  );
}
