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

    if (!options.separator) options.separator = '+';
    if (!options.additionSeparator) options.additionSeparator = '|';
    if (String(options.addition) === 'false' || String(options.addition) === 'null') options.addition = String(options.addition);
    if (!options.addition) options.addition = '';

    const subString = (options.addition + options.additionSeparator).repeat(options.additionRepeatTimes - 1) + options.addition;

    return (str + subString + options.separator).repeat(options.repeatTimes - 1) + str + subString;


}

module.exports = {
    repeater
};