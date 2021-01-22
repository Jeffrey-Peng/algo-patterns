class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const countPaths = (root, sum) => {
  let allPaths = [];
  findPaths(root, sum, new Array(), allPaths);
  return allPaths;
};

const findPaths = (currentNode, sum, currentPath, allPaths) => {
  if (currentNode === null) return;

  currentPath.push(currentNode.val);

  if (
    currentNode.val === sum &&
    currentNode.left === null &&
    currentNode.right === null
  ) {
    allPaths.push([...currentPath]);
  } else {
    findPaths(currentNode.left, sum - currentNode.val, currentPath, allPaths);
    findPaths(currentNode.right, sum - currentNode.val, currentPath, allPaths);
  }

  currentPath.pop();
};

// Time: O(NlogN)
// Space: O(NlogN)

const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(4);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(countPaths(root, 23));
