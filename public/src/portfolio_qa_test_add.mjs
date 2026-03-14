import { each_async } from "../../../love/public/src/each_async.mjs";
import { js_imports_missing_add } from "../../../love/public/src/js_imports_missing_add.mjs";
import { js_atomize_function } from "../../../love/public/src/js_atomize_function.mjs";
import { js_call_fill } from "../../../love/public/src/js_call_fill.mjs";
import { js_flo_body_add } from "../../../love/public/src/js_flo_body_add.mjs";
import { portfolio_qa_test_generic } from "../../../portfolio_qa/public/src/portfolio_qa_test_generic.mjs";
import { js_parse_statement } from "../../../love/public/src/js_parse_statement.mjs";
import { function_transform } from "../../../love/public/src/function_transform.mjs";
import { text_combine_multiple } from "../../../love/public/src/text_combine_multiple.mjs";
import { portfolio_qa_test_suffix } from "../../../portfolio_qa/public/src/portfolio_qa_test_suffix.mjs";
import { portfolio_qa_test_prefix } from "../../../portfolio_qa/public/src/portfolio_qa_test_prefix.mjs";
import { function_new } from "../../../love/public/src/function_new.mjs";
export async function portfolio_qa_test_add(name_test) {
  let prefix = portfolio_qa_test_prefix();
  let suffix = portfolio_qa_test_suffix();
  let f_name = text_combine_multiple([prefix, name_test, suffix]);
  await function_new(f_name);
  async function lambda(ast) {
    let statement = js_parse_statement(portfolio_qa_test_generic.name);
    js_flo_body_add(ast, statement);
    let transforms = [
      js_call_fill,
      js_atomize_function,
      js_imports_missing_add,
    ];
    async function lambda2(item) {
      await item(ast);
    }
    await each_async(transforms, lambda2);
  }
  let output = await function_transform(f_name, lambda);
  return f_name;
}
