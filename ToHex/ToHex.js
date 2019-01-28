// Тут я коментарии не оставлял, как и в передидущих которые я делал сам, за исключением примера с циклом do while(была мысль сделать его с while if break, но подумал что книжный вариант более правильный). Очень жду критики: что почитать, что не так понял. Явно что тут много ошибок, хоть и результат вроде как правильный, прошу указать ошибки по максимуму. Огромное вам спасибо, за проверку и коментарии, ведь только так можно научится.
'use strict'
function toHex(value) {
  let modulo;
  let afterDivide;
  let int;
  let intToString;
  let moduloToString;
  let hex;
  let above16;
  let moduloAbove;
  let above16Int;
  let veryFirst;
  let veryFirstInt;
  modulo = value % 16;
  afterDivide = value / 16;
    if (afterDivide > 16) { 
    above16 = afterDivide;
    moduloAbove = above16 % 16;
    veryFirst = above16 / 16;
  //console.log(moduloAbove + " moduloAbove");
  //console.log(veryFirst+" veryFirst")
    } else {
    afterDivide;
    }
  //console.log(afterDivide +" afterDivide");
  //console.log(above16 + " above 16");    
  (modulo == 10) ? modulo = "A":
  (modulo == 11) ? modulo = "B":
  (modulo == 12) ? modulo = "C":
  (modulo == 13) ? modulo = "D":
  (modulo == 14) ? modulo = "E":
  (modulo == 15) ? modulo = "F": modulo;
    //console.log(modulo + " modulo")
  int = afterDivide | 0;
  above16Int = moduloAbove | 0;
  veryFirstInt = veryFirst | 0;
 
  (above16Int == 10) ? above16Int = "A":
  (above16Int == 11) ? above16Int = "B":
  (above16Int == 12) ? above16Int = "C":
  (above16Int == 13) ? above16Int = "D":
  (above16Int == 14) ? above16Int = "E":
  (above16Int == 15) ? above16Int = "F": above16Int;

    //console.log(above16Int +" above16Int");
    //console.log(int +" int");
    intToString = String(int);
    moduloToString = String(modulo);
      if (afterDivide > 16) {
    hex = (veryFirstInt + above16Int + moduloToString) + " Hex";
     } else if (afterDivide < 16) {
    hex = (intToString + moduloToString) + " Hex";
  }
    console.log(hex);
    return hex;
}

console.assert(
  toHex(42).toLowerCase() === '2a',
  '42 should be converted to 2a'
);

console.assert(
  toHex(420).toLowerCase() === '1a4',
  '420 should be converted to 1a4'
);
