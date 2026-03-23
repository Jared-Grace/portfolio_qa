import { retry_fast } from "../../../love/public/src/retry_fast.mjs";
import { greater_than_or_equal } from "../../../love/public/src/greater_than_or_equal.mjs";
import { playwright_by_attribute_count } from "../../../portfolio_qa/public/src/playwright_by_attribute_count.mjs";
export async function playwright_by_attribute_exists(page, name, value) {
  async function lambda2() {
    let c = await playwright_by_attribute_count(page, name, value);
    let e = greater_than_or_equal(c, 1);
  }
  await retry_fast(lambda2);
  return e;
}
