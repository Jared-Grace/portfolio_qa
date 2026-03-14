import { equal_assert } from "../../../love/public/src/equal_assert.mjs";
import { playwright_by_attribute_text } from "../../../portfolio_qa/public/src/playwright_by_attribute_text.mjs";
export async function portfolio_qa_error_message(page, name_field) {
  const name = "data-test";
  const value = "error";
  let actual = await playwright_by_attribute_text(page, name, value);
  equal_assert(actual, "Epic sadface: " + name_field + " is required");
}
