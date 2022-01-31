const nextLetter = (letters, key) => {
  let start = 0;
  let end = letters.length - 1;

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    let midLetter = letters[mid];

    if (midLetter <= key) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return letters[start % letters.length];
};

console.log(nextLetter(['a', 'c', 'f', 'h'], 'f'));
console.log(nextLetter(['a', 'c', 'f', 'h'], 'b'));
console.log(nextLetter(['a', 'c', 'f', 'h'], 'm'));
console.log(nextLetter(['c', 'f', 'h'], 'a'));
