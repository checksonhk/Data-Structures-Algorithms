/*
Given a 2D array (matrix) inputMatrix of integers, create a function spiralCopy that copies inputMatrix’s values into a 1D array in a spiral order, clockwise. Your function then should return that array. Analyze the time and space complexities of your solution.
*/

function spiralCopy(inputMatrix) {
  const numRow = inputMatrix.length;
  const numCols = inputMatrix[0].length;

  let topRow = 0;
  let btmRow = numRows - 1;
  let leftCol = 0;
  let rightCol = numCols - 1;
  const output = [];

  while (topRow <= btmRow && leftCol <= rightCol) {
    for (let i = leftCol; i < rightCol; i++) {
      output.push(inputMatrix[topRow][i]);
    }
    topRow++;

    for (let i = topRow; i < btmRow; i++) {
      output.push(inputMatrix[i][rightCol]);
    }

    if (topRow <= btmRow) {
      for (let i = rightCol; i >= leftCol; i--) {
        output.push(inputMatrix[btmRow][i]);
      }
    }

    if (leftCol <= rightCol) {
      for (let i = btmRow; i >= topRow; i--) {
        output.push(inputMatrix[i][leftCol]);
      }
      leftCol++;
    }
  }
  return output;
}
