import { portfolio_qa_error_message_assert } from "../../../portfolio_qa/public/src/portfolio_qa_error_message_assert.mjs";
export async function portfolio_qa_error_message(page, name_field) {
  const expected = name_field + " is required";
  await portfolio_qa_error_message_assert(page, expected);
}
