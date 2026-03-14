import { assert_json_get } from "../../../love/public/src/assert_json_get.mjs";
import { playwright_by_attribute_exists } from "../../../portfolio_qa/public/src/playwright_by_attribute_exists.mjs";
export async function playwright_by_attribute_exists_assert(page, name, value) {
  let e = await playwright_by_attribute_exists(page, name, value);
  function lambda3() {
    let r = {
      exists: e,
      name,
      value,
    };
    return r;
  }
  assert_json_get(b, lambda3);
}
