const binarySearch = (arr, key) => {
  let start = 0;
  let end = arr.length - 1;
  const isAscending = arr[end] > arr[start];

  while (start <= end) {
    const mid = Math.floor(start + (end - start) / 2);
    const midElement = arr[mid];
    if (midElement === key) {
      return mid;
    }
    if (isAscending ? midElement > key : midElement < key) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
};

console.log(binarySearch([4, 6, 10], 10));
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7], 5));
console.log(binarySearch([10, 6, 4], 10));
console.log(binarySearch([10, 6, 4], 4));
