const coding = ["js",'ruby','java','python','cpp']

// coding.forEach(function(item){
//     console.log(item)
// })

// coding.forEach((item) => {
//     console.log(item)
// })

// function printMe(item){
//     console.log(item)
// }
// coding.forEach(printMe)

// coding.forEach((item,index,arr) => {
//     console.log(item,index,arr)
// })

//--------------------------------------------------------------------

//Declaring object in Array:-
const mycoding = [
    {
        languageName : "javascript",
        languageFileName : "j"
    },
    {
        languageName : "java",
        languageFileName : "ja"
    },
    {
        languageName : "python",
        languageFileName : "py"
    },
]

mycoding.forEach((item) => {
    // console.log(item)
    console.log(item.languageName)
})
