import { playwright_by_attribute } from "../../../portfolio_qa/public/src/playwright_by_attribute.mjs";
export function playwright_by_attribute_type(page, name, value, typed) {
  let r = playwright_by_attribute(page, name, value).type(typed);
  return r;
}
