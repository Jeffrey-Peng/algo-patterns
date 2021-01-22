const cyclicSort = (nums) => {
  let i = 0;

  while (i < nums.length) {
    const j = nums[i] - 1;
    if (nums[i] !== nums[j]) {
      // avoid js syntactic swap
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
    } else {
      i += 1;
    }
  }

  return nums;
};

const cyclicSort2 = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    while (nums[i] !== nums[nums[i] - 1]) {
      let temp = nums[i];
      nums[i] = nums[nums[i] - 1];
      nums[temp - 1] = temp;
    }
  }

  return nums;
};

// Time: O(n) + O(n - 1) = O(n)
// Space: O(1)

console.log(cyclicSort2([3, 1, 5, 4, 2]));
console.log(cyclicSort2([2, 6, 4, 3, 1, 5]));
console.log(cyclicSort2([1, 5, 6, 4, 3, 2]));
