const searchQuadruplets = (arr, target) => {
  arr.sort((a, b) => a - b);
  let uniqueQuads = [];

  for (let i = 0; i < arr.length - 3; i++) {
    if (i > 0 && arr[i] === arr[i - 1]) continue;

    for (let j = i + 1; j < arr.length - 2; j++) {
      if (j > 0 && arr[j] === arr[j - 1]) continue;

      let left = j + 1;
      let right = arr.length - 1;

      while (left < right) {
        let sum = arr[i] + arr[j] + arr[left] + arr[right];

        if (sum > target) {
          right--;
        } else if (sum < target) {
          left++;
        } else {
          uniqueQuads.push([arr[i], arr[j], arr[left], arr[right]]);
          right--;
          left++;

          while (left < right && arr[left] === arr[left - 1]) {
            left++;
          }

          while (left < right && arr[right] === arr[right + 1]) {
            right--;
          }
        }
      }
    }
  }
  return uniqueQuads;
};

console.log(searchQuadruplets([4, 1, 2, -1, 1, -3], 1));
console.log(searchQuadruplets([2, 0, -1, 1, -2, 2], 2));

// time: O(N*3)
// space: O(N)
