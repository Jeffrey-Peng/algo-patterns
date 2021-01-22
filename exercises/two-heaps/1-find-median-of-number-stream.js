class MyHeap {
  constructor(scoreFunction, isMin) {
    this.scoreFunction = scoreFunction;
    this.isMin = isMin;
    this.heap = [];
  }

  swap(idx1, idx2) {
    [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
  }

  getLeftChild(idx) {
    return idx * 2 + 1;
  }
  getRightChild(idx) {
    return idx * 2 + 2;
  }
  getParent(idx) {
    return Math.floor(idx / 2);
  }

  calculate(idx) {
    return this.scoreFunction(this.heap[idx]);
  }
  calculateLeftChild(idx) {
    return this.calculate(this.getLeftChild(idx));
  }
  calculateRightChild(idx) {
    return this.calculate(this.getRightChild(idx));
  }
  calculateParent(idx) {
    return this.calculate(this.getParent(idx));
  }

  peek() {
    return this.heap[0];
  }

  pop() {
    const result = this.heap[0];

    this.heap[0] = this.heap.pop();
    this.heapifyDown(this.heap[0]);

    return result;
  }

  push(node) {
    this.heap.push(node);
    this.heapifyUp(this.heap.length - 1);
  }

  heapifyDown(idx) {
    while (this.heap[this.getLeftChild(idx)]) {
      let currentScore = this.calculate(idx);
      let swapCandidateIdx = this.getLeftChild(idx);
      let swapCandidateScore = this.calculateLeftChild(idx);

      if (
        this.heap[this.getRightChild(idx)] &&
        (this.isMin
          ? this.calculateRightChild(idx) < swapCandidateScore
          : this.calculateRightChild(idx) > swapCandidateScore)
      ) {
        swapCandidateIdx = this.calculateRightChild(idx);
        swapCandidateScore = this.calculateRightChild(idx);
      }

      if (
        this.isMin
          ? currentScore > swapCandidateScore
          : currentScore < swapCandidateScore
      ) {
        this.swap(idx, swapCandidateIdx);
        idx = swapCandidateIdx;
      } else {
        break;
      }
    }
  }

  heapifyUp(idx) {
    while (
      idx > 0 &&
      (this.isMin
        ? this.calculate(idx) < this.calculateParent(idx)
        : this.calculate(idx) > this.calculateParent(idx))
    ) {
      this.swap(idx, this.getParent(idx));
      idx = this.getParent(idx);
    }
  }
}

class MedianOfStream {
  constructor() {
    this.smallHalf = new MyHeap((el) => el, true);
    this.largeHalf = new MyHeap((el) => el, false);
  }

  insertNum(num) {
    if (this.smallHalf.heap.length === 0 || num <= this.smallHalf.peek()) {
      this.smallHalf.push(num);
    } else {
      this.largeHalf.push(num);
    }

    if (this.smallHalf.heap.length > this.largeHalf.heap.length + 1) {
      this.largeHalf.push(this.smallHalf.pop());
    } else if (this.largeHalf.heap.length > this.smallHalf.heap.length) {
      this.smallHalf.push(this.largeHalf.pop());
    }
  }

  findMedian() {
    if (this.smallHalf.heap.length === this.largeHalf.heap.length) {
      return (this.smallHalf.peek() + this.largeHalf.peek()) / 2;
    } else {
      return this.smallHalf.peek();
    }
  }
}

// Time: insertNum = O(logN) for heap insertion, findMedian = O(1) for heap peek
// Space: O(N)

const stream = new MedianOfStream();
stream.insertNum(3);
stream.insertNum(1);
console.log(stream.findMedian());

stream.insertNum(5);
console.log(stream.findMedian());

stream.insertNum(4);
console.log(stream.findMedian());
