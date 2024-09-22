
const generateColor = function (){
    let numbers = "0123456789ABCDEF"
    let hexColor = '#'
    for(let i = 0;i<6;i++){
        hexColor+=numbers[Math.floor(Math.random()*16)]  
    }
    return hexColor
}

const buttons = document.querySelector(".buttons")
const result = document.querySelector(".result")
const body = document.querySelector('body')
let invalid;

function changeColor() {
    body.style.background = generateColor();
}

buttons.addEventListener('click',(e)=>{
    if(e.target.id === "start"){
      invalid = setInterval(changeColor,2000) 
      console.log("start")
    }
    if(e.target.id=== "stop"){
        clearInterval(invalid)
        body.style.background = "#fff"
        console.log("stop")
    }
},false)
