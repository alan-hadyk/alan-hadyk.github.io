import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/no-header");
});

test.describe("Skills", () => {
  test("should be displayed at tv width", async ({ page }) => {
    await page.setViewportSize({
      height: 1080,
      width: 1921,
    });

    await page.locator("#skills").scrollIntoViewIfNeeded();

    await expect(page.locator("#skills")).toHaveScreenshot({
      animations: "disabled",
      omitBackground: true,
      scale: "css",
    });
  });

  test("should be displayed at wide desktop width", async ({ page }) => {
    await page.setViewportSize({
      height: 1080,
      width: 1700,
    });

    await page.locator("#skills").scrollIntoViewIfNeeded();

    await expect(page.locator("#skills")).toHaveScreenshot({
      animations: "disabled",
      omitBackground: true,
      scale: "css",
    });
  });

  test("should be displayed at narrow desktop width", async ({ page }) => {
    await page.setViewportSize({
      height: 1080,
      width: 1300,
    });

    await page.locator("#skills").scrollIntoViewIfNeeded();

    await expect(page.locator("#skills")).toHaveScreenshot({
      animations: "disabled",
      omitBackground: true,
      scale: "css",
    });
  });

  test("should be displayed at tablet width", async ({ page }) => {
    await page.setViewportSize({
      height: 1080,
      width: 1000,
    });

    await page.locator("#skills").scrollIntoViewIfNeeded();

    await expect(page.locator("#skills")).toHaveScreenshot({
      animations: "disabled",
      omitBackground: true,
      scale: "css",
    });
  });

  test("should be displayed at mobile width", async ({ page }) => {
    await page.setViewportSize({
      height: 1080,
      width: 650,
    });

    await page.locator("#skills").scrollIntoViewIfNeeded();

    await expect(page.locator("#skills")).toHaveScreenshot({
      animations: "disabled",
      omitBackground: true,
      scale: "css",
    });
  });
});
