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

const middle = function(array) {
  let middleIndex = Math.floor(array.length * 0.5);
  let mid = [];
  if (array.length >= 3){

    if (array.length % 2 === 0) { 
      mid.push(array[middleIndex - 1]);
    }

    mid.push(array[middleIndex]);

  }   
  return mid;
};

console.log(middle([1])) // => []
console.log(middle([1, 2])) // => []

console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]

console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]