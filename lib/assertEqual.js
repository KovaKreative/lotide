const assertEqual = function(actual, expected=true) {
  const output = actual === expected ? `🤘Assertion Passed: ${actual} === ${expected}` : `💀Assertion Failed: ${actual} !== ${expected}`;
  console.log(output);
  return actual === expected;
};

module.exports = assertEqual;