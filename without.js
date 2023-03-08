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

const without = function(source, itemsToRemove) {
  let output = [];
  for (const sourceItem of source) {
    let includeItem = true;

    for (const unwantedItem of itemsToRemove) {

      if (sourceItem === unwantedItem) {
        includeItem = false;
      }

    }

    if (includeItem) {
      output.push(sourceItem);
    }

  }

  return output;
};

console.log(without([1, 2, 3], [1]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));
console.log(without(["chocolate", "soap gum", "cookies", "black licorice", "chocolate", "cookies", "soap gum", "that chalky crap", "soap gum"], ["soap gum", "black licorice", "that chalky crap"]));


const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
