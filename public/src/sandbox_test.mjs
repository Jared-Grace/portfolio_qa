import { playwright_by_attribute_typed } from "../../../portfolio_qa/public/src/playwright_by_attribute_typed.mjs";
import { sleep } from "../../../love/public/src/sleep.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { chromium } from "playwright";
const typed = "standard_user";
export async function sandbox_test() {
  const browser = await chromium.launch({
    headless: false,
  });
  const page = await browser.newPage();
  await page.goto("https://www.saucedemo.com/");
  const title = await page.title();
  console.log(title);
  const name = "data-test";
  const value = "username";
  await playwright_by_attribute_typed(page, name, value);
  await page.locator('[data-test="password"]').type("secret_sauce");
  await page.locator('[data-test="login-button"]').click();
  await sleep(10000);
  await browser.close();
}
