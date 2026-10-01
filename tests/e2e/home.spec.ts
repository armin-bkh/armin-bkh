import { test, expect } from "@playwright/test";

test("home shows hero and all project cards", async ({ page }) => {
  await page.goto("/");
  await expect(
    page.getByRole("heading", { name: "Armin Bakhshi", exact: true }),
  ).toBeVisible();
  await expect(
    page.getByRole("main").getByRole("link", { name: /My works/ }),
  ).toBeVisible();

  const cards = page.locator('a[href^="/projects/"]');
  await expect(cards).toHaveCount(4);
});

test("header navigates to every section", async ({ page }) => {
  await page.goto("/");
  for (const href of ["/projects", "/resume", "/profile"]) {
    await page.getByRole("navigation", { name: "Primary" }).getByRole("link", { name: new RegExp(href.slice(1), "i") }).first().click();
    await expect(page).toHaveURL(href);
  }
});
