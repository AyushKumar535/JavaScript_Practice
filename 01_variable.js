const accountId = 14553
let accountEmail = "ayush@google.com"
var accountPassword = "12345" //-->Not use var b/c of block Scope -> {}
accountCity = "Jaipur"  //this is the wrong tehnique.


// accountId = 2    --> Not allowed b/c of first line is considered as const
accountEmail = "rana@google.com"
accountPassword = "56789"
accountCity = "Pune"
let accountState //output will be "undefined"


console.log(accountId);
console.log(accountEmail); // Writing like this it take lot of the time indiviually.


// So,Write in one line :- 
console.log([accountId],[accountEmail],[accountPassword],[accountCity])

