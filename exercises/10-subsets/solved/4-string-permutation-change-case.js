const findCaseStringPermutations = (str) => {
  let results = [];
  let permutations = [''];

  for (let i = 0; i < str.length; i++) {
    const currChar = str[i];
    const n = permutations.length;

    for (let j = 0; j < n; j++) {
      const oldPermutation = permutations.shift();
      const newPermutations = [];

      if (currChar.match(/[a-zA-Z]/)) {
        newPermutations.push(oldPermutation + currChar.toLowerCase());
        newPermutations.push(oldPermutation + currChar.toUpperCase());
      } else {
        newPermutations.push(oldPermutation + currChar);
      }

      if (newPermutations[0].length === str.length) {
        results.push(...newPermutations);
      } else {
        permutations.push(...newPermutations);
      }
    }
  }
  console.log(results.length);
  return results;
};

console.log(findCaseStringPermutations('ad52'));
console.log(findCaseStringPermutations('ab7c'));
console.log(findCaseStringPermutations('ab4cd7'));
