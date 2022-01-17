// const findSubstring = (str, pattern) => {
//   let substring = '';
//   let start = 0;
//   let patternMap = {};
//   let matchCount = 0;

//   for (let i = 0; i < pattern.length; i++) {
//     let curr = pattern[i];
//     if (!(curr in patternMap)) patternMap[curr] = 0;
//     patternMap[curr]++;
//   }

//   // Dynamic sliding window
//   for (let end = 0; end < str.length; end++) {
//     let endChar = str[end];
//     if (endChar in patternMap) {
//       patternMap[endChar]--;

//       if (patternMap[endChar] >= 0) matchCount++; // increment every pattern char instance
//     }

//     while (matchCount === pattern.length) {
//       if (end - start + 1 < substring.length || substring === '') {
//         substring = str.substring(start, end + 1);
//       }

//       let startChar = str[start];
//       if (startChar in patternMap) {
//         patternMap[startChar]++;

//         if (patternMap[startChar] > 0) matchCount--; // same as other one
//       }
//       start++;
//     }
//   }

//   return substring;
// };

const findSubstring = (str, pattern) => {
	const map = {};

	for (let i = 0; i < pattern.length; i++) {
		if (!(pattern[i] in map)) {
			map[pattern[i]] = 0;
		}

		map[pattern[i]]++;
	}

	let start = 0;
	let matched = 0;

	for (let end = 0; end < str.length; end++) {
		if (str[end] in map) {
			map[str[end]]--;

			if (map[str[end]] === 0) {
				matched++;
			}

			while (matched === Object.keys(map).length) {
				if (str[start] in map) {
					if (map[str[start]] === 0) {
						return str.substring(start, end + 1);
					}

					map[str[start]]++;
				}
				start++;
			}
		}
	}

	return "";
};

console.log(findSubstring("aabdec", "abc"));
console.log(findSubstring("abdabca", "abc"));
console.log(findSubstring("adcad", "abc"));
