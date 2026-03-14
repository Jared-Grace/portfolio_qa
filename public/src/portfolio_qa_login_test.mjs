import { portfolio_qa_username_valid_password_login } from "../../../portfolio_qa/public/src/portfolio_qa_username_valid_password_login.mjs";
import { portfolio_qa_exists_not_assert } from "../../../portfolio_qa/public/src/portfolio_qa_exists_not_assert.mjs";
import { portfolio_qa_exists_assert } from "../../../portfolio_qa/public/src/portfolio_qa_exists_assert.mjs";
import { portfolio_qa_test_generic } from "../../../portfolio_qa/public/src/portfolio_qa_test_generic.mjs";
export async function portfolio_qa_login_test() {
  await portfolio_qa_test_generic(lambda2);
  async function lambda2(page) {
    const password = "secret_sauce";$x
    await portfolio_qa_username_valid_password_login(page, password);
    await portfolio_qa_exists_not_assert(page, "login-container");
    await portfolio_qa_exists_assert(page, "inventory-container");
  }
}
