import { test, expect } from "@playwright/test";

test("project card opens its case-study page", async ({ page }) => {
  await page.goto("/");
  await page.locator('a[href^="/projects/"]').first().click();
  await expect(page).toHaveURL(/\/projects\/.+/);
  await expect(
    page.getByRole("link", { name: /All projects/ }),
  ).toBeVisible();
});

test("PRC page shows dashboard highlights, X link and screens", async ({
  page,
}) => {
  await page.goto("/projects/prc-pixel-race-club");
  await expect(
    page.getByRole("heading", { name: /Pixel Race Club/ }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "X ↗" }),
  ).toHaveAttribute("href", "https://x.com/PixelRaceClub");
  await expect(
    page.getByRole("heading", { name: "Screens" }),
  ).toBeVisible();
});

test("AIH page marks the project offline with demos link", async ({
  page,
}) => {
  await page.goto("/projects/aih-all-in-hype");
  await expect(page.getByText("Offline", { exact: true })).toBeVisible();
  await expect(page.getByRole("link", { name: /Demos/ })).toBeVisible();
});
