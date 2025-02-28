 function getDNSStats(array) {
  let newArr = array.map(domain => {
    return domain.split('.').reverse();
  })

  let result = {};

  for (let domain of newArr) {
    let dnss = '';
    for (let dns of domain) {
      dnss += `.${dns}`;
      result[dnss] = result[dnss] ? ++result[dnss] : 1;
    }
  }

  return result;
}