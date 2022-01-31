// const lengthLongestSubarray = (arr, k) => {
//   let maxLength = 0;
//   let start = 0;
//   let zeroCount = 0;

//   for (let end = 0; end < arr.length; end++) {
//     if (arr[end] === 0) zeroCount++;

//     while (zeroCount > k) {
//       if (arr[start] === 0) zeroCount--;
//       start++;
//     }

//     maxLength = Math.max(maxLength, end - start + 1);
//   }

//   return maxLength;
// };

const lengthLongestSubarray = (arr, k) => {
	let maxLen = 0;
	let count = 0;
	let start = 0;

	for (let end = 0; end < arr.length; end++) {
		if (arr[end] === 0) {
			count++;
		}

		while (count > k) {
			if (arr[start] === 0) {
				count--;
			}

			start++;
		}

		maxLen = Math.max(maxLen, end - start + 1);
	}

	return maxLen;
};

console.log(lengthLongestSubarray([0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], 2));
console.log(lengthLongestSubarray([0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], 3));
