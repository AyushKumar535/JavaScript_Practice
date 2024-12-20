let score = "33"
let score1 = null
let score2 = undefined

console.log (typeof score)      //string
console.log (typeof(score))     //string


let valueInNumber = Number(score2)
console.log(typeof valueInNumber)       //number

console.log(valueInNumber)

//Conversion :-
// "33" -> 33
// "33abc" -> NaN
//  1 -> true ; 0 -> false
//  "" -> false
// "Ayush" -> true


let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber) 


let value = 3
let negValue = -value
console.log(negValue)


console.log("1"+2);
console.log("1"+2+2);
console.log(1+"2");
console.log(1+2+"2");
console.log(+true);
console.log(true);
console.log(+"");  //0
