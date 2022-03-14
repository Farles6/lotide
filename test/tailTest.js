const tail = require('../tail');
const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual(tail([5, 6, 7]), [6, 7]);
assertArraysEqual(tail([4, 5, 6, 7]), [6, 7]);
assertArraysEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
assertArraysEqual(tail([]), []);
assertArraysEqual(tail([6]), []);