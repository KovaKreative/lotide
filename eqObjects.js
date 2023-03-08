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

const eqObjects = function(object1, object2){

  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  for (const key in object1) {
    if (!object2.hasOwnProperty(key)){
      return false;
    }
    console.log(object1.key === object2.key);
    if(object2[key] !== object1[key]) {
      if(Array.isArray(object1[key]) && eqArrays(object1[key], object2[key])){
        continue;
      }
      return false;
    }
  }

  return true;
};



const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
assertEqual(eqObjects(shirtObject , anotherShirtObject), true); // => true

const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false); // => false

const objectArray1 = { myKey: [1, 2, 3], myOtherKey: "yes" };
const objectArray2 = { myOtherKey: "yes", myKey: [1, 2, 3] };
const objectArray3 = { myKey: [1, 2, 3], myOtherKey: "no" };
assertEqual(eqObjects(objectArray1 , objectArray2), true); // => true
assertEqual(eqObjects(objectArray1 , objectArray3), false); // => false
