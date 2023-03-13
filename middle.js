const middle = function(array) {
  let middleIndex = Math.floor(array.length * 0.5);
  let mid = [];
  if (array.length >= 3){

    if (array.length % 2 === 0) { 
      mid.push(array[middleIndex - 1]);
    }

    mid.push(array[middleIndex]);

  }   
  return mid;
};

module.exports = middle;