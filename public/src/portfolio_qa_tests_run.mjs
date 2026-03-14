import { portfolio_qa_tests_run_result } from "../../../portfolio_qa/public/src/portfolio_qa_tests_run_result.mjs";
import { catch_call_async } from "../../../love/public/src/catch_call_async.mjs";
import { error } from "../../../love/public/src/error.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { invoke_multiple_unordered_async } from "../../../love/public/src/invoke_multiple_unordered_async.mjs";
import { function_import } from "../../../love/public/src/function_import.mjs";
import { portfolio_qa_tests } from "../../../portfolio_qa/public/src/portfolio_qa_tests.mjs";
import { list_map_unordered_async } from "../../../love/public/src/list_map_unordered_async.mjs";
export async function portfolio_qa_tests_run() {
  let r = await portfolio_qa_tests();
  let mapped = await list_map_unordered_async(r, function_import);
  let errors = [];
  function lambda(item) {
    function on_error(error) {
      list_add(errors, {
        name: item.name,
        error,
      });
    }
    let i = catch_call_async(on_error, item);
    return i;
  }
  let mapped2 = list_map(mapped, lambda);
  let r2 = await invoke_multiple_unordered_async(mapped2);
  let r3 = portfolio_qa_tests_run_result(r, errors);
  return r3;
}
