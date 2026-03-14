import { playwright_by_attribute } from "../../../love/public/src/playwright_by_attribute.mjs";
export async function playwright_by_attribute_text(page, name, value) {
  let r = await playwright_by_attribute(page, name, value).textContent();
  return r;
}
