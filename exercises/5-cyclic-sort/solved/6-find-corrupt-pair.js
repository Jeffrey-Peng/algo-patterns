const findCorruptPair = (nums) => {
  let i = 0;
  while (i < nums.length) {
    const j = nums[i] - 1;
    if (nums[i] !== nums[j]) {
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
    } else {
      i++;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) {
      return [nums[i], i + 1];
    }
  }

  return [-1, -1];
};

console.log(findCorruptPair([3, 1, 2, 5, 2]));
console.log(findCorruptPair([3, 1, 2, 3, 6, 4]));
