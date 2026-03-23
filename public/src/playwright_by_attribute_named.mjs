export function playwright_by_attribute_named(page, inside) {
  let locator = page.locator("[" + inside + "]");
  return locator;
}
