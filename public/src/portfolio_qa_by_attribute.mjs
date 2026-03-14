import { playwright_by_attribute_text } from "../../../portfolio_qa/public/src/playwright_by_attribute_text.mjs";
export async function portfolio_qa_by_attribute(page, value) {
  const name = "data-test";
  let actual = await playwright_by_attribute_text(page, name, value);
  return actual;
}
