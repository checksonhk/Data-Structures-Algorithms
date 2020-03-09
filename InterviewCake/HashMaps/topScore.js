/*
Write a function that takes:
- an array of unsortedScores
- the highestPossibleScore in the game
- returns a sorted array of scores in less than O(n\lg{n})O(nlgn) time
*/

function sortScores(unorderedScores, highestPossibleScore) {
  // Array of 0s at indices 0..highestPossibleScore
  const scoreCounts = new Array(highestPossibleScore + 1).fill(0);

  // Populate scoreCounts
  unorderedScores.forEach(score => {
    scoreCounts[score]++;
  });

  // Populate the final sorted array
  const sortedScores = [];

  console.log(scoreCounts);
  // For each item in scoreCounts
  for (let score = highestPossibleScore; score >= 0; score--) {
    const count = scoreCounts[score];

    // For the number of times the item occurs
    for (let time = 0; time < count; time++) {
      sortedScores.push(score);
    }
  }

  return sortedScores;
}

console.log(sortScores([1, 3, 4, 6, 4, 7, 3, 5, 2], 10));
