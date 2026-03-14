import { portfolio_qa_error_username_password_invalid } from "../../../portfolio_qa/public/src/portfolio_qa_error_username_password_invalid.mjs";
import { portfolio_qa_username_valid_password_login } from "../../../portfolio_qa/public/src/portfolio_qa_username_valid_password_login.mjs";
import { portfolio_qa_test_generic } from "../../../portfolio_qa/public/src/portfolio_qa_test_generic.mjs";
export async function portfolio_qa_login_username_invalid_test() {
  async function lambda(page) {
    const invalid = "invalid";
    await portfolio_qa_username_valid_password_login(page, invalid);
    await portfolio_qa_error_username_password_invalid(page);
  }
  await portfolio_qa_test_generic(lambda);
}
