const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';
  if (!(date instanceof Date)) throw new Error('Invalid date!');
  if (!(typeof date.getMonth === 'function')) throw new Error('Invalid date!');
  if (!(typeof date.getMonth === 'function')) throw new Error('Invalid date!');
  if (Object.getOwnPropertyNames(date).length !== 0) throw new Error('Invalid date!');

  const month = date.getMonth();

  let season = (month >= 2 && month <= 4) ? 'spring' :
    (month >= 5 && month <= 7) ? 'summer' :
      (month >= 8 && month <= 10) ? 'autumn' :
        (month === 1 || month === 11 || month === 0) ? 'winter' : 'Invalid date!';

  return season;
}

module.exports = {
  getSeason
};
