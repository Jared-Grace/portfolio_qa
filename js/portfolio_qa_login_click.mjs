import { portfolio_qa_attribute_test_data } from "./portfolio_qa_attribute_test_data.mjs";
import { playwright_by_attribute_click } from "../../love/js/playwright_by_attribute_click.mjs";
export async function portfolio_qa_login_click(page) {
  let name = portfolio_qa_attribute_test_data();
  let value = "login-button";
  await playwright_by_attribute_click(page, name, value);
}
