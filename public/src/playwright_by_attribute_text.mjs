import { playwright_by_attribute } from "../../../love/public/src/playwright_by_attribute.mjs";
export async function playwright_by_attribute_text(page, name, value) {
  const e = await playwright_by_attribute(page, name, value);
  let actual = await e.textContent();
  return actual;
}
