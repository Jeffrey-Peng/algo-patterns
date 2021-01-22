const minDiffElement = (arr, key) => {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    let midNum = arr[mid];

    if (midNum === key) {
      return midNum;
    }

    if (midNum < key) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return arr[start] - key < key - arr[end] ? arr[start] : arr[end];
};

console.log(minDiffElement([4, 6, 10], 7));
console.log(minDiffElement([4, 6, 10], 4));
console.log(minDiffElement([1, 3, 8, 10, 15], 12));
