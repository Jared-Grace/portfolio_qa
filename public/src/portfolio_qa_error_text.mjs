import { portfolio_qa_by_attribute_text } from "../../../portfolio_qa/public/src/portfolio_qa_by_attribute_text.mjs";
export async function portfolio_qa_error_text(page) {
  const value = "error";
  let actual = await portfolio_qa_by_attribute_text(page, value);
  return actual;
}
