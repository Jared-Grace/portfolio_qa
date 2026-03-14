import { playwright_by_attribute_exists_assert } from "../../../portfolio_qa/public/src/playwright_by_attribute_exists_assert.mjs";
export async function playwright_by_attribute_exists_assert_not(
  page,
  name,
  value,
) {
  let r = await playwright_by_attribute_exists_assert(page, name, value);
  return r;
}
