const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅ Assertion Passed: ${actual} === ${expected}`);
    return `✅✅ Assertion Passed: ${actual} === ${expected}`;
  } else {
    console.log(`🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    return `🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  }
};

const countLetters = function(str) {
  const total = {};
  for (const char of str) {
    if (char !== " ") {
      if (total[char]) {
        total[char]++;
      } else {
        total[char] = 1;
      }
    }
  }
  return total;
};

console.log(countLetters("lighthouse in the house"));
countLetters("hello");
assertEqual(countLetters("hello").l, [2])
