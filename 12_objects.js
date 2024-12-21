//Object Literals
const JsUser = {
    name : "Ayush",
    age : 22,
    location : "Bokaro",
    email : "rana@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday","Friday"]
}

console.log(JsUser.lastLoginDays)
console.log(JsUser["lastLoginDays"])    //Another type to call a object


//DataType of Symbol :-
const mySym = Symbol("key1")

const js = {
    [mySym] : "Mykey1"
}
console.log(js[mySym])
console.log(js)                         //see output


//Freeze the Object :-
JsUser.email = "ayush@1234.com"
// Object.freeze(JsUser)
JsUser.email = "ayush@1234.com"
console.log(JsUser)


//Use Function :-
JsUser.greeting = function(){
    console.log("Hello JS user");
}
console.log(JsUser.greeting)
console.log(JsUser.greeting())
//-------------------------------------
JsUser.greetingtwo = function(){
    console.log(`Hello JS user,${this.name}`);
}
console.log(JsUser.greetingtwo())
