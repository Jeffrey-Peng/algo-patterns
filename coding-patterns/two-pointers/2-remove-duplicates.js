const removeDuplicates = (arr) => {
  let nextUnique = 1; // zero index (first number) is always unique

  for (let i = 0; i < arr.length - 1; i++) {
    // loop through each number
    if (arr[i] !== arr[i + 1]) {
      // if current number is not equal to next number
      arr[nextUnique] = arr[i + 1];
      // no change if nextUnique and i + 1 have been incrementing together
      nextUnique++;
    }
  }

  console.log(arr);
  return nextUnique;
};

/*
Explanation: loop through array with two pointers, one pointer traverses each element while the other stays behind at the last unique element, replace second pointer value with the next unique element found

Steps Example:

	starting array: [2, 3, 3, 3, 6, 9]

	loop 1: nextUnique = 1, i = 0
		arr[i] // 2 !== arr[i + 1] // 3
			arr[nextUnique] // 3 = arr[i + 1] // 1 (no change)
			nextUnique++ // 2

	array: [2, 3, 3, 3, 6, 9]

	loop 2: nextUnique = 2, i = 1
		arr[i] // 3 === arr[i + 1] // 3
			exit if statement 

	array: [2, 3, 3, 3, 6, 9]

	loop 3: nextUnique = 2, i = 2
		arr[i] // 3 ===  arr[i + 1] // 3
			exit if statement

	array: [2, 3, 3, 3, 6, 9]

	loop 4: nextUnique = 2, i = 3
		arr[i] // 3 !== arr[i + 1] // 6
			arr[nextUnique] // 3 = arr[i + 1] // 6 (array @ index 2 assigned 6)
			nextUnique++ // 3

	array: [2, 3, 6, 3, 6, 9]

	loop 5: nextUnique = 3, i = 4 (last loop)
		arr[i] // 6 !== arr[i + 1] // 9
			arr[nextUnique] // 3 = arr[i + 1] // 9
			nextUnique++ // 4

	array: [2, 3, 6, 9, 6, 9]

	return nextUnique // 4
*/

console.log(removeDuplicates([2, 3, 3, 3, 6, 9]));
console.log(removeDuplicates([2, 3, 3, 3, 6, 9, 9]));
console.log(removeDuplicates([2, 2, 2, 11]));
