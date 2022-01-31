const compareBackspace = (str1, str2) => {
  // start from end of both strings
  let pointer1 = str1.length - 1;
  let pointer2 = str2.length - 1;

  // iterate through each string together with pointers
  while (pointer1 >= 0 || pointer2 >= 0) {
    // count number of backspaces to figure out how many characters to skip
    let backspace1 = 0;
    let backspace2 = 0;

    // if given character on either string is backspace, increment backspace count and move pointer to next character
    while (str1[pointer1] === '#') {
      backspace1++;
      pointer1--;
    }

    while (str2[pointer2] === '#') {
      backspace2++;
      pointer2--;
    }

    // skip based on number of backspaces
    pointer1 -= backspace1;
    pointer2 -= backspace2;

    // if characters don't match, return false early
    if (str1[pointer1] !== str2[pointer2]) {
      return false;
    }

    // move pointers
    pointer1--;
    pointer2--;
  }

  return true;
};

console.log(compareBackspace('xy#z', 'xzz#'));
console.log(compareBackspace('xp#', 'xyz##'));
console.log(compareBackspace('xywrrmp', 'xywrrmu#p'));
console.log(compareBackspace('xy#z', 'xyz#'));

// time: O(M + N)
// space: O(1)
