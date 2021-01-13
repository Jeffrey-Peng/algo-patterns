const findWordConcatenation = (str, words) => {
  if (words.length === 0 || words[0].length === 0) return [];

  // create hash map of words
  let wordFrequency = {};
  for (let word of words) {
    if (!(word in wordFrequency)) wordFrequency[word] = 0;
    wordFrequency[word]++;
  }

  let resultIndices = [];
  let wordsCount = words.length;
  let wordLength = words[0].length;

  // for loop until pattern length from end
  for (let i = 0; i < str.length - wordsCount * wordLength + 1; i++) {
    // track words found in string in separate hash map
    const wordsSeen = {};

    // for loop through each word
    for (let j = 0; j < wordsCount; j++) {
      // jump word-length indices ahead each time
      let nextWordIndex = i + j * wordLength;

      // grab substring
      word = str.substring(nextWordIndex, nextWordIndex + wordLength);

      // if word not in hash map, break inner for loop early
      if (!(word in wordFrequency)) break;

      // increment hash map
      if (!(word in wordsSeen)) {
        wordsSeen[word] = 0;
      }
      wordsSeen[word]++;

      // if more than required, break early
      if (wordsSeen[word] > (wordFrequency[word] || 0)) break;

      // if each loop complete, push starting index onto result indices
      if (j + 1 === wordsCount) {
        resultIndices.push(i);
      }
    }
  }

  return resultIndices;
};

console.log(findWordConcatenation('catfoxcat', ['cat', 'fox']));
console.log(findWordConcatenation('catcatfoxfox', ['cat', 'fox']));
