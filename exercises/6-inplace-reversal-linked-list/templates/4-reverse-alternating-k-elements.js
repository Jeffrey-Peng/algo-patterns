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

const reverseAlternatingKElements = (head, k) => {
	// your code here
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
reverseAlternatingKElements(head, 2).printList();
