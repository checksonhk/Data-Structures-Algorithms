/*
Given a sorted array arr of distinct integers, write a function indexEqualsValueSearch that returns the lowest index i for which arr[i] == i. Return -1 if there is no such index. Analyze the time and space complexities of your solution and explain its correctness.
*/

function indexEqualsValueSearch(arr) {
  if (arr.length < 2) return arr[0];

  // left bound
  let left = 0;
  let right = arr.length;
  let lowest = arr.length;
  let lower = false;
  // right bound
  while (left < right) {
    // mid point index
    const mid = Math.floor((left + right) / 2);

    // check if mididx ===  value
    if (arr[mid] - mid === 0) {
      //ans = mid
      // right= mid
      if (mid < lowest) {
        lower = true;
        lowest = mid;
      }
    }

    if (arr[mid] - mid < 0) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return lower ? lowest : -1;
}

// [-6,-5,-4,-1,1,3,5,7]
// -1 3 since -1 -3 < 0  left pointer goes up
// 3 5  since 3-5 < 0 left goes up
// 5 6 since -1 < 0 left goes up
// 7 7 return
