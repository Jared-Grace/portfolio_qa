import { assert_json_get } from "../../love/js/assert_json_get.mjs";
export function playwright_by_attribute_exists_assert_assertion(
  e,
  name,
  value,
) {
  let r = {
    exists: e,
    name,
    value,
  };
  assert_json(e, r);
}
