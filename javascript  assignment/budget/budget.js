let inp1=document.querySelector("#inp1");
let inp2=document.querySelector("#inp2");
let inp3=document.querySelector("#inp3");
let head1=document.getElementById("head1");
let head2=document.getElementById("head2");
let head3=document.getElementById("head3");
let exp1=document.querySelector(".exp1");
let exp2=document.querySelector(".exp2");
let exp3=document.querySelector(".exp3")
let btn1=document.querySelector("#btn1");
let btn2=document.querySelector("#btn2");
let second1=document.querySelector(".second")
let balance=document.querySelector(".balance")
btn1.addEventListener("click",myf)
btn2.addEventListener("click",myfun);

function myf(){
   head1.innerHTML=inp1.value;
   head3.innerHTML=inp1.value;
inp1.value=" "
}
function myfun(){
   // to check input field not empty//
   if(inp3.value!==0 &&inp2.value){
    head2.innerHTML=inp3.value;
   var para=document.createElement("h3")
   var paragraph=document.createTextNode(inp2.value);
   para.appendChild(paragraph);
   exp1.appendChild(para)
   head3.innerHTML=(inp1.value)-(inp3.value);
   var para1=document.createElement("h3")
   var paragraph1=document.createTextNode(inp3.value);
   para1.appendChild(paragraph1);
   exp2.appendChild(para1);
   exp3.style.display="block";

   }
if(inp3.value==0 && inp2.value==0){
   var message = document.querySelector("#message")
   message.innerHTML =`<h3> number can not be negative and null!</h3>`
   // let msg=document.createElement("h3")
   // let message=document.createTextNode("number can not be negative and null!");
   // msg.appendChild(message);
    message.style.color="red"
   // second1.prepend(msg);
}

   setInterval(() => {
     message.innerHTML=""
      
   }, 2000);
   
      

inp2.value=" ";
inp3.value="";
}