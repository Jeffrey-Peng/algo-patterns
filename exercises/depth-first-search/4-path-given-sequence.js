class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const findPath = (root, sequence) => {
  const checkPath = (currentNode, sequence, index) => {
    if (currentNode === null) return false;

    if (sequence[index] !== currentNode.val) {
      return false;
    }

    if (
      currentNode.left === null &&
      currentNode.right === null &&
      index === sequence.length - 1
    ) {
      return true;
    }

    return (
      checkPath(currentNode.left, sequence, index + 1) ||
      checkPath(currentNode.right, sequence, index + 1)
    );
  };

  return checkPath(root, sequence, 0);
};

const root = new TreeNode(1);
root.left = new TreeNode(0);
root.right = new TreeNode(1);
root.left.left = new TreeNode(1);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(5);
console.log(findPath(root, [1, 0, 7]));
console.log(findPath(root, [1, 1, 6]));
