'use strict'
function basicOp(operation, value1, value2){
      (operation ==='+') ? console.log(value1+value2) (value1 + value2) : 
      (operation ==='-') ? console.log(value1-value2) (value1 - value2) :
      (operation ==='*') ? console.log(value1*value2) (value1 * value2) :
      (operation ==='/') ? console.log(value1/value2) (value1 / value2) :
      console.log("You can choose only: '+', '-', '*', '/' operators");
 }
   
 basicOp('+',2,2);