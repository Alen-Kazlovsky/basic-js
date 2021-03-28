const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
	calculateDepth(arr) {
    	let count = 1;
  		arr.forEach(elem => {
      		if (Array.isArray(elem)) {
	    	count = Math.max(this.calculateDepth(elem) + 1, count);
	    	}
	  	})
		return count;
	};
};
