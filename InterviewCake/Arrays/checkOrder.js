/*
Given all three arrays, write a function to check that my service is first-come, first-served. All food should come out in the same order customers requested it.

Take Out Orders: [1, 3, 5]
Dine In Orders: [2, 4, 6]
Served Orders: [1, 2, 4, 6, 5, 3]
- would not be first-come, first-served, since order 3 was requested before order 5 but order 5 was served first.

Take Out Orders: [1, 3, 5]
Dine In Orders: [2, 4, 6]
Served Orders: [1, 2, 3, 5, 4, 6]
- would be first-come, first-served.
*/

function mergeArrays(arr1, arr2) {
  const output = [];
  while (arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) {
      output.push(arr1.shift());
    } else {
      output.push(arr2.shift());
    }
  }
  return [...output, ...arr1, ...arr2];
}

function checkOrder(takeout, dinein, server) {
  const expectedOrder = mergeArrays(takeout, dinein);
  if (expectedOrder.length !== server.length) return false;
  for (let i = 0; i < expectedOrder.length; i++) {
    if (expectedOrder[i] !== server[i]) {
      return false;
    }
  }
  return true;
}
