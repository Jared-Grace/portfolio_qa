import { function_text_replace_all_lambda_curried_right_ } from "./function_text_replace_all_lambda_curried_right_2.mjs";
import { function_run } from "../../love/js/function_run.mjs";
export async function function_text_replace_all_transform(f_name) {
  let text = await function_run(f_name, []);
  let t = function_text_replace_all_lambda_curried_right_(f_name, text);
  return t;
}
