import solveSudoku from './assets/sudokuSolver';
import Sudoku from './assets/sudokus';

let N = 9;
let K = 40;
let sudokuBoard = new Sudoku(N, K);
sudokuBoard.fillValues();

const maskedBoard = structuredClone(sudokuBoard.mat);
const solvedBoard = solveSudoku(sudokuBoard.mat);

const AnswerButton = document.querySelector('.Answer');
const GameButton = document.querySelector('.Game');

// table > tbody
let Board = document.getElementById('Board').children[0];
injectMaskedBoard();

AnswerButton.addEventListener('click', injectSolvedBoard);
GameButton.addEventListener('click', () => {
	window.location.reload();
});

// tr > td > input
// console.log(Board.children[0].children[0].firstChild.value);

function injectMaskedBoard() {
	for (let index = 0; index < Board.childElementCount; index++) {
		for (
			let kindex = 0;
			kindex < Board.children[index].childElementCount;
			kindex++
		) {
			Board.children[index].children[kindex].firstChild.value =
				maskedBoard[index][kindex];
		}
	}
}

function injectSolvedBoard() {
	for (let index = 0; index < Board.childElementCount; index++) {
		for (
			let kindex = 0;
			kindex < Board.children[index].childElementCount;
			kindex++
		) {
			Board.children[index].children[kindex].firstChild.value =
				solvedBoard[index][kindex];
		}
	}
}
