const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {

  if (str === undefined) {
    return '';
  }

  const {
    repeatTimes = 1,
    separator = '+',
    addition = '',
    additionRepeatTimes = 1,
    additionSeparator = '|'
  } = options || {};

  const strToString = String(str);
  const additionToString = String(addition);

  const result = [];

  for (let i = 0; i < repeatTimes; i++) {
    const tempArr = [];

    for (let j = 0; j < additionRepeatTimes; j++) {
      tempArr.push(additionToString);
    }

    const tempStr = tempArr.join(additionSeparator);


    result.push(strToString + tempStr);
  }

  const finalStr = result.join(separator);

  return finalStr;
}

module.exports = {
  repeater
};
