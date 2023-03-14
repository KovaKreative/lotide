const countOnly = function(allItems, itemsToCount) {
  const finalCount = {};
  for (const item of allItems) {

    if(itemsToCount[item]){
      if(!finalCount[item]){
        finalCount[item] = 0;
      }
      finalCount[item] += 1;
    }
  }

  return finalCount;
};

module.exports = countOnly;


// const firstNames = [
//   "Karl",
//   "Salima",
//   "Agouhanna",
//   "Fang",
//   "Kavith",
//   "Jason",
//   "Salima",
//   "Fang",
//   "Joe"
// ];

// const assertEqual = require("./assertEqual"); 
// const result1 = countOnly(firstNames, { "Michael": true, "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);
// assertEqual(result1["Michael"], 0);
// console.log(result1);

