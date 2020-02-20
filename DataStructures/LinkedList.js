class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  length() {
    return this.length;
  }

  push(value) {
    if (!this.head) {
      return (this.head = new Node(value));
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = new Node(value);
    this.length++;
  }

  pop() {
    if (!this.head) {
      return 'List is empty';
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    let temp = current;
    delete current;
    this.length--;
    return current;
  }

  get(index) {
    let currentIdx = 0;
    let current = this.head;
    while (current <= index) {
      current = current.next;
      currentIdx++;
    }
    return current;
  }

  delete(index) {
    let currentIdx = 0;
    let current = this.head;
    while (current <= index) {
      current = current.next;
      currentIdx++;
    }
    return current;
  }
}
