const maxSubArrayOfK = (k, arr) => {
  let maxSum = 0;
  let currentSum = 0;

  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i];
    if (i >= k - 1) {
      maxSum = Math.max(maxSum, currentSum);
      currentSum -= arr[i - k + 1];
    }
  }

  return maxSum;
};

console.log(maxSubArrayOfK(3, [2, 1, 5, 1, 3, 2]));
console.log(maxSubArrayOfK(2, [2, 3, 4, 1, 5]));
