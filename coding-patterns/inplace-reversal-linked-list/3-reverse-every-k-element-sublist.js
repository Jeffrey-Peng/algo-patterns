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

const reverseEveryKElements = (head, k) => {
  if (k <= 1 || head === null) return head;

  let prev = null;
  let current = head;

  while (true) {
    const prevLast = prev;
    const currentLast = current;
    let i = 0;
    while (current !== null && i < k) {
      let next = current.next;
      current.next = prev;
      prev = current;
      current = next;
      i++;
    }

    if (prevLast !== null) {
      prevLast.next = prev;
    } else {
      head = prev;
    }

    currentLast.next = current;
    if (current === null) {
      break;
    }

    prev = currentLast;
  }

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
head.printList();
reverseEveryKElements(head, 3).printList();
