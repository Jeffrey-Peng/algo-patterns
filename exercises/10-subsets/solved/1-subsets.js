const findSubsets = (nums) => {
  let subsets = [[]];

  for (let i = 0; i < nums.length; i++) {
    const currentSubsetLength = subsets.length;
    for (let j = 0; j < currentSubsetLength; j++) {
      const existingSet = subsets[j];
      subsets.push([...existingSet, nums[i]]);
    }
  }

  return subsets;
};

// Time: O(2^N)
// Space: O(2^N)

console.log(findSubsets([1, 3]));
console.log(findSubsets([1, 5, 3]));
