const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(array) {
    let result = new Map();
    let newArray = array.map(item => {
        return item.split('.').reverse();
    });

    for (let item_of_arr of newArray) {

        let dnss = '';
        for (let item of item_of_arr) {
            dnss += `.${item}`;
            result[dnss] = result[dnss] ? ++result[dnss] : 1;
        }

    }
    return result;




}

module.exports = {
    getDNSStats
};