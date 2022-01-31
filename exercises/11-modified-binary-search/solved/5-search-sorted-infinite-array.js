class ArrayReader {
  constructor(arr) {
    this.arr = arr;
  }

  get(index) {
    if (index >= this.arr.length) return Infinity;
    return this.arr[index];
  }
}

const searchInfiniteArray = (reader, key) => {
  let start = 0;
  let end = 1;

  while (reader.get(end) < key) {
    let tempStart = end + 1;
    end += (end - start + 1) * 2;
    start = tempStart;
  }

  return binarySearch(reader, start, end, key);
};

const binarySearch = (reader, start, end, key) => {
  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    let midNum = reader.get(mid);

    if (midNum < key) {
      start = mid + 1;
    } else if (midNum > key) {
      end = mid - 1;
    } else {
      return mid;
    }
  }

  return -1;
};

let reader = new ArrayReader([
  4,
  6,
  8,
  10,
  12,
  14,
  16,
  18,
  20,
  22,
  24,
  26,
  28,
  30,
]);
console.log(searchInfiniteArray(reader, 16));
console.log(searchInfiniteArray(reader, 11));
reader = new ArrayReader([1, 3, 8, 10, 15]);
console.log(searchInfiniteArray(reader, 15));
console.log(searchInfiniteArray(reader, 200));
