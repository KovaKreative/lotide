const assertArraysEqual = function(arrayA, arrayB) {

  const comparison = eqArrays(arrayA, arrayB);

  let output = comparison ? `🤘Assertion Passed: [${arrayA}] is the same as [${arrayB}]` : `💀Assertion Failed: [${arrayA}] is the same as [${arrayB}]`;

  console.log(output);
  return comparison;
};

module.exports = assertArraysEqual;