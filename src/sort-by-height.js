const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let sortedArr = arr.filter((num) => num !== -1).sort((a, b) => a - b);
  let resultArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      resultArr.push(arr[i]);
    } else {
      resultArr.push(sortedArr[0]);
      sortedArr.shift();
    }
  }
  return resultArr;
}

module.exports = {
  sortByHeight
};
