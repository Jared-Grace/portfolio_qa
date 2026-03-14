import { playwright_by_attribute_exists_not_assert } from "../../../portfolio_qa/public/src/playwright_by_attribute_exists_not_assert.mjs";
export async function portfolio_qa_exists_not_assert(page, value) {
  await playwright_by_attribute_exists_not_assert(
    page,
    "data-test",
    value + "-container",
  );
}
