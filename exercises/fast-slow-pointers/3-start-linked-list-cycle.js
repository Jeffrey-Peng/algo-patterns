class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

const findCycleLength = (head) => {
  let slow = head;
  let fast = head;
  let cycleLength = 0;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      let current = slow;

      while (true) {
        current = current.next;
        cycleLength++;
        if (current === slow) return cycleLength;
      }
    }
  }
};

const findCycleStart = (head) => {
  let cycleLength = findCycleLength(head);
  let p1 = head;
  let p2 = head;

  while (cycleLength > 0) {
    p2 = p2.next;
    cycleLength--;
  }

  while (p1 !== p2) {
    p1 = p1.next;
    p2 = p2.next;
  }

  return p1;
};

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);

head.next.next.next.next.next.next = head.next.next;
console.log(findCycleStart(head).value);

head.next.next.next.next.next.next = head.next.next.next;
console.log(findCycleStart(head).value);

head.next.next.next.next.next.next = head;
console.log(findCycleStart(head).value);

// Time: O(N)
// Space: O(1)
