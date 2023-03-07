const assertEqual = function(actual, expected) {
  
  let output = actual === expected ? `✅Assertion Passed: ${actual} === ${expected}` : `⛔Assertion Failed: ${actual} !== ${expected}`;

  console.log(output);

};

const tail = function(array) {
  return array.slice(1);
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
assertEqual(tail(words), ["Lighthouse", "Labs"]); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

for (let i = 1; i < words.length; i++) {
  assertEqual(words[i], tail(words)[i - 1]);
}