/*
  Write a bubble sort here
  Name the function bubbleSort
  
  If you want to suspend running the unit tests, change describe to xdescribe
  
  Bubble sort works by comparing two adjacent numbers next to each other and then
  swapping their places if the smaller index's value is larger than the larger
  index's. Continue looping through until all values are in ascending order
    
*/

function swap(arr, first_Index, second_Index) {
  const temp = arr[first_Index];
  arr[first_Index] = arr[second_Index];
  arr[second_Index] = temp;
}

function bubbleSort(arr) {
  const len = arr.length;
  let stop;

  for (let i = 0; i < len; i++) {
    for (let j = 0, stop = len - i; j < stop; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }

  return arr;
}
const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
console.log('BEFORE SORT', nums);
bubbleSort(nums);
console.log('AFTER SORT', nums);
// expect(nums).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
