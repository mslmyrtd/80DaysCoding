var button = document.getElementById("button");
var display=document.getElementById("display");

const randomNumber = () =>  Math.round(Math.random()*256);

  
const randomColor = () => `rgb(${randomNumber()},${randomNumber()},${randomNumber()})`;


button.addEventListener("click",()=>{
    document.body.style.backgroundColor=randomColor();
    display.innerText=randomColor();
}
)

console.log(randomColor);