const flatten = function(array) {
  //If the parameter is not an array, return the parameter itself. Can't flatten it, do nothing with it.
  if (!Array.isArray(array)) {
    return array;
  }

  let newArrayBuffer = [];

  for (const item of array) {
    if (!Array.isArray(item)) {
      newArrayBuffer.push(item);
    } else {
      newArrayBuffer = newArrayBuffer.concat(flatten(item));
    }
  }
  return newArrayBuffer;
}

module.exports = flatten;

const myArray = [1, "mars", [0, "eleven", ["another array ?", true]], false, 4.3];

console.log(flatten(myArray));
