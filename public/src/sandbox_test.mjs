import { log } from "../../../love/public/src/log.mjs";
import { chromium } from "playwright";
export async function sandbox_test() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto("https://www.saucedemo.com/");
  const title = await page.title();
  console.log(title);
  await page.locator('[data-test="username"]').fill("standard_user");
  await page.locator('[data-test="password"]').fill("secret_sauce");
  await page.locator('[data-test="login-button"]').click();
  await browser.close();
}
