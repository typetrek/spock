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
 * makeFlatContract - Return the contract that corresponds to the provided
 * primitive or predicate value.
 *
 * @param {import("./contract").Predicate | import("./contract").Predicate} spec
 * @returns {import("./contract").Contract} A contract which checks the provided specification.
 *
 * TODO: Implement this function.
 */

module.exports = { isNumber, isString, isBoolean };
