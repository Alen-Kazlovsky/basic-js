const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(string1, string2) {
    let amount = 0;

    const array1 = string1.split('');
    const array2 = string2.split('');

    for (let i = 0; i < array1.length; i++) {
        const index = array2.indexOf(array1[i]);
        if (index !== -1) {
            array2.splice(index, 1);
            amount += 1
        }
    }

    return amount


}

module.exports = {
    getCommonCharacterCount
};