import { function_text_replace_all_lambda_curried_right_2 } from "../../../portfolio_qa/public/src/function_text_replace_all_lambda_curried_right_2.mjs";
import { function_run } from "../../../love/public/src/function_run.mjs";
export async function function_text_replace_all_transform(f_name) {
  let text = await function_run(f_name, []);
  let t = function_text_replace_all_lambda_curried_right_2(f_name, text);
  return t;
}
