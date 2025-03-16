// Valid Soduko

// You are given a a 9 x 9 Sudoku board board. A Sudoku board is valid if the following rules are followed:
// Each row must contain the digits 1-9 without duplicates.
// Each column must contain the digits 1-9 without duplicates.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without duplicates.
// Return true if the Sudoku board is valid, otherwise return false
// Note: A board does not need to be full or be solvable to be valid.

// Example 1:
// Input: board =
// [["1","2",".",".","3",".",".",".","."],
//  ["4",".",".","5",".",".",".",".","."],
//  [".","9","8",".",".",".",".",".","3"],
//  ["5",".",".",".","6",".",".",".","4"],
//  [".",".",".","8",".","3",".",".","5"],
//  ["7",".",".",".","2",".",".",".","6"],
//  [".",".",".",".",".",".","2",".","."],
//  [".",".",".","4","1","9",".",".","8"],
//  [".",".",".",".","8",".",".","7","9"]]
// Output: true

// Example 2:
// Input: board =
// [["1","2",".",".","3",".",".",".","."],
//  ["4",".",".","5",".",".",".",".","."],
//  [".","9","1",".",".",".",".",".","3"],
//  ["5",".",".",".","6",".",".",".","4"],
//  [".",".",".","8",".","3",".",".","5"],
//  ["7",".",".",".","2",".",".",".","6"],
//  [".",".",".",".",".",".","2",".","."],
//  [".",".",".","4","1","9",".",".","8"],
//  [".",".",".",".","8",".",".","7","9"]]
// Output: false
// Explanation: There are two 1's in the top-left 3x3 sub-box.

// Constraints:
// board.length == 9
// board[i].length == 9
// board[i][j] is a digit 1-9 or '.'.

class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        //sub-boxes
        for (let x = 0; x < 9; x += 3) {
            for (let y = 0; y < 9; y += 3) {
                if (!this.#isRegionValid(board, x, y, x + 2, y + 2))
                    return false;
            }
        }
        //columns
        for (let x = 0; x < 9; x++) {
            if (!this.#isRegionValid(board, x, 0, x, 8)) return false;
        }
        //rows
        for (let y = 0; y < 9; y++) {
            if (!this.#isRegionValid(board, 0, y, 8, y)) return false;
        }
        return true;
    }

    /**
     * @param {character[][]} board
     * @param {int} rootX
     * @param {int} rootY
     * @param {int} endX
     * @param {int} endY
     * @return {boolean}
     */
    #isRegionValid(board, rootX, rootY, endX, endY) {
        var bucket = Array.from({ length: 9 }, () => false);
        for (let x = rootX; x <= endX; x++) {
            for (let y = rootY; y <= endY; y++) {
                let num = board[x][y];
                if (num == ".") continue;
                num -= 1;
                if (bucket[num]) return false;
                bucket[num] = true;
            }
        }
        return true;
    }
}

// var solution = new Solution();
// console.log(
//     solution.isValidSudoku([
//         ["1", "2", ".", ".", "3", ".", ".", ".", "."],
//         ["4", ".", ".", "5", ".", ".", ".", ".", "."],
//         [".", "9", "8", ".", ".", ".", ".", ".", "3"],
//         ["5", ".", ".", ".", "6", ".", ".", ".", "4"],
//         [".", ".", ".", "8", ".", "3", ".", ".", "5"],
//         ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
//         [".", ".", ".", ".", ".", ".", "2", ".", "."],
//         [".", ".", ".", "4", "1", "9", ".", ".", "8"],
//         [".", ".", ".", ".", "8", ".", ".", "7", "9"],
//     ])
// );
// console.log(
//     solution.isValidSudoku([
//         ["1", "2", ".", ".", "3", ".", ".", ".", "."],
//         ["4", ".", ".", "5", ".", ".", ".", ".", "."],
//         [".", "9", "1", ".", ".", ".", ".", ".", "3"],
//         ["5", ".", ".", ".", "6", ".", ".", ".", "4"],
//         [".", ".", ".", "8", ".", "3", ".", ".", "5"],
//         ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
//         [".", ".", ".", ".", ".", ".", "2", ".", "."],
//         [".", ".", ".", "4", "1", "9", ".", ".", "8"],
//         [".", ".", ".", ".", "8", ".", ".", "7", "9"],
//     ])
// );

// Time-complexity: O(1) or (0(n) where n is number of rows in a square grid)
// Space-complexity: O(1)
