import { equal_assert } from "../../../love/public/src/equal_assert.mjs";
import { playwright_by_attribute_text } from "../../../portfolio_qa/public/src/playwright_by_attribute_text.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { portfolio_qa_login_click } from "../../../portfolio_qa/public/src/portfolio_qa_login_click.mjs";
import { sleep } from "../../../love/public/src/sleep.mjs";
import { portfolio_qa_test_generic } from "../../../portfolio_qa/public/src/portfolio_qa_test_generic.mjs";
export async function portfolio_qa_login_username_missing_test() {
  async function lambda(page) {
    await portfolio_qa_login_click(page);
    const name = "data-test";
    const value = "error";
    let actual = await playwright_by_attribute_text(page, name, value);
    equal_assert(actual, "Epic sadface: Username is required");
    log(portfolio_qa_login_username_missing_test.name, {
      t,
    });
  }
  await portfolio_qa_test_generic(lambda);
}
