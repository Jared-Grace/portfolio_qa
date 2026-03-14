import { greater_than_or_equal } from "../../../love/public/src/greater_than_or_equal.mjs";
import { playwright_by_attribute_count } from "../../../portfolio_qa/public/src/playwright_by_attribute_count.mjs";
export function playwright_by_attribute_exists(page, name, value) {
  let c = playwright_by_attribute_count(page, name, value);
  let e = greater_than_or_equal(c, 1);
  return e;
}
