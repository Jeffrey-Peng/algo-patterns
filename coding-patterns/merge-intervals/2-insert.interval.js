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
  let merged = [];
  let i = 0;

  // add any intervals that precede new interval and don't overlap
  while (i < intervals.length && intervals[i].end < newInterval.start) {
    merged.push(intervals[i]);
    i++;
  }

  // add intervals that overlap, assigning the new start as min of the two starts and new end as max of the two ends
  while (i < intervals.length && intervals[i].start <= newInterval.end) {
    newInterval.start = Math.min(intervals[i].start, newInterval.start);
    newInterval.end = Math.max(intervals[i].end, newInterval.end);
    i++;
  }

  // once non-overlapping interval reached, push the merged interval
  merged.push(newInterval);

  // add the remaining intervals
  while (i < intervals.length) {
    merged.push(intervals[i]);
    i++;
  }

  return merged;
};

// Time: O(N)
// Space: O(N)

// Tests
let insertedIntervals1 = insert(
  [new Interval(1, 3), new Interval(5, 7), new Interval(8, 12)],
  new Interval(4, 6)
);
let result1 = '';
insertedIntervals1.forEach((interval) => {
  result1 += interval.getInterval() + ' ';
});
console.log(`Inserted intervals: ${result1}`);

let insertedIntervals2 = insert(
  [new Interval(1, 3), new Interval(5, 7), new Interval(8, 12)],
  new Interval(4, 10)
);
let result2 = '';
insertedIntervals2.forEach((interval) => {
  result2 += interval.getInterval() + ' ';
});
console.log(`Inserted intervals: ${result2}`);

let insertedIntervals3 = insert([new Interval(5, 7)], new Interval(1, 4));
let result3 = '';
insertedIntervals3.forEach((interval) => {
  result3 += interval.getInterval() + ' ';
});
console.log(`Inserted intervals: ${result3}`);
