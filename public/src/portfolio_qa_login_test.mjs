import { g_tutorials_each } from "../../../love/public/src/g_tutorials_each.mjs";
import { playwright_by_attribute_count } from "../../../portfolio_qa/public/src/playwright_by_attribute_count.mjs";
import { sleep_long } from "../../../portfolio_qa/public/src/sleep_long.mjs";
import { portfolio_qa_username_valid } from "../../../portfolio_qa/public/src/portfolio_qa_username_valid.mjs";
import { portfolio_qa_login_click } from "../../../portfolio_qa/public/src/portfolio_qa_login_click.mjs";
import { playwright_by_attribute_type } from "../../../love/public/src/playwright_by_attribute_type.mjs";
import { portfolio_qa_test_generic } from "../../../portfolio_qa/public/src/portfolio_qa_test_generic.mjs";
export async function portfolio_qa_login_test() {
  await portfolio_qa_test_generic(lambda2);
  async function lambda2(page) {
    let name = "data-test";
    let value = "login-container";
    let c = playwright_by_attribute_count(page, name, value);
    function lambda(tutorial) {}
    g_tutorials_each(lambda);
    await portfolio_qa_username_valid(page);
    await playwright_by_attribute_type(
      page,
      "data-test",
      "password",
      "secret_sauce",
    );
    await portfolio_qa_login_click(page);
    await sleep_long();
  }
}
