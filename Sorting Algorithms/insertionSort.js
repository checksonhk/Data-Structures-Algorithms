/*
  Insertion sort!
    
  The idea here is that the beginning of your list is sorted and the everything else is assumed to be an unsorted mess.
  The outer loop goes over the whole list, the index of which signifies where the "sorted" part of the list is. The inner
  loop goes over the sorted part of the list and inserts it into the correct position in the array.
  
*/

function insertionSort(nums) {
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] < nums[j]) {
        // .splice returns array
        // removes the element
        const spliced = nums.splice(i, 1)[0];
        // inserts element where j > i
        nums.splice(j, 0, spliced);
      }
    }
  }
}

const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
console.log('BEFORE SORT', nums);
insertionSort(nums);
console.log('AFTER SORT', nums);
