import { portfolio_qa_attribute_test_data } from "../../../portfolio_qa/public/src/portfolio_qa_attribute_test_data.mjs";
import { playwright_by_attribute_type } from "../../../love/public/src/playwright_by_attribute_type.mjs";
export async function portfolio_qa_by_attribute_type(page, value, typed) {
  let name = portfolio_qa_attribute_test_data();
  let r = await playwright_by_attribute_type(page, name, value, typed);
  return r;
}
