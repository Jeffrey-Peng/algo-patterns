class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const sumPathNumbers = (root) => {
  const pathSum = (currentNode, currentSum) => {
    if (currentNode === null) return 0;

    currentSum = currentSum * 10 + currentNode.val;

    if (currentNode.left === null && currentNode.right === null) {
      return currentSum;
    }
    return (
      pathSum(currentNode.left, currentSum) +
      pathSum(currentNode.right, currentSum)
    );
  };

  return pathSum(root, 0);
};

const root = new TreeNode(1);
root.left = new TreeNode(0);
root.right = new TreeNode(1);
root.left.left = new TreeNode(1);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(5);
console.log(sumPathNumbers(root));
