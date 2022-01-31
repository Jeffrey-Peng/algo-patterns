// const squareSortedArray = (arr) => {
//   // Create empty array of correct size first
//   let squaredArray = Array(arr.length).fill(0);
//   let left = 0;
//   let right = arr.length - 1;
//   let highestSqIdx = arr.length - 1;

//   // Use left and right pointers since those numbers (in a sorted array with negative numbers) are the largest absolutes
//   while (right >= left) {
//     let leftSquare = Math.pow(arr[left], 2);
//     let rightSquare = Math.pow(arr[right], 2);

//     // Compare whether left number squared or right number squared is larger, then store that number in the index, which decrements each time until array is filled
//     if (rightSquare > leftSquare) {
//       squaredArray[highestSqIdx] = rightSquare;
//       right--;
//     } else {
//       squaredArray[highestSqIdx] = leftSquare;
//       left++;
//     }
//     highestSqIdx--;
//   }

//   return squaredArray;
// };

const squareSortedArray = (arr) => {
	let p1 = 0;
	let p2 = arr.length - 1;
	let result = [];

	while (p1 <= p2) {
		const p1Sq = arr[p1] * arr[p1];
		const p2Sq = arr[p2] * arr[p2];

		if (p1Sq >= p2Sq) {
			result.unshift(p1Sq);
			p1++;
		} else {
			result.unshift(p2Sq);
			p2--;
		}
	}

	return result;
};

console.log(squareSortedArray([-2, -1, 0, 2, 3]));
console.log(squareSortedArray([-3, -1, 0, 1, 2]));
console.log(squareSortedArray([-10, -3, -1, 0]));
console.log(squareSortedArray([0, 0, 1, 5, 6, 8, 9]));
