const findDuplicate = (nums) => {
  let i = 0;
  while (i < nums.length) {
    if (nums[i] !== i + 1) {
      const j = nums[i] - 1;
      if (nums[i] !== nums[j]) {
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
      } else {
        return nums[i];
      }
    } else {
      i++;
    }
  }
  return -1;
};

// alternative method using linked list cycle to find solution without modifying input
const findDuplicate2 = (nums) => {
  let slow = nums[0];
  let fast = nums[nums[0]];

  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[nums[fast]];
  }

  let current = nums[nums[slow]];
  let cycleLength = 1;
  while (current !== nums[slow]) {
    current = nums[current];
    cycleLength++;
  }

  // find start

  let pointer1 = nums[0];
  let pointer2 = nums[0];

  while (cycleLength > 0) {
    pointer2 = nums[pointer2];
    cycleLength--;
  }

  while (pointer1 !== pointer2) {
    pointer1 = nums[pointer1];
    pointer2 = nums[pointer2];
  }
  return pointer1;
};

console.log(findDuplicate([1, 4, 4, 3, 2]));
console.log(findDuplicate([2, 1, 3, 3, 5, 4]));
console.log(findDuplicate([2, 4, 1, 4, 4]));
