class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const traverse = (root) => {
  let result = [];

  const queue = [root];
  while (queue.length > 0) {
    const levelSize = queue.length;
    const level = [];
    for (let i = 0; i < levelSize; i++) {
      const selectedNode = queue.shift();
      if (selectedNode.left !== null) queue.push(selectedNode.left);
      if (selectedNode.right !== null) queue.push(selectedNode.right);
      level.push(selectedNode.value);
    }
    result.push(level);
  }

  return result;
};

const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(traverse(root));
