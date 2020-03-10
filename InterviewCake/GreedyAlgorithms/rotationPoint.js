/*
Write a function for finding the index of the "rotation point," 

const words = [
  'ptolemaic',
  'retrograde',
  'supplant',
  'undulate',
  'xenoepist',
  'asymptote',  // <-- rotates here!
  'babka',
  'banoffee',
  'engender',
  'karpatka',
  'othellolagkage',
];
*/

function rotationPoint(words) {
  if (words < 2) throw Error;

  let left = 0;
  let right = words.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    // if 'a" < 'z ( or anything bigger than b)'

    if (mid === words.length - 1 || words[mid] < words[mid - 1]) {
      return mid;
    }

    // still "a" < "b"
    if (words[mid] < words[mid + 1]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
}

function findRotationPoint(words) {
  const firstWord = words[0];

  let floorIndex = 0;
  let ceilingIndex = words.length - 1;

  while (floorIndex < ceilingIndex) {
    // Guess a point halfway between floor and ceiling
    const guessIndex = Math.floor(floorIndex + (ceilingIndex - floorIndex) / 2);

    // If guess comes after first word or is the first word
    if (words[guessIndex] >= firstWord) {
      // Go right
      floorIndex = guessIndex;
    } else {
      // Go left
      ceilingIndex = guessIndex;
    }

    // If floor and ceiling have converged
    if (floorIndex + 1 === ceilingIndex) {
      // Between floor and ceiling is where we flipped to the beginning
      // so ceiling is alphabetically first
      break;
    }
  }

  return ceilingIndex;
}

const words = [
  'ptolemaic',
  'retrograde',
  'supplant',
  'undulate',
  'xenoepist',
  'asymptote', // <-- rotates here!
  'babka',
  'banoffee',
  'engender',
  'karpatka',
  'othellolagkage',
];

console.log(rotationPoint(words));
