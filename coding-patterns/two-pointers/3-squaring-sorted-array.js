const squareSortedArray = (arr) => {
  // Create empty array of correct size first
  let squaredArray = Array(arr.length).fill(0);
  let left = 0;
  let right = arr.length - 1;
  let highestSqIdx = arr.length - 1;

  // Use left and right pointers since those numbers (in a sorted array with negative numbers) are the largest absolutes
  while (right >= left) {
    let leftSquare = Math.pow(arr[left], 2);
    let rightSquare = Math.pow(arr[right], 2);

    // Compare whether left number squared or right number squared is larger, then store that number in the index, which decrements each time until array is filled
    if (rightSquare > leftSquare) {
      squaredArray[highestSqIdx] = rightSquare;
      right--;
    } else {
      squaredArray[highestSqIdx] = leftSquare;
      left++;
    }
    highestSqIdx--;
  }

  return squaredArray;
};

console.log(squareSortedArray([-2, -1, 0, 2, 3]));
console.log(squareSortedArray([-3, -1, 0, 1, 2]));
console.log(squareSortedArray([-10, -3, -1, 0]));
console.log(squareSortedArray([0, 0, 1, 5, 6, 8, 9]));
