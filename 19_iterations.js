// for loop
n=10
for(let i=0;i<n;i++){
    const element = i;
    if(element == 5){
        console.log("5 is the best number");
    }
    console.log(element);
}


for(let i=0;i<10;i++){
    console.log(`Outer loop : ${i}`)
    for(let j=0;j<10;j++){
        // console.log(`Inner loop value ${j} and inner loop ${i}`)
        console.log(i + '*' + j + ' = ' + i*j)
    }
}


let array = ["Ayush","Kumar","Rana"]
for(let i=0;i<array.length;i++){
    console.log(array[i]);
}
console.log(array);


//break
for(let i=0;i<20;i++){
    if(i== 5){
        console.log(`Detected 5`)
        break;
    }
    console.log(`Value of i is ${i}`);
}

//Continue
for(let i=0;i<20;i++){
    if(i== 5){
        console.log(`Detected 5`)
        continue;
    }
    console.log(`Value of i is ${i}`);
}

//While loop
let i = 0;
while (i<=10){
    console.log(`Value of index is ${i}`);
    i += 2;
} 

let array1 = ['Ayush','Kumar','Rana']

let arr = 0
while(arr < array1.length){
    console.log(`Value is ${array1[arr]}`)
    arr = arr+1
}