class TreeNode {
	constructor(val) {
		this.val = val;
		this.left = null;
		this.right = null;
		this.next = null;
	}

	print() {
		let result = "Linked traversal: ";
		let current = this;
		while (current !== null) {
			result += current.val + " ";
			current = current.next;
		}
		console.log(result);
	}
}

const connectAllSiblings = (root) => {
	// your code here
};

const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
connectAllSiblings(root);
root.print();
