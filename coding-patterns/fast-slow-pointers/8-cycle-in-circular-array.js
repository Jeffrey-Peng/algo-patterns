const circularArrayLoopExists = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let isForward = arr[i] >= 0;
    let slow = i;
    let fast = i;

    while (true) {
      slow = findNextIndex(slow, arr[slow], arr.length, isForward); // move slow pointer one step
      fast = findNextIndex(fast, arr[fast], arr.length, isForward); // move fast pointer one step
      if (fast !== -1) {
        // if no direction change or one element cycle, move fast pointer another step
        fast = findNextIndex(fast, arr[fast], arr.length, isForward);
      }
      // break if any direction changes or one element cycles, or if pointers meet
      if (slow === -1 || fast === -1 || slow === fast) {
        break;
      }
    }

    // cycle found if pointers meet and
    if (slow === fast && slow !== -1) {
      return true;
    }
  }
  return false;
};

const findNextIndex = (origin, movement, arrLength, isForward) => {
  if (movement >= 0 !== isForward) {
    return -1; // return early if direction changes
  }

  let nextIndex = (origin + movement) % arrLength; // wrap around for forward movement
  if (nextIndex < 0) {
    nextIndex += arrLength; // wrap around for backward movement
  }

  if (nextIndex === origin) {
    nextIndex = -1; // return if one element cycle
  }

  return nextIndex;
};

// console.log(circularArrayLoopExists([1, 2, -1, 2, 2]));
// console.log(circularArrayLoopExists([2, 2, -1, 2]));
// console.log(circularArrayLoopExists([2, 1, -1, -2]));
console.log(circularArrayLoopExists([1]));
