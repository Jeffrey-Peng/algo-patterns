const findSubstring = (str, pattern) => {
  let substring = '';
  let start = 0;
  let patternMap = {};
  let matchCount = 0;

  for (let i = 0; i < pattern.length; i++) {
    let curr = pattern[i];
    if (!(curr in patternMap)) patternMap[curr] = 0;
    patternMap[curr]++;
  }

  // Dynamic sliding window
  for (let end = 0; end < str.length; end++) {
    let endChar = str[end];
    if (endChar in patternMap) {
      patternMap[endChar]--;

      if (patternMap[endChar] >= 0) matchCount++; // increment every pattern char instance
    }

    while (matchCount === pattern.length) {
      if (end - start + 1 < substring.length || substring === '') {
        substring = str.substring(start, end + 1);
      }

      let startChar = str[start];
      if (startChar in patternMap) {
        patternMap[startChar]++;

        if (patternMap[startChar] > 0) matchCount--; // same as other one
      }
      start++;
    }
  }

  return substring;
};

console.log(findSubstring('aabdec', 'abc'));
console.log(findSubstring('abdabca', 'abc'));
console.log(findSubstring('adcad', 'abc'));
