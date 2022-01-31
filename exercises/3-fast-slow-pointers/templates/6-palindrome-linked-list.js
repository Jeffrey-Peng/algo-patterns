class Node {
	constructor(value, next = null) {
		this.value = value;
		this.next = next;
	}
}

const isPalindromicLinkedList = (head) => {
	// your code here
};

const head = new Node(2);
head.next = new Node(4);
head.next.next = new Node(6);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(2);
console.log(isPalindromicLinkedList(head));

head.next.next.next.next.next = new Node(2);
console.log(isPalindromicLinkedList(head));
