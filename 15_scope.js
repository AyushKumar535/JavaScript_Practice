// let a =10
// const b =20
// var c= 30
    // console.log(a)
    // console.log(b)
    // console.log(c)

//----------------------------------------------------------

// var c =300                 //It's a global Scope
// let a =100

// if(true) {                //It's a block Scope
//     let a = 10
//     const b = 20
//     var c = 30            //this is why we don't use a var 
// }
// console.log(a)       
// // console.log(b)
// console.log(c)

//---------------------------------------------------------------------------
                        //Nested Function :-
function one(){
    const username = "Ayush"

    function two(){
        const website = "youtube"
        console.log(username)
    }
    // console.log(website)
    two()
}
one()

                        //or
if(true) {
    const username = "Ayush"
    if(username === "Ayush"){
        const website = "youtube"
        console.log(username + website)
    }
    console.log(website)       //give error
}
console.log(username)          //give error  

//--------------------------------IMPORTANT-----------------------------------------

console.log(addone(5))              //works b/c we only declare in funtion 
function addone(num){
    return num + 1
}
console.log(addone(5))


// console.log(addtwo(5))          //generate error b/c we declare a function and hold a variable(const addtwo)
const addtwo = function(num){
    return num +2
}
console.log(addtwo(5))