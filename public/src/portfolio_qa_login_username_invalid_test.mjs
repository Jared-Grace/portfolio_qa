import { portfolio_qa_username } from "../../../portfolio_qa/public/src/portfolio_qa_username.mjs";
import { portfolio_qa_login_click } from "../../../portfolio_qa/public/src/portfolio_qa_login_click.mjs";
import { portfolio_qa_by_attribute_type } from "../../../portfolio_qa/public/src/portfolio_qa_by_attribute_type.mjs";
import { portfolio_qa_error_username_password_invalid } from "../../../portfolio_qa/public/src/portfolio_qa_error_username_password_invalid.mjs";
import { portfolio_qa_test_generic } from "../../../portfolio_qa/public/src/portfolio_qa_test_generic.mjs";
export async function portfolio_qa_login_username_invalid_test() {
  async function lambda(page) {
    const invalid = "invalid";
    await portfolio_qa_username(page, "invalid");
    await portfolio_qa_by_attribute_type(page, "password", invalid);
    await portfolio_qa_login_click(page);
    await portfolio_qa_error_username_password_invalid(page);
  }
  await portfolio_qa_test_generic(lambda);
}
