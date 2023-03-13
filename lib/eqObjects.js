const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {

  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  if(object1 !== Object(object1) || object2 !== Object(object2)){
    return false;
  }

  for (const key in object1) {
    const a = object1[key];
    const b = object2[key];

    if (!object2.hasOwnProperty(key)) {
      return false;
    }

    if (a !== b) {
      if(Array.isArray(a) && Array.isArray(b) && !eqArrays(a, b)){
        return false
      }
      if(!eqObjects(a, b)){
        return false;
      }
    }
  }
  return true;
};

module.exports = eqObjects;

/*

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
//assertEqual(eqObjects(shirtObject, anotherShirtObject), true); // => true

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
//assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false); // => false

const objectArray1 = { myKey: [1, 2, 3], myOtherKey: "yes" };
const objectArray2 = { myOtherKey: "yes", myKey: [1, 2, 3] };
const objectArray3 = { myKey: [1, 2, 3], myOtherKey: "no" };
assertEqual(eqObjects(objectArray1, objectArray2), true); // => true
assertEqual(eqObjects(objectArray1, objectArray3), false); // => false

assertEqual(eqObjects({ a: { z: 1, y: 1, x: { k: 1, l: 1} }, b: 2 }, { a: { z: 1, y: 1, x: { k: 1, l: 1} }, b: 2 }), true); // => true
assertEqual(eqObjects({ a: { z: 1, y: 1, x: { k: 1, l: 1} }, b: 2 }, { a: { z: 1, y: 1, x: { k: 1, l: 2} }, b: 2 }), false); // => true

assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false); // => false

assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false); // => false
assertEqual(eqObjects({ a: 1, b: 7 }, { a: 1, b: 2 }), false); // => false

*/