/*
Determine if a Sudoku is valid, according to: Sudoku Puzzles - The Rules.

The Sudoku board could be partially filled, where empty cells are filled with the character '.'.


A partially filled sudoku which is valid.

Note:
A valid Sudoku board (partially filled) is not necessarily solvable. Only the filled cells need to be validated
*/

const BOARD_SIZE = 9;

/**
 * @param {character[][]} board
 * @return {boolean}
 */
function isValidSudoku(board) {

    let i, j;

    // checks rows
    for (i = 0; i < BOARD_SIZE; i++) {
        if (!isValidInRange(board, i, 0, i, BOARD_SIZE - 1)) {
            return false;
        }
    }

    // check columns
    for (j = 0; j < BOARD_SIZE; j++) {
        if (!isValidInRange(board, 0, j, BOARD_SIZE - 1, j)) {
            return false;
        }
    }

    // check boxes
    for (i = 0; i < BOARD_SIZE; i += 3) {
        for (j = 0; j < BOARD_SIZE; j += 3) {
            if (!isValidInRange(board, i, j, i + 2, j + 2)) {
                return false;
            }
        }
    }

    return true;
}

function isValidInRange(board, x1, y1, x2, y2) {
    const dups = new Map();
    let i, j;
    for (i = x1; i <= x2; i++) {
        for (j = y1; j <= y2; j++) {
            if (dups.has(board[i][j])) {
                return false;
            }
            if (board[i][j] !== '.') {
                dups.set(board[i][j], true);
            }
        }
    }
    return true;
}

const tests = [{
    expected: false,
    board: [
        ['1', '.', '2', '1', '.', '.', '1', '.', '.'],
        ['.', '3', '.', '2', '.', '.', '1', '.', '.'],
        ['.', '.', '5', '5', '.', '.', '1', '.', '.'],
        ['1', '.', '2', '1', '.', '.', '1', '.', '.'],
        ['.', '3', '.', '3', '.', '.', '1', '.', '.'],
        ['.', '.', '5', '5', '.', '.', '1', '.', '.'],
        ['1', '.', '2', '1', '.', '.', '1', '.', '.'],
        ['.', '3', '.', '3', '.', '.', '1', '.', '.'],
        ['.', '.', '5', '5', '.', '.', '1', '.', '.'],
    ]
}];

tests.forEach(test => {
    const { board, expected } = test;
    const res = isValidSudoku(board);
    console.log(`board:  \n${fmt(board)}`);
    console.log(`res:      ${res}`);
    console.log(`expected: ${expected}`);
    console.log();
});

function fmt(board) {
    return board.map(row => row.join(' ')).join('\n');
}