import { portfolio_qa_error_message_assert } from "../../../portfolio_qa/public/src/portfolio_qa_error_message_assert.mjs";
export async function portfolio_qa_error_username_password_invalid(page) {
  await portfolio_qa_error_message_assert(
    page,
    "Username and password do not match any user in this service",
  );
}
