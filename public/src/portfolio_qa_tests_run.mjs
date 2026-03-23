import { property_get_curried_right } from "../../../love/public/src/property_get_curried_right.mjs";
import { qa_tests_run } from "../../../love/public/src/qa_tests_run.mjs";
import { function_import } from "../../../love/public/src/function_import.mjs";
import { portfolio_qa_tests } from "../../../portfolio_qa/public/src/portfolio_qa_tests.mjs";
import { list_map_unordered_async } from "../../../love/public/src/list_map_unordered_async.mjs";
export async function portfolio_qa_tests_run() {
  let r = await portfolio_qa_tests();
  let mapped = await list_map_unordered_async(r, function_import);
  let r2 = property_get_curried_right(property_name);
  let result = await qa_tests_run(mapped);
  return result;
}
