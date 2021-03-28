const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if(typeof position != "number"){
      this.chain = []
      throw Error()
    }
    if(position >= this.chain.length || position <= 0){
      this.chain = []
      throw Error()
    }
    this.chain.splice(position - 1,1)
    return this
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let finis = this.chain.join('~~');
    this.chain = [];
    return finis;
  }
};
module.exports = chainMaker;
