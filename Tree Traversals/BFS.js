/* Iterative solution */
const breadthFirstTraverse = (root, array) => {
  // fill code in here
  const queue = [];
  queue.push(root);
  while (queue.length) {
    const node = queue.shift();
    array.push(node.value);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return array;
};

/* Recursive Solution */

const recursiveBFS = function(queue, array) {
  if (!queue.length) return array;
  const node = queue.shift();
  array.push(node.value);
  if (node.left) queue.push(node.left);
  if (node.right) queue.push(node.right);
  return recursiveBFS(queue, array);
};

const tree = {
  value: 'A',
  left: {
    value: 'B',
    left: {
      value: 'D',
      left: {
        value: 'G',
        left: null,
        right: null,
      },
      right: null,
    },
    right: {
      value: 'E',
      left: null,
      right: {
        value: 'H',
        left: {
          value: 'K',
          left: null,
          right: null,
        },
      },
    },
  },
  right: {
    value: 'C',
    left: {
      value: 'F',
      left: {
        value: 'I',
        left: null,
        right: null,
      },
      right: {
        value: 'J',
        left: null,
        right: null,
      },
    },
    right: null,
  },
};

const bfs = [];
breadthFirstTraverse(tree, bfs);
console.log(bfs);
const recurbfs = [];
const queue = [tree];
console.log(recursiveBFS(queue, recurbfs));
