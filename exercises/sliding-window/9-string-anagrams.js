const findAnagrams = (str, pattern) => {
  let result = [];
  let left = 0;
  let matchCount = 0; // must count unique characters matched
  let patternMap = {};

  // Create hash map of pattern characters
  for (let i = 0; i < pattern.length; i++) {
    let currChar = pattern[i];
    if (!(currChar in patternMap)) {
      patternMap[currChar] = 0;
    }
    patternMap[currChar]++;
  }

  // Static size sliding window
  for (let right = 0; right < str.length; right++) {
    let rightChar = str[right];
    if (rightChar in patternMap) {
      patternMap[rightChar]--;

      if (patternMap[rightChar] === 0) matchCount++;
    }

    if (right >= pattern.length) {
      let leftChar = str[left];
      if (leftChar in patternMap) {
        patternMap[leftChar]++;

        if (patternMap[leftChar] > 0) matchCount--;
      }
      left++;
    }

    if (matchCount === Object.keys(patternMap).length) {
      result.push(left);
    }
  }

  return result;
};

console.log(findAnagrams('ppqp', 'pq')); // [1, 2]
console.log(findAnagrams('abbcabc', 'abc')); // [2, 3, 4]
