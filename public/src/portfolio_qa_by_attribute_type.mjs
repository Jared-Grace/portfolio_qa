import { playwright_by_attribute_type } from "../../../love/public/src/playwright_by_attribute_type.mjs";
export async function portfolio_qa_by_attribute_type(page, value, typed) {
  let r = await playwright_by_attribute_type(page, "data-test", value, typed);
  return r;
}
