export type AdminRole = "super_admin" | "admin" | "editor";

export type AdminUser = {
  id: string;
  email: string;
  fullName: string | null;
  role: AdminRole;
};

export const ROLE_PERMISSIONS = {
  super_admin: [
    "dashboard",
    "homepage",
    "projects",
    "services",
    "testimonials",
    "blog",
    "leads",
    "clients",
    "media",
    "analytics",
    "settings",
    "seo",
    "users",
    "activity",
  ],
  admin: [
    "dashboard",
    "homepage",
    "projects",
    "services",
    "testimonials",
    "blog",
    "leads",
    "clients",
    "media",
    "analytics",
    "settings",
    "seo",
    "activity",
  ],
  editor: [
    "dashboard",
    "homepage",
    "projects",
    "services",
    "testimonials",
    "blog",
    "media",
    "leads",
  ],
} as const;

export type Permission = (typeof ROLE_PERMISSIONS)[AdminRole][number];

export function hasPermission(role: AdminRole, permission: Permission): boolean {
  return (ROLE_PERMISSIONS[role] as readonly string[]).includes(permission);
}

export function canManageSettings(role: AdminRole): boolean {
  return role === "super_admin" || role === "admin";
}

export function canManageUsers(role: AdminRole): boolean {
  return role === "super_admin";
}
