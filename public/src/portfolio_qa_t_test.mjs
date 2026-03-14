import { portfolio_qa_test_generic } from "../../../portfolio_qa/public/src/portfolio_qa_test_generic.mjs";
export async function portfolio_qa_t_test() {
  async function lambda(page) {}
  await portfolio_qa_test_generic(lambda);
}
