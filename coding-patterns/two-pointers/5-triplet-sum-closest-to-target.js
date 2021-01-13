const findSum = (arr, target) => {
  // sort array
  arr.sort((a, b) => a - b);

  // initialize minDistance as infinity first
  let minDistance = Infinity;

  // iterate through array
  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1;
    let right = arr.length - 1;

    // two pointers
    while (left < right) {
      // find distance between target and sum of triplet
      let targetDiff = Math.abs(target - arr[i] - arr[left] - arr[right]);

      // if perfect match, return the sum
      if (targetDiff === 0) {
        return target - targetDiff;
      }

      // if the distance is smaller than current smallest distance, replace
      if (targetDiff < minDistance) {
        minDistance = targetDiff;
      }

      // move pointers
      if (targetDiff < 0) {
        right--;
      } else {
        left++;
      }
    }
  }

  // remove the closest sum
  return target - minDistance;
};

console.log(findSum([-2, 0, 1, 2], 2));
console.log(findSum([-3, 2, -1, 1], 1));
console.log(findSum([1, 0, 1, 1], 3));
