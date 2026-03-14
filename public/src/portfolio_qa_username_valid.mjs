import { playwright_by_attribute_type } from "../../../love/public/src/playwright_by_attribute_type.mjs";
export async function portfolio_qa_username_valid(page) {
  await playwright_by_attribute_type(
    page,
    "data-test",
    "username",
    "standard_use2r",
  );
}
