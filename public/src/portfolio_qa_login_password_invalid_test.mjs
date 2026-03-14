import { portfolio_qa_error_message_assert } from "../../../portfolio_qa/public/src/portfolio_qa_error_message_assert.mjs";
import { portfolio_qa_username_valid_password_login } from "../../../portfolio_qa/public/src/portfolio_qa_username_valid_password_login.mjs";
import { portfolio_qa_test_generic } from "../../../portfolio_qa/public/src/portfolio_qa_test_generic.mjs";
export async function portfolio_qa_login_password_invalid_test() {
  async function lambda(page) {
    const invalid = "invalid";
    await portfolio_qa_username_valid_password_login(page, invalid);
    await portfolio_qa_error_message_assert(
      page,
      "Username and password do not match any user in this srvice",
    );
  }
  await portfolio_qa_test_generic(lambda);
}
