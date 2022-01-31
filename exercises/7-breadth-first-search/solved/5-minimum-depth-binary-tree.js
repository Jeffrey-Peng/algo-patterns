class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const minDepth = (root) => {
  const queue = [root];
  let level = 0;
  while (queue.length > 0) {
    const levelSize = queue.length;
    level++;
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      if (node.left === null && node.right === null) {
        return level;
      }
      if (node.left !== null) queue.push(node.left);
      if (node.right !== null) queue.push(node.right);
    }
  }
  return -1;
};

const maxDepth = (root) => {
  const queue = [root];
  let level = 0;
  while (queue.length > 0) {
    level++;
    const levelSize = queue.length;
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      if (node.left !== null) queue.push(node.left);
      if (node.right !== null) queue.push(node.right);
    }
  }

  return level;
};

const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(minDepth(root));
console.log(maxDepth(root));

root.left.left = new TreeNode(9);
root.right.left.left = new TreeNode(11);
console.log(minDepth(root));
console.log(maxDepth(root));
