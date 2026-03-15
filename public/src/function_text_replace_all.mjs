import { function_text_replace_all_transform } from "../../../portfolio_qa/public/src/function_text_replace_all_transform.mjs";
import { functions_transform } from "../../../love/public/src/functions_transform.mjs";
export async function function_text_replace_all(f_name) {
  let t = await function_text_replace_all_transform(f_name);
  let waited = await functions_transform(t);
}
