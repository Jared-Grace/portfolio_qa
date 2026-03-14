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
    let t = await playwright_by_attribute_text(page, name, value);
    log(portfolio_qa_login_username_missing_test.name, {
      t,
    });
    await sleep(99999);
  }
  await portfolio_qa_test_generic(lambda);
}
