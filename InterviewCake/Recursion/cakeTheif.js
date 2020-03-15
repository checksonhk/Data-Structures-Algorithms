/*
Write a function maxDuffelBagValue() that takes an array of cake type objects and a weight capacity, and returns the maximum monetary value the duffel bag can hold.

Each type of cake has a weight and a value, stored in an object with two properties:
- weight: the weight of the cake in kilograms
- value: the monetary value of the cake in British shillings

Example 
const cakeTypes = [
  { weight: 7, value: 160 },
  { weight: 3, value: 90 },
  { weight: 2, value: 15 },
];

const capacity = 20;

maxDuffelBagValue(cakeTypes, capacity);
// Returns 555 (6 of the middle type of cake and 1 of the last type of cake)

*/

// Time Complexity of O(n * k), where n is the number of cakes, k is the capacity of the duffelbag
// Space complexity of O(k)
function maxDuffelBagValue(cakeTypes, weightCapacity) {
  // We make an array to hold the maximum possible value at every
  // duffel bag weight capacity from 0 to weightCapacity
  // starting each index with value 0
  const maxValuesAtCapacities = new Array(weightCapacity + 1).fill(0);

  for (let currentCapacity = 0; currentCapacity <= weightCapacity; currentCapacity++) {
    cakeTypes.forEach(cakeType => {
      // If the cake weighs as much or less than the current capacity
      // See what our max value could be if we took it!
      if (cakeType.weight <= currentCapacity) {
        const maxValuesUsingCake = cakeType.value + maxValuesAtCapacities[currentCapacity - cakeType.weight];
        maxValuesAtCapacities[currentCapacity] = Math.max(maxValuesUsingCake, maxValuesAtCapacities[currentCapacity]);
      }
    });
  }

  return maxValuesAtCapacities[weightCapacity];
}

const cakeTypes = [
  { weight: 7, value: 160 },
  { weight: 3, value: 90 },
  { weight: 2, value: 15 },
];

const capacity = 20;

console.log(maxDuffelBagValue(cakeTypes, capacity));
