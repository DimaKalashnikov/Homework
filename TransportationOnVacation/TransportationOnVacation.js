'use strict'
function getPriceForCarRentAmongDays(d){
  let price = (d < 3) ? price=(d * 40) + "$. Because rental less than 3 days":
  (d >= 3 && d < 7)? price = (d * 40 + 20) + "$. Because rental 3 or more than
  3 days and less than 7 days":
  price = (d * 40 + 50)+ "$. Because rental 7 or more than 7 days";
    console.log(price);
  }
getPriceForCarRentAmongDays(9);