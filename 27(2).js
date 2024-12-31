//generate a random colour :-

const randomcolor = function(){
    const hex = "01234567889ABCDEF"
    let color = "#"
    for(let i=0;i<6;i++){
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
}
// console.log(randomcolor())


let Intervalid;
const startChangingColor = function(){
    // Intervalid= setInterval (changeBgColor,1000);
    if(!Intervalid){
        Intervalid = setInterval(changeBgColor, 1000);
    }
    
    function changeBgColor(){
        document.body.style.backgroundColor = randomcolor();
    }
};
const stopChangingColor = function(){
    clearInterval(Intervalid)
    Intervalid = null;
};

document.querySelector("#start").addEventListener('click',startChangingColor)
document.querySelector("#stop").addEventListener('click',stopChangingColor)