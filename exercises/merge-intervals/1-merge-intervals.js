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
  // sort intervals by start
  let sortedIntervals = intervals.sort((a, b) => a.start - b.start);
  let merged = [];

  // assign first interval as comparator
  let [start, end] = [sortedIntervals[0].start, sortedIntervals[0].end];

  // iterate through rest of sorted intervals
  for (let i = 1; i < sortedIntervals.length; i++) {
    let interval = sortedIntervals[i];
    if (interval.start <= end) {
      // replace comparator if intervals are to be merged
      end = Math.max(end, interval.end);
    } else {
      merged.push(new Interval(start, end));
      [start, end] = [interval.start, interval.end];
    }
  }
  merged.push(new Interval(start, end));
  return merged;
};

// Time: O(N * logN)
// For iterating through list and sorting the intervals
// Space: O(N)
// N for returning a list and N for sorting

// Tests
let mergedIntervals1 = merge([
  new Interval(1, 4),
  new Interval(2, 5),
  new Interval(7, 9),
]);
let result1 = '';
mergedIntervals1.forEach((interval) => {
  result1 += interval.getInterval() + ' ';
});
console.log(`Merged intervals: ${result1}`);

let mergedIntervals2 = merge([
  new Interval(6, 7),
  new Interval(2, 4),
  new Interval(5, 9),
]);
let result2 = '';
mergedIntervals2.forEach((interval) => {
  result2 += interval.getInterval() + ' ';
});
console.log(`Merged intervals: ${result2}`);

let mergedIntervals3 = merge([
  new Interval(1, 4),
  new Interval(2, 6),
  new Interval(3, 5),
]);
let result3 = '';
mergedIntervals3.forEach((interval) => {
  result3 += interval.getInterval() + ' ';
});
console.log(`Merged intervals: ${result3}`);
