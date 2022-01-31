class Interval {
	constructor(start, end) {
		this.start = start;
		this.end = end;
	}

	getInterval() {
		return `[${this.start}, ${this.end}]`;
	}
}

const canAttendAllAppts = (intervals) => {
	// your code here
};

console.log(
	canAttendAllAppts([
		new Interval(1, 4),
		new Interval(2, 5),
		new Interval(7, 9),
	])
);

console.log(
	canAttendAllAppts([
		new Interval(6, 7),
		new Interval(2, 4),
		new Interval(8, 12),
	])
);

console.log(
	canAttendAllAppts([
		new Interval(4, 5),
		new Interval(2, 3),
		new Interval(3, 6),
	])
);
