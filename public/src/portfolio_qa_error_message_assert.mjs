import { equal_assert } from "../../../love/public/src/equal_assert.mjs";
import { portfolio_qa_error_text } from "../../../portfolio_qa/public/src/portfolio_qa_error_text.mjs";
export async function portfolio_qa_error_message_assert(page, expected) {
  let actual = await portfolio_qa_error_text(page);
  equal_assert(actual, "Epic sadface: " + expected);
}
