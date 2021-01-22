class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const findSuccessor = (root, key) => {
  const queue = [root];
  while (queue.length > 0) {
    const node = queue.shift();
    if (node.left !== null) queue.push(node.left);
    if (node.right !== null) queue.push(node.right);
    if (node.value === key) break;
  }

  if (queue.length > 0) return queue[0].value;
  return null;
};

const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(findSuccessor(root, 12));
console.log(findSuccessor(root, 9));
