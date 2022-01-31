const findPermutations = (nums) => {
  let result = [];
  let permutations = [[]];

  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];
    const n = permutations.length;

    for (let j = 0; j < n; j++) {
      const oldPermutation = permutations.shift();

      for (let k = 0; k < oldPermutation.length + 1; k++) {
        const newPermutation = [...oldPermutation];
        newPermutation.splice(k, 0, currentNum);

        if (newPermutation.length === nums.length) {
          result.push(newPermutation);
        } else {
          permutations.push(newPermutation);
        }
      }
    }
  }

  return result;
};

// Time: O(N * N!)
// Space: O(N * N!)

console.log(findPermutations([1, 3, 5]));
