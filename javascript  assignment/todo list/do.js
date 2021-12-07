let inp1=document.getElementById("inp1");
let btn1=document.getElementById("btn1");
//let as=document.getElementById("para1")
let todocontainers=document.querySelector(".todocontainer");
btn1.addEventListener("click",function(){
    let paragraph=document.createElement("p");
    paragraph.classList.add("para")
    todocontainers.appendChild(paragraph);
    let newt=document.createTextNode(inp1.value)
    paragraph.appendChild(newt);
    inp1.value =" "

    let btn2=document.createElement("button")
    btn2.classList.add("btn2")
   paragraph.appendChild(btn2);
    btn2.innerHTML="Edit";
    btn2.addEventListener("click",function(){
//   var a= todocontainers.removeChild(paragraph)
//    //a.appendChild(inp1);
//    paragraph.removeChild()
    });
         
    
    let btn3=document.createElement("button")
    btn3.classList.add("btn3")
    paragraph.appendChild(btn3);
    btn3.innerHTML="Delete ";
 btn3.addEventListener("click" ,function(){
    paragraph.innerHTML=" "



})

})