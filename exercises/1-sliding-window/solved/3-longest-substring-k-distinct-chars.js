// note on sliding window patterns: the window start can move multiple times for each window end move

// const longestSubstringKDistinctChars = (k, str) => {
//   let maxLength = 0;
//   let start = 0;
//   let charFreq = {}; // hashmap to record character frequency

//   for (let end = 0; end < str.length; end++) {
//     if (charFreq.hasOwnProperty(str[end])) {
//       charFreq[str[end]]++; // increment key if existing
//     } else {
//       charFreq[str[end]] = 1; // create key if not
//     }

//     // if more than k distinct chars, start deleting from beginning
//     while (Object.keys(charFreq).length > k) {
//       if (charFreq[str[start]] > 1) {
//         charFreq[str[start]]--; // decrement key if over 1
//       } else {
//         delete charFreq[str[start]]; // delete if 1
//       }
//       start++; // shift window start
//     }

//     // check max length after distinct chars < k
//     maxLength = Math.max(maxLength, end - start + 1);
//   }

//   return maxLength;
// };

const longestSubstringKDistinctChars = (k, str) => {
	let map = {};

	let start = 0;
	let maxLength = 0;

	for (let end = 0; end < str.length; end++) {
		if (!(str[end] in map)) {
			map[str[end]] = 0;
		}

		map[str[end]]++;

		while (Object.keys(map).length > k) {
			map[str[start]]--;

			if (map[str[start]] === 0) {
				delete map[str[start]];
			}

			start++;
		}

		maxLength = Math.max(maxLength, end - start + 1);
	}

	return maxLength;
};

console.log(longestSubstringKDistinctChars(2, "araaci"));
console.log(longestSubstringKDistinctChars(1, "araaci"));
console.log(longestSubstringKDistinctChars(3, "cbbebi"));
