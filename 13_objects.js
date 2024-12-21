//Singleton Object

const tinderUser = new Object()
tinderUser.name = "ayush",
tinderUser.id = "123asd",
tinderUser.isLoggedIn = false
console.log("A->",tinderUser);

//--------------------------------------------

// const regularUser = {
//     email : "some@gmail.com",
//     fullname: {
//         userfullname:{
//             firstname : "Ayush",
//             lastname : "Kumar"
//         }
//     }
// }
// console.log(regularUser.fullname.userfullname)

//-----------------------------------------------------------

// const obj1 = {1:"a",2:"b"}
// const obj2 = {3:"a",4:"b"}
// // const obj3 = Object.assign({},obj1,obj2)
// const obj3 = {...obj1,...obj2}
// console.log(obj3)

//---------------------------------------------------------------

//When data come from database :-
const users = [
    {
        id:1,
        email:"a@gmail.com"
    },
    {
        id:1,
        email:"a@gmail.com"
    },
    {
        id:1,
        email:"a@gmail.com"
    },
]
users[1].email
// console.log(tinderUser)
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('name'))

//or

const course = {
    coursename:"Js in hindi",
    price : "999",
    CourseInstructor : "Ayush"
}
const{price:p} = course
// console.log(price)
console.log(p)