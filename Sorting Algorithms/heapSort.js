const heapSort = array => {
  let temp;
  let heapSize = array.length;
  array = createMaxHeap(array);
  for (let i = array.length - 1; i > 0; i--) {
    temp = array[0];
    array[0] = array[i];
    array[i] = temp;
    heapSize--;
    heapify(array, 0, heapSize);
  }

  return array;
};

const createMaxHeap = array => {
  for (let i = Math.floor(array.length / 2); i >= 0; i--) {
    heapify(array, i, array.length);
  }
  return array;
};

const heapify = (array, index, heapSize) => {
  // ensures parent is larger than its children
  const left = 2 * index + 1;
  const right = 2 * index;
  let largestValueIndex = index;

  if (heapSize > left && array[largestValueIndex] < array[left]) {
    largestValueIndex = left;
  }
  if (heapSize > right && array[largestValueIndex] < array[right]) {
    largestValueIndex = right;
  }
  if (largestValueIndex !== index) {
    const temp = array[index];
    array[index] = array[largestValueIndex];
    array[largestValueIndex] = temp;
    // ensure the swapped child, is still larger than its children
    heapify(array, largestValueIndex, heapSize);
  }
  return array;
};

const array = [1, 4, 6, 2, 6, 8, 9, 3, 6, 11, 20];
console.log(heapSort(array));
