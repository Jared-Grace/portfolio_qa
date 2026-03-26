import { log } from "../../../love/public/src/log.mjs";
import { assert_json_get } from "../../../love/public/src/assert_json_get.mjs";
export function playwright_by_attribute_exists_assert_assertion(
  e,
  name,
  value,
) {
  function lambda3() {
    let r = {
      exists: e,
      name,
      value,
    };
    log(playwright_by_attribute_exists_assert_assertion.name, {
      r,
    });
    return r;
  }
  assert_json_get(e, lambda3);
}
