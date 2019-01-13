// Create a module that exports a function that takes a number as a 
// parameter and stores it in a list. The list should not be accessible 
// from outside the module.


function listNum(x) {
    var x = num;
    var list = [];
    list.push(x);
    return list;
  }
  
  module.exports = {
    PHI: 1.618,
    explain: function() {
      console.log("We are trying to list" + this.list);
    },
   
  };