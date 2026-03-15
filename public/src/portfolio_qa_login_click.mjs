import { playwright_by_attribute_click } from "../../../love/public/src/playwright_by_attribute_click.mjs";
export async function portfolio_qa_login_click(page) {
  const name = portfolio_qa_attribute_test_data();
  const value = "login-button";
  await playwright_by_attribute_click(page, name, value);
}
