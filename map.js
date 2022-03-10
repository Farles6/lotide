const words = ["ground", "control", "to", "major", "tom"];
const assertArraysEqual = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    console.log(`🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
    return;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      console.log(`🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
      return;
    }
  }
  console.log(`✅✅ Assertion Passed: ${arr1} === ${arr2}`);
};

const map = (arr, cb) => {
  const results = [];
  for (let item of arr) {
    results.push(cb(item));
  }
  return results;
};

const results1 = map(words, (word) => word[0]);

assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);
assertArraysEqual(results1, ["g", "c", "k", "m", "t"]);
assertArraysEqual(results1, ["g", "c", "m", "t", "t"]);
