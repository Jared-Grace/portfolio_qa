import { not } from "../../../love/public/src/not.mjs";
import { playwright_by_attribute_exists } from "../../../portfolio_qa/public/src/playwright_by_attribute_exists.mjs";
export async function playwright_by_attribute_exists_not(page, name, value) {
  let e = await playwright_by_attribute_exists(page, name, value);
  let n = not(e);
  return n;
}
