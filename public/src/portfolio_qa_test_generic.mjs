import { playwright_test_url } from "../../../love/public/src/playwright_test_url.mjs";
export async function portfolio_qa_test_generic(lambda$page) {
  const url = "https://www.saucedemo.com/";
  await playwright_test_url(url, lambda$page);
}
