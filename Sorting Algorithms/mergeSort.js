/*
  Write a function that performs mergesort
  Name the function mergeSort
  It will take in a array of numbers and return a sorted array numbers
  
*/

function mergeSort(nums) {
  if (nums.length < 2) {
    return nums;
  }
  const length = nums.length;
  const middle = Math.floor(length / 2);
  const left = nums.slice(0, middle);
  const right = nums.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const results = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }

  // return results.concat(left, right);
  return [...results, ...left, ...right];
}

const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
console.log('BEFORE SORT', nums);
console.log('AFTER SORT', mergeSort(nums));
