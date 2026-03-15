import { playwright_by_attribute_type } from "../../../love/public/src/playwright_by_attribute_type.mjs";
export async function portfolio_qa_by_attribute_type(page, value, typed) {
  let r = await playwright_by_attribute_type(
    page,
    portfolio_qa_attribute_test_data(),
    value,
    typed,
  );
  return r;
}
