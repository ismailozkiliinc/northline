"use client";

import { useState } from "react";
import { Bell, Menu } from "lucide-react";
import type { AdminUser } from "@/lib/admin/permissions";
import type { NotificationRecord } from "@/lib/cms/types";
import { AdminSidebar } from "@/components/admin/sidebar";
import { markNotificationReadAction } from "@/lib/admin/actions";

export function AdminShell({
  user,
  notifications,
  children,
}: {
  user: AdminUser;
  notifications: NotificationRecord[];
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const unread = notifications.filter((n) => !n.read);

  return (
    <div className="min-h-screen lg:pl-[var(--admin-sidebar)]">
      <AdminSidebar user={user} open={open} onClose={() => setOpen(false)} />

      <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-[var(--admin-border)] bg-white/90 px-4 backdrop-blur-md lg:px-8">
        <div className="flex items-center gap-3">
          <button type="button" className="rounded-lg border border-[var(--admin-border)] p-2 lg:hidden" onClick={() => setOpen(true)}>
            <Menu className="h-5 w-5" />
          </button>
          <p className="hidden text-sm text-[#64748b] lg:block">NISCRAFT Control Center</p>
        </div>

        <div className="relative">
          <details className="group">
            <summary className="flex cursor-pointer list-none items-center gap-2 rounded-xl border border-[var(--admin-border)] px-3 py-2 text-sm font-medium">
              <Bell className="h-4 w-4" />
              {unread.length > 0 ? (
                <span className="admin-badge bg-[#eef2ff] text-[#4338ca]">{unread.length}</span>
              ) : null}
            </summary>
            <div className="absolute right-0 mt-2 w-80 rounded-2xl border border-[var(--admin-border)] bg-white p-2 shadow-xl">
              {notifications.length === 0 ? (
                <p className="px-3 py-6 text-center text-sm text-[#94a3b8]">Bildirim yok</p>
              ) : (
                notifications.slice(0, 8).map((n) => (
                  <form key={n.id} action={async () => markNotificationReadAction(n.id)} className="block">
                    <button
                      type="submit"
                      className={`w-full rounded-xl px-3 py-2.5 text-left text-sm hover:bg-[#f8fafc] ${n.read ? "opacity-60" : ""}`}
                    >
                      <p className="font-semibold">{n.title}</p>
                      {n.body ? <p className="mt-0.5 text-xs text-[#64748b]">{n.body}</p> : null}
                    </button>
                  </form>
                ))
              )}
            </div>
          </details>
        </div>
      </header>

      <main className="px-4 py-6 lg:px-8 lg:py-8">{children}</main>
    </div>
  );
}
