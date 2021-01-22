class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  printList() {
    let result = '';
    let temp = this;

    while (temp !== null) {
      result += `value:${temp.value} `;
      temp = temp.next;
    }
    console.log(result);
  }
}

const rotate = (head, k) => {
  // find length and connect tail to head
  let lastNode = head;
  let listLength = 1;

  while (lastNode.next !== null) {
    lastNode = lastNode.next;
    listLength++;
  }

  lastNode.next = head;

  // mod k against list length to remove unnecessary iterations and find skip length (since we're rotating right)
  k %= listLength;
  skipLength = listLength - k - 1;

  let newLastNode = head;
  for (let i = 0; i < skipLength; i++) {
    newLastNode = newLastNode.next;
  }

  head = newLastNode.next;
  newLastNode.next = null;

  return head;
};

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
head.next.next.next.next.next.next = new Node(7);
head.next.next.next.next.next.next.next = new Node(8);
head.next.next.next.next.next.next.next.next = new Node(9);
head.next.next.next.next.next.next.next.next.next = new Node(10);

head.printList();
rotate(head, 5).printList();
