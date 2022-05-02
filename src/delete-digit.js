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
    let result = 0;
    let numbers = [];
    while (n) {
        numbers.push(n % 10);
        n = Math.floor(n / 10);
    }
    for (let index = 0; index < numbers.length; index++) {
        let num = 0;
        for (let i = numbers.length - 1; i >= 0; i--) {
            if (i !== index) {
                num = num * 10 + numbers[i];
            }

        }
        result = Math.max(num, result);
    }
    return result;
}

module.exports = {
    deleteDigit
};