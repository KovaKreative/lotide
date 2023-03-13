const assertEqual = require('../assertEqual');
const assert = require('chai').assert;

describe("#assertEqual", () => {
  it("returns true for comparing 1 > 0 and 3 === '3'", () => {
    assert(assertEqual(1 > 0, true));
  });
  it("returns false for comparing length of [2, 3, 4] and 2", () => {
    assert.isFalse(assertEqual([2, 3, 4].length, 2));
  });
});