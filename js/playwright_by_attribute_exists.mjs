import { greater_than_equal } from "../../love/js/greater_than_equal.mjs";
import { playwright_by_attribute_count } from "./playwright_by_attribute_count.mjs";
export async function playwright_by_attribute_exists(page, name, value) {
  let c = await playwright_by_attribute_count(page, name, value);
  let e = greater_than_equal(c, 1);
  return e;
}
