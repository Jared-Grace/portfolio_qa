import { js_return_argument_set } from "../../../love/public/src/js_return_argument_set.mjs";
import { js_flo_body_add_return } from "../../../love/public/src/js_flo_body_add_return.mjs";
export function js_flo_body_add_return_argument(ast, e) {
  let r = js_flo_body_add_return(ast);
  js_return_argument_set(r, e);
}
