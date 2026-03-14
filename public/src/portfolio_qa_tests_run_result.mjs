import { ternary } from "../../../love/public/src/ternary.mjs";
import { text_combine_multiple } from "../../../love/public/src/text_combine_multiple.mjs";
import { word_count_pluralize } from "../../../karate_code/public/src/word_count_pluralize.mjs";
import { subtract } from "../../../love/public/src/subtract.mjs";
import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
import { list_size } from "../../../love/public/src/list_size.mjs";
export function portfolio_qa_tests_run_result(tests, errors) {
  let count_total = list_size(tests);
  let errors_names = list_map_property(errors, "name");
  let count_errors = list_size(errors);
  let count_successes = subtract(count_total, count_errors);
  let v = word_count_pluralize(count_total, "test");
  let p = word_count_pluralize(count_errors, "error");
  let combined = text_combine_multiple([p, " when ", v, " were ran"]);
  let combined2 = text_combine_multiple([
    count_total,
    " test(s) ran successfully with no errors",
  ]);
  let message = ternary(count_errors === 0, combined2, combined);
  let r3 = {
    errors,
    count: {
      count_total,
      count_successes,
      count_errors,
    },
    errors_names,
    message: message,
  };
  return r3;
}
