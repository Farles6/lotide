const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');


assertArraysEqual(middle([1, 2]), [1]);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9]), [5]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 7, 8, 9]), [5]);
assertArraysEqual(middle([1, 2, 3, 5, 6]), [3, 4]);
