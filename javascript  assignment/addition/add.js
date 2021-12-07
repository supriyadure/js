let num1=document.querySelector(".first")
let num2=document.querySelector(".second")
let id1=document.querySelector("#id1");
let btn1=document.querySelector("#btn1")
num1.innerHTML=Math.floor(Math.random() * 11);
num2.innerHTML=Math.floor(Math.random() * 11);

var num3=parseInt(num1.innerHTML)+parseInt(num2.innerHTML)
btn1.addEventListener("click",additionfun)
function additionfun(){
    
    if(id1.value==num3){
        alert("your answer is correct");
        
    }
  if(id1.value!=num3){
     alert(`sorry incorrect.The Correct answer is ${num3}`);
     
    }
}
