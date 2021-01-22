class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const findDiameter = (root) => {
  let maxDiameter = 0;

  const findHeight = (currentNode) => {
    if (currentNode === null) return 0;

    const leftHeight = findHeight(currentNode.left);
    const rightHeight = findHeight(currentNode.right);

    const diameter = leftHeight + rightHeight + 1;

    maxDiameter = Math.max(maxDiameter, diameter);

    return Math.max(leftHeight, rightHeight) + 1;
  };

  findHeight(root);
  return maxDiameter;
};

// Time: O(N)
// Space: O(N)

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.right.left = new TreeNode(5);
root.right.right = new TreeNode(6);
console.log(findDiameter(root));

root.left.left = null;
root.right.left.left = new TreeNode(7);
root.right.left.right = new TreeNode(8);
root.right.right.left = new TreeNode(9);
root.right.left.right.left = new TreeNode(10);
root.right.right.left.left = new TreeNode(11);
console.log(findDiameter(root));
