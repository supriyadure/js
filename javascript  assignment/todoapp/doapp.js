let inp1=document.getElementById("inp1");
let btn1=document.getElementById("btn1");
let inpupttext=document.getElementById("inp3");
let one=document.querySelector("#one")
let todocontainers=document.querySelector(".todocontainer");
//inp3.addEventListener("keyup",ads)
var first=1;
btn1.addEventListener("click",function(){
    
    var paragraph=document.createElement("p");
var checkbox=document.createElement("input")
checkbox.addEventListener("click",checkone)
checkbox.type="checkbox";
checkbox.classList.add("check1")
 paragraph.classList.add("para")

 todocontainers.appendChild(paragraph);
    paragraph.appendChild(checkbox);
    let newt=document.createTextNode(inp1.value)
     paragraph.appendChild(newt);
    inp1.value =" "
   
    let btn3=document.createElement("button")
    btn3.classList.add("btn3")
    paragraph.appendChild(btn3);
    btn3.innerHTML="remove ";
    
checkfun();
 btn3.addEventListener("click" ,function(){
    paragraph.innerHTML=" "
    
})

})
function checkfun(){
    one.innerHTML=first++
  check1.innerHTML=""
}



function checkone(){
    
     one.innerHTML=--first;
    one.innerHTML= one.innerHTML-1;
 }

