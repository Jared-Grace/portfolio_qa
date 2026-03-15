export function playwright_by_attribute_named(page, inside) {
  let r2 = page.locator("[" + inside + "]");
  return r2;
}
