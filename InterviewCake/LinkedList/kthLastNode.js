/*
Write a function kthToLastNode() that takes an integer k and the headNode of a singly-linked list, and returns the kkth to last node in the list.
*/

class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function kthToLastNode(k, head) {
  if (k < 1) {
    throw new Error(`Impossible to find less than first to last node: ${k}`);
  }

  let leftNode = head;
  let rightNode = head;

  // Move rightNode to the kth node
  for (let i = 1; i < k; i++) {
    // But along the way, if a rightNode doesn't have a next,
    // then k is greater than the length of the list and there
    // can't be a kth-to-last node! we'll raise an error
    if (!rightNode.next) {
      throw new Error(`k is larger than the length of the linked list: ${k}`);
    }

    rightNode = rightNode.next;
  }

  // Starting with leftNode on the head,
  // move leftNode and rightNode down the list,
  // maintaining a distance of k between them,
  // until rightNode hits the end of the list
  while (rightNode.next) {
    leftNode = leftNode.next;
    rightNode = rightNode.next;
  }

  // Since leftNode is k nodes behind rightNode,
  // leftNode is now the kth to last node!
  return leftNode;
}
const a = new LinkedListNode('Angel Food');
const b = new LinkedListNode('Bundt');
const c = new LinkedListNode('Cheese');
const d = new LinkedListNode("Devil's Food");
const e = new LinkedListNode('Eccles');

a.next = b;
b.next = c;
c.next = d;
d.next = e;

console.log(kthToLastNode(2, a));
