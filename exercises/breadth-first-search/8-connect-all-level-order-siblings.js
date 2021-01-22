class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
    this.next = null;
  }

  print() {
    let result = 'Linked traversal: ';
    let current = this;
    while (current !== null) {
      result += current.val + ' ';
      current = current.next;
    }
    console.log(result);
  }
}

const connectAllSiblings = (root) => {
  const queue = [root];
  let prev = null;
  while (queue.length > 0) {
    const node = queue.shift();
    if (prev !== null) {
      prev.next = node;
    }
    prev = node;
    if (node.left !== null) queue.push(node.left);
    if (node.right !== null) queue.push(node.right);
  }
  return root;
};

const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
connectAllSiblings(root);
root.print();
