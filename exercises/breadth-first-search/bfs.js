class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// Real BFS implementation needs to deal with more than L/R nodes as well as potential to revisit same node
const bfs = (root, key) => {
  const queue = [root];
  const visited = new Set();
  while (queue.length > 0) {
    const selectedNode = queue.shift();

    if (selectedNode.left !== null) {
      if (selectedNode.left.val === key) {
        return selectedNode.left;
      } else {
        if (!visited.has(selectedNode.left)) queue.push(selectedNode.left);
      }
    }

    if (selectedNode.right !== null) {
      if (selectedNode.right.val === key) {
        return selectedNode.right;
      } else {
        if (!visited.has(selectedNode.right)) queue.push(selectedNode.right);
      }
    }
  }

  return -1;
};

const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
root.left.left.left = new TreeNode(3);
console.log(bfs(root, 9));
