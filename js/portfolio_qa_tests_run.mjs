import { property_get_curried_right } from "../../love/js/property_get_curried_right.mjs";
import { qa_tests_run } from "../../love/js/qa_tests_run.mjs";
import { function_import } from "../../love/js/function_import.mjs";
import { portfolio_qa_tests } from "./portfolio_qa_tests.mjs";
import { list_map_unordered_async } from "../../love/js/list_map_unordered_async.mjs";
export async function portfolio_qa_tests_run() {
  let r = await portfolio_qa_tests();
  let mapped = await list_map_unordered_async(r, function_import);
  let name_get = property_get_curried_right("name");
  let result = await qa_tests_run(mapped, name_get);
  return result;
}
