class Interval {
	constructor(start, end) {
		this.start = start;
		this.end = end;
	}

	getInterval() {
		return `[${this.start}, ${this.end}]`;
	}
}

// intervals are sorted and non-overlapping
const insert = (intervals, newInterval) => {
	// your code here
};

// Tests
let insertedIntervals1 = insert(
	[new Interval(1, 3), new Interval(5, 7), new Interval(8, 12)],
	new Interval(4, 6)
);
let result1 = "";
insertedIntervals1.forEach((interval) => {
	result1 += interval.getInterval() + " ";
});
console.log(`Inserted intervals: ${result1}`);

let insertedIntervals2 = insert(
	[new Interval(1, 3), new Interval(5, 7), new Interval(8, 12)],
	new Interval(4, 10)
);
let result2 = "";
insertedIntervals2.forEach((interval) => {
	result2 += interval.getInterval() + " ";
});
console.log(`Inserted intervals: ${result2}`);

let insertedIntervals3 = insert([new Interval(5, 7)], new Interval(1, 4));
let result3 = "";
insertedIntervals3.forEach((interval) => {
	result3 += interval.getInterval() + " ";
});
console.log(`Inserted intervals: ${result3}`);
