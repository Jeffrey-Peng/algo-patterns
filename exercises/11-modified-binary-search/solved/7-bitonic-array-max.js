const findBitonicMax = (arr) => {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let mid = Math.floor(start + (end - start) / 2);
    if (arr[mid] > arr[mid + 1]) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }

  return arr[start];
};

console.log(findBitonicMax([1, 3, 8, 12, 4, 2]));
console.log(findBitonicMax([3, 8, 3, 1]));
console.log(findBitonicMax([1, 3, 8, 12]));
console.log(findBitonicMax([10, 9, 8]));
