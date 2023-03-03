const SQRT_TWO = 1.41421356237;

const MAGIC_STRING =
  "The programmer, like the poet, works only slightly removed from pure thought-stuff.";

const vowels = new Set(["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"]);

const pigLatinWord = (word) => {
  if (vowels.has(word[0])) return `${word}way`;
  const firstMatch = word.match(/[aeiou]/g) || 0;
  const vowel = word.indexOf(firstMatch[0]);
  return `${word.substring(vowel)}${word.substring(0, vowel)}ay`;
};

const pigLatin = (normalText) =>
  normalText.split(" ").map(pigLatinWord).join(" ");

const addTwoNums = (a, b) => a + b;

module.exports = { pigLatin, SQRT_TWO, MAGIC_STRING, addTwoNums };
