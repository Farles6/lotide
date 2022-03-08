const assertEqual = function(actual, expected) {
  if (actual.length !== expected.length) {
    console.log(`🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    return;
  }
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      console.log(`🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
      return;
    }
  }
  console.log(`✅✅ Assertion Passed: ${actual} === ${expected}`);
};


const tail = function(arr) {
  return arr.slice(1);
};
assertEqual(tail([5, 6, 7]), [6, 7]);
assertEqual(tail([4, 5, 6, 7]), [6, 7]);
assertEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
assertEqual(tail([]), []);
assertEqual(tail([6]), []);