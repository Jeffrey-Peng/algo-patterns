const minimumWindowSort = (arr) => {
  // set up pointers at either end
  let left = 0;
  let right = arr.length - 1;

  // iterate left pointer until next number is smaller than previous (find first out-of-order number)
  while (left < arr.length - 1 && arr[left] <= arr[left + 1]) {
    left++;
  }

  // if whole array iterated, it's already sorted
  if (left === arr.length - 1) return 0;

  // iterate right pointer in similar fashion, looking for first out-of-order number
  while (right > 0 && arr[right - 1] <= arr[right]) {
    right--;
  }

  // this subarray now spans the left out-of-order number to the right out-of-order number

  // find the subarray's min and max
  let subarrayMax = -Infinity;
  let subarrayMin = Infinity;

  for (let i = left; i < right + 1; i++) {
    subarrayMax = Math.max(subarrayMax, arr[i]);
    subarrayMin = Math.min(subarrayMin, arr[i]);
  }

  // expand left side if the prior number is larger than subarray minimum (this means that number needs to be sorted too)
  while (left > 0 && arr[left - 1] > subarrayMin) {
    left--;
  }

  // expand right side if the next number is smaller than subarray maximum (that number needs to be sorted)
  while (right < arr.length - 1 && arr[right + 1] < subarrayMax) {
    right++;
  }

  // return the length of the final subarray
  return right - left + 1;
};

console.log(minimumWindowSort([1, 2, 5, 3, 7, 10, 9, 12]));
console.log(minimumWindowSort([1, 3, 2, 0, -1, 7, 10]));
console.log(minimumWindowSort([1, 2, 3]));
console.log(minimumWindowSort([3, 2, 1]));
