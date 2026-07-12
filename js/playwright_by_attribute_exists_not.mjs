import { not } from "../../love/js/not.mjs";
import { playwright_by_attribute_exists } from "./playwright_by_attribute_exists.mjs";
export async function playwright_by_attribute_exists_not(page, name, value) {
  let e = await playwright_by_attribute_exists(page, name, value);
  let n = not(e);
  return n;
}
