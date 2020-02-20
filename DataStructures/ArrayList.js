class ArrayList {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  push(value) {
    this.data[this.length] = value;
    this.length++;
  }

  pop() {
    return this.delete(this.length - 1);
  }

  get(index) {
    return this.data[index];
  }

  delete(index) {
    const deleted = this.data[index];
    delete this.data[index];
    this._collapseTo(index);
    return deleted;
  }

  _collapseTo(index) {
    for (let i = index; i < this.length; i++) {
      if (this.data[i + 1]) {
        this.data[i] = this.data[i + 1];
      }
    }
    this.length--;
  }
}
