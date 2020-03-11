/*
Write a function to find the 2nd largest element in a binary search tree. ↴
*/

// time O(n) space O(2n)
function find2ndLargest(root) {
  if (!root || !root.left || !root.right) throw Error;
  const nodes = [];
  inOrderTraversal(root, nodes);
  return nodes[nodes.length - 2];
}

function inOrderTraversal(node, array) {
  if (!node) return;
  inOrderTraversal(node.left, array);
  array.push(node.value);
  inOrderTraversal(node.right, array);
}

function findLargest(root) {
  if (!root) throw Error;
  if (root.right) return find2ndLargest(root.right);
  return root.value;
}

//  It'll take O(h) time (where h is the height of the tree) and O(h) space.
function find2ndLargest(root) {
  if (!root || !root.left || !root.right) throw Error;

  // Case: we're currently at largest, and largest has a left subtree,
  // so 2nd largest is largest in said subtree
  if (root.left && !root.right) {
    return findLargest(root.left);
  }

  // Case: we're at parent of largest, and largest has no left subtree,
  // so 2nd largest must be current node
  if (root.right && !root.right.left && !root.right.right) return root.value;

  return find2ndLargest(root.right);
}

/*
we can reduce the space complexity to O(1) by using bfs

We're doing one walk down our BST, which means O(h) time, where hh is the height of the tree (again, that's O(log(n)) if the tree is balanced, O(n)otherwise). O(1) space.
*/

function findSecondLargest(rootNode) {
  if (!rootNode || (!rootNode.left && !rootNode.right)) {
    throw new Error('Tree must have at least 2 nodes');
  }

  let current = rootNode;

  while (current) {
    // Case: current is largest and has a left subtree
    // 2nd largest is the largest in that subtree
    if (current.left && !current.right) {
      return findLargest(current.left);
    }

    // Case: current is parent of largest, and largest has no children,
    // so current is 2nd largest
    if (current.right && !current.right.left && !current.right.right) {
      return current.value;
    }

    current = current.right;
  }
}
