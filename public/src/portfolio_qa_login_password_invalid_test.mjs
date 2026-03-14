import { log } from "../../../love/public/src/log.mjs";
import { portfolio_qa_error_text } from "../../../portfolio_qa/public/src/portfolio_qa_error_text.mjs";
import { portfolio_qa_username_valid_password_login } from "../../../portfolio_qa/public/src/portfolio_qa_username_valid_password_login.mjs";
import { portfolio_qa_test_generic } from "../../../portfolio_qa/public/src/portfolio_qa_test_generic.mjs";
export async function portfolio_qa_login_password_invalid_test() {
  async function lambda(page) {
    const invalid = "secret_sauce";
    await portfolio_qa_username_valid_password_login(page, invalid);
    let actual = await portfolio_qa_error_text(page);
    log(portfolio_qa_login_password_invalid_test.name, {
      actual,
    });
  }
  await portfolio_qa_test_generic(lambda);
}
