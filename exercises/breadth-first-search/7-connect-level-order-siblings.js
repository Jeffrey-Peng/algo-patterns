class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
    this.next = null;
  }

  print() {
    console.log('Level order traversal: ');
    let nextLevelRoot = this;
    while (nextLevelRoot !== null) {
      let current = nextLevelRoot;
      nextLevelRoot = null;
      let print = '';
      while (current !== null) {
        print += current.val + ' ';
        if (nextLevelRoot === null) {
          if (current.left !== null) {
            nextLevelRoot = current.left;
          } else if (current.right !== null) {
            nextLevelRoot = current.right;
          }
        }
        current = current.next;
      }
      console.log(print);
    }
  }
}

const connectLevelOrderSiblings = (root) => {
  const queue = [root];

  while (queue.length > 0) {
    const levelSize = queue.length;
    let prev = null;
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      if (prev !== null) {
        prev.next = node;
      }
      prev = node;
      if (node.left !== null) queue.push(node.left);
      if (node.right !== null) queue.push(node.right);
    }
  }

  return root;
};

const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
connectLevelOrderSiblings(root);
root.print();
