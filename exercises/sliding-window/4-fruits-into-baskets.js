// const fruitsBaskets = (arr) => {
//   let maxFruits = 0;
//   let start = 0;
//   let baskets = {};

//   for (let end = 0; end < arr.length; end++) {
//     let currentFruit = arr[end];

//     if (!baskets[currentFruit]) baskets[currentFruit] = 0;
//     baskets[currentFruit]++;

//     while (Object.keys(baskets).length > 2) {
//       let startingFruit = arr[start];

//       baskets[startingFruit]--;
//       if (!baskets[startingFruit]) delete baskets[startingFruit];

//       start++;
//     }

//     maxFruits = Math.max(maxFruits, end - start + 1);
//   }
//   return maxFruits;
// };

const fruitsBaskets = (arr) => {
	let map = {};
	let max = 0;
	let start = 0;

	for (let end = 0; end < arr.length; end++) {
		if (!(arr[end] in map)) {
			map[arr[end]] = 0;
		}

		map[arr[end]] += 1;

		while (Object.keys(map).length > 2) {
			map[arr[start]]--;

			if (map[arr[start]] === 0) {
				delete map[arr[start]];
			}

			start++;
		}

		max = Math.max(max, end - start + 1);
	}

	return max;
};

console.log(fruitsBaskets(["A", "B", "C", "A", "C"]));
console.log(fruitsBaskets(["A", "B", "C", "B", "B", "C"]));
