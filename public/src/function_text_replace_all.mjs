import { function_text_replace_all_lambda } from "../../../portfolio_qa/public/src/function_text_replace_all_lambda.mjs";
import { functions_transform } from "../../../love/public/src/functions_transform.mjs";
export async function function_text_replace_all(f_name, text) {
  async function lambda2(ast) {
    function_text_replace_all_lambda(ast, f_name, text);
  }
  let waited = await functions_transform(lambda2);
}
