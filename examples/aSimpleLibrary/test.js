const assert = require("assert");
const { MAGIC_STRING, addTwoNums, pigLatin, SQRT_TWO } = require("./index");

/**
 * Running our tool should result in either:
 * 1. A contract violation that suggests another type we should fix;
 * 2. A test file that we should submit to the JavaScript programmer.
 */

assert.ok(
  pigLatin(MAGIC_STRING) ===
    "eThay ogrammer,pray ikelay ethay oet,pay orksway onlyway ightlyslay emovedray omfray urepay ought-stuff.thay"
);
assert.ok(pigLatin("") === "ay");
/* Other test cases involving cute hard-coded strings that we like... */

assert.ok(addTwoNums(0, 0) === 0);
assert.ok(addTwoNums(0, 1) === 1);
assert.ok(addTwoNums(1, 0) === 1);
assert.ok(addTwoNums(SQRT_TWO, 0) === 1.41421356237);
/* Other test cases involving cute hard-coded numbers that we like... */

console.log('All tests are currently passing!');
