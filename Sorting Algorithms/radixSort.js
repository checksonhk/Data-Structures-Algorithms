const getDigit = function(number, place, longestNumber) {
  const string = number.toString();
  const size = string.length;
  const mod = longestNumber - size;
  return string[place - mod] || 0;
};

const findLongestNumber = function(array) {
  return Math.max(...array).toString().length;
};

const radixSort = function(array) {
  const longestNumber = findLongestNumber(array);
  const buckets = Array.from({ length: 10 }, () => []);

  for (let i = longestNumber - 1; i >= 0; i--) {
    while (array.length) {
      const current = array.shift();
      buckets[getDigit(current, i, longestNumber)].push(current);
    }
    for (let j = 0; j < buckets.length; j++) {
      while (buckets[j].length) {
        array.push(buckets[j].shift());
      }
    }
  }
  return array;
};

const array = [1, 4, 6, 2, 6, 8, 9, 3, 6, 11, 20];
console.log(radixSort(array));

const testArray = [20, 51, 3, 801, 415, 62, 4, 17, 19, 11, 1, 100, 1244, 104, 944, 854, 34, 3000, 3001, 1200, 633];
console.log(radixSort(testArray));
