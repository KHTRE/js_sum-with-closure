'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return function(number1) {
    return function(number2) {
      count++;

      if (count > 3 && count % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return number1 + number1;
    };
  };
}

module.exports = makeRobotAccountant;
