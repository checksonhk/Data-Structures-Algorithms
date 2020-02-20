/* given two sorted arrays, find the median of the two sorted arrays */

function merge(arr1, arr2) {
  const results = [];
  while (arr1.length && arr2) {
    if (arr1[0] < arr2[0]) {
      results.push(arr1.shift());
    } else {
      results.push(arr2.shift());
    }
  }
  return results.concat(arr1, arr2);
}

/* naive solution */
// function median(arr1, arr2) {
//   const mergedArr = merge(arr1, arr2);
//   const middle = Math.floor(mergedArr.length / 2);

//   return mergedArr[middle];
// }

/* better solution */
function median(arr1, arr2) {
  const medianIdx = Math.floor((arr1.length + arr2.length) / 2);
  const results = [];
  while (arr1.length && arr2.length && !results[medianIdx]) {
    if (arr1[0] < arr2[0]) {
      results.push(arr1.shift());
    } else {
      results.push(arr2.shift());
    }
  }
  return results[medianIdx];
}

const arr1 = [1, 5, 8, 9];
const arr2 = [2, 3, 7, 10];
console.log(median(arr1, arr2));
