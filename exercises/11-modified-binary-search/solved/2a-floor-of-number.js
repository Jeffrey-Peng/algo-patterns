const findFloor = (arr, key) => {
  if (key < arr[0]) return -1;

  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    let midNum = arr[mid];

    if (midNum === key) return mid;

    if (midNum < key) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return end;
};

console.log(findFloor([4, 6, 10], 6));
console.log(findFloor([1, 3, 8, 10, 15], 12));
console.log(findFloor([4, 6, 10], 17));
console.log(findFloor([4, 6, 10], -1));
