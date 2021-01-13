const findPermutation = (str, pattern) => {
  let start = 0;
  let matchCount = 0;

  // Create hash map of pattern
  let patternMap = pattern.split('').reduce((obj, char) => {
    return obj[char]
      ? { ...obj, [char]: obj[char] + 1 }
      : { ...obj, [char]: 1 };
  }, {});

  // Static size sliding window
  for (let end = 0; end < str.length; end++) {
    let currChar = str[end];

    // Decrement hashmap count if character in hash map, can go negative
    if (currChar in patternMap) {
      patternMap[currChar]--;

      if (patternMap[currChar] === 0) matchCount++; // Decrement number of characters needed to match
    }

    if (end >= pattern.length) {
      let startChar = str[start];

      // Increment hashmap count if character is out of sliding window
      if (startChar in patternMap) {
        patternMap[startChar]++;

        if (patternMap[startChar] > 0) matchCount--;
      }
      start++; // Move left side of window
    }

    // If all characters in pattern match, return true
    if (matchCount === Object.keys(patternMap).length) return true;
  }

  return false;
};

console.log(findPermutation('oidbcaf', 'abc'));
console.log(findPermutation('odicf', 'dc'));
console.log(findPermutation('bcdxabcdy', 'bcdyabcdx'));
console.log(findPermutation('aaacb', 'abc'));
