class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const findMaxPathSum = (root) => {
  let maxSum = -Infinity;

  const findSum = (currentNode) => {
    if (currentNode === null) return 0;

    const leftSum = Math.max(0, findSum(currentNode.left));
    const rightSum = Math.max(0, findSum(currentNode.right));

    const diameterSum = leftSum + rightSum + currentNode.val;

    maxSum = Math.max(diameterSum, maxSum);

    return Math.max(leftSum, rightSum) + currentNode.val;
  };

  findSum(root);
  return maxSum;
};

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
console.log(findMaxPathSum(root));

root.left.left = new TreeNode(1);
root.left.right = new TreeNode(3);
root.right.left = new TreeNode(5);
root.right.right = new TreeNode(6);
root.right.left.left = new TreeNode(7);
root.right.left.right = new TreeNode(8);
root.right.right.left = new TreeNode(9);
console.log(findMaxPathSum(root));

root = new TreeNode(-1);
root.left = new TreeNode(-3);
console.log(findMaxPathSum(root));
