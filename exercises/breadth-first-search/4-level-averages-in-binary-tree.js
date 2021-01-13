class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const levelAverage = (root) => {
  const result = [];
  const queue = [root];

  while (queue.length > 0) {
    const levelSize = queue.length;
    let levelSum = 0;
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      levelSum += node.value;
      if (node.left !== null) queue.push(node.left);
      if (node.right !== null) queue.push(node.right);
    }
    result.push(levelSum / levelSize);
  }

  return result;
};

const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.left.right = new TreeNode(2);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(levelAverage(root));
