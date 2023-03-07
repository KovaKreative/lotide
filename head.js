const assertEqual = function(actual, expected) {
  
  let output = actual === expected ? `✅Assertion Passed: ${actual} === ${expected}` : `⛔Assertion Failed: ${actual} !== ${expected}`;

  console.log(output);

};

const head = function(array){
  return(array[0]);
}

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), undefined);
assertEqual(head(["Hello"]), "Hello");