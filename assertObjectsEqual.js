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

const eqObjects = function(object1, object2){

  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  for (const key in object1) {
    if (!object2.hasOwnProperty(key)){
      return false;
    }
    if(object2[key] !== object1[key]) {
      if(Array.isArray(object1[key]) && eqArrays(object1[key], object2[key])){
        continue;
      }
      return false;
    }
  }

  return true;
};

const assertObjectsEqual = function(object1, object2, expected) {
  const result = eqObjects(object1, object2) === expected;
  
  let output = result ? `✅Assertion Passed: Objects are the same === ${expected}` : `⛔Assertion Failed: Objects are the same !== ${expected}`;

  console.log(output);
  return result;
};

const objectArray1 = { myKey: [1, 2, 3], myOtherKey: "yes" };
const objectArray2 = { myOtherKey: "yes", myKey: [1, 2, 3] };
const objectArray3 = { myKey: [1, 2, 3], myOtherKey: "no" };
assertObjectsEqual(objectArray1 , objectArray2, true); // => true
assertObjectsEqual(objectArray1 , objectArray3, false); // => false