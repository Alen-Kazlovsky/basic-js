const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {

  if(!options.separator) options.separator = '+';
  if(!options.additionSeparator) options.additionSeparator = '|';
  if(String(options.addition) === 'false' || String(options.addition) === 'null') options.addition = String(options.addition);
  if(!options.addition) options.addition = '';

  const subString = (options.addition + options.additionSeparator).repeat(options.additionRepeatTimes - 1) + options.addition;
  
  return (str + subString + options.separator).repeat(options.repeatTimes - 1) + str + subString;
};
