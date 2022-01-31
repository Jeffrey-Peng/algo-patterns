class Interval {
	constructor(start, end) {
		this.start = start;
		this.end = end;
	}

	getInterval() {
		return `[${this.start}, ${this.end}]`;
	}
}

const merge = (intervalsA, intervalsB) => {
	// your code here
};

// tests
let insertedIntervals1 = merge(
	[new Interval(1, 3), new Interval(5, 6), new Interval(7, 9)],
	[new Interval(2, 3), new Interval(5, 7)]
);
let result1 = "";
insertedIntervals1.forEach((interval) => {
	result1 += interval.getInterval() + " ";
});
console.log(`Intervals intersection: ${result1}`);

let insertedIntervals2 = merge(
	[new Interval(1, 3), new Interval(5, 7), new Interval(9, 12)],
	[new Interval(5, 10)]
);
let result2 = "";
insertedIntervals2.forEach((interval) => {
	result2 += interval.getInterval() + " ";
});
console.log(`Intervals intersection: ${result2}`);

let insertedIntervals3 = merge(
	[new Interval(1, 3), new Interval(5, 7), new Interval(9, 12)],
	[new Interval(1, 7), new Interval(8, 11)]
);
let result3 = "";
insertedIntervals3.forEach((interval) => {
	result3 += interval.getInterval() + " ";
});
console.log(`Intervals intersection: ${result3}`);
