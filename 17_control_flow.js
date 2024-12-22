// const temperature = 41

// if(temperature === 41){
//     console.log("less than 50")
// }else{
//     console.log("temperature is greater than 50");
// }
// console.log("executed")

//                 //and -> difference of the scope

// const score = 200

// if(score > 100){
//     let power = "fly"
//     console.log(`User power : ${power}`);
// }
// // console.log(`User power : ${power}`);         //this will give error b/c it is declare outside the scope.



// const balance  = 1000

// if(balance < 500){
//     console.log("less than 500");
// }
// else if(balance < 750){
//     console.log("less than 750")
// }
// else if(balance < 900){
//     console.log("less than 750")
// }
// else {
//     console.log("less than 1200")
// }


// const userloggedIn  = true
// const debitCard = true
// const loggedInFromGoogle = false
// const loggedInFromEmail = true

// if(userloggedIn && debitCard && 2==3){
//     console.log("Allow to buy course")
// }
// console.log("Not Allowed")

// if(loggedInFromGoogle || loggedInFromEmail){
//     console.log("User logged in")
// }


                //Switch Case

// const month = 3
const month = "m"
switch(month){
    case "j":
        console.log("January")
        break;
    case "f":
        console.log("Feburary")
        break;
    case "m":
        console.log("March")
        break;
    case "a":
        console.log("April")
        break;
    default:
        console.log("default")
        break;
}