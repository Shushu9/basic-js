const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const resMatrix = [];

  for (let i = 0; i < rows; i++) {
    resMatrix[i] = [];
    for (let j = 0; j < cols; j++) {
      let bombsCount = 0;
      for (let ii = Math.max(i - 1, 0); ii <= Math.min(i + 1, rows - 1); ii++) {
        for (let jj = Math.max(j - 1, 0); jj <= Math.min(j + 1, cols - 1); jj++) {
          if (matrix[ii][jj] && !(ii === i && jj === j)) {
            bombsCount++;
          }
        }
      }
      resMatrix[i][j] = bombsCount;
    }
  }

  return resMatrix;
}

module.exports = {
  minesweeper
};
