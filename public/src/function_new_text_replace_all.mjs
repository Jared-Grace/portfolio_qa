import { function_new_text } from "../../../love/public/src/function_new_text.mjs";
import { function_text_replace_all } from "../../../portfolio_qa/public/src/function_text_replace_all.mjs";
export async function function_new_text_replace_all(text, f_name) {
  await function_new_text(f_name, text);
  await function_text_replace_all(f_name);
}
