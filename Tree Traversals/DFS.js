const preorderTraverse = (node, array) => {
  // fill this out
  array.push(node.value);
  if (node.left) {
    preorderTraverse(node.left, array);
  }
  if (node.right) {
    preorderTraverse(node.right, array);
  }
};

const inorderTraverse = (node, array) => {
  // fill this out
  if (node.left) {
    inorderTraverse(node.left, array);
  }
  array.push(node.value);
  if (node.right) {
    inorderTraverse(node.right, array);
  }
};

const postorderTraverse = (node, array) => {
  // fill this out
  if (node.left) {
    postorderTraverse(node.left, array);
  }
  if (node.right) {
    postorderTraverse(node.right, array);
  }
  array.push(node.value);
};

const tree = {
  value: 8,
  left: {
    value: 4,
    left: {
      value: 3,
      left: {
        value: 2,
        left: null,
        right: null,
      },
      right: null,
    },
    right: {
      value: 5,
      left: null,
      right: {
        value: 7,
        left: {
          value: 6,
          left: null,
          right: null,
        },
      },
    },
  },
  right: {
    value: 12,
    left: {
      value: 10,
      left: {
        value: 9,
        left: null,
        right: null,
      },
      right: {
        value: 11,
        left: null,
        right: null,
      },
    },
  },
};

const pre = [];
const inorder = [];
const post = [];
preorderTraverse(tree, pre);
inorderTraverse(tree, inorder);
postorderTraverse(tree, post);
console.log('PRE', pre);
console.log('InOrder', inorder);
console.log('Post', post);
