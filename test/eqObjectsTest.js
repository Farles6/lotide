const assert = require('chai').assert;
const _ = require('../index');

describe('#eqObjects', () => {
  it('returns true for {a: "1" b: "2"} and {a: "1", b: "2"}', () => {
    assert.isTrue(_.eqObjects({a: "1", b: "2"}, { b: "2", a: "1" }));
  });

  it('returns false for {a: "1" b: "2" c: "3"} and {a: "1", b: "2"}', () => {
    assert.isFalse(_.eqObjects({a: "1", b: "2", c: "3"}, { b: "2", a: "1" }));
  });

  it('returns true for {a: "1" b: ["2"]} and {a: "1", b: ["2"]}', () => {
    assert.isTrue(_.eqObjects({a: "1", b: ["2"]}, { b:["2"], a: "1" }));
  });
})