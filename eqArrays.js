const eqArrays = function(arrayA, arrayB) {
  if (!Array.isArray(arrayA) || !Array.isArray(arrayB)){
    return false;
  }
  if (arrayA.length !== arrayB.length) {
    return false;
  }
  for (let i in arrayA) {
    const a = arrayA[i];
    const b = arrayB[i];

    if (a !== b) {
      if (Array.isArray(a) && Array.isArray(b)) {
        if(eqArrays(a, b)){
          continue;
        }
      }
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;