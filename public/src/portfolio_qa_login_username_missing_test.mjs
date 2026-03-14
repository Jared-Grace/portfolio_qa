import { portfolio_qa_error_message } from "../../../portfolio_qa/public/src/portfolio_qa_error_message.mjs";
import { portfolio_qa_login_click } from "../../../portfolio_qa/public/src/portfolio_qa_login_click.mjs";
import { portfolio_qa_test_generic } from "../../../portfolio_qa/public/src/portfolio_qa_test_generic.mjs";
export async function portfolio_qa_login_username_missing_test() {
  async function lambda(page) {
    await portfolio_qa_login_click(page);
    await portfolio_qa_error_message(page, "Username");
  }
  await portfolio_qa_test_generic(lambda);
}
