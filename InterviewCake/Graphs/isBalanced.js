/*
Write a function to see if a binary tree ↴ is "superbalanced" (a new tree property we just made up).
A tree is "superbalanced" if the difference between the depths of any two leaf nodes ↴ is no greater than one.
*/

import { maxHeaderSize } from 'http';

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

function isBalanced(treeRoot) {
  // A tree with no nodes is superbalanced, since there are no leaves!
  if (!treeRoot) {
    return true;
  }

  const depths = []; // We short-circuit as soon as we find more than 2

  // Nodes will store pairs of a node and the node's depth
  const nodes = [];
  nodes.push([treeRoot, 0]);

  while (nodes.length) {
    // Pop a node and its depth from the top of our stack
    const nodePair = nodes.pop();
    const node = nodePair[0];
    const depth = nodePair[1];

    if (!node.left && !node.right) {
      // Сase: we found a leaf
      // We only care if it's a new depth
      if (depths.indexOf(depth) < 0) {
        depths.push(depth);

        // Two ways we might now have an unbalanced tree:
        //   1) More than 2 different leaf depths
        //   2) 2 leaf depths that are more than 1 apart
        if (depths.length > 2 || (depths.length === 2 && Math.abs(depths[0] - depths[1]) > 1)) {
          return false;
        }
      }
    } else {
      // Case: this isn't a leaf - keep stepping down
      if (node.left) {
        nodes.push([node.left, depth + 1]);
      }
      if (node.right) {
        nodes.push([node.right, depth + 1]);
      }
    }
  }

  return true;
}

// recursive solution

function getHeight(root) {
  if (!root) return 0;
  return 1 + Math.max(getHeight(root.left), getHeight(root.right));
}

function isBalanced(root) {
  if (!root) return true;
  return isBalanced(root.right) && isBalanced(root.left) && Math.abs(getHeight(root.left) - getHeight(root.right)) <= 1;
}

// better recursive solution

function isBalancedHelper(root) {
  if (!root) return 0;
  const leftHeight = isBalancedHelper(root.left);
  // if left height is not balanced, then this cant be balanced
  if (leftHeight === -1) return -1;

  const rightHeight = isBalancedHelper(root.right);
  if (rightHeight === -1) return -1;

  // if difference between left and right is greater than 1, tree is not balanced
  if (Math.abs(leftHeight - rightHeight) > 1) return -1;

  // this is balanced, return its height
  return Math.max(leftHeight, rightHeight);
}

function isBalanced(root) {
  return isBalancedHelper(root) > -1;
}
