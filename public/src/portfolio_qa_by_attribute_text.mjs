import { portfolio_qa_attribute_test_data } from "../../../portfolio_qa/public/src/portfolio_qa_attribute_test_data.mjs";
import { playwright_by_attribute_text } from "../../../portfolio_qa/public/src/playwright_by_attribute_text.mjs";
export async function portfolio_qa_by_attribute_text(page, value) {
  const name = portfolio_qa_attribute_test_data();
  let actual = await playwright_by_attribute_text(page, name, value);
  return actual;
}
