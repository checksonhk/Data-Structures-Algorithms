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

/* 
the idea here is to use an array to store the possible ways to decode a substring
eg decode(2263) = 2 + 22 + decode(63)
we can use the index of the string
eg for '2263' [-1,-1,-1,-1]
eg for '2' and '22' [1,1]
*/

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

// another solution which is easier to understand

// idx here is the number of character its checking up to eg. how long the substring will be
function numWays(string, idx, dp) {
  if (idx === 0) return 1;
  const startingIdx = string.length - idx;
  if (string[startingIdx] == 0) return 0;

  if (dp[idx] > -1) return dp[idx];

  let result = numWays(string, idx - 1, dp);

  if (idx >= 2) console.log(validCode(string[idx - 2]));

  if (idx >= 2 && validCode(string[idx - 2])) {
    result += numWays(string, idx - 2, dp);
  }
  dp[idx] = result;
  return result;
}

function decodeWays(string) {
  const dp = Array(string.length + 1).fill(-1);
  return numWays(string, string.length, dp);
}

console.log(decodeWays('2263'));
