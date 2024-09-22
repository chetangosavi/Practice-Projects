const blocks = document.querySelectorAll(".button");
const body = document.querySelector("body")

blocks.forEach(function(boxes){
    console.log(boxes);
    boxes.addEventListener('click', function(e){
        if(e.target.id==="gray"){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id==="white"){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id==="blue"){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id=='yellow'){
            body.style.backgroundColor = e.target.id
        }
    })
})