class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const findUniqueTrees = (n) => {
  return helper(1, n);
};

const helper = (start, end) => {
  const result = [];

  if (start > end) {
    result.push(null);
    return result;
  }

  for (let i = start; i < end + 1; i++) {
    const leftSubtrees = helper(start, i - 1);
    const rightSubtrees = helper(i + 1, end);
    for (let p = 0; p < leftSubtrees.length; p++) {
      for (let q = 0; q < rightSubtrees.length; q++) {
        const root = new TreeNode(i, leftSubtrees[p], rightSubtrees[q]);
        result.push(root);
      }
    }
  }

  return result;
};

console.log(findUniqueTrees(2));
console.log(findUniqueTrees(3));
