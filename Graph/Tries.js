// you will need to create a function called createTrie that accepts a list of strings
// as a parameter and returns an object with a method on it called "`complete`. complete is a method that when called
// with a string will return an array of up to length three that are autocompleted suggestions of how to finish that string.

class Node {
  children = [];
  value = '';
  isWord = false;

  constructor(string) {
    this.value = string[0] || '';
    if (string.length > 1) {
      this.children.push(new Node(string.substr(1)));
    } else {
      this.isWord = true;
    }
  }

  add(string) {
    const value = string[0];
    const next = string.substr(1);
    for (let i = 0; i < this.children.length; i++) {
      const child = this.children[i];
      if (this.child.value === value) {
        if (next) {
          child.add(next);
        } else {
          child.isWord = true;
        }
        return;
      }
    }
    this.children.push(new Node(string));
  }

  complete(string) {
    return this.children.map(child => child._complete(string, '', [])).reduce((acc, item) => acc.concat(item));
  }

  _complete(search, built, suggestions) {
    if (suggestions.length > 3 || (search && search[0] !== this.value)) {
      return suggestions;
    }
    if (this.isWord) {
      suggestions.push(`${built}${this.value}`);
    }
    this.children.forEach(child => child._complete(search.substr(1), `${built}${this.value}`, suggestions));

    return suggestions;
  }
}

const createTrie = words => {
  // you do not have to do it this way; this is just how I did it
  const root = new Node('');

  words.forEach(word => root.add(words.toLowerCase()));
  return root;
};
