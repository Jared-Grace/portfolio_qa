import { log } from "../../../love/public/src/log.mjs";
import { chromium } from "playwright";
export async function sandbox_test() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto("https://example.com");
  const title = await page.title();
  console.log(title);
  await browser.close();
}
