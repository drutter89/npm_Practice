// Create a module that exports a function that takes a number as a 
// parameter and stores it in a list. The list should not be accessible 
// from outside the module.

var list = [];
function listNum(x) {
    list.push(x);
    return list;

  }

  function orderList() {
    return list.sort();
  }

  module.exports = {

    listNum: listNum,
    orderList: orderList
    
  };