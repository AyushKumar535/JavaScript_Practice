// const coding = ["js",'ruby','java','python','cpp']
// const values = coding.forEach((item) => {                    //forEach doesn't return the value
//     return item
// })

// console.log(values);

// ------------------------------------------------------------

const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter((num) => (num>4))

// const newNums = myNums.filter((num) => {
//     return num > 4
// }) 

const newNums = []
myNums.forEach ((num) => {
    if(num > 4){
        newNums.push(num)
    }
})
console.log(newNums)

//-------------------------------------------------------------------------------

const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// const newNumber = myNumbers.map((num) => num +10)

// myNumbers.forEach((ns) => {
//     console.log(ns)
// })

const newN = myNumbers
        .map((ns) => ns *10)
        .map((ns) => ns + 1)
        // .filter((ns) => ns >= 30)
console.log(newN)

// console.log(newNumber)

//--------------------------------------------------------------------
//Reduce :-

const myN = [1,2,3]

const mytotal = myN.reduce(function (accumulator,currval) {
    console.log(`acc:${accumulator} and currval: ${currval}`)
    return accumulator + currval
},0)                    //0 is the value of accumulator
console.log(mytotal)


const shoppingCart = [
    {
        itemName : "js course",
        price : 999
    },
    {
        itemName : "java course",
        price : 1999
    },
    {
        itemName : "data science course",
        price : 11999
    }
]
const pricetopay = shoppingCart.reduce((acc,item) => acc + item.price,0)
console.log(pricetopay)

