class ArrayReader {
	constructor(arr) {
		this.arr = arr;
	}

	get(index) {
		if (index >= this.arr.length) return Infinity;
		return this.arr[index];
	}
}

const searchInfiniteArray = (reader, key) => {
	// your code here
};

let reader = new ArrayReader([
	4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30,
]);

console.log(searchInfiniteArray(reader, 16));
console.log(searchInfiniteArray(reader, 11));
reader = new ArrayReader([1, 3, 8, 10, 15]);
console.log(searchInfiniteArray(reader, 15));
console.log(searchInfiniteArray(reader, 200));
