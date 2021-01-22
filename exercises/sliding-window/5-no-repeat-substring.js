const noRepeatSubstring = (str) => {
  let maxLength = -1;
  let start = 0;
  let charMap = {};

  for (let end = 0; end < str.length; end++) {
    let currChar = str[end];

    if (!charMap[currChar]) charMap[currChar] = 0;
    charMap[currChar]++;

    while (Object.values(charMap).some((val) => val > 1)) {
      let startingChar = str[start];

      charMap[startingChar]--;
      if (charMap[startingChar] === 0) delete charMap[startingChar];

      start++;
    }

    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
};

console.log(noRepeatSubstring('aabccbb'));
console.log(noRepeatSubstring('abbbb'));
console.log(noRepeatSubstring('abccde'));
