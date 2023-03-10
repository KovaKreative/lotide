const letterPositions = function(sentence) {
  const results = {};
  for (const i in sentence) {
    const letter = sentence[i];
    if (letter === " ") {
      continue;
    }
    if (!results[letter]) {
      results[letter] = [];
    }
    results[letter].push(i);
  }
  return results;
};

console.log(letterPositions("lighthouse in the house"));