/*
Write a function reverse_words() that takes a message as a list of characters and reverses the order of the words in place. ↴
*/

function reverseWords(string) {
  return string
    .split(' ')
    .reverse()
    .join(' ');
}

const string = 'cake pound steal';
console.log(reverseWords(string));

function reverse_string(string, left, right) {
  while (left < right) {
    const temp = string[left];
    string[left] = string[right];
    string[right] = temp;

    left++;
    right--;
  }
}

function reverse_words(string) {
  // First we reverse all the characters in the entire message
  // This gives us the right word order but with each word backward
  reverse_string(string, 0, string.length - 1);

  // reverse the words back if a ' ' is hit or if its the end of the string
  let currentWordIndex = 0;
  for (let i = 0; i <= string.length; i++) {
    if (i === string.length || string[i] === ' ') {
      reverse_string(string, currentWordIndex, i - 1);
      currentWordIndex = i + 1;
    }
  }
}

const message = ['c', 'a', 'k', 'e', ' ', 'p', 'o', 'u', 'n', 'd', ' ', 's', 't', 'e', 'a', 'l'];
reverse_words(message);
console.log(message.join(''));
