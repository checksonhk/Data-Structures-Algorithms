/*
Write an efficient function that checks whether any permutation of an input string is a palindrome.
*/

// Overall Time complexity of O(2n) & Space complexity of O(n)
function hasPalindromePermutation(string) {
  // time complexity of O(n) space complexity of O(n)
  const seenChars = string.split('').reduce((obj, char) => {
    if (obj[char]) {
      obj[char]++;
    } else {
      obj[char] = 1;
    }
    return obj;
  }, {});

  // if even
  if (string.length % 2) {
    let numberofOddChars = 0;
    // time complexity of O(n)
    for (const char of string) {
      if (seenChars[char] % 2) numberofOddChars++;
    }
    return numberofOddChars > 1 ? false : true;
  } else {
    // time complexity of O(n)
    for (const char of string) {
      // if any characters are odd
      if (seenChars[char] % 2) return false;
    }
    return true;
  }
}

// Better cleaner solution with Set
function hasPalindromePermutation(theString) {
  // Track characters we've seen an odd number of times
  const unpairedCharacters = new Set();

  for (let char of theString) {
    if (unpairedCharacters.has(char)) {
      unpairedCharacters.delete(char);
    } else {
      unpairedCharacters.add(char);
    }
  }

  // The string has a palindrome permutation if it
  // has one or zero characters without a pair
  return unpairedCharacters.size <= 1;
}

console.log(hasPalindromePermutation('civic'));
console.log(hasPalindromePermutation('cviic'));
console.log(hasPalindromePermutation('civil'));
