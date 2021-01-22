const searchRotatedArray = (arr, key) => {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);

    if (arr[mid] === key) {
      return mid;
    }

    if (arr[start] <= arr[mid]) {
      // first part of array is sorted
      if (arr[start] <= key && key < arr[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else {
      if (arr[mid] < key && key <= arr[end]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }

  return -1;
};

console.log(searchRotatedArray([10, 15, 1, 3, 8], 15));
console.log(searchRotatedArray([4, 5, 7, 9, 10, -1, 2], 10));
