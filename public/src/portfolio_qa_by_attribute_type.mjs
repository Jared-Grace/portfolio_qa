import { playwright_by_attribute_type } from "../../../love/public/src/playwright_by_attribute_type.mjs";
export async function portfolio_qa_by_attribute_type(page, name, value, typed) {
  return await playwright_by_attribute_type(page, name, value, typed);
}
