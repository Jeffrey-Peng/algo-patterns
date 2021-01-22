// Two pointer method
const pairTargetSum = (arr, target) => {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    if (arr[start] + arr[end] > target) {
      end--;
    } else if (arr[start] + arr[end] < target) {
      start++;
    } else if (arr[start] + arr[end] === target) {
      return [start, end];
    }
  }
  return [-1, -1];
};
// time: O(N)
// space: O(1)

console.log(pairTargetSum([1, 2, 3, 4, 6], 6));
console.log(pairTargetSum([2, 5, 9, 11], 11));

// Hash table method
const pairTargetSumHashTable = (arr, target) => {
  const nums = {}; // hash table

  for (let i = 0; i < arr.length; i++) {
    // loop through array
    const num = arr[i];
    if (target - num in nums) {
      // if complement (target - num) found
      return [nums[target - num], i]; // return the index previously stored and current index
    }
    nums[num] = i; // store index under num key
  }

  return [-1, -1];
};
// time: O(N)
// space: O(N)

console.log(pairTargetSumHashTable([1, 2, 3, 4, 6], 6));
console.log(pairTargetSumHashTable([2, 5, 9, 11], 11));
