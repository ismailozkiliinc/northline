"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Activity,
  BarChart3,
  FileText,
  FolderKanban,
  Home,
  Image,
  LayoutDashboard,
  LogOut,
  MessageSquare,
  Settings,
  Star,
  Users,
  Wrench,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { AdminUser } from "@/lib/admin/permissions";
import { logoutAction } from "@/lib/admin/actions";

const nav = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  {
    group: "Content",
    items: [
      { href: "/admin/homepage", label: "Homepage", icon: Home },
      { href: "/admin/projects", label: "Projects", icon: FolderKanban },
      { href: "/admin/services", label: "Services", icon: Wrench },
      { href: "/admin/testimonials", label: "Testimonials", icon: Star },
      { href: "/admin/blog", label: "Blog", icon: FileText },
    ],
  },
  {
    group: "CRM",
    items: [
      { href: "/admin/leads", label: "Leads", icon: MessageSquare },
      { href: "/admin/clients", label: "Clients", icon: Users },
    ],
  },
  { href: "/admin/media", label: "Media Library", icon: Image },
  {
    group: "Analytics",
    items: [
      { href: "/admin/analytics", label: "Traffic", icon: BarChart3 },
      { href: "/admin/analytics/conversions", label: "Conversions", icon: Activity },
    ],
  },
  {
    group: "Settings",
    items: [
      { href: "/admin/settings", label: "Site Settings", icon: Settings },
      { href: "/admin/seo", label: "SEO", icon: FileText },
      { href: "/admin/users", label: "Users", icon: Users },
      { href: "/admin/activity", label: "Activity Logs", icon: Activity },
    ],
  },
];

export function AdminSidebar({
  user,
  open,
  onClose,
}: {
  user: AdminUser;
  open?: boolean;
  onClose?: () => void;
}) {
  const pathname = usePathname();

  return (
    <>
      {open ? (
        <button type="button" className="fixed inset-0 z-40 bg-black/20 lg:hidden" onClick={onClose} aria-label="Close menu" />
      ) : null}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex w-[var(--admin-sidebar)] flex-col border-r border-[var(--admin-border)] bg-white transition-transform lg:translate-x-0",
          open ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex h-16 items-center justify-between border-b border-[var(--admin-border)] px-5">
          <Link href="/admin" className="font-display text-lg font-bold tracking-tight">
            NISCRAFT<span className="text-[#6366f1]">.</span>
          </Link>
          <button type="button" className="lg:hidden" onClick={onClose} aria-label="Close">
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-4">
          {nav.map((item, i) => {
            if ("group" in item && item.group) {
              return (
                <div key={item.group} className={cn(i > 0 && "mt-6")}>
                  <p className="mb-2 px-3 text-[10px] font-semibold tracking-[0.14em] text-[#94a3b8] uppercase">
                    {item.group}
                  </p>
                  <div className="space-y-0.5">
                    {item.items?.map((link) => (
                      <SidebarLink key={link.href} {...link} active={pathname === link.href} onNavigate={onClose} />
                    ))}
                  </div>
                </div>
              );
            }
            if ("href" in item && item.href) {
              return (
                <SidebarLink
                  key={item.href}
                  href={item.href}
                  label={item.label}
                  icon={item.icon}
                  active={pathname === item.href}
                  onNavigate={onClose}
                />
              );
            }
            return null;
          })}
        </nav>

        <div className="border-t border-[var(--admin-border)] p-4">
          <div className="mb-3 rounded-xl bg-[#f8faff] px-3 py-2.5">
            <p className="truncate text-sm font-semibold">{user.fullName ?? user.email}</p>
            <p className="text-xs capitalize text-[#94a3b8]">{user.role.replace("_", " ")}</p>
          </div>
          <form action={logoutAction}>
            <button type="submit" className="admin-btn admin-btn-ghost w-full">
              <LogOut className="h-4 w-4" />
              Logout
            </button>
          </form>
        </div>
      </aside>
    </>
  );
}

function SidebarLink({
  href,
  label,
  icon: Icon,
  active,
  onNavigate,
}: {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  active: boolean;
  onNavigate?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      className={cn(
        "flex items-center gap-2.5 rounded-xl px-3 py-2 text-sm font-medium transition-colors",
        active ? "bg-[#eef2ff] text-[#4338ca]" : "text-[#475569] hover:bg-[#f8fafc]",
      )}
    >
      <Icon className="h-4 w-4 shrink-0" />
      {label}
    </Link>
  );
}
