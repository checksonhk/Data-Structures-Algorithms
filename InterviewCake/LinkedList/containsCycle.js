/*
You have a singly-linked list and want to check if it contains a cycle.
*/

class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function containsCycle1(startNode) {
  const seenNodes = {};

  let currentNode = startNode;
  while (currentNode.next) {
    if (seenNodes[currentNode.next.value]) return true;
    seenNodes[currentNode.value] = true;
    currentNode = currentNode.next;
  }
  return false;
}

function containsCycle(startNode) {
  let pointer1 = startNode;
  let pointer2 = startNode;
  while (pointer1.next && pointer2.next && pointer2.next.next) {
    if (pointer1.next === pointer2.next.next) {
      return true;
    }
    pointer1 = pointer1.next;
    pointer2 = pointer2.next.next;
  }
  return false;
}

const a = new LinkedListNode('a');
const b = new LinkedListNode('b');
const c = new LinkedListNode('c');
const d = new LinkedListNode('d');
const e = new LinkedListNode('e');

a.next = b;
b.next = c;
c.next = a;
d.next = e;

console.log(containsCycle(a));
