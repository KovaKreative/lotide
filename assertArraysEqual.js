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

  let output = comparison ? `✅Assertion Passed: [${arrayA}] === [${arrayB}] is ${expected}` : `⛔Assertion Failed: [${arrayA}] !== [${arrayB}] is ${expected}`;

  console.log(output);
  return comparison;
};