function linearSearch(id, array) {
  return array.indexOf(id);
}

function binarySearch(id, array) {
  let min = 0;
  let max = array.length - 1;

  while (min <= max) {
    const index = Math.floor((min + max) / 2);
    const element = array[index];

    if (element < id) {
      min = index + 1;
    } else if (element > id) {
      max = index - 1;
    } else {
      return index;
    }
  }

  return void 0;
}

function recursiveBinarySearch(arr, target, start = 0, stop = arr.length - 1) {
  let midPoint = Math.floor((stop - start) / 2 + start);

  switch (true) {
    case arr[midPoint] === target:
      return midPoint;
    case stop - start === 0:
      return false;
    case arr[midPoint] < target:
      return recursiveBinarySearch(arr, target, midPoint + 1, stop);
    case arr[midPoint] > target:
      return recursiveBinarySearch(arr, target, start, midPoint);
  }
}

const array = [0, 5, 10, 12, 15, 19, 21, 22, 24, 30];

console.log(linearSearch(12, array));
console.log(binarySearch(12, array));
console.log(recursiveBinarySearch(array, 12));
