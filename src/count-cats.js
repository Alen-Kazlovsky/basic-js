const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }
  if  (isNaN(date.getTime())) {
    throw new Error('Error')
  };

  let month = date.getMonth();
  let day = date.getDay();

  if  (1 < month &&  month < 5) {
    return 'spring'
  };
  if  (4 < month &&  month < 8) {
    return 'summer'
  };
  if  (7 < month &&  month < 11) {
    return 'autumn'
  };
  if  (10 < month ||  month < 2) {
    return 'winter'
  };
};
