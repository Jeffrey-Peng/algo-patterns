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

const reverseSublist = (head, p, q) => {
  if (p === q) return head;

  let current = head;
  let prev = null;
  let i = 0;
  while (current !== null && i < p - 1) {
    prev = current;
    current = current.next;
    i++;
  }

  const beforeSublist = prev;
  const sublistLastNode = current;

  i = 0;
  while (current !== null && i < q - p + 1) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
    i++;
  }

  if (beforeSublist !== null) {
    beforeSublist.next = prev;
  } else {
    head = prev;
  }

  sublistLastNode.next = current;
  return head;
};

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.printList();
reverseSublist(head, 2, 4).printList();
