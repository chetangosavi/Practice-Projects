const buttons = document.querySelector(".buttons")
const result = document.querySelector(".result")
const nameof = document.querySelector("#name")


let intervalid;

function createResult(){
 const node = document.createElement('li')
 node.appendChild(document.createTextNode("'I Love You '"+nameof.value))
 result.appendChild(node)
}

buttons.addEventListener('click',(e)=>{
    if(e.target.id === "start"){
       
       result.innerHTML = ""
       intervalid = setInterval(createResult,1000)
       //console.log("start");
    }
    if(e.target.id=== "stop"){
        clearInterval(intervalid)
        result.innerHTML = "Stoped "
        nameof.value = " "
        setTimeout((e)=>{
            result.innerHTML =""
        },3000)
        //console.log("stop");
    }
},false)