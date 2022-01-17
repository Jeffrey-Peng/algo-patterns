// const lengthLongestSubstring = (str, k) => {
//   let maxLength = 0;
//   let start = 0;
//   let maxRepeat = 0;
//   let charMap = {};

//   for (let end = 0; end < str.length; end++) {
//     let endChar = str[end];

//     if (!charMap[endChar]) charMap[endChar] = 0;
//     charMap[endChar]++;

//     maxRepeat = Math.max(maxRepeat, charMap[endChar]);

//     // total count = end - start + 1
//     // subtract max frequency letter to get remaining
//     while (end - start + 1 - maxRepeat > k) {
//       let startChar = str[start];

//       charMap[startChar]--;
//       if (charMap[startChar] === 0) delete charMap[startChar];

//       start++;
//     }

//     maxLength = Math.max(maxLength, end - start + 1);
//   }

//   return maxLength;
// };

const getValuesMax = (map) =>
	Object.values(map).reduce((acc, el) => Math.max(acc, el), 0);

const lengthLongestSubstring = (str, k) => {
	let substringMax = 0;
	let mostFrequentCharCount = 0;
	let map = {};
	let start = 0;

	for (let end = 0; end < str.length; end++) {
		if (!(str[end] in map)) {
			map[str[end]] = 0;
		}

		map[str[end]]++;

		mostFrequentCharCount = Math.max(mostFrequentCharCount, map[str[end]]);

		console.log(map);

		while (end - start + 1 - mostFrequentCharCount > k) {
			map[str[start]]--;

			start++;
		}

		substringMax = Math.max(substringMax, end - start + 1);
	}

	return substringMax;
};

console.log(lengthLongestSubstring("aabccbb", 2)); // 5
console.log(lengthLongestSubstring("abbcb", 1)); // 4
console.log(lengthLongestSubstring("abccde", 1)); // 3
