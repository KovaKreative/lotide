const assertEqual = function(actual, expected) {

  const result = actual === expected;
  
  let output = result ? `🤘Assertion Passed: ${actual} === ${expected}` : `💀Assertion Failed: ${actual} !== ${expected}`;

  console.log(output);
  return result;

};

const findKey = function(obj, callback) {
  for (const key in obj) {
    if(callback(obj[key])) {
      return key;
    }
  }
};

const result = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 1) // => "noma"

assertEqual(result, "Blue Hill");