import { equal_assert } from "../../../love/public/src/equal_assert.mjs";
import { playwright_by_attribute } from "../../../portfolio_qa/public/src/playwright_by_attribute.mjs";
import { playwright_by_attribute_type } from "../../../portfolio_qa/public/src/playwright_by_attribute_type.mjs";
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
  equal_assert(left, right);
  console.log(title);
  await playwright_by_attribute_type(
    page,
    "data-test",
    "username",
    "standard_user",
  );
  await playwright_by_attribute_type(
    page,
    "data-test",
    "password",
    "secret_sauce",
  );
  await playwright_by_attribute(page, "data-test", "login-button").click();
  await sleep(10000);
  await browser.close();
}
