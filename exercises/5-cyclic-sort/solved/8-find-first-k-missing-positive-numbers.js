const findFirstKMissingPositiveNumbers = (nums, k) => {
  let i = 0;
  while (i < nums.length) {
    const j = nums[i] - 1;
    if (nums[i] > 0 && nums[i] <= nums.length && nums[i] !== nums[j]) {
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
    } else {
      i++;
    }
  }

  let result = [];
  let extraNumbers = new Set();
  let counter = 0;
  let m = 0;

  while (counter < k) {
    if (m < nums.length) {
      if (nums[m] !== m + 1) {
        result.push(m + 1);
        extraNumbers.add(nums[m]);
        counter++;
      }
    } else {
      if (!extraNumbers.has(m + 1)) {
        result.push(m + 1);
        counter++;
      }
    }
    m++;
  }

  return result;
};

console.log(findFirstKMissingPositiveNumbers([3, -1, 4, 5, 5], 3));
console.log(findFirstKMissingPositiveNumbers([2, 3, 4], 3));
console.log(findFirstKMissingPositiveNumbers([-2, -3, 4], 2));
