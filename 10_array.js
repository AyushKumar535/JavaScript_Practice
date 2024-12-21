// Array :-

const myArr = [0,1,2,3,4,5,6,7]
const myname = ["ayush",'kumar','rana']
console.log(myArr[5])
console.log(myname)

const myArr2 = new Array(1,2,3,4)
console.log(myArr[1])
console.log(myArr2[3])


// Array methods :-

myArr.push(6,7,8,9)
myArr.pop()
console.log(myArr)

myArr.unshift(3)          //means the number will add at starting.
console.log(myArr)

myArr.shift()             //It remove the first element
console.log(myArr)

console.log(myArr.includes(9))
console.log(myArr.indexOf(9))



// const newArr = myArr.join()     //Change into String
// console.log(myArr)
// console.log(newArr)




//Slice , Splice
console.log("A",myArr)               //0,1,2,3,4,5,6,7

const mya1 = myArr.slice(0,3)        //0,1,2
console.log(mya1)
console.log("B",myArr)

const mya2 = myArr.splice(1,3)       //add or remove the element and overwrite the original array.
console.log(mya2)
console.log("C",myArr)