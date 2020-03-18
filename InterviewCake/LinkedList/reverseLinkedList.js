/*
Write a function for reversing a linked list. Do it in place.
*/

class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function reverseLinkedList(headOfList) {
  let currentNode = headOfList;
  let previousNode = null;
  let nextNode = null;

  // Until we have 'fallen off' the end of the list
  while (currentNode) {
    // Copy a pointer to the next element
    // before we overwrite currentNode.next
    nextNode = currentNode.next;

    // Reverse the 'next' pointer
    currentNode.next = previousNode;

    // Step forward in the list
    previousNode = currentNode;
    currentNode = nextNode;
  }

  return previousNode;
}

const a = new LinkedListNode('a');
const b = new LinkedListNode('b');
const c = new LinkedListNode('c');
const d = new LinkedListNode('d');
const e = new LinkedListNode('e');

a.next = b;
b.next = c;
c.next = d;
d.next = e;

console.log(a);
reverseLinkedList(a);
console.log(a);

// 2 -> 3 -> 4 -> 5
// 3-> 2 -> 4 -> 5
// 4 -> 3 -> 2 -> 5
// 5 -> 4 -> 3 -> 2

// first next element after head, push to head
// repeat
