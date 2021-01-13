const findSmallestMissingPositiveNumber = (nums) => {
  let i = 0;
  while (i < nums.length) {
    const j = nums[i] - 1;
    if (nums[i] >= 0 && nums[i] <= nums.length && nums[i] !== nums[j]) {
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
    } else {
      i++;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) {
      return i + 1;
    }
  }
  return -1;
};

console.log(findSmallestMissingPositiveNumber([-3, 1, 5, 4, 2]));
console.log(findSmallestMissingPositiveNumber([3, -2, 0, 1, 2]));
console.log(findSmallestMissingPositiveNumber([3, 2, 5, 1]));
