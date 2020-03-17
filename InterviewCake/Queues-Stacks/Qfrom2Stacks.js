/* Implement a queue ↴ with 2 stacks. ↴ Your queue should have an enqueue and a dequeue method and it should be "first in first out" (FIFO)
 */

class Stack {
  constructor() {
    this.stack = [];
  }
  push(item) {
    this.stack.push(item);
  }
  pop() {
    return this.stack.pop();
  }
}

class Queue {
  constructor() {
    this.queue = new Stack();
    this.helper = new Stack();
  }

  enqueue(item) {
    this.queue.push(item);
  }

  dequeue() {
    while (this.queue.stack.length > 1) {
      // push elements into helper
      this.helper.push(this.queue.pop());
    }
    console.log(this.queue.stack);
    const returnElm = this.queue.pop();
    while (this.helper.stack.length) {
      // push elements back into queue
      this.queue.push(this.helper.pop());
    }
    return returnElm;
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.dequeue();
console.log(queue);
