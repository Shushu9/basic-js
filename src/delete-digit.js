const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let maxNum = 0;

  n.toString().split('').forEach((l, index, digits) => {
    const num = parseInt(digits.slice(0, index).join('') + digits.slice(index + 1).join(''));
    if (num > maxNum) {
      maxNum = num;
    }
  });

  return maxNum;
}

module.exports = {
  deleteDigit
};
