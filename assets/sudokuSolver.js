function solveSudoku(board) {
  if (!isValidBoard(board)) {
    console.log("Invalid Sudoku board.");
    return false;
  }
  if (solve(board)) {
    console.log("Sudoku solved:");

    return printBoard(board);
  } else {
    console.log("No solution exists.");
    return false;
  }
}

function solve(board) {
  let emptySpot = findEmptySpot(board);
  if (!emptySpot) {
    return true; // No more empty spots, puzzle solved
  }

  let row = emptySpot[0];
  let col = emptySpot[1];

  for (let num = 1; num <= 9; num++) {
    if (isValidMove(board, row, col, num)) {
      board[row][col] = num;

      if (solve(board)) {
        return true;
      }

      // Backtrack
      board[row][col] = 0;
    }
  }

  return false; // Trigger backtracking
}

function isValidMove(board, row, col, num) {
  for (let i = 0; i < 9; i++) {
    if (board[row][i] === num || board[i][col] === num) {
      return false;
    }
  }

  let startRow = Math.floor(row / 3) * 3;
  let startCol = Math.floor(col / 3) * 3;

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[startRow + i][startCol + j] === num) {
        return false;
      }
    }
  }

  return true;
}

function findEmptySpot(board) {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (board[row][col] === 0) {
        return [row, col];
      }
    }
  }
  return null;
}

function isValidBoard(board) {
  // Additional validation can be added if needed
  return true;
}

function printBoard(board) {
  return board;
}
export default solveSudoku;
