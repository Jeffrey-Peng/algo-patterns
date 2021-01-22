const findSubsets = (nums) => {
  nums.sort((a, b) => a - b);

  let subsets = [[]];
  let startIndex = 0;
  let endIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    startIndex = 0;
    if (i > 0 && nums[i] === nums[i - 1]) {
      startIndex = endIndex;
    }
    endIndex = subsets.length;

    for (let j = startIndex; j < endIndex; j++) {
      subsets.push([...subsets[j], nums[i]]);
    }
  }
  console.log(subsets.length);
  return subsets;
};

// Time: O(2^N)
// Space: O(2^N)

console.log(findSubsets([]));
console.log(findSubsets([1, 3, 3]));
console.log(findSubsets([1, 5, 3, 3]));
