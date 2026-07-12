import { each_async } from "../../love/js/each_async.mjs";
import { js_imports_missing_add_all } from "../../love/js/js_imports_missing_add_all.mjs";
import { js_atomize_function } from "../../love/js/js_atomize_function.mjs";
import { js_call_fill } from "../../love/js/js_call_fill.mjs";
import { js_flo_body_add } from "../../love/js/js_flo_body_add.mjs";
import { portfolio_qa_test_generic } from "./portfolio_qa_test_generic.mjs";
import { js_parse_statement } from "../../love/js/js_parse_statement.mjs";
import { function_transform } from "../../love/js/function_transform.mjs";
import { text_combine_multiple } from "../../love/js/text_combine_multiple.mjs";
import { portfolio_qa_test_suffix } from "./portfolio_qa_test_suffix.mjs";
import { portfolio_qa_test_prefix } from "./portfolio_qa_test_prefix.mjs";
import { function_new_open } from "../../love/js/function_new_open.mjs";
export async function portfolio_qa_test_add(name_test) {
  let prefix = portfolio_qa_test_prefix();
  let suffix = portfolio_qa_test_suffix();
  let f_name = text_combine_multiple([prefix, name_test, suffix]);
  await function_new_open(f_name);
  async function lambda(ast) {
    let statement = js_parse_statement(portfolio_qa_test_generic.name);
    js_flo_body_add(ast, statement);
    let transforms = [
      js_call_fill,
      js_atomize_function,
      js_imports_missing_add_all,
    ];
    async function lambda2(item) {
      await item(ast);
    }
    await each_async(transforms, lambda2);
  }
  let output = await function_transform(f_name, lambda);
  return f_name;
}
