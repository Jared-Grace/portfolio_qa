import { js_call_empty } from "../../../love/public/src/js_call_empty.mjs";
import { object_replace } from "../../../love/public/src/object_replace.mjs";
import { equal } from "../../../love/public/src/equal.mjs";
import { js_literal_value_get } from "../../../love/public/src/js_literal_value_get.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { functions_transform } from "../../../love/public/src/functions_transform.mjs";
import { js_list_type_nodes } from "../../../love/public/src/js_list_type_nodes.mjs";
import { js_expression_string } from "../../../love/public/src/js_expression_string.mjs";
import { js_return_argument_set } from "../../../love/public/src/js_return_argument_set.mjs";
import { js_flo_body_add_return } from "../../../love/public/src/js_flo_body_add_return.mjs";
import { function_new_transform } from "../../../love/public/src/function_new_transform.mjs";
export async function function_new_text_replace_all(text, f_name) {
  async function lambda(ast) {
    let e = js_expression_string(text);
    let r = js_flo_body_add_return(ast);
    js_return_argument_set(r, e);
  }
  let output = await function_new_transform(f_name, lambda);
  async function lambda2(ast) {
    let nodes = js_list_type_nodes(ast, "Literal");
    function lambda3(literal) {
      let value = js_literal_value_get(literal);
      if (equal(value, text)) {
        let c = js_call_empty(f_name);
        object_replace(value, c);
      }
    }
    each(nodes, lambda3);
  }
  let waited = await functions_transform(lambda2);
}
