import { portfolio_qa_username } from "./portfolio_qa_username.mjs";
export async function portfolio_qa_username_valid(page) {
  let value = "standard_user";
  await portfolio_qa_username(page, value);
}
