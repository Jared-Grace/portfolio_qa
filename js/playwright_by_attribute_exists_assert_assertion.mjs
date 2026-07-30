import { assert_json } from "../../love/js/assert_json.mjs";
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
