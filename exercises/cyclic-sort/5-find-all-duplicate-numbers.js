const findAllDuplicates = (nums) => {
  let result = [];

  let i = 0;
  while (i < nums.length) {
    if (nums[i] !== i + 1) {
      const j = nums[i] - 1;
      if (nums[i] !== nums[j]) {
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
      } else {
        result.push(nums[i]);
        i++;
      }
    } else {
      i++;
    }
  }

  return result;
};

console.log(findAllDuplicates([3, 4, 4, 5, 5]));
console.log(findAllDuplicates([5, 4, 7, 2, 3, 5, 3]));
console.log(findAllDuplicates([3, 3, 3, 3]));
