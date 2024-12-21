//Dates

// let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());


let createdate = new Date(2024,0,23)          //month starting from 0.
console.log(createdate.toDateString())


let myTimeStamp = Date.now()
console.log(myTimeStamp);    //in millisecond
console.log(createdate.getTime())

console.log(Date.now()/1000)        // in Second
console.log(Math.floor(Date.now()/1000))



let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth())
console.log(newDate.getDay())

// `${newDate.getDay()} and the time`

newDate.toLocaleString('default',{
    weekday : "narrow"
})