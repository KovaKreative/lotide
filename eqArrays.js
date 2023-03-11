const assertEqual = function(actual, expected) {
  const output = actual === expected ? `🤘Assertion Passed: ${actual} === ${expected}` : `💀Assertion Failed: ${actual} !== ${expected}`;
  console.log(output);
};

const eqArrays = function(arrayA, arrayB) {
  if (!Array.isArray(arrayA) || !Array.isArray(arrayB)){
    return false;
  }
  if (arrayA.length !== arrayB.length) {
    return false;
  }
  for (let i in arrayA) {
    const a = arrayA[i];
    const b = arrayB[i];

    if (a !== b) {
      if (Array.isArray(a) && Array.isArray(b)) {
        if(eqArrays(a, b)){
          continue;
        }
      }
      return false;
    }
  }
  return true;
};

assertEqual(eqArrays([1, 2, "boo", false], [1, 2, "boo"]), false);
assertEqual(eqArrays(1, 3), false);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true); // => true

assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false); // => false
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false); // => false
