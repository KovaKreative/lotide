const letterPositions = function(sentence) {
  const results = {};
  for (const i in sentence) {
    if (sentence[i] === " ") {
      continue;
    }
    if (results[sentence[i]]) {
      results[sentence[i]].push(i);
      continue;
    }
    results[sentence[i]] = [i];
  }
  return results;
};

console.log(letterPositions("lighthouse in the house"));