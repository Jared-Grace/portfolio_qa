import { portfolio_qa_by_attribute_text } from "../../../portfolio_qa/public/src/portfolio_qa_by_attribute_text.mjs";
import { equal_assert } from "../../../love/public/src/equal_assert.mjs";
export async function portfolio_qa_error_message(page, name_field) {
  const value = "error";
  let actual = await portfolio_qa_by_attribute_text(page, value);
  equal_assert(actual, "Epic sadface: " + name_field + " is required");
}
