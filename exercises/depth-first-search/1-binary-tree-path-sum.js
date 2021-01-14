class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const hasPath = (root, sum) => {
  if (root === null) return false;

  if (root.val === sum && root.left === null && root.right === null) {
    return true;
  }

  return (
    hasPath(root.left, sum - root.val) || hasPath(root.right, sum - root.val)
  );
};

// Time: O(n)
// Space: O(n) for recursion stack

const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(hasPath(root, 23));
console.log(hasPath(root, 16));
