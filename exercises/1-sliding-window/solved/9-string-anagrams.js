// const findAnagrams = (str, pattern) => {
//   let result = [];
//   let left = 0;
//   let matchCount = 0; // must count unique characters matched
//   let patternMap = {};

//   // Create hash map of pattern characters
//   for (let i = 0; i < pattern.length; i++) {
//     let currChar = pattern[i];
//     if (!(currChar in patternMap)) {
//       patternMap[currChar] = 0;
//     }
//     patternMap[currChar]++;
//   }

//   // Static size sliding window
//   for (let right = 0; right < str.length; right++) {
//     let rightChar = str[right];
//     if (rightChar in patternMap) {
//       patternMap[rightChar]--;

//       if (patternMap[rightChar] === 0) matchCount++;
//     }

//     if (right >= pattern.length) {
//       let leftChar = str[left];
//       if (leftChar in patternMap) {
//         patternMap[leftChar]++;

//         if (patternMap[leftChar] > 0) matchCount--;
//       }
//       left++;
//     }

//     if (matchCount === Object.keys(patternMap).length) {
//       result.push(left);
//     }
//   }

//   return result;
// };

const findAnagrams = (str, pattern) => {
	const map = {};

	for (let i = 0; i < pattern.length; i++) {
		if (!(pattern[i] in map)) {
			map[pattern[i]] = 0;
		}

		map[pattern[i]]++;
	}

	let result = [];
	let start = 0;
	let matched = 0;

	for (let end = 0; end < str.length; end++) {
		// if next character in map, then decrement count
		if (str[end] in map) {
			map[str[end]]--;

			// if count is 0, add to matched counter
			if (map[str[end]] === 0) {
				matched++;
			}
		}

		// if all matched, add start index to result list
		if (matched === Object.keys(map).length) {
			result.push(start);
		}

		// if window end moves past pattern length, then slide the start up
		if (end >= pattern.length - 1) {
			// restore start char to map counts
			if (str[start] in map) {
				if (map[str[start]] === 0) {
					matched--;
				}

				map[str[start]]++;
			}

			start++;
		}
	}

	return result;
};

console.log(findAnagrams("ppqp", "pq")); // [1, 2]
console.log(findAnagrams("abbcabc", "abc")); // [2, 3, 4]
