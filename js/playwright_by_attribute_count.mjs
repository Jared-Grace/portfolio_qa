import { list_size } from "../../love/js/list_size.mjs";
import { playwright_by_attribute } from "../../love/js/playwright_by_attribute.mjs";
export async function playwright_by_attribute_count(page, name, value) {
  let list = await playwright_by_attribute(page, name, value);
  let size = list_size(list);
  return size;
}
