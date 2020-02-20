/*
  Quicksort should grab a pivot from the end and then separate the list (not including the pivot)
  into two lists, smaller than the pivot and larger than the pivot. Call quickSort on both of those
  lists independently. Once those two lists come back sorted, concatenate the "left" (or smaller numbers)
  list, the pivot, and the "right" (or larger numbers) list and return that. The base case is when quickSort
  is called on a list with length less-than-or-equal-to 1. In the base case, just return the array given.
*/

function quickSort(array) {
  // base case
  if (array.length <= 1) {
    return array;
  }
  const pivot = array[array.length - 1];
  const left = [];
  const right = [];

  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > pivot) {
      right.push(array[i]);
    } else {
      left.push(array[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
console.log('BEFORE SORT', nums);
console.log('AFTER SORT', quickSort(nums));
