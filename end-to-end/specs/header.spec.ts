import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test.describe("Header", () => {
  test("should be displayed at tv width", async ({ page }) => {
    await page.setViewportSize({
      height: 1080,
      width: 1921,
    });

    await page.locator("#contact").scrollIntoViewIfNeeded();
    await page.locator("#contact").evaluate((node) =>
      node.scrollIntoView({
        behavior: "auto",
      }),
    );
    await page.waitForLoadState("networkidle");

    await expect(page.locator("#header")).toHaveScreenshot({
      animations: "disabled",
      omitBackground: true,
      scale: "css",
    });

    await page.locator("#menu-button-desktop").isHidden();
    await page.locator("#side-menu-desktop").isHidden();

    await page.locator("#menu-button-tablet-mobile").isHidden();
    await page.locator("#side-menu-tablet-mobile").isHidden();
  });

  test("should be displayed at wide desktop width", async ({ page }) => {
    await page.setViewportSize({
      height: 1080,
      width: 1700,
    });

    await page.locator("#contact").scrollIntoViewIfNeeded();
    await page.locator("#contact").evaluate((node) =>
      node.scrollIntoView({
        behavior: "auto",
      }),
    );
    await page.waitForLoadState("networkidle");

    await page.locator("#menu-button-desktop").isHidden();
    await page.locator("#side-menu-desktop").isHidden();

    await page.locator("#menu-button-tablet-mobile").isHidden();
    await page.locator("#side-menu-tablet-mobile").isHidden();

    await expect(page.locator("#header")).toHaveScreenshot({
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

    await page.locator("#contact").scrollIntoViewIfNeeded();
    await page.locator("#contact").evaluate((node) =>
      node.scrollIntoView({
        behavior: "auto",
      }),
    );
    await page.waitForLoadState("networkidle");

    await expect(page.locator("#header")).toHaveScreenshot({
      animations: "disabled",
      omitBackground: true,
      scale: "css",
    });

    await page.locator("#menu-button-tablet-mobile").isHidden();
    await page.locator("#side-menu-tablet-mobile").isHidden();

    await page.locator("#side-menu-desktop").isHidden();

    await page.locator("#menu-button-desktop").click();

    await page.locator("#side-menu-desktop").isVisible();

    await expect(page.locator("#side-menu-desktop")).toHaveScreenshot({
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

    await page.locator("#contact").scrollIntoViewIfNeeded();
    await page.locator("#contact").evaluate((node) =>
      node.scrollIntoView({
        behavior: "auto",
      }),
    );
    await page.waitForLoadState("networkidle");

    await expect(page.locator("#header")).toHaveScreenshot({
      animations: "disabled",
      omitBackground: true,
      scale: "css",
    });

    await page.locator("#menu-button-desktop").isHidden();
    await page.locator("#side-menu-desktop").isHidden();

    await page.locator("#side-menu-tablet-mobile").isHidden();

    await page.locator("#menu-button-tablet-mobile").click();

    await page.locator("#side-menu-tablet-mobile").isVisible();

    await expect(page.locator("#side-menu-tablet-mobile")).toHaveScreenshot({
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

    await page.locator("#contact").scrollIntoViewIfNeeded();
    await page.locator("#contact").evaluate((node) =>
      node.scrollIntoView({
        behavior: "auto",
      }),
    );
    await page.waitForLoadState("networkidle");

    await page.waitForTimeout(2000);

    await expect(page.locator("#header")).toHaveScreenshot({
      animations: "disabled",
      omitBackground: true,
      scale: "css",
    });

    await page.locator("#side-menu-tablet-mobile").isHidden();

    await page.locator("#menu-button-tablet-mobile").click();

    await page.locator("#side-menu-tablet-mobile").isVisible();

    await expect(page.locator("#side-menu-tablet-mobile")).toHaveScreenshot({
      animations: "disabled",
      omitBackground: true,
      scale: "css",
    });

    await page.locator("#menu-button-desktop").isHidden();
    await page.locator("#side-menu-desktop").isHidden();
  });
});
