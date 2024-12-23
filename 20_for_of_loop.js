// for_in -> it iterates over the keys only
// for_of -> it iterate over the value



const arr = [1,2,3,4,5]

for(const num of arr){
    // console.log(num);
}

const greeting = "Hello World!"
for(const greet of greeting){
    // console.log(`Each char is ${greet}`);
}

//---------------------MAP------------------------------------

const map = new Map()
map.set ("India" , "IN")
map.set ("India" , "IN")
map.set ("America" , "USA")
map.set ("France" , "Fr")
map.set ("France" , "Fr")

// console.log(map)


for(const [key,value] of map){
    console.log(key, ':-',value)
}


// const myObject = {
//     'game1':'NFS',
//     'game2':'Spideman'
// }
// for(const [key,value] of myObject){     // It will not work in JS
//     console.log(key, ':-',value)
// }


//Objet :-
const myObject1 ={
    js : 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}
for(const key in myObject1){     
    // console.log(key)
    // console.log(myObject1[key])
    console.log(`${key} fullname is ${myObject1[key]}`)
}


//Array:-
const programming = ["js","rb","py","java","cpp"]
for(const key in programming){
    console.log(programming[key])
}


// ==================================

const map1 = new Map()
map.set ("India" , "IN")
map.set ("India" , "IN")
map.set ("America" , "USA")
map.set ("France" , "Fr")
map.set ("France" , "Fr")

for(const key in map){
    console.log(key)            //The key will not work b/c map is not iterable.
}
