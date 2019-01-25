function fizzBuzz(n){
    for(let i = 1; i < n; i++){
    (i % 3 == 0 && i % 5 == 0) ? console.log(i + " FizzBuzz") :
    (i % 3 !==0 && i % 5 == 0) ? console.log(i + " Buzz") :
    (i % 3 == 0) ? console.log(i + " Fizz") : console.log(i);
    }
}
fizzBuzz(100);