const assert = require('chai').assert;
const head = require('../head');

describe("#head", () => {
  it("returns 3 for [3, 5, 6]", () => {
    assert.strictEqual(head([3, 4, 6]), 3);
  });
  it("returns false for [false, true, true]", () => {
    assert.strictEqual(head([false, true, true]), false);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  });
});