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

const reverseSublist = (head) => {
  let current = head;
  let prev = null;
  while (current !== null) {
    let next = current.next; // store original next
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
};

const head = new Node(2);
head.next = new Node(4);
head.next.next = new Node(6);
head.next.next.next = new Node(8);
head.next.next.next.next = new Node(10);
head.printList();
reverseSublist(head).printList();
