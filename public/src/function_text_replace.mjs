import { function_transform } from "../../../love/public/src/function_transform.mjs";
import { function_text_replace_all_transform } from "../../../portfolio_qa/public/src/function_text_replace_all_transform.mjs";
export async function function_text_replace(f_name) {
  let t = await function_text_replace_all_transform(f_name);
  let waited = await function_transform(t);
}
