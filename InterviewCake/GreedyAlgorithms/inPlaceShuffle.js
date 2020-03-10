/*
Write a function for doing an in-place shuffle of an array.

The shuffle must be "uniform," meaning each item in the original array must have the same probability of ending up in each spot in the final array.

Assume that you have a function getRandom(floor, ceiling) for getting a random integer that is >= floor and <= ceiling.
*/
function getRandom(floor, ceiling) {
  return Math.floor(Math.random() * (ceiling - floor + 1)) + floor;
}

// However, this does not give a uniform random distribution.
function shuffle1(array) {
  for (let i = 0; i < array.length; i++) {
    const randomIdx = getRandom(0, array.length - 1);
    const temp = array[i];
    array[i] = array[randomIdx];
    array[randomIdx] = temp;
  }
  return array;
}

// O(n) time and O(1)O(1) space complexity
function shuffle(array) {
  // If it's 1 or 0 items, just return
  if (array.length <= 1) return;

  // Walk through from beginning to end
  for (let indexWeAreChoosingFor = 0; indexWeAreChoosingFor < array.length - 1; indexWeAreChoosingFor++) {
    // Choose a random not-yet-placed item to place there
    // (could also be the item currently in that spot)
    // must be an item AFTER the current item, because the stuff
    // before has all already been placed
    const randomChoiceIndex = getRandom(indexWeAreChoosingFor, array.length - 1);

    // Place our random choice in the spot by swapping
    if (randomChoiceIndex !== indexWeAreChoosingFor) {
      const valueAtIndexWeChoseFor = array[indexWeAreChoosingFor];
      array[indexWeAreChoosingFor] = array[randomChoiceIndex];
      array[randomChoiceIndex] = valueAtIndexWeChoseFor;
    }
  }

  return array;
}

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(shuffle(array));
