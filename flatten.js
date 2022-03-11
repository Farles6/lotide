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


const flatten = (array) => {
  let arr = [];
  for (let i = 0; i < array.length; i++) {
    // console.log(array[i])
    if (Array.isArray(array[i])) {
      for (let element of array[i]) {
        //console.log(element)
        arr.push(element);
        console.log(arr);
      }
    } else {
      arr.push(array[i]);
    }
  }
  return arr;
};

console.log(flatten([1, 2, [3, 4]]));
console.log(flatten([1, 2, [3], [4]]));

assertArraysEqual(flatten([1, 2, [3, 4]]), [1, 2, 3, 4]);
assertArraysEqual(flatten([1, 2, [3], [4]]), [1, 2, 3, 4]);
assertArraysEqual(flatten([1, [2], [3]]), [1, [2], [3]]);
