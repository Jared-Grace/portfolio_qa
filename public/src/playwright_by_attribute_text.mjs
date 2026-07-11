import { playwright_text_content } from "../../../love/public/src/playwright_text_content.mjs";
import { playwright_by_attribute } from "../../../love/public/src/playwright_by_attribute.mjs";
export async function playwright_by_attribute_text(page, name, value) {
  let e = await playwright_by_attribute(page, name, value);
  let actual = await playwright_text_content(e);
  return actual;
}
