import { test, expect } from "@playwright/test";
export function sandbox_test() {
  async function lambda({ page }) {
    await page.goto("https://example.com");
    await expect(page).toHaveTitle(/Example/);
  }
  test("basic test", lambda);
}
