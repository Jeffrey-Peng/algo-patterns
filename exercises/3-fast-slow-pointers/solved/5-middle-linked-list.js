class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

// simply use the fact that fast moves at twice the speed of slow, so when fast reaches the end, slow is at the middle
const findLinkedListMiddle = (head) => {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
};

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
console.log(isPalindromicLinkedList(head).value);

head.next.next.next.next.next = new Node(6);
console.log(isPalindromicLinkedList(head).value);

head.next.next.next.next.next.next = new Node(7);
console.log(isPalindromicLinkedList(head).value);

// Time: O(N)
// Space: O(1)
