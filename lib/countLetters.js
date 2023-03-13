const countLetters = function(phrase, ordered) {
  let normalizedPhrase = phrase.toLowerCase().replaceAll(' ', '');
  if (ordered) { //An optional parameter to sort the letters with JS's default algorithm
    normalizedPhrase = normalizedPhrase.split('').sort().join('');
  }
  let listOfLetters = {};

  for (const char of normalizedPhrase) {
    listOfLetters[char] = !listOfLetters[char] ? 1 : listOfLetters[char] + 1;
  }

  return listOfLetters;
};

module.exports = countLetters;