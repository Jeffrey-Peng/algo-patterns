class Interval {
	constructor(start, end) {
		this.start = start;
		this.end = end;
	}

	getInterval() {
		return `[${this.start}, ${this.end}]`;
	}
}

const merge = (intervals) => {
	// your code here
};

// tests
let mergedIntervals1 = merge([
	new Interval(1, 4),
	new Interval(2, 5),
	new Interval(7, 9),
]);
let result1 = "";
mergedIntervals1.forEach((interval) => {
	result1 += interval.getInterval() + " ";
});
console.log(`Merged intervals: ${result1}`);

let mergedIntervals2 = merge([
	new Interval(6, 7),
	new Interval(2, 4),
	new Interval(5, 9),
]);
let result2 = "";
mergedIntervals2.forEach((interval) => {
	result2 += interval.getInterval() + " ";
});
console.log(`Merged intervals: ${result2}`);

let mergedIntervals3 = merge([
	new Interval(1, 4),
	new Interval(2, 6),
	new Interval(3, 5),
]);
let result3 = "";
mergedIntervals3.forEach((interval) => {
	result3 += interval.getInterval() + " ";
});
console.log(`Merged intervals: ${result3}`);
