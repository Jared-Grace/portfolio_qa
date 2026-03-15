import { portfolio_qa_attribute_test_data } from "../../../portfolio_qa/public/src/portfolio_qa_attribute_test_data.mjs";
import { playwright_by_attribute_exists_not_assert } from "../../../portfolio_qa/public/src/playwright_by_attribute_exists_not_assert.mjs";
export async function portfolio_qa_exists_not_assert(page, value) {
  let name = portfolio_qa_attribute_test_data();
  await playwright_by_attribute_exists_not_assert(page, name, value);
}
