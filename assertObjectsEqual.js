const eqObjects = require("./eqObjects");

const assertObjectsEqual = function(object1, object2, expected) {
  const inspect = require('util').inspect;
  const result = eqObjects(object1, object2) === expected;
  const obj1 = inspect(object1);
  const obj2 = inspect(object2);
  
  let output = result ? `🤘Assertion Passed: ${obj1} is the same as ${obj2} === ${expected}` : `💀Assertion Failed: ${obj1} is the same as ${obj2} !== ${expected}`;

  console.log(output);
  return result;
};

module.exports = assertObjectsEqual;

/*
const objectArray1 = { myKey: [1, 2, 3], myOtherKey: "yes" };
const objectArray2 = { myOtherKey: "yes", myKey: [1, 2, 3] };
const objectArray3 = { myKey: [1, 2, 3], myOtherKey: "no" };
assertObjectsEqual(objectArray1 , objectArray2, true); // => true
assertObjectsEqual(objectArray1 , objectArray3, false); // => false
*/