const lengthLongestSubstring = (str, k) => {
  let maxLength = 0;
  let start = 0;
  let maxRepeat = 0;
  let charMap = {};

  for (let end = 0; end < str.length; end++) {
    let endChar = str[end];

    if (!charMap[endChar]) charMap[endChar] = 0;
    charMap[endChar]++;

    maxRepeat = Math.max(maxRepeat, charMap[endChar]);

    // total count = end - start + 1
    // subtract max frequency letter to get remaining
    while (end - start + 1 - maxRepeat > k) {
      let startChar = str[start];

      charMap[startChar]--;
      if (charMap[startChar] === 0) delete charMap[startChar];

      start++;
    }

    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
};

console.log(lengthLongestSubstring('aabccbb', 2)); // 5
console.log(lengthLongestSubstring('abbcb', 1)); // 4
console.log(lengthLongestSubstring('abccde', 1)); // 3
