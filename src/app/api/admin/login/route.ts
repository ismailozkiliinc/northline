import { NextResponse } from "next/server";
import { adminLoginWithCredentials, logActivity } from "@/lib/admin/auth";

export async function POST(request: Request) {
  let body: { email?: string; password?: string; remember?: boolean };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Geçersiz istek." }, { status: 400 });
  }

  const email = String(body.email ?? "").trim();
  const password = String(body.password ?? "");
  const remember = Boolean(body.remember);

  if (!email || !password) {
    return NextResponse.json({ error: "E-posta ve şifre gerekli." }, { status: 400 });
  }

  const result = await adminLoginWithCredentials(email, password, remember);
  if (!result.ok) {
    return NextResponse.json({ error: result.error }, { status: 401 });
  }

  try {
    await logActivity(result.user, "auth.login");
  } catch {
    /* login should still succeed */
  }

  return NextResponse.json({ ok: true, next: "/admin" });
}
