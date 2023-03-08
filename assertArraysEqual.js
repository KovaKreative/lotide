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

const assertArraysEqual = function(arrayA, arrayB) {

  let output = eqArrays(arrayA, arrayB) ? `✅Assertion Passed: [${arrayA}] === [${arrayB}]` : `⛔Assertion Failed: [${arrayA}] !== [${arrayB}]`;

  console.log(output);
};