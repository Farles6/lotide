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

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);
