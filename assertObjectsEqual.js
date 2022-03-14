// const eqArrays = function(arr1, arr2) {
//   const inspect = require("util").inspect;

//   if (arr1.length !== arr2.length) {
//     return console.log(
//       `🛑🛑 Assertion Failed: ${inspect(arr1)} !== ${inspect(arr2)})`
//     );
//   }
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) {
//       return console.log(
//         `🛑🛑 Assertion Failed: ${inspect(arr1)} !== ${inspect(arr2)})`
//       );
//     }
//   }
//   return console.log(
//     `✅✅ Assertion Passed: ${inspect(arr1)} === ${inspect(arr2)}`
//   );
// };

const assertObjectsEqual = function(actual, expected) {
  const inspect = require("util").inspect;
  const obj1 = Object.keys(actual);
  const obj2 = Object.keys(expected);
  if (obj1.length !== obj2.length) {
    console.log(
      `🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)})`
    );
    return;
  }
  for (const key of obj1) {
    if (Array.isArray(actual[key]) && Array.isArray(expected[key])) {
      return eqArrays(actual[key], expected[key]);
    }
    if (actual[key] !== expected[key]) {
      console.log(
        `🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`
      );
      return;
    }
  }

  console.log(
    `✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`
  );
};


module.exports = assertObjectsEqual;

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertObjectsEqual(ab, ba); // => true

// const abc = { a: "1", b: "2", c: "3" };
// assertObjectsEqual(ab, abc); // => false

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertObjectsEqual(cd, dc); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertObjectsEqual(cd, cd2); // => false
