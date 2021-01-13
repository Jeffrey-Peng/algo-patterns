class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

const findCycleLength = (head) => {
  // start both pointers at head
  let slow = head;
  let fast = head;

  // check to see that fast can move foward (fast is not null and fast.next is not null)
  while (fast !== null && fast.next !== null) {
    // move both pointers at their paces
    slow = slow.next;
    fast = fast.next.next;

    // if pointers meet, there's a cycle
    if (slow === fast) {
      // start a third pointer to find the length
      let current = slow;
      let length = 0;

      // move pointer
      do {
        current = current.next;
        length++;
      } while (current !== slow);

      return length;
    }
  }

  return 0;
};

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
head.next.next.next.next.next.next = head.next.next;
console.log(findCycleLength(head));

head.next.next.next.next.next.next = head.next.next.next;
console.log(findCycleLength(head));
