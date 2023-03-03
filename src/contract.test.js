const {
  isNumber,
  isString,
  isBoolean,
  isSymbol,
  makeFlatContract,
  ContractError,
} = require("./contract");

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
  test("Works with symbols", () => {
    expect(isSymbol(Symbol("hello"))).toBe(true);
    expect(isSymbol("hello")).toBe(false);
  });
});

describe("makeFlatContract", () => {
  test("Returns a flat contract tagged with flat", () => {
    expect(makeFlatContract(3).type).toEqual("FLAT");
  });
  test("Wraps primitives correctly", () => {
    expect(() => makeFlatContract(3).wrap(3)).not.toThrow();
  });
  test("Throws when it should when given a primitive", () => {
    expect(() => makeFlatContract(3).wrap(2)).toThrow(ContractError);
    expect(() => makeFlatContract(3).wrap("3")).toThrow(ContractError);
  });
  test("Wraps predicates correctly", () => {
    expect(() =>
      makeFlatContract((n) => {
        if (typeof n !== "number") {
          return false;
        }
        return n % 2 === 0;
      }).wrap(2)
    ).not.toThrow();
  });
  test("Throws when it should when given a predicate", () => {
    expect(() =>
      makeFlatContract((n) => {
        if (typeof n !== "number") {
          return false;
        }
        return n % 2 === 0;
      }).wrap(3)
    ).toThrow(ContractError);
    expect(() =>
      makeFlatContract((n) => {
        if (typeof n !== "number") {
          return false;
        }
        return n % 2 === 0;
      }).wrap("2")
    ).toThrow(ContractError);
  });
});
