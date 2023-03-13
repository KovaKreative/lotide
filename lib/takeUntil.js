const takeUntil = function(array, callback) {
  //let output = [];
  for (const e in array) {
    if (callback(array[e])) {
      return array.slice(0, e);
    }
  }
};

module.exports = takeUntil;

/*
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ], true);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ], true);
console.log(results2);
*/