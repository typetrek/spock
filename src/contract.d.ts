/**
 * A ContractError indicates a problem with some code discovered dynamically at
 * runtime.
 */
export class ContractError extends TypeError {}

/**
 * JavaScript primitive values.
 * See https://developer.mozilla.org/en-US/docs/Glossary/Primitive
 */
export type Primitive =
  | string
  | number
  | bigint
  | boolean
  | undefined
  | symbol
  | null;

/**
 * Predicates (in the context of our contract library) are used to check
 * whether a value adheres to a particular type
 */
export type Predicate = (x: unknown) => boolean;

/**
 * A contract is an object with a "wrap" method that either checks whether the
 * provided value adheres to the type or installs a monitor which watches the
 * value and makes sure that the types are correct while the program runs.
 * There are a few different kinds of contracts, each of which are discriminated
 * on based on the value of the "type" field:
 *
 * - A 'FLAT' contract immediately checks whether the value it is analyzing is OK
 * or not.
 * - A 'FUNCTION' contract installs a monitor on the function and watches its
 * domain and range.
 */
interface FlatContract {
  type: "FLAT";
  wrap: <T>(value: T) => T;
}

interface FunctionContract {
  type: "FUNCTION";
  wrap: <T>(value: T) => T;
  domain: Contract[];
  range: Contract;
}

export type Contract = FlatContract | FunctionContract;
export const isNumber: Predicate;
export const isString: Predicate;
export const isBoolean: Predicate;
export const isSymbol: Predicate;
export const makeFlatContract: (value: Predicate | Primitive) => FlatContract;
