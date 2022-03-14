const countLetters = str => {
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

module.exports = countLetters;