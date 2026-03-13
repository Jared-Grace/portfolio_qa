import { playwright_by_attribute } from "../../../portfolio_qa/public/src/playwright_by_attribute.mjs";
export async function playwright_by_attribute_type(page, name, value, typed) {
  await playwright_by_attribute(page, name, value).type(typed);
}
