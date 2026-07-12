import { at_least } from "../../love/js/at_least.mjs";
import { playwright_by_attribute_count } from "./playwright_by_attribute_count.mjs";
export async function playwright_by_attribute_exists(page, name, value) {
  let c = await playwright_by_attribute_count(page, name, value);
  let e = at_least(c, 1);
  return e;
}
