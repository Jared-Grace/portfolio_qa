import { portfolio_qa_by_attribute_type } from "../../../portfolio_qa/public/src/portfolio_qa_by_attribute_type.mjs";
export async function portfolio_qa_username_valid(page) {
  const value = "standard_user";
  await portfolio_qa_by_attribute_type(page, "username", value);
}
