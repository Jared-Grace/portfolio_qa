import { retry_fast } from "../../../love/public/src/retry_fast.mjs";
import { playwright_by_attribute_exists_assert_assertion } from "../../../portfolio_qa/public/src/playwright_by_attribute_exists_assert_assertion.mjs";
import { playwright_by_attribute_exists } from "../../../portfolio_qa/public/src/playwright_by_attribute_exists.mjs";
export async function playwright_by_attribute_exists_assert(page, name, value) {
  async function lambda2() {
    let e = await playwright_by_attribute_exists(page, name, value);
    playwright_by_attribute_exists_assert_assertion(e, name, value);
  }
  await retry_fast(lambda2);
}
