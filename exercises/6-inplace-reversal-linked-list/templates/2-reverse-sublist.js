class Node {
	constructor(value, next = null) {
		this.value = value;
		this.next = next;
	}

	printList() {
		let result = "";
		let temp = this;

		while (temp !== null) {
			result += `value:${temp.value} next:${temp.next} `;
			temp = temp.next;
		}
		console.log(result);
	}
}

const reverseSublist = (head, p, q) => {
	// your code here
};

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.printList();
reverseSublist(head, 2, 4).printList();
