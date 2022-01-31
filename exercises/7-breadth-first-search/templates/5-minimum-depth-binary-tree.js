class TreeNode {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

const minDepth = (root) => {
	// your code here
};

const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(minDepth(root));

root.left.left = new TreeNode(9);
root.right.left.left = new TreeNode(11);
console.log(minDepth(root));
