class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const countTrees = (n) => {
  return helper(n, {});
};
const helper = (n, map) => {
  if (n in map) {
    return map[n];
  }
  if (n <= 1) {
    return 1;
  }
  let count = 0;
  for (let i = 1; i < n + 1; i++) {
    const left = helper(i - 1, map);
    const right = helper(n - i, map);
    count += left * right;
  }
  map[n] = count;
  return count;
};

console.log(countTrees(2));
console.log(countTrees(3));
