class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  add(value) {
    if (!this.root) {
      this.root = new Node(value);
      return;
    }
    let current = this.root;
    while (current) {
      if (current.value > value) {
        // go left
        if (current.left) {
          current = current.left;
        } else {
          current.left = new Node(value);
          return;
        }
      } else {
        // go right
        if (current.right) {
          current = current.right;
        } else {
          current.right = new Node(value);
          return;
        }
      }
    }
  }

  _toObject() {
    return this.root;
  }
}
