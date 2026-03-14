import { portfolio_qa_password_type } from "../../../portfolio_qa/public/src/portfolio_qa_password_type.mjs";
import { portfolio_qa_exists_assert } from "../../../portfolio_qa/public/src/portfolio_qa_exists_assert.mjs";
import { portfolio_qa_login_click } from "../../../portfolio_qa/public/src/portfolio_qa_login_click.mjs";
import { portfolio_qa_username_valid } from "../../../portfolio_qa/public/src/portfolio_qa_username_valid.mjs";
export async function portfolio_qa_username_valid_password_login(
  page,
  password,
) {
  await portfolio_qa_exists_assert(page, "login-container");
  await portfolio_qa_username_valid(page);
  await portfolio_qa_password_type(page, password);
  await portfolio_qa_login_click(page);
}
