/*
Given an array arr of distinct integers and a nonnegative integer k, write a function findPairsWithGivenDifference that returns an array of all pairs [x,y] in arr, such that x - y = k. If no such pairs exist, return an empty array.
*/

function findPairsWithGivenDifference(arr, k) {
  // your code goes here
  if (k === 0) return [];
  // {0:0,-1:-1...}

  const values = arr.reduce((obj, x) => {
    obj[x - k] = x;
    return obj;
  }, {});

  const pairs = arr.reduce((arr, y) => {
    if (y in values) {
      arr.push([values[y], y]);
    }
    return arr;
  }, []);

  return pairs;
}
