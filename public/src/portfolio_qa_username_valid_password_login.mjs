import { portfolio_qa_login_click } from "../../../portfolio_qa/public/src/portfolio_qa_login_click.mjs";
import { portfolio_qa_by_attribute_type } from "../../../portfolio_qa/public/src/portfolio_qa_by_attribute_type.mjs";
import { portfolio_qa_username_valid } from "../../../portfolio_qa/public/src/portfolio_qa_username_valid.mjs";
export async function portfolio_qa_username_valid_password_login(
  page,
  password,
) {
  await portfolio_qa_username_valid(page);
  await portfolio_qa_by_attribute_type(page, "password", password);
  await portfolio_qa_login_click(page);
}
