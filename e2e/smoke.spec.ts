import { test, expect } from "@playwright/test";

test.describe("Northline smoke", () => {
  test("home loads with brand and CTA", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("link", { name: /Northline/i }).first()).toBeVisible();
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  });

  test("services navigation", async ({ page }) => {
    await page.goto("/hizmetler");
    await expect(page.getByRole("heading").first()).toBeVisible();
  });

  test("work listing and detail", async ({ page }) => {
    await page.goto("/calismalar");
    await page.getByRole("link").filter({ hasText: /Harbor|Harbor Stay|Liman/i }).first().click();
    await expect(page).toHaveURL(/calismalar|work/);
  });

  test("project wizard opens", async ({ page }) => {
    await page.goto("/proje-baslat");
    await expect(page.getByText(/Ne yaptırmak|What do you want/i)).toBeVisible();
  });

  test("locale switch to English", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: /^EN$/i }).first().click();
    await expect(page).toHaveURL(/\/en/);
  });

  test("404", async ({ page }) => {
    const res = await page.goto("/bu-sayfa-yok-xyz");
    expect(res?.status()).toBe(404);
  });

  test("admin unprotected stub does not crash", async ({ page }) => {
    await page.goto("/admin");
    await expect(page.locator("body")).toBeVisible();
  });
});
