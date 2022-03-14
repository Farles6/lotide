const assert = require('chai').assert;
const _ = require('../index');

describe('#eqArrays', () => {
  it('return true for [1, 2, 3] and [1, 2, 3]', () => {
    assert.isTrue(_.eqArrays([1, 2, 3], [1, 2, 3]));
  });
  
  it('return false for [1, 2, 3] and [1, 2, 3, 4]', () => {
    assert.isFalse(_.eqArrays([1, 2, 3], [1, 2, 3, 4]));
  });

  it('return true for [1, 2, 3] and [1, 2, 3]', () => {
    assert.isTrue(_.eqArrays([1, 2, 3], [1, 2, 3]));
  });
});




// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true);
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
// assertEqual(eqArrays(['hello', 'man'], ['hello', 'man']), true);
// assertEqual(eqArrays(['hello', 'man'], ['hello', 'man', 'goodbye']), true);

// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);