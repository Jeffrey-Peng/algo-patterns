class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const findMaxSumPath = (root) => {
  let maxSum = 0;
  let maxSumPath = [];

  const updateMaxSum = (currentNode, sum, path) => {
    if (currentNode === null) return;

    path.push(currentNode.val);
    sum += currentNode.val;

    if (
      sum > maxSum &&
      currentNode.left === null &&
      currentNode.right === null
    ) {
      maxSum = sum;
      maxSumPath = [...path];
    }

    updateMaxSum(currentNode.left, sum, path);
    updateMaxSum(currentNode.right, sum, path);
    path.pop();
    sum -= currentNode.val;
  };

  updateMaxSum(root, 0, []);
  return maxSumPath;
};

const findMaxSumPath2 = (root) => {
  const updateMaxSum = (currentNode, sum, path, maxSum, maxSumPath) => {
    if (currentNode === null) return [maxSum, maxSumPath];

    path.push(currentNode.val);
    sum += currentNode.val;

    if (
      sum > maxSum &&
      currentNode.left === null &&
      currentNode.right === null
    ) {
      maxSum = sum;
      maxSumPath = [...path];
    }

    [maxSum, maxSumPath] = updateMaxSum(
      currentNode.left,
      sum,
      path,
      maxSum,
      maxSumPath
    );
    [maxSum, maxSumPath] = updateMaxSum(
      currentNode.right,
      sum,
      path,
      maxSum,
      maxSumPath
    );
    path.pop();

    return [maxSum, maxSumPath];
  };

  return updateMaxSum(root, 0, [], 0, [])[1];
};

const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(4);
root.right.left = new TreeNode(11);
root.right.right = new TreeNode(9);
console.log(findMaxSumPath2(root));
