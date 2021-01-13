class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  printList() {
    let result = '';
    let temp = this;

    while (temp !== null) {
      result += `value:${temp.value} next:${temp.next} `;
      temp = temp.next;
    }
    console.log(result);
  }
}

const reverseList = (head) => {
  let prev = null; // prev of list head is null;

  while (head !== null) {
    let next = head.next; // temp store head next
    head.next = prev; // replace head next with prev (reversing)
    prev = head; // move prev down the list
    head = next; // move head down the list
  }

  return prev;
};

const reorder = (head) => {
  // return early if zero or one node
  if (head === null || head.next === null) return;

  // find middle of linked list
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  // slow is now at midpoint
  let headSecondHalf = reverseList(slow); // pointer at head of reversed second half
  let headFirstHalf = head; // pointer at head of original linked list

  while (headFirstHalf.next !== null && headSecondHalf.next !== null) {
    let temp1 = headFirstHalf.next; // store forward next
    let temp2 = headSecondHalf.next; // store reverse next

    headFirstHalf.next = headSecondHalf; // reassign forward next to reverse
    headSecondHalf.next = temp1; // reassign reverse next to original forward next

    headFirstHalf = temp1; // move forward to original next
    headSecondHalf = temp2; // move reverse to original next
  }
};

const head = new Node(2);
head.next = new Node(4);
head.next.next = new Node(6);
head.next.next.next = new Node(8);
head.next.next.next.next = new Node(10);
head.next.next.next.next.next = new Node(12);
reorder(head);
head.printList();
