const assertEqual = function(actual, expected) {
  
  let output = actual === expected ? `✅Assertion Passed: ${actual} === ${expected}` : `⛔Assertion Failed: ${actual} !== ${expected}`;

  console.log(output);

};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Kochi Cat", "Kochi Cat");
assertEqual(88.8, 90);