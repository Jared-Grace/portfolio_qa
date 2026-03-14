import { portfolio_qa_error_text } from "../../../portfolio_qa/public/src/portfolio_qa_error_text.mjs";
import { equal_assert } from "../../../love/public/src/equal_assert.mjs";
export async function portfolio_qa_error_message(page, name_field) {
  let actual = await portfolio_qa_error_text(page);
  equal_assert(actual, "Epic sadface: " + name_field + " is required");
}
