const findKey = function(obj, callback = (n) => n != undefined) {
  for (const key in obj) {
    if(callback(obj[key])) {
      return key;
    }
  }
};

module.exports = findKey;
/*
const result = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 1) // => "noma"

assertEqual(result, "Blue Hill");
*/