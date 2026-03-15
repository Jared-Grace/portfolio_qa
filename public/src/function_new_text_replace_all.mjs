import { functions_transform } from "../../../love/public/src/functions_transform.mjs";
import { js_list_type_nodes } from "../../../love/public/src/js_list_type_nodes.mjs";
import { js_expression_string } from "../../../love/public/src/js_expression_string.mjs";
import { js_return_argument_set } from "../../../love/public/src/js_return_argument_set.mjs";
import { js_flo_body_add_return } from "../../../love/public/src/js_flo_body_add_return.mjs";
import { function_new_transform } from "../../../love/public/src/function_new_transform.mjs";
export async function function_new_text_replace_all(text, f_name) {
  async function lambda(ast) {
    let r = js_flo_body_add_return(ast);
    let e = js_expression_string(text);
    js_return_argument_set(r, e);
  }
  let output = await function_new_transform(f_name, lambda);
  async function lambda2(ast) {
    let nodes = js_list_type_nodes(ast, node_type);
  }
  let waited = await functions_transform(lambda2);
}
