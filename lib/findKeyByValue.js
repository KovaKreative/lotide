const findKeyByValue = function(obj, val) {
  return findKey(obj, x => x === val);
};

module.exports = findKeyByValue;


/*
const bestTVShowsByGenre = { 
  sci_fi: "Black Mirror",
  comedy: "The Office",
  drama:  "Mad Men"
};


console.log(findKeyByValue(bestTVShowsByGenre, "Mad Men"), "drama");
console.log(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
*/
