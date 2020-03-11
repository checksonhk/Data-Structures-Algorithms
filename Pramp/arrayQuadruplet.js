/*
Given an unsorted array of integers arr and a number s, write a function findArrayQuadruplet that finds four numbers (quadruplet) in arr that sum up to s. Your function should return an array of these numbers in an ascending order. If such a quadruplet doesn’t exist, return an empty array.

Note that there may be more than one quadruplet in arr whose sum is s. You’re asked to return the first one you encounter (considering the results are sorted).

Explain and code the most efficient solution possible, and analyze its time and space complexities.

input:  arr = [2, 7, 4, 0, 9, 5, 1, 3], s = 20

output: [0, 4, 7, 9] 
# The ordered quadruplet of (7, 4, 0, 9)
# whose sum is 20. Notice that there
# are two other quadruplets whose sum is 20:
# (7, 9, 1, 3) and (2, 4, 9, 5), but again you’re
# asked to return the just one quadruplet (in an
# ascending order)
*/

// First Attempt Brute Force
function findArrayQuadruplet1(arr, s) {
  for (let i = 0; i < arr.length - 2; i++) {
    let quadruplet = [arr[i]];
    // let remaining = s - arr[i];
    for (let j = i + 1; j < i + 4; j++) {
      quadruplet.push(arr[j]);
      // remaining = s - arr[j];
    }
    if (sumsTo(quadruplet, s)) {
      return quadruplet.sort((a, b) => a > b);
    }
  }
  return [];
}

function sumsTo(arr, s) {
  return arr.reduce((a, b) => a + b) == s;
}

// Overall time complexity of algorithm is O(n^2)
// space complexity of O(1) ( if you disregard the O(n) from merge sort)
function findArrayQuadruplet(arr, s) {
  const n = arr.length;
  if (n < 4) return [];

  // if array is exactly 4 elements just check if they add up to s
  if (n === 4) {
    return arr.reduce((a, b) => a + b) === s ? arr : [];
  }

  // uses .sort() uses merge sort implementation
  // time complexity is O(n log(n)) space is O(n)
  arr.sort((a, b) => a > b);

  // manually check first two pairs

  // nested loop here is O(n^2)
  for (let i = 0; i < n - 4; i++) {
    for (let j = i + 1; j < n - 3; j++) {
      // calculate remaining value from the from the first two pairs
      const remaining = s - (arr[i] + arr[j]);
      let low = j + 1;
      let high = n - 1;
      // console.log(remaining, low, high);

      // puesdo binary search
      while (low < high) {
        if (arr[low] + arr[high] < remaining) {
          low++;
        } else if (arr[low] + arr[high] > remaining) {
          high--;
        } else {
          return [arr[i], arr[j], arr[low], arr[high]];
        }
      }
    }
  }
  return [];
}

// console.log(findArrayQuadruplet([2, 7, 4, 0, 9, 5, 1, 3], 20));
console.log(findArrayQuadruplet([4, 4, 4, 4], 16));
