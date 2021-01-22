const dutchFlagSort = (arr) => {
  let low = 0;
  let high = arr.length - 1;
  let mid = 0;

  while (mid <= high) {
    switch (arr[mid]) {
      case 0:
        [arr[mid], arr[low]] = [arr[low], arr[mid]]; // swap low and i
        low++;
        mid++;
        break;
      case 2:
        [arr[mid], arr[high]] = [arr[high], arr[mid]]; // swap high and i
        high--; // don't increment mid because the swapped number could be anything
        break;
      case 1:
        mid++;
        break;
    }
  }

  return arr;
};

console.log(dutchFlagSort([1, 0, 2, 1, 0]));
