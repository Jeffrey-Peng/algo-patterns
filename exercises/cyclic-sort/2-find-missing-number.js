const findMissingNumber = (nums) => {
  let i = 0;
  while (i < nums.length) {
    const j = nums[i];
    if (nums[i] < nums.length && nums[i] !== nums[j]) {
      // swap numbers, ignore if last number (outside of range)
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
    } else {
      i++;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i) {
      return i;
    }
  }
};

// Time: O(n) + O(n-1) + O(n) = O(n)
// Space: O(1)

console.log(findMissingNumber([4, 0, 3, 1]));
console.log(findMissingNumber([8, 3, 5, 2, 4, 6, 0, 1]));
