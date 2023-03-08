const assertEqual = function(actual, expected) {
  
  let output = actual === expected ? `✅Assertion Passed: ${actual} === ${expected}` : `⛔Assertion Failed: ${actual} !== ${expected}`;

  console.log(output);

};

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