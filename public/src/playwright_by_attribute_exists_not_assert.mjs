import { playwright_by_attribute_exists_not } from "../../../portfolio_qa/public/src/playwright_by_attribute_exists_not.mjs";
import { playwright_by_attribute_exists_assert_assertion } from "../../../portfolio_qa/public/src/playwright_by_attribute_exists_assert_assertion.mjs";
export async function playwright_by_attribute_exists_not_assert(
  page,
  name,
  value,
) {
  let n = await playwright_by_attribute_exists_not(page, name, value);
  playwright_by_attribute_exists_assert_assertion(n, name, value);
}
