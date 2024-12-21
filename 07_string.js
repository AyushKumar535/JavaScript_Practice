const name = "Ayush"
const repoCount = 21

// console.log(name + repoCount);  //-> This is not a Good Practice.
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);    //-> This is a Good Practice

const gameName = new String('ayush-ay')

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('h'));

const newString = gameName.substring(0,6)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);


const nameOne =  "   Ayush     "
console.log(nameOne);
console.log(nameOne.trim())

const url = "https://ayush.com/au03kumar"
console.log(url)
console.log(url.replace('03','30'))

console.log(gameName.split(''))