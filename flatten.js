const flatten = function(array) {
  //If the parameter is not an array, return the parameter itself. Can't flatten it, do nothing with it.
  if (!array.length) {
    return array;
  }

  const newArrayBuffer = [];

  for (const item of array) {
    if (Array.isArray(item)) {
      for (const subItem of item) {
        newArrayBuffer.push(subItem);
      }
    } else {
      newArrayBuffer.push(item);
    }
  }
  return(newArrayBuffer);
}

const myArray = [1, "mars", [0, "eleven", ["another array ?", true]], false, 4.3];

console.log(flatten(myArray));