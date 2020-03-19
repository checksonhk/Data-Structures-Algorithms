/*
Write the function sudokuSolve that checks whether a given sudoku board (i.e. sudoku puzzle) is solvable. If so, the function will returns true. Otherwise (i.e. there is no valid solution to the given sudoku board), returns false.
*/

/* Solution 1
- generate all boards
- validate all boards
- return valid board
*/

/* Solution 2
Choices
- place 1-9 in an empty cell
- placement cannot break board
Our goal
 - fill the board
*/

function sudokuSolver(board) {
  return canSolveSodoku(board, 0, 0);
}

function canSolveSodoku(board, row, col) {
  // check to see if it reach the end of the column
  if (col === board[row].length) {
    col = 0;
    row++;
    // if it reachs the last column and last row, weve solved it
    if (row === board.length) {
      return true;
    }
  }

  // skip if it is not empty
  if (board[row][col] !== 0) {
    return canSolveSodoku(board, row, col + 1);
  }

  // check if we can place value in empty cell
  for (let value = 1; value <= board.length; value++) {
    if (canPlaceValue(board, row, col, value)) {
      board[row][col] = value;
      // if we can place that value in the empty cell, solve the next cell, recursively solve the board
      if (canSolveSodoku(board, row, col + 1)) {
        return true;
      }
      // backtrack
      board[row][col] = 0;
    }
  }
  return false;
}

function canPlaceValue(board, row, col, value) {
  // console.log(value)
  // check placement of col
  for (let i = 0; i < board.length; i++) {
    if (value == board[i][col]) {
      return false;
    }
  }

  // check placement of row
  for (let i = 0; i < board.length; i++) {
    if (value == board[row][i]) {
      return false;
    }
  }

  // check the current subgrid doesn't already have the number
  const subGridSize = Math.sqrt(board.length);

  // 2/3 = 0, 5/3 = 1
  const verticalBoxIdx = Math.floor(row / subGridSize);
  const horizontalBoxIdx = Math.floor(col / subGridSize);

  const topLeftofSubBoxRow = subGridSize * verticalBoxIdx;
  const topLeftofSubBoxCol = subGridSize * horizontalBoxIdx;

  for (let i = 0; i < subGridSize; i++) {
    for (let j = 0; j < subGridSize; j++) {
      if (value == board[topLeftofSubBoxRow + i][topLeftofSubBoxCol + j]) {
        return false;
      }
    }
  }
  return true;
}

// validate placement
// - check row
// - check cols
// check subgrid

const test = [
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9],
];

const test2 = [[1,0,0,0,0,7,0,9,0],
       [0,3,0,0,2,0,0,0,8],
       [0,0,9,6,0,0,5,0,0],
       [0,0,5,3,0,0,9,0,0],
       [0,1,0,0,8,0,0,0,2],
       [6,0,0,0,0,4,0,0,0],
       [3,0,0,0,0,0,0,1,0],
       [0,4,0,0,0,0,0,0,7],
       [0,0,7,0,0,0,3,0,0]]    

var gameArr = [
        [2, 0, 3, 0, 0, 8, 6, 0, 7],
        [1, 4, 0, 7, 2, 6, 0, 0, 9],
        [5, 0, 7, 1, 3, 9, 4, 2, 8],
        [0, 2, 5, 0, 8, 1, 9, 0, 4],
        [4, 1, 0, 9, 0, 3, 2, 0, 5],
        [0, 7, 9, 2, 0, 5, 0, 3, 6],
        [6, 0, 2, 0, 1, 0, 0, 9, 3],
        [7, 0, 0, 5, 0, 2, 0, 0, 1],
        [0, 8, 1, 3, 6, 7, 0, 4, 0]
    ];

console.log(sudokuSolver(test));
console.log(sudokuSolver(test2))
console.log(sudokuSolver(gameArr))

// a helper function that returns a set of all valid candidates for a given cell
function getCandidates(board, row, col) {
  // for any empty cell board[row][col], find possible numbers which can be placed in this cell
  const candidates = []

  // check every value from 1-9 
  for (let value = 1; value < 10; value++) {
    let collision = false;
    for (let i=0; i < board[0].length; i++) {
      // check if any numbers in row and col container that value, and value dont exist in subboard
      // Notice the top-left corner of (row, col)'s sub-board is (row - row%3, col - col%3).
      if (board[row][i] === value || board[col][i] == value || board[(row - row % 3) + Math.floor(i/3)][(col - col % 3) + i % 3]) {
        collision = true
        break
      }
    }
    if (!collision) {
      candidates.push(value)
    }
  }
  return candidates
}

function sudokuSolver(board) {
  // for each empty cell consider newCandidates, to be the set of possible candidates

  let row = -1
  let col = -1
  let candidates = null
  for (let r = 0; r < board[0].length; r++) {
    for (let c = 0; c < board.length; c++) {
      if (board[r][c] === '.') {
        const newCandidates = getCandidates(board, r, c)

        if (candidates == null || newCandidates.length < candidates.length) {
          candidates = newCandidates
          row = r
          col = c
        }
      }
    }
  }
  // if we have not found any empty cell, then the whole board is filled
  if (candidates === null) {
    return true
  }

  // for each possible value that can be placed in position(row, col)
  // lets place that value, and recursively query, whether the board can be solved
  candidates.forEach(value => {
    board[row][col] = value
    if (sudokuSolver(board)) return true
    
    // the tried value didnt work so restore the original
    board[row][col] = '.'
  })

  // if there are no values that can be placed into position (row, col) to make the baord solved
  return false
}

// console.log(sudokuSolver(test))