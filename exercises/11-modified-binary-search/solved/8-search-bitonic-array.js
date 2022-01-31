const searchBitonicArray = (arr, key) => {
  const maxIdx = findBitonicMax(arr);
  const firstHalfResult = binarySearch(arr, key, 0, maxIdx);

  if (firstHalfResult !== -1) return firstHalfResult;
  else return binarySearch(arr, key, maxIdx + 1, arr.length - 1);
};

const findBitonicMax = (arr) => {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let mid = Math.floor(start + (end - start) / 2);
    if (arr[mid] < arr[mid + 1]) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }
  return start;
};

const binarySearch = (arr, key, start, end) => {
  const isAscending = arr[start] < arr[end];
  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    if (arr[mid] === key) {
      return mid;
    }

    if (isAscending ? arr[mid] > key : arr[mid] < key) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return -1;
};

console.log(searchBitonicArray([1, 3, 8, 4, 3], 4));
console.log(searchBitonicArray([3, 8, 3, 1], 8));
console.log(searchBitonicArray([1, 3, 8, 12], 12));
console.log(searchBitonicArray([10, 9, 8], 10));
