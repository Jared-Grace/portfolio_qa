import { js_flo_body_add_return } from "../../../love/public/src/js_flo_body_add_return.mjs";
import { function_new_transform } from "../../../love/public/src/function_new_transform.mjs";
export async function function_new_text_replace_all(text, f_name) {
  async function lambda(ast) {
    let r = js_flo_body_add_return(ast);
  }
  let output = await function_new_transform(f_name, lambda);
}
