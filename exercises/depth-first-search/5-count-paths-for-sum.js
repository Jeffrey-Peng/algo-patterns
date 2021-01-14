class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const countPaths = (root, sum) => {
  let pathCount = 0;
  let paths = [];

  const checkPath = (currentNode, targetSum, currentPath) => {
    if (currentNode === null) return 0;

    currentPath.push(currentNode.val);
    targetSum -= currentNode.val;
    if (targetSum === 0) {
      pathCount++;
      paths.push([...currentPath]);
    }

    checkPath(currentNode.left, targetSum, currentPath);
    checkPath(currentNode.right, targetSum, currentPath);

    let currentPathCopy = [...currentPath];

    while (currentPathCopy.length > 1) {
      targetSum += currentPathCopy.shift();
      if (targetSum === 0) {
        pathCount++;
        paths.push([...currentPathCopy]);
      }
    }

    currentPath.pop();
  };

  checkPath(root, sum, []);
  return [pathCount, paths];
};

// Time: worst O(N^2) for skewed tree, best O(NlogN) for balanced tree
// Space: O(N)

const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(4);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(countPaths(root, 11));
