// JS is a dynamically typed language .Because data type will automatically assigned at the time of Compilation or Code excution.
// Primitive Datatype :-

    string, number, boolean, Null, undefined, Symbol
    const score = 100
    const scoreValue = 100.3
    
    const isLoggedIn = false
    const outsideTemp = null
    let userEmail;
    
    const id = Symbol('123')
    const anotherId = Symbol('123')
    
    console.log(id === anotherId);

    
//Refefrence (Non Premetive) :-
    // Array , objects, Function

    const heros =["Ayush","Kumar","Rana"];     
    let myObj = {                                          
        name: "Ayush",
        age: 22,
    }

    const myFunction = function() {
        console.log("Hello World");
    }

console.log(typeof anotherId);