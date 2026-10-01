import { test, expect } from "@playwright/test";

test("unknown route renders the not-found page", async ({ page }) => {
  await page.goto("/definitely-missing");
  await expect(page.getByText("in space.")).toBeVisible();
  await page.getByRole("link", { name: /Back home/ }).click();
  await expect(page).toHaveURL("/");
});
