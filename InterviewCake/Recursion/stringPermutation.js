/*
Write a recursive function for generating all permutations of an input string. Return them as a set.
*/

function generatePermutations(string) {
  const permutations = new Set();
  _generatePermutations('', string, permutations);
  return permutations;
}

function _generatePermutations(substring, string, permutations) {
  if (string.length === 0) {
    return permutations.add(substring);
  }
  for (let i = 0; i < string.length; i++) {
    let newString = string.substring(0, i) + string.substring(i + 1);
    _generatePermutations(substring + string[i], newString, permutations);
  }
}

console.log(generatePermutations('cats'));
// console.log(getPermutations('cats'));
