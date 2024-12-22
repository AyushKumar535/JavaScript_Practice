const user = {
    username: "Ayush",
    id: 999,

    welcomeMessage : function(){
        console.log(`${this.username},welcome to website`)
        console.log(this)
    }
}
// user.welcomeMessage()
// user.username = "Rana"
// user.welcomeMessage()

console.log(this)

//------------------------------------------------------------------------------------

// function chai(){
//     let username = "Ayush"
//     console.log(this.username)
// }
// chai()

// const chai = () => {
//     let username = "Ayush"
//     console.log(this.username)
//     console.log(this)
// }
// chai()

//-----------------------------------------------------------------------------

// const addtwo = (num1,num2) => {
//     return num1+num2
// }

// const addtwo = (num1,num2) => num1+num2

const addtwo = (num1,num2) => ({username:"Ayush"})

console.log(addtwo(2,3))