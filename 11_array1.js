const marvel_heroes = ["Thor","Ironman","Spiderman"]
const dc_heroes = ["superman","flash","batman"]

//Conatenate
const all_Heroes = marvel_heroes.concat(dc_heroes)
console.log(all_Heroes) 


//Spread
const all_new_heroes = [...marvel_heroes,...dc_heroes]
console.log(all_new_heroes)


const another_array = [1,2,3,[4,5,6],7,8,9,[6,7,[4,3]]]
const another_array_2 = another_array.flat(2)
console.log(another_array_2)


console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))



let score1 = 100
let score2 = 200
let score3 = 300

console.log("A ->", score1,score2,score3)
console.log("B ->",Array.of(score1,score2,score3)) 