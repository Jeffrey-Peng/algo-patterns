class Node {
	constructor(value, next = null) {
		this.value = value;
		this.next = next;
	}
}

const findCycleStart = (head) => {
	// your code here
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
