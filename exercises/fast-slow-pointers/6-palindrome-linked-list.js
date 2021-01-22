class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

// helper function to reverse linked list
const reverseLinkedList = (head) => {
  let prev = null; // at head, prev node is null

  while (head !== null) {
    let next = head.next; // store next node
    head.next = prev; // set next node to prev node
    prev = head; // store current node as prev
    head = next; // set current node to next
  }

  return prev; // after list is reversed, return current node / new head
};

const isPalindromicLinkedList = (head) => {
  if (head === null || head.next === null) return true;

  // find midpoint of linked list with slow pointer
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // reverse second half
  let headSecondHalf = reverseLinkedList(slow);
  // save reversed second half head for reversal later
  let copyHeadSecondHalf = headSecondHalf;

  // compare each value between first half and reversed second half
  while ((head !== null) & (headSecondHalf !== null)) {
    if (head.value !== headSecondHalf.value) {
      break; // stop comparison if unequal
    }

    head = head.next;
    headSecondHalf = headSecondHalf.next;
  }

  // revert second half back to original order
  reverseLinkedList(copyHeadSecondHalf);

  // if comparison reached end, linked list is a palindrome
  if (head === null || headSecondHalf === null) return true;
  else return false;
};

const head = new Node(2);
head.next = new Node(4);
head.next.next = new Node(6);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(2);
console.log(isPalindromicLinkedList(head));

head.next.next.next.next.next = new Node(2);
console.log(isPalindromicLinkedList(head));

// Time: O(N)
// Space: O(1)
