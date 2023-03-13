const assert = require('../assertArraysEqual');
const tail = require('../tail');

assert(tail([3, 4, 6]), [4, 6]);
assert(tail([true, true, false]), [true, false]);
assert(tail([true]), []);