const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {

  calculateDepth(arr) {
    if (!Array.isArray(arr)) {
      return 0;
    }

    let depth = 1;
    for (let i = 0; i < arr.length; i++) {
      let currentDepth = 1;

      if (Array.isArray(arr[i])) {
        currentDepth += this.calculateDepth(arr[i]);
        depth = Math.max(depth, currentDepth);
      }
    }

    return depth;
  }
}

module.exports = {
  DepthCalculator
};
