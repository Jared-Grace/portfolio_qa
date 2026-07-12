import { equal_assert } from "../../love/js/equal_assert.mjs";
import { portfolio_qa_test_generic } from "./portfolio_qa_test_generic.mjs";
export async function portfolio_qa_smoke_test() {
  await portfolio_qa_test_generic(lambda);
  async function lambda(page) {
    let title = await page.title();
    ("this assert is a smoke test");
    equal_assert(title, "Swag Labs");
  }
}
