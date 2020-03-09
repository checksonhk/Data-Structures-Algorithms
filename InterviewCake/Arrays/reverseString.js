/*
Write a function that takes a list of characters and reverses the letters in place
*/

function reverseString(string) {
  return string
    .split('')
    .reverse()
    .join('');
}

const string = 'happy';
console.log(reverseString(string));

function reverse_string(string) {
  let left = 0;
  let right = string.length - 1;

  while (left < right) {
    const temp = string[left];
    string[left] = string[right];
    string[right] = temp;

    left++;
    right--;
  }
}
