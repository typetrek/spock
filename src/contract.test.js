const { isNumber, isString, isBoolean } = require("./contract");

describe("Basic predicate functions in our contract library", () => {
  test("Work with numbers", () => {
    expect(isNumber(3)).toBe(true);
    expect(isNumber("3")).toBe(false);
  });
  test("Work with strings", () => {
    expect(isString("3")).toBe(true);
    expect(isString(3)).toBe(false);
  });
  test("Work with booleans", () => {
    expect(isBoolean(true)).toBe(true);
    expect(isBoolean("true")).toBe(false);
  });
});
