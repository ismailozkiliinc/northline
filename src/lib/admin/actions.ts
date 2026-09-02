"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { adminLoginWithCredentials, adminLogout, getAdminUser, logActivity, requireAdminUser } from "@/lib/admin/auth";
import { hasPermission, type Permission } from "@/lib/admin/permissions";
import type { CmsProjectRecord } from "@/lib/cms/types";
import { getCmsStore, createNotification } from "@/lib/cms/store";

async function guard(permission?: Permission) {
  const user = await requireAdminUser();
  if (permission && !hasPermission(user.role, permission)) {
    throw new Error("FORBIDDEN");
  }
  return user;
}

export async function loginAction(formData: FormData): Promise<{ error?: string; ok?: boolean; next?: string }> {
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");
  const remember = formData.get("remember") === "on";
  const next = String(formData.get("next") ?? "/admin");

  const result = await adminLoginWithCredentials(email, password, remember);
  if (!result.ok) return { error: result.error };

  await logActivity(result.user, "auth.login");
  return { ok: true, next: next.startsWith("/admin") ? next : "/admin" };
}

export async function logoutAction() {
  const user = await getAdminUser();
  if (user) await logActivity(user, "auth.logout");
  await adminLogout();
  redirect("/admin/login");
}

export async function updateLeadAction(id: string, formData: FormData): Promise<void> {
  const user = await guard("leads");
  const status = String(formData.get("status") ?? "new");
  const admin_notes = String(formData.get("admin_notes") ?? "");
  const store = getCmsStore();
  await store.leads.update(id, { status: status as never, admin_notes });
  await logActivity(user, "lead.update", "lead", id, { status });
  revalidatePath("/admin/leads");
}

export async function deleteLeadAction(id: string) {
  const user = await guard("leads");
  const store = getCmsStore();
  await store.leads.remove(id);
  await logActivity(user, "lead.delete", "lead", id);
  revalidatePath("/admin/leads");
}

export async function saveProjectAction(formData: FormData) {
  const user = await guard("projects");
  const id = String(formData.get("id") ?? "");
  const payload = JSON.parse(String(formData.get("payload") ?? "{}"));
  const store = getCmsStore();
  const data = {
    slug: String(formData.get("slug") ?? ""),
    status: String(formData.get("status") ?? "draft") as "draft" | "published" | "archived",
    featured: formData.get("featured") === "on",
    sort_order: Number(formData.get("sort_order") ?? 0),
    cover_image: String(formData.get("cover_image") ?? ""),
    cover_tone: String(formData.get("cover_tone") ?? ""),
    presentation: String(formData.get("presentation") ?? "cinematic") as CmsProjectRecord["presentation"],
    client_name: String(formData.get("client_name") ?? ""),
    project_year: String(formData.get("project_year") ?? ""),
    project_url: String(formData.get("project_url") ?? ""),
    category: String(formData.get("category") ?? ""),
    payload,
    seo_title: JSON.parse(String(formData.get("seo_title") ?? "{}")),
    seo_description: JSON.parse(String(formData.get("seo_description") ?? "{}")),
    updated_at: new Date().toISOString(),
  };

  if (id) {
    await store.projects.update(id, data);
    await logActivity(user, "project.update", "project", id);
  } else {
    const created = await store.projects.create({
      ...data,
      gallery: [],
      created_at: new Date().toISOString(),
    } as never);
    await logActivity(user, "project.create", "project", created.id);
  }
  revalidatePath("/admin/projects");
  revalidatePath("/calismalar");
  redirect("/admin/projects");
}

export async function deleteProjectAction(id: string) {
  const user = await guard("projects");
  const store = getCmsStore();
  await store.projects.remove(id);
  await logActivity(user, "project.delete", "project", id);
  revalidatePath("/admin/projects");
}

export async function saveServiceAction(formData: FormData) {
  const user = await guard("services");
  const id = String(formData.get("id") ?? "");
  const payload = JSON.parse(String(formData.get("payload") ?? "{}"));
  const store = getCmsStore();
  const data = {
    service_id: String(formData.get("service_id") ?? ""),
    href: String(formData.get("href") ?? ""),
    icon: String(formData.get("icon") ?? ""),
    active: formData.get("active") === "on",
    sort_order: Number(formData.get("sort_order") ?? 0),
    image_url: String(formData.get("image_url") ?? ""),
    payload,
    updated_at: new Date().toISOString(),
  };
  if (id) {
    await store.services.update(id, data);
    await logActivity(user, "service.update", "service", id);
  } else {
    await store.services.create({ ...data, animation: {}, created_at: new Date().toISOString() } as never);
    await logActivity(user, "service.create", "service", id);
  }
  revalidatePath("/admin/services");
  redirect("/admin/services");
}

export async function saveHomepageAction(formData: FormData) {
  const user = await guard("homepage");
  const payload = JSON.parse(String(formData.get("payload") ?? "{}"));
  const store = getCmsStore();
  await store.homepage.save(payload);
  await logActivity(user, "homepage.update", "homepage", "main");
  revalidatePath("/");
  revalidatePath("/admin/homepage");
  return { ok: true };
}

export async function saveSettingsAction(formData: FormData) {
  const user = await guard("settings");
  const payload = JSON.parse(String(formData.get("payload") ?? "{}"));
  const store = getCmsStore();
  await store.settings.save(payload);
  await logActivity(user, "settings.update", "settings", "main");
  revalidatePath("/admin/settings");
  return { ok: true };
}

export async function saveClientAction(formData: FormData) {
  const user = await guard("clients");
  const id = String(formData.get("id") ?? "");
  const store = getCmsStore();
  const data = {
    name: String(formData.get("name") ?? ""),
    company: String(formData.get("company") ?? ""),
    email: String(formData.get("email") ?? ""),
    phone: String(formData.get("phone") ?? ""),
    country: String(formData.get("country") ?? ""),
    service_interest: String(formData.get("service_interest") ?? ""),
    project_name: String(formData.get("project_name") ?? ""),
    budget: String(formData.get("budget") ?? ""),
    status: String(formData.get("status") ?? "lead") as "lead" | "active" | "completed" | "archived",
    notes: String(formData.get("notes") ?? ""),
    updated_at: new Date().toISOString(),
  };
  if (id) await store.clients.update(id, data);
  else await store.clients.create({ ...data, created_at: new Date().toISOString() } as never);
  await logActivity(user, "client.save", "client", id);
  revalidatePath("/admin/clients");
  redirect("/admin/clients");
}

export async function markNotificationReadAction(id: string) {
  await guard("dashboard");
  const store = getCmsStore();
  await store.notifications.update(id, { read: true });
  revalidatePath("/admin");
}

export async function uploadMediaAction(formData: FormData) {
  const user = await guard("media");
  const file = formData.get("file") as File | null;
  if (!file) return { error: "Dosya seçilmedi." };

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const { writeFile, mkdir } = await import("fs/promises");
  const path = await import("path");
  const uploadDir = path.join(process.cwd(), "public", "uploads");
  await mkdir(uploadDir, { recursive: true });
  const safeName = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9._-]/g, "-")}`;
  await writeFile(path.join(uploadDir, safeName), buffer);
  const url = `/uploads/${safeName}`;

  const store = getCmsStore();
  const asset = await store.media.create({
    filename: safeName,
    original_name: file.name,
    mime_type: file.type,
    size_bytes: file.size,
    url,
    created_at: new Date().toISOString(),
  } as never);
  await logActivity(user, "media.upload", "media", asset.id);
  revalidatePath("/admin/media");
  return { ok: true, asset };
}

export async function deleteMediaAction(id: string) {
  const user = await guard("media");
  const store = getCmsStore();
  await store.media.remove(id);
  await logActivity(user, "media.delete", "media", id);
  revalidatePath("/admin/media");
}

export async function reorderProjectsAction(ids: string[]) {
  const user = await guard("projects");
  const store = getCmsStore();
  await store.projects.reorder(ids);
  await logActivity(user, "project.reorder", "project");
  revalidatePath("/admin/projects");
}

export async function notifyNewLead(data: { name: string; email: string; source?: string }) {
  await createNotification("lead", "Yeni iletişim talebi", `${data.name} (${data.email})`, data);
}
