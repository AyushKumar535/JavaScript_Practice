// ----------------------------------NUMS----------------------------

const score = 400
console.log(score);


const balance = new Number(100)
console.log(balance);
console.log(balance.toString().length) ;
console.log(balance.toFixed(5)) ;


const zeroes = 10000000
console.log(zeroes.toLocaleString())


// ------------------------------------MATH--------------------------
console.log(Math.abs(-4))
console.log(Math.round(-4.3))
console.log(Math.ceil(4.2))
console.log(Math.floor(4.9))
console.log(Math.min(4,9,3,2))
console.log(Math.max(4,9,3,39))

console.log(Math.random())         //output will be always b/w 0 & 1.
console.log(Math.random()*10)      //by shifting one digit left ,ex:- 0.123 => 1.23 
console.log((Math.random()*10) + 1)    //ex:- 0.1234 -> 1.234 ->2.34
console.log(Math.floor(Math.random()*10) + 1)    //ex:- 0.1234 -> 1.234 ->2.34


const min = 10
const max = 20

console.log(Math.random()*(max-min+1)+min)