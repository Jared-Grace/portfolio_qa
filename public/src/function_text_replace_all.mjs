import { function_text_replace_all_lambda_curried_right_2 } from "../../../portfolio_qa/public/src/function_text_replace_all_lambda_curried_right_2.mjs";
import { function_run } from "../../../love/public/src/function_run.mjs";
import { functions_transform } from "../../../love/public/src/functions_transform.mjs";
export async function function_text_replace_all(f_name) {
  let text = await function_run(f_name, []);
  let r2 = function_text_replace_all_lambda_curried_right_2(f_name, text);
  let waited = await functions_transform(r2);
}
