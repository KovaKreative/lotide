const assert = require('chai').assert;
const tail = require('../index').tail;

describe("#tail", () => {
  it("returns [4, 6] for [3, 4, 6]", () => {
    assert(tail([3, 4, 6]), [4, 6]);
  });

  it("returns [true, false] for [true, true, false]", () => {
    assert(tail([true, true, false]), [true, false]);
  });

  it("returns [] for [true]", () => {
    assert(tail([true]), []);
  });
});