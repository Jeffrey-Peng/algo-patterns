class Interval {
	constructor(start, end) {
		this.start = start;
		this.end = end;
	}

	getInterval() {
		return `[${this.start}, ${this.end}]`;
	}
}

class EmployeeInterval {
	constructor(interval, employeeIndex, intervalIndex) {
		this.interval = interval;
		this.employeeIndex = employeeIndex;
		this.intervalIndex = intervalIndex;
	}
}

const findEmployeeFreeTime = (schedules) => {
	// your code here
};

// tests
let intervals1 = findEmployeeFreeTime([
	[new Interval(1, 3), new Interval(5, 6)],
	[new Interval(2, 3), new Interval(6, 8)],
]);
let result1 = "";
intervals1.forEach((interval) => {
	result1 += interval.getInterval() + " ";
});
console.log(result1);

let intervals2 = findEmployeeFreeTime([
	[new Interval(1, 3), new Interval(9, 12)],
	[new Interval(2, 4)],
	[new Interval(6, 8)],
]);
let result2 = "";
intervals2.forEach((interval) => {
	result2 += interval.getInterval() + " ";
});
console.log(result2);

let intervals3 = findEmployeeFreeTime([
	[new Interval(1, 3)],
	[new Interval(2, 4), new Interval(3, 5), new Interval(7, 9)],
]);
let result3 = "";
intervals3.forEach((interval) => {
	result3 += interval.getInterval() + " ";
});
console.log(result3);
