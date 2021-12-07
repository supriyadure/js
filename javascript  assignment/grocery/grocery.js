let btn1=document.getElementById("btn1")
let titles=document.querySelector("h2")
let btn2=document.getElementById("btn2")
let correct=document.querySelector(".correct")
let inp1=document.getElementById("inp1")
let second=document.querySelector(".second")
let second1=document.querySelector(".second1")
btn1.addEventListener("click",submit1)
function submit1(){
   
  
        var textcr=document.createElement("h3")
        var first1=document.createTextNode(inp1.value)
        textcr.style.textAlign="left"
        textcr.appendChild(first1)
        second1.appendChild(textcr);
        let btn3=document.createElement("button")
        btn3.classList.add("btn3")
        textcr.appendChild(btn3);
        btn3.innerHTML="Delete ";
        if(inp1.value!==0){
        var textc=document.createElement("div")
        textc.classList.add("message");
    textc.innerHTML=`${inp1.value} Add item to list`;
    titles.prepend(textc)
    textc.style.color="green"
        }
        if(inp1.value==0){
            textc.innerHTML="please insert your item"
            textc.style.color="white";
            textcr.removeChild(btn3)

        }
    inp1.value=""
    
  
    setInterval(() => {
        textc.innerHTML=" "  
    }, 2000);



btn2.addEventListener("click" ,function(){
    textcr.innerHTML=" "
})

}
  
