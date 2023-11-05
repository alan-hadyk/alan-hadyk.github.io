import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/no-header");

  const sizes = await page.evaluate(() => {
    const browserHeight = window.innerHeight;
    const pageHeight = document.body.scrollHeight;

    return { browserHeight, pageHeight };
  });

  for (let i = 0; i < sizes.pageHeight; i += sizes.browserHeight) {
    await page.mouse.wheel(0, i);
    await page.waitForTimeout(1000);
  }
});

test.describe("Experience", () => {
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
    await page.waitForSelector("#AlanHadyk");

    await expect(page.locator("#experience")).toHaveScreenshot({
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

    await page.locator("#contact").scrollIntoViewIfNeeded();
    await page.locator("#contact").evaluate((node) =>
      node.scrollIntoView({
        behavior: "auto",
      }),
    );
    await page.waitForLoadState("networkidle");

    await page.waitForSelector("#AlanHadyk");

    await expect(page.locator("#experience")).toHaveScreenshot({
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

    await page.locator("#experience").scrollIntoViewIfNeeded();
    await page.waitForSelector("#AlanHadyk");

    await expect(page.locator("#experience")).toHaveScreenshot({
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

    await page.locator("#experience").scrollIntoViewIfNeeded();
    await page.waitForSelector("#AlanHadyk");

    await expect(page.locator("#experience")).toHaveScreenshot({
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

    await page.locator("#experience").scrollIntoViewIfNeeded();
    await page.waitForSelector("#AlanHadyk");

    await expect(page.locator("#experience")).toHaveScreenshot({
      animations: "disabled",
      omitBackground: true,
      scale: "css",
    });
  });
});
