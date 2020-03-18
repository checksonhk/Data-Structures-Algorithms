/* 
You're working with an intern that keeps coming to you with JavaScript code that won't run because the braces, brackets, and parentheses are off. To save you both some time, you decide to write a braces/brackets/parentheses validator.
*/

function validParenthesis(string) {
  const seenOpeners = [];
  for (const letter of string) {
    if (letter === '{') seenOpeners.push('}');
    if (letter === '[') seenOpeners.push(']');
    if (letter === '(') seenOpeners.push(')');
    if (letter === '}') {
      if (seenOpeners.pop() !== letter) return false;
    }
    if (letter === ']') {
      if (seenOpeners.pop() !== letter) return false;
    }
    if (letter === ')') {
      if (seenOpeners.pop() !== letter) return false;
    }
  }
  return true;
}

const test1 = '{ [ ] ( ) }'; //true
const test2 = '{ [ ( ] ) }'; //false
const test3 = '{[}'; //false

console.log(validParenthesis(test1));
console.log(validParenthesis(test2));
console.log(validParenthesis(test3));
