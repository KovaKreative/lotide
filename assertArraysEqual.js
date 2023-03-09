const eqArrays = function(arrayA, arrayB) {
  if (arrayA.length === arrayB.length) {
    for (let i = 0; i < arrayA.length; i++) {
      if (arrayA[i] !== arrayB[i]) {
        return false;
      }
    }
    return true;
  }

  return false;
};

const assertArraysEqual = function(arrayA, arrayB, expected) {

  const comparison = eqArrays(arrayA, arrayB) === expected;

  let output = comparison ? `🤘Assertion Passed: [${arrayA}] is the same as  [${arrayB}] === ${expected}` : `💀Assertion Failed: [${arrayA}] is the same as [${arrayB}] !== ${expected}`;

  console.log(output);
  return comparison;
};