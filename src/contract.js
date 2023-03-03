class ContractError extends TypeError {}

/**
 * isNumber - Determine if the value is a number.
 *
 * @param {unknown} value - Some JavaScript value.
 */
const isNumber = (value) => {
  return typeof value === "number";
};

/**
 * isString - Determine if the value is a string.
 *
 * @param {unknown} value - Some JavaScript value.
 */
const isString = (value) => {
  return typeof value === "string";
};

/**
 * isBoolean - Determine if the value is a boolean.
 *
 * @param {unknown} value - Some JavaScript value.
 */
const isBoolean = (value) => {
  return typeof value === "boolean";
};

/**
 * isSymbol - Determine if the value is a symbol.
 *
 * @param {unknown} value - Some JavaScript value.
 */
const isSymbol = (value) => {
  return typeof value === "symbol";
};

/**
 * makeFlatContract - Return the contract that corresponds to the provided
 * primitive or predicate value.
 *
 * @param {import("./contract").Predicate | import("./contract").Predicate} spec
 * @returns {import("./contract").Contract} A contract which checks the provided specification.
 *
 * TODO: Implement this function.
 */
const makeFlatContract = (spec) => {
  if (typeof spec === "function") {
    return {
      type: "FLAT",
      wrap: (value) => {
        if (spec(value)) return value;
        const valueString =
          typeof value === "symbol" ? value.toString() : `${value}`;
        throw new ContractError(
          `${valueString} does not satisfy predicate ${spec.toString()}`
        );
      },
    };
  }
  return {
    type: "FLAT",
    wrap: (value) => {
      if (value === spec) return value;
      const valueString =
        typeof value === "symbol" ? value.toString() : `${value}`;
      // @ts-expect-error - Spec isn't actually of type never.
      const specString = typeof spec === "symbol" ? spec.toString() : `${spec}`;
      throw new ContractError(
        `${valueString} does not satisfy predicate ${specString}`
      );
    },
  };
};

module.exports = {
  isNumber,
  isString,
  isBoolean,
  isSymbol,
  makeFlatContract,
  ContractError,
};
