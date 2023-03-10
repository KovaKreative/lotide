const assertEqual = function(actual, expected) {
  const output = actual === expected ? `🤘Assertion Passed: ${actual} === ${expected}` : `💀Assertion Failed: ${actual} !== ${expected}`;
  console.log(output);
};

const eqArrays = function(arrayA, arrayB) {
  if (arrayA.length !== arrayB.length) {
    return false;
  }
  for (let i in arrayA) {
    if (arrayA[i] !== arrayB[i]) {
      return false;
    }
  }
  return true;
};

assertEqual(eqArrays([1, 2, "boo", false], [1, 2, "boo"]), false);