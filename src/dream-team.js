const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (Array.isArray(members)) {
    const orderedArray = members.map(function (value) {return typeof value === 'string' ? value.trim().toUpperCase().charAt(0) : '';});
    const arraySort = orderedArray.sort();
    return arraySort.join('');
  };
  return false;
}
