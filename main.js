import solveSudoku from "./assets/sudokuSolver";
import Sudoku from "./assets/sudokus";

let N = 9;
let K = 40;
let sudokuBoard = new Sudoku(N, K);

sudokuBoard.fillValues();
console.table(sudokuBoard.mat);
console.table(solveSudoku(sudokuBoard.mat));
