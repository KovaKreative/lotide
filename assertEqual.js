const assertEqual = function(actual, expected) {
  const output = actual === expected ? `🤘Assertion Passed: ${actual} === ${expected}` : `💀Assertion Failed: ${actual} !== ${expected}`;
  console.log(output);
};

module.exports = assertEqual;