const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(array) {
    if (!Array.isArray(array)) throw new Error('\'arr\' parameter must be an instance of the Array!');
    const newArray_ = [];
    for (i = 0; i < array.length; i++) {
        if (array[i] === '--discard-next') {
            i++;
        } else if (array[i] === '--discard-prev') {
            if (array[i - 2] !== "--discard-next") {
                newArray_.pop();
            }
        } else if (array[i] === '--double-next') {
            if (i != array.length - 1) {
                newArray_.push(array[i + 1]);
            }
        } else if (array[i] === '--double-prev') {
            if (array[i - 2] !== "--discard-next" && i !== 0) {
                newArray_.push(array[i - 1]);
            }
        } else {
            newArray_.push(array[i]);
        };
    };
    return newArray_;
}

module.exports = {
    transform
};