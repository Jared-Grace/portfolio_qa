import { portfolio_qa_by_attribute_type } from "../../../portfolio_qa/public/src/portfolio_qa_by_attribute_type.mjs";
export async function portfolio_qa_password_type(page, password) {
  await portfolio_qa_by_attribute_type(page, "password", password);
}
