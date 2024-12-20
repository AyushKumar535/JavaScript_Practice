//Stack (Primitive)  -> In Stack we make a copy and allocate it  
let myYoutubename = "Ayushrana"

let anothername  = myYoutubename
anothername = "AyushKumar"

console.log(myYoutubename)
console.log(anothername)


// Heap (Non-Primitive) :- In this we make a same address of a copy
let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let usertwo = userOne
usertwo.email = "ayush@gmail.com"


console.log(userOne.email);
console.log(usertwo.email);