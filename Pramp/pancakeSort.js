/*
Given an array of integers arr:

Write a function flip(arr, k) that reverses the order of the first k elements in the array arr.
Write a function pancakeSort(arr) that sorts and returns the input array. You are allowed to use only the function flip you wrote in the first step in order to make changes in the array.
*/

// optimal time complexity O(n^2)
// space complextiy O(1)
/*
function pancakeSort(arr) {
  let sortingIndex = arr.length -1
  while (sortingIndex >= 0) {
    let maxIdx = 0
    let maxValue = Number.MIN_SAFE_INTEGER
    for (let i = 0; i <= sortingIndex; i++) {
      if (arr[i] > maxValue) {
        maxValue = arr[i]
        maxIdx = i
      }
    }
    flip(arr, maxIdx)
    flip(arr, sortingIndex)
  
    sortingIndex--;
  }
  return arr
}
*/

function flip(arr, k) {
  for (let i = 0; i <= k / 2; i++) {
    const temp = arr[i];
    arr[i] = arr[k - i];
    arr[k - i] = temp;
  }
  return arr;
}

function pancakeSort(arr) {
  if (arr.length < 2) throw Error;
  return _pancakeSort(arr, arr.length - 1);
}

function _pancakeSort(arr, index) {
  if (index === 0) return arr;
  // find biggest

  // O(n)
  let maxIdx = 0;
  let maxValue = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i <= index; i++) {
    if (arr[i] > maxValue) {
      maxValue = arr[i];
      maxIdx = i;
    }
  }
  // swap biggest to beginning
  flip(arr, maxIdx);
  flip(arr, index);
  return _pancakeSort(arr, index - 1);
}

console.log(pancakeSort([1, 5, 4, 3, 2]));
