const assertEqual = function(actual, expected) {
  
  let output = actual === expected ? `✅Assertion Passed: ${actual} === ${expected}` : `⛔Assertion Failed: ${actual} !== ${expected}`;

  console.log(output);

};

const findKeyByValue = function(obj, val) {
  for (const key in obj) {
    if (obj[key] === val) {
      return key;
    }
  }
};

const bestTVShowsByGenre = { 
  sci_fi: "Black Mirror",
  comedy: "The Office",
  drama:  "Mad Men"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "Mad Men"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
