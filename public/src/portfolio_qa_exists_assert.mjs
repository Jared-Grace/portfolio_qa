import { playwright_by_attribute_exists_assert } from "../../../portfolio_qa/public/src/playwright_by_attribute_exists_assert.mjs";
export async function portfolio_qa_exists_assert(page, value) {
  await playwright_by_attribute_exists_assert(
    page,
    portfolio_qa_attribute_test_data(),
    value,
  );
}
