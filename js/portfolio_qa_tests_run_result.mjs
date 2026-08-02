import { equal } from "../../love/js/equal.mjs";
import { ternary } from "../../love/js/ternary.mjs";
import { text_combine_multiple } from "../../love/js/text_combine_multiple.mjs";
import { word_count_pluralize } from "../../love/js/word_count_pluralize.mjs";
import { subtract } from "../../love/js/subtract.mjs";
import { list_map_property } from "../../love/js/list_map_property.mjs";
import { list_size } from "../../love/js/list_size.mjs";
export function portfolio_qa_tests_run_result(tests, errors) {
  let count_total = list_size(tests);
  let errors_names = list_map_property(errors, "name");
  let count_errors = list_size(errors);
  let count_successes = subtract(count_total, count_errors);
  let v = word_count_pluralize(count_total, "test");
  let p = word_count_pluralize(count_errors, "error");
  let combined = text_combine_multiple([p, " when ", v, " were ran"]);
  let combined2 = text_combine_multiple([
    v,
    " ran successfully with no errors",
  ]);
  let condition = equal(count_errors, 0);
  let message = ternary(condition, combined2, combined);
  let r = {
    errors,
    count: {
      count_total,
      count_successes,
      count_errors,
    },
    errors_names,
    message: message,
  };
  return r;
}
