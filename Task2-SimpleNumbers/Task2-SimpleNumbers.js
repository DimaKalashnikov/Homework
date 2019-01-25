'use strict'
 function logPrimeNumbersTo(n) { // создали первую функцию для того чтоб избежать вложенного цикла for

  for (var k = 2; k < n; k++) { // считаем от 2-х до n
    if (someNumberFrom2toK(k)===false) continue; // Если вспомогательной функция isPrime присвоенно false то прекращаем все итерации, во время которых число что делится на себя же, не имеет остатка деления ( n % k == 0) 

    console.log(k); // остальные итерации выводим в консоль 
  }
}

function someNumberFrom2toK(n) { // создали вспомогательную функцию чтоб переделить все числа от 2 до n на такие-же числа из первой функции
  for (var k = 2; k < n; k++) { // считаем от 2 до n
    if ( n % k == 0) return false; //если у числа k при делении на себя нет остатка, но есть остаток при делениее на все другие числа (кроме 1) то тогда оно простое. Если нет остатока при делении то оно точно не простое, присваиваем этому выражению false 
  }
  return true; // если остаток деления не равен 0 то присваеваем функции true. Это и будет простое число.
}

logPrimeNumbersTo(20);