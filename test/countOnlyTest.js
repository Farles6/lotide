const assert = require('chai').assert;
const _ = require('../index');

const arr = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];

describe('#countOnly', () => {
  it('return {Jason: 1, Fang: 2} for {Jason: true, Karima: true, Fang: true, Agouhanna: false}', () => {
    assert.deepEqual(_.countOnly(arr, {Jason: true, Karima: true, Fang: true, Agouhanna: false}), {Jason: 1, Fang: 2});
  });

  it('return {} for {Jason: false, Karima: true, Fang: false, Agouhanna: false}', () => {
    assert.deepEqual(_.countOnly(arr, {Jason: false, Karima: true, Fang: false, Agouhanna: false}), {});
  });
});







