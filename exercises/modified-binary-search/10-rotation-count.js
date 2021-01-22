const findRotationCount = (arr) => {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let mid = Math.floor(start + (end - start) / 2);

    if (arr[mid] > arr[mid + 1]) return mid + 1;
    if (arr[mid - 1] > arr[mid]) return mid;

    if (arr[start] < arr[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return 0;
};

console.log(findRotationCount([10, 15, 1, 3, 8]));
console.log(findRotationCount([4, 5, 7, 9, 10, -1, 2]));
console.log(findRotationCount([1, 3, 8, 10]));
console.log(findRotationCount([1, 2]));
console.log(findRotationCount([10, 13, 25, 1, 2, 3, 4, 5, 8, 9]));
