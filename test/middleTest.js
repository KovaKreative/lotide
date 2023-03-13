const middle = require('../middle');
const assert = require('../assertArraysEqual');

assert(middle([1]), []); // => []
assert(middle([1, 2]), []); // => []

assert(middle([1, 2, 3]), [2]); // => [2]
assert(middle([1, 2, 3, 4, 5]), [3]); // => [3]

assert(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
assert(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]