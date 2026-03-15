import { each } from "../../../love/public/src/each.mjs";
import { object_replace } from "../../../love/public/src/object_replace.mjs";
import { js_call_empty } from "../../../love/public/src/js_call_empty.mjs";
import { equal } from "../../../love/public/src/equal.mjs";
import { js_literal_value_get } from "../../../love/public/src/js_literal_value_get.mjs";
import { js_list_type_nodes } from "../../../love/public/src/js_list_type_nodes.mjs";
import { equal_not } from "../../../love/public/src/equal_not.mjs";
import { js_flo_name } from "../../../love/public/src/js_flo_name.mjs";
export function function_text_replace_all_lambda(ast, f_name, text) {
  let name = js_flo_name(ast);
  if (equal_not(name, f_name)) {
    let nodes = js_list_type_nodes(ast, "Literal");
    function lambda3(literal) {
      let value = js_literal_value_get(literal);
      if (equal(value, text)) {
        let c = js_call_empty(f_name);
        object_replace(literal, c);
      }
    }
    each(nodes, lambda3);
  }
}
