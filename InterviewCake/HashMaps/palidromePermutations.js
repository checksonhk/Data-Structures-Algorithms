/*
Write an efficient function that checks whether any permutation of an input string is a palindrome.
*/

function palindromePermutations(string) {
  const seenChars = string.split('').reduce((obj, char) => {
    if (obj[char]) {
      obj[char]++;
    } else {
      obj[char] = 1;
    }
  }, {});
  // if even
  if (string.length % 2) {
    for (const char of string) {
      // if any characters are odd
      if (!(obj[char] % 2)) return false;
    }
    return true;
  } else {
    const numberofOddChars = 0;
    for (const char of string) {
      if (obj[char] % 2) numberofOddChars++;
    }
    return numberofOddChars > 1 ? false : true;
  }
}

console.log(palindromePermutations('civic'));
console.log(palindromePermutations('cviic'));
