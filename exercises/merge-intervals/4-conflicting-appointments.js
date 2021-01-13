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
  // sort by start time
  intervals.sort((a, b) => a.start - b.start);

  // check each interval against the preceding interval to see if start is less than preceding end
  for (let i = 1; i < intervals.length; i++) {
    let intA = intervals[i - 1];
    let intB = intervals[i];

    if (intB.start < intA.end) {
      return false;
    }
  }
  return true;
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
