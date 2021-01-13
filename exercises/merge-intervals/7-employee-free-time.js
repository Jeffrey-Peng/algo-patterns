class MyHeap {
  constructor(scoreFunction) {
    this.content = [null];
    this.scoreFunction = scoreFunction;
    this.length = 0;
  }

  getParent(idx) {
    return Math.floor(idx / 2);
  }
  getLeftChild(idx) {
    return idx * 2;
  }
  getRightChild(idx) {
    return idx * 2 + 1;
  }
  getScore(idx) {
    return this.scoreFunction(this.content[idx]);
  }
  updateLength() {
    this.length = this.content.length - 1;
  }

  swap(idxOne, idxTwo) {
    [this.content[idxOne], this.content[idxTwo]] = [
      this.content[idxTwo],
      this.content[idxOne],
    ];
  }

  peek() {
    return this.content[1];
  }

  push(node) {
    this.content.push(node);
    this.heapifyUp(this.content.length - 1);
    this.updateLength();
  }

  pop() {
    let result = this.content[1]; // store priority element
    let end = this.content.pop(); // remove last node

    if (this.content.length > 1) {
      this.content[1] = end; // move last node to top
      this.heapifyDown(1);
    }
    this.updateLength();
    return result;
  }

  pushPop(node) {
    let result = node; // store new node

    // if the root is the priority element, store that for extraction, then move new element to the top and heapify down
    if (
      this.content.length > 1 &&
      this.getScore(1) < this.scoreFunction(node)
    ) {
      result = this.content[1];
      this.content[1] = node;
      this.heapifyDown(1);
    }
    this.updateLength();
    // if the new node is the priority element, return it
    return result;
  }

  remove(node) {
    for (let i = 0; i < this.content.length; i++) {
      if (this.content[i] !== node) continue;

      let end = this.content.pop();

      if (i === length - 1) break;
      this.content[i] = end;
      this.heapifyUp(i);
      this.heapifyDown(i);
      this.updateLength();
      break;
    }
  }

  heapifyUp(idx) {
    if (this.content.length > 1) {
      while (
        idx > 1 &&
        this.getScore(idx) < this.getScore(this.getParent(idx))
      ) {
        this.swap(idx, this.getParent(idx));
        idx = this.getParent(idx);
      }
    }
  }

  heapifyDown(idx) {
    while (this.content[this.getLeftChild(idx)]) {
      let smallerChildIdx = this.getLeftChild(idx);
      if (
        this.content[this.getRightChild(idx)] &&
        this.getScore(this.getRightChild(idx)) <
          this.getScore(this.getLeftChild(idx))
      ) {
        smallerChildIdx = this.getRightChild(idx);
      }

      if (this.getScore(idx) < this.getScore(smallerChildIdx)) {
        break;
      } else {
        this.swap(idx, smallerChildIdx);
      }
      idx = smallerChildIdx;
    }
  }
}

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
  let result = [];

  // Create minHeap based on start time and push the first interval of each employee's schedule on
  // EmployeeInterval class contains the interval, the employee index (out of all employees), and the interval index (out of the employee's schedule)
  let minHeap = new MyHeap((el) => el.interval.start);
  schedules.forEach((employeeSchedule, index) => {
    minHeap.push(new EmployeeInterval(employeeSchedule[0], index, 0));
  });

  let previousInterval = minHeap.peek().interval;

  // Go through the minHeap (which at any point includes the same number of elements as employees)
  while (minHeap.length > 0) {
    const queueTop = minHeap.pop();

    // Compare minHeap top interval with previous top interval
    if (previousInterval.end < queueTop.interval.start) {
      result.push(new Interval(previousInterval.end, queueTop.interval.start)); // Add gap interval
      previousInterval = queueTop.interval;
    } else {
      if (previousInterval.end < queueTop.interval.end) {
        previousInterval = queueTop.interval;
      }
    }

    // Replace popped interval with next up on that employee's schedule

    const employeeSchedule = schedules[queueTop.employeeIndex];
    if (employeeSchedule.length > queueTop.intervalIndex + 1) {
      minHeap.push(
        new EmployeeInterval(
          employeeSchedule[queueTop.intervalIndex + 1],
          queueTop.employeeIndex,
          queueTop.intervalIndex + 1
        )
      );
    }
  }

  return result;
};

let intervals1 = findEmployeeFreeTime([
  [new Interval(1, 3), new Interval(5, 6)],
  [new Interval(2, 3), new Interval(6, 8)],
]);
let result1 = '';
intervals1.forEach((interval) => {
  result1 += interval.getInterval() + ' ';
});
console.log(result1);

let intervals2 = findEmployeeFreeTime([
  [new Interval(1, 3), new Interval(9, 12)],
  [new Interval(2, 4)],
  [new Interval(6, 8)],
]);
let result2 = '';
intervals2.forEach((interval) => {
  result2 += interval.getInterval() + ' ';
});
console.log(result2);

let intervals3 = findEmployeeFreeTime([
  [new Interval(1, 3)],
  [new Interval(2, 4), new Interval(3, 5), new Interval(7, 9)],
]);
let result3 = '';
intervals3.forEach((interval) => {
  result3 += interval.getInterval() + ' ';
});
console.log(result3);
