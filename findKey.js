// const assertEqual = (actual, expected) => {
//   if (actual === expected) {
//     console.log(`✅✅ Assertion Passed: ${actual} === ${expected}`);
//     return `✅✅ Assertion Passed: ${actual} === ${expected}`;
//   } else {
//     console.log(`🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//     return `🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
//   }
// };

const findKey = (obj, cb) => {
  for (let key in obj) {
    if (cb(obj[key])) {
      return key;
    }
  }
};

const result = findKey(
  {
    "Blue Hill": { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 2 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 },
  },
  (x) => x.stars === 2
); // => "noma"


module.exports = findKey;


// assertEqual(result, "noma");
