const assertEqual = function(actual, expected) {

  const result = actual === expected;
  
  let output = result ? `🤘Assertion Passed: ${actual} === ${expected}` : `💀Assertion Failed: ${actual} !== ${expected}`;

  console.log(output);
  return result;

};