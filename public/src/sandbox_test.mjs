import { playwright_by_attribute } from "../../../portfolio_qa/public/src/playwright_by_attribute.mjs";
import { sleep } from "../../../love/public/src/sleep.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { chromium } from "playwright";
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
  const typed = "standard_user";
  await playwright_by_attribute(page, name, value).type(typed);
  await page.locator('[data-test="password"]').type("secret_sauce");
  await page.locator('[data-test="login-button"]').click();
  await sleep(10000);
  await browser.close();
}
