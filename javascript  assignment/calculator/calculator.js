 let button=document.querySelectorAll("button")
let display=document.querySelector("#display")

for (const  item of button) {
    item.addEventListener("click",(e)=>{
     buttonText=e.target.innerText;
    
      display.value=display.value+buttonText;
      
       if(buttonText=="c"){
            display.innerText="";
           
        }
         
        else if(buttonText=='='){
            display.innerText=eval(display.innerText) 
            
             }
             
             
             else if (buttonText=='DEL'){
            
               display.innerText=display.innerText.slice(0,-1);
             }
             else if (buttonText=='+'){
            
              display.innerText=display.innerText.slice(0,-1);
            } else if (buttonText=='-'){
            
              display.innerText=display.innerText.slice(0,-1);
            }
            else if (buttonText=='*'){
            
              display.innerText=display.innerText.slice(0,-1);
            }
            else{
            
              display.innerText=display.innerText.slice(0,-1);
            }
    })
}