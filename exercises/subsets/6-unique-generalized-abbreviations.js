const generalizedAbbreviations = (word) => {
  const permutations = [''];

  for (let i = 0; i < word.length; i++) {
    // each char can be represented in three ways
    const n = permutations.length;

    for (let j = 0; j < n; j++) {
      // 1) as itself
      const oldPermutation = permutations.shift();

      permutations.push(oldPermutation + word[i]);
      const prevCharInt = parseInt(
        oldPermutation[oldPermutation.length - 1],
        10
      );

      // 2) as a number if preceding char is not a number
      if (isNaN(prevCharInt)) {
        permutations.push(oldPermutation + '1');
      } else {
        // 3) replacing the previous char that is a number and add 1 to it
        permutations.push(
          oldPermutation.slice(0, -1) + (prevCharInt + 1).toString()
        );
      }
    }
  }
  return permutations;
};

const generalizedAbbreviationsAlt = (word) => {
  class AbbreviatedWord {
    constructor(str, start, count) {
      this.str = str;
      this.start = start;
      this.count = count;
    }
  }

  const result = [];
  const queue = [];
  queue.push(new AbbreviatedWord('', 0, 0));

  while (queue.length > 0) {
    const currentWord = queue.shift();

    if (currentWord.start === word.length) {
      if (currentWord.count !== 0) {
        currentWord.str += currentWord.count.toString();
      }
      result.push(currentWord.str);
    } else {
      // abbreviation
      queue.push(
        new AbbreviatedWord(
          currentWord.str,
          currentWord.start + 1,
          currentWord.count + 1
        )
      );

      if (currentWord.count !== 0) {
        currentWord.str += currentWord.count.toString();
      }

      const newWord = currentWord.str + word[currentWord.start];
      queue.push(new AbbreviatedWord(newWord, currentWord.start + 1, 0));
    }
  }
};

console.log(generalizedAbbreviations('BAT'));
console.log(generalizedAbbreviations('code'));
