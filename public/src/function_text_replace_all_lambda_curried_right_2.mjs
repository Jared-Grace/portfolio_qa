import { function_text_replace_all_lambda } from "../../../portfolio_qa/public/src/function_text_replace_all_lambda.mjs";
export function function_text_replace_all_lambda_curried_right_2(f_name, text) {
  let r2 = function function_text_replace_all_lambda_curried_right_2_result(
    ast,
  ) {
    let r = function_text_replace_all_lambda(ast, f_name, text);
    return r;
  };
  return r2;
}
