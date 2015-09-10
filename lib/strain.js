'use strict';

var strain = {
  keep: function(input, logic){
    var kept = []
    input.forEach(function(item) {
      if (logic(item)) { kept.push(item); }
    })
  return kept
},

  discard: function(input, logic){
    var kept = []
    input.forEach(function(item) {
      if (logic(item) == false) { kept.push(item); }
    })
  return kept
  }
};
