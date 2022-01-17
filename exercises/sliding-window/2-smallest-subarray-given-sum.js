// const smallestSubarrayGivenSum = (s, arr) => {
//   let currentSum = 0;
//   let smallestLength = Infinity;
//   let start = 0;

//   for (let end = 0; end < arr.length; end++) {
//     currentSum += arr[end];

//     while (currentSum >= s) {
//       smallestLength = Math.min(smallestLength, end - start + 1);
//       currentSum -= arr[start];
//       start++;
//     }
//   }

//   return smallestLength;
// };

const smallestSubarrayGivenSum = (s, arr) => {
	let windowStart = 0;
	let currSum = 0;
	let shortestLength = Infinity;

	for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
		currSum += arr[windowEnd];

		while (currSum >= s) {
			shortestLength = Math.min(shortestLength, windowEnd - windowStart + 1);

			currSum -= arr[windowStart];
			windowStart++;
		}
	}

	return shortestLength;
};

console.log(smallestSubarrayGivenSum(7, [2, 1, 5, 2, 3, 2]));
console.log(smallestSubarrayGivenSum(7, [2, 1, 5, 2, 8]));
console.log(smallestSubarrayGivenSum(8, [3, 4, 1, 1, 6]));
