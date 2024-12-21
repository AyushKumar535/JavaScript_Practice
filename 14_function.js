// function myname(){
//     console.log("A")
//     console.log("y")
//     console.log("u")
//     console.log("s")
//     console.log("h")
// }
// myname()

//------------------------------------------------------------

// function addtwonumber(number1,number2){
//     console.log(number1+number2);
// }

function addtwonumber(number1,number2){
    // let result = number1+number2
    // return result
       return number1+number2
}
const result = addtwonumber(3,7)
console.log("Result:",result)

//------------------------------------------------------------------

function loginUserMessage(username){
    return `${username} just logged in`
}
console.log(loginUserMessage())
console.log(loginUserMessage(""))
console.log(loginUserMessage("Ayush"))

//--------------------------------------------------------------------

function calCartPrice(...num1){
    return num1
}
console.log(calCartPrice(200,400,500,1000))

//-----------------------------------------------------------------
                        //Passing Object :-
const user = {
    username:"Ayush",
    price:199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and prie is ${anyobject.price}`)
}
// handleObject(user)
handleObject({
    username:"Ayush",
    price:199
})

// ----------------------------------------------------------------------
                        // Passing Array :-
const myNewArray = [200,400,100,1000]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray))