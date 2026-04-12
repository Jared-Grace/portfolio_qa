import { function_text_replace_all } from "../../../portfolio_qa/public/src/function_text_replace_all.mjs";
import { js_flo_body_add_return_argument } from "../../../portfolio_qa/public/src/js_flo_body_add_return_argument.mjs";
import { js_expression_string } from "../../../love/public/src/js_expression_string.mjs";
import { function_new_transform_open } from "../../../love/public/src/function_new_transform_open.mjs";
export async function function_new_text_replace_all(text, f_name) {
  async function lambda(ast) {
    let e = js_expression_string(text);
    js_flo_body_add_return_argument(ast, e);
  }
  let output = await function_new_transform_open(f_name, lambda);
  await function_text_replace_all(f_name);
}
