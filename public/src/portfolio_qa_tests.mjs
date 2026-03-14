import { list_sort_text } from "../../../love/public/src/list_sort_text.mjs";
import { portfolio_qa_test_suffix } from "../../../portfolio_qa/public/src/portfolio_qa_test_suffix.mjs";
import { portfolio_qa_test_prefix } from "../../../portfolio_qa/public/src/portfolio_qa_test_prefix.mjs";
import { list_filter_starts_ends_with } from "../../../love/public/src/list_filter_starts_ends_with.mjs";
import { functions_names } from "../../../love/public/src/functions_names.mjs";
export async function portfolio_qa_tests() {
  let f_names = await functions_names();
  let prefix = portfolio_qa_test_prefix();
  let suffix = portfolio_qa_test_suffix();
  let filtered = list_filter_starts_ends_with(f_names, prefix, suffix);
  list_sort_text(filtered);
  return filtered;
}
