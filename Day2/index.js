var inrease = document.getElementById("increase");
var decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
var display=document.getElementById("display");

     reset.addEventListener("click",()=>{
        display.innerText= 0;
        color()
    })
    
    decrease.addEventListener("click", ()=>{
        display.innerText =+display.innerText -1;
     color()
    })
    increase.addEventListener("click", ()=>{
        display.innerText =+display.innerText +1;
       color()
    });


const color = ()=>{
    if( parseFloat(display.innerText) ==0){
        display.style.color="black"
       }
   else if( parseFloat(display.innerText) < 0){
        display.style.color="red"
       }
    else if( parseFloat(display.innerText) > 0){
        display.style.color="blue";
    }
}