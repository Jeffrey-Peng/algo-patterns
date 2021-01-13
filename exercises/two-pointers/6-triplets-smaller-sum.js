const tripletSmallerSum = (arr, target) => {
  arr = arr.sort((a, b) => a - b);
  let count = 0;

  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1;
    let right = arr.length - 1;

    while (left < right) {
      let sum = arr[i] + arr[left] + arr[right];
      if (sum < target) {
        count += right - left;
        left++;
      } else {
        right--;
      }
    }
  }

  return count;
};
// Time: O(N*2)
// Space: O(N)

console.log(tripletSmallerSum([-1, 0, 2, 3], 3));
console.log(tripletSmallerSum([-1, 4, 2, 1, 3], 5));

const findTripletSmallerSum = (arr, target) => {
  arr = arr.sort((a, b) => a - b);
  let triplets = [];

  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1;
    let right = arr.length - 1;

    while (left < right) {
      let sum = arr[i] + arr[left] + arr[right];
      if (sum < target) {
        for (let j = right; j > left; j--) {
          triplets.push([arr[i], arr[left], arr[right]]);
        }
        left++;
      } else {
        right--;
      }
    }
  }

  return triplets;
};

console.log(findTripletSmallerSum([-1, 0, 2, 3], 3));
console.log(findTripletSmallerSum([-1, 4, 2, 1, 3], 5));

// Time: O(N*3)
// Space: O(N)
