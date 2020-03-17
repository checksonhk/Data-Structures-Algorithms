/*
"Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing."

Write a function that, given a sentence like the one above, along with the position of an opening parenthesis, finds the corresponding closing parenthesis.

if the example string above is input with the number 10 (position of the first parenthesis), the output should be 79 (position of the last parenthesis).
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

const string = 'Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing.';

function getClosingParens(string, parenthesisIdx) {
  // const parenthesis = new Stack();
  let numberofParenthesisBefore = 0;
  for (let i = 0; i < parenthesisIdx; i++) {
    if (string[i] === '(') {
      numberofParenthesisBefore += 1;
    }
  }
  console.log(numberofParenthesisBefore);
  let noOfSeenParenthesis = 0;
  for (let i = string.length; i >= 0; i--) {
    if (string[i] === ')') {
      if (noOfSeenParenthesis === numberofParenthesisBefore) {
        return i;
      }
      noOfSeenParenthesis += 1;
    }
  }
}

// ideal solution
function getClosingParen(sentence, openingParenIndex) {
  let openNestedParens = 0;

  for (let position = openingParenIndex + 1; position < sentence.length; position++) {
    const char = sentence[position];

    if (char === '(') {
      openNestedParens += 1;
    } else if (char === ')') {
      if (openNestedParens === 0) {
        return position;
      }
      openNestedParens -= 1;
    }
  }

  throw new Error('No closing parenthesis :(');
}
console.log(getClosingParens(string, 28));
