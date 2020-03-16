/*
A message containing letters from A-Z is being encoded to numbers using the following mapping:

'A' -> 1
'B' -> 2
...
'Z' -> 26
Given a non-empty string containing only digits, determine the total number of ways to decode it.
*/

function decodeWays(string) {
  const dp = Array(string.length).fill(-1);
  return waysToDecode(string, 0, dp);
}

function waysToDecode(string, decodePointer, dp) {
  if (decodePointer >= string.length) {
    // '' is a valid decomposition
    return 1;
  }
  if (dp[decodePointer] > -1) {
    return dp[decodePointer];
  }

  let totalDecompositions = 0;

  for (let i = 1; i <= 2; i++) {
    if (decodePointer + i <= string.length) {
      const snippet = string.substring(decodePointer, decodePointer + i);
      if (validCode(snippet)) {
        totalDecompositions += waysToDecode(string, decodePointer + i, dp);
      }
    }
  }
  dp[decodePointer] = totalDecompositions;
  return dp[decodePointer];
}

function validCode(string) {
  if (!string.length || string.charAt(0) == '0') {
    return false;
  }
  return +string >= 1 && +string <= 26;
}

console.log(decodeWays('2263'));
