class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insertLeft(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
  }

  insertRight(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
  }
}

// is BST if left < current & current < right
// O(n) time and O(n)O(n) space.
function isBinarySearchTree(treeRoot) {
  // Start at the root, with an arbitrarily low lower bound
  // and an arbitrarily high upper bound
  const nodeAndBoundsStack = [];
  nodeAndBoundsStack.push({
    node: treeRoot,
    lowerBound: Number.NEGATIVE_INFINITY,
    upperBound: Number.POSITIVE_INFINITY,
  });

  // Depth-first traversal
  while (nodeAndBoundsStack.length) {
    const { node, lowerBound, upperBound } = nodeAndBoundsStack.pop();

    // If this node is invalid, we return false right away
    if (node.value <= lowerBound || node.value >= upperBound) {
      return false;
    }

    if (node.left) {
      // This node must be less than the current node
      nodeAndBoundsStack.push({
        node: node.left,
        lowerBound,
        upperBound: node.value,
      });
    }

    if (node.right) {
      // This node must be greater than the current node
      nodeAndBoundsStack.push({
        node: node.right,
        lowerBound: node.value,
        upperBound,
      });
    }
  }

  // If none of the nodes were invalid, return true
  // (At this point we have checked all nodes)
  return true;
}

// recursive solution
// O(n) time and O(n)O(n) space.
function isBinarySearchTree(treeRoot, lowerBound = Number.NEGATIVE_INFINITY, upperBound = Number.POSITIVE_INFINITY) {
  if (!treeRoot) return true;

  if (treeRoot.value >= upperBound || treeRoot.value <= lowerBound) {
    return false;
  }

  return isBinarySearchTree(treeRoot.left, lowerBound, treeRoot.value) && isBinarySearchTree(treeRoot.right, treeRoot.value, upperBound);
}
