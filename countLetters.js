const assertEqual = function(actual, expected) {
  
  let output = actual === expected ? `✅Assertion Passed: ${actual} === ${expected}` : `⛔Assertion Failed: ${actual} !== ${expected}`;

  console.log(output);

};

const countLetters = function(phrase, ordered) {
  let normalizedPhrase = phrase.toLowerCase().replaceAll(' ', '');
  if (ordered) { //An optional parameter to sort the letters with JS's default algorithm
    normalizedPhrase = normalizedPhrase.split('').sort().join('');
  }
  let listOfLetters = {};

  for (const char of normalizedPhrase) {
    if (listOfLetters[char]) {
      listOfLetters[char]++;
      continue;
    }
    listOfLetters[char] = 1;
  }

  return listOfLetters;
};