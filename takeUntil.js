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

const takeUntil = function(array, callback) {
  let output = [];
  for (const element of array) {
    if (!callback(element)) {
      output.push(element);
      continue;
    }
    break;
  }
  return output;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ], true);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ], true);
console.log(results2);