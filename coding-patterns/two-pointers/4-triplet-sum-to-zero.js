const searchTriplets = (arr) => {
  // sort unsorted array first in ascending order
  arr.sort((a, b) => a - b);

  let uniqueTriplets = [];

  // iterate through each element with arr[i] as the first number of the potential triplet
  for (let i = 0; i < arr.length; i++) {
    if (i > 0 && arr[i] === arr[i - 1]) continue; // skip duplicate elements (check to see if last one was the same)

    let remainder = 0 - arr[i]; // since triplet needs to add to zero, the pair needs to add up to 0 - first element

    // set two pointers at each end of remaining array
    let left = i + 1;
    let right = arr.length - 1;

    while (right > left) {
      let currSum = arr[left] + arr[right];

      // shrink window based on current sum
      if (currSum > remainder) {
        right--;
      } else if (currSum < remainder) {
        left++;
      } else {
        // if valid triplet found, push onto result array and move both pointers inward
        uniqueTriplets.push([arr[i], arr[left], arr[right]]);
        right--;
        left++;

        // skip duplicate elements while moving pointers
        while (left < right && arr[left] === arr[left - 1]) {
          left++;
        }
        while (left < right && arr[right] === arr[right + 1]) {
          right--;
        }
      }
    }
  }

  return uniqueTriplets;
};

console.log(searchTriplets([-3, 0, 1, 2, -1, 1, -2]));
console.log(searchTriplets([-5, 2, -1, -2, 3]));

// time: sorting takes O(N * logN)
// pointer search takes O(N), times each number in array = O(N*2)
// overall O(N * logN + N*2) -> O(N*2)

// space: O(N) required for sorting
