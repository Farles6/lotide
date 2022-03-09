const assertArraysEqual = function(arr1, arr2) {
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

const middle = function(array) {
  let newArr = [];
  if (array.length <= 2) {
    return newArr;
  } else if (array.length % 2 !== 0) {
    newArr.push(array[Math.floor(array.length / 2)]);
  } else {
    newArr.push(array[Math.floor((array.length - 1) / 2)]);
    newArr.push(array[Math.floor(array.length / 2)]);
  }
  return newArr;
};

console.log(middle([1, 2]));
console.log(middle([1, 2, 3]));
console.log(middle([1, 2, 3, 4]));

assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9]), [5]);
