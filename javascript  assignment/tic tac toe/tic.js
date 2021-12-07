let btn1=document.querySelector("#btn1")
let btn2=document.querySelector("#btn2")
let head3=document.querySelector("#head3")
flag=1;
let b1= document.querySelector("#b1")
let b2= document.querySelector("#b2")
let b3= document.querySelector("#b3")
let b4= document.querySelector("#b4")
let b5= document.querySelector("#b5")
let b6= document.querySelector("#b6")
let b7= document.querySelector("#b7")
let b8= document.querySelector("#b8")
let b9= document.querySelector("#b9")
btn1.addEventListener("click",myfun1)
btn2.addEventListener("click",myfun2)
function myfun1(){
     b1.addEventListener("click",function(){
        b1.value='x'
     })
     b2.addEventListener("click",function(){
        b2.value='x'
     })
     b3.addEventListener("click",function(){
        b3.value='x'
     })
     b4.addEventListener("click",function(){
        b4.value='x'
     })
     b5.addEventListener("click",function(){
        b5.value='x'
     })
     b6.addEventListener("click",function(){
        b6.value='x'
     })
     b7.addEventListener("click",function(){
        b7.value='x'
     })
     b8.addEventListener("click",function(){
        b8.value='x'
     })
     b9.addEventListener("click",function(){
        b9.value='x'
     })
   
}
function myfun2(){
  
    b1.addEventListener("click",function(){
       b1.value='O'
    })
    b2.addEventListener("click",function(){
       b2.value='O'
    })
    b3.addEventListener("click",function(){
       b3.value='O'
    })
    b4.addEventListener("click",function(){
       b4.value='O'
    })
    b5.addEventListener("click",function(){
       b5.value='O'
    })
    b6.addEventListener("click",function(){
       b6.value='O'
    })
    b7.addEventListener("click",function(){
       b7.value='O'
    })
    b8.addEventListener("click",function(){
       b8.value='O'
    })
    b9.addEventListener("click",function(){
       b9.value='O'
    })
  
}

function myfun(){
 
    
    if(b1.value=='x' && b2.value=="x" && b3.value=='x'){
      head3.innerHTML="player 1 win"
b4.disabled=true;
b5.disabled=true;
b6.disabled=true;
b7.disabled=true;
b8.disabled=true;
b9.disabled=true;
b1.value="";
        b2.value="";
        b3.value="";
        b4.value="";
        b5.value="";
        b6.value="";
        b7.value="";
        b8.value="";
        b9.value="";
    }
    else if(b1.value=='x' && b4.value=="x" && b7.value=='x'){
      head3.innerHTML="player 1 win" 
      b2.disabled=true;
b6.disabled=true;
b3.disabled=true;
b8.disabled=true;
b9.disabled=true;
b5.disabled=true;
b1.value="";
        b2.value="";
        b3.value="";
        b4.value="";
        b5.value="";
        b6.value="";
        b7.value="";
        b8.value="";
        b9.value="";

    }
    else if(b1.value=='x' && b5.value=="x" && b9.value=='x'){
      head3.innerHTML="player 1 win"
      b2.disabled=true;
b6.disabled=true;
b3.disabled=true;
b8.disabled=true;
b4.disabled=true;
b7.disabled=true;
b1.value="";
        b2.value="";
        b3.value="";
        b4.value="";
        b5.value="";
        b6.value="";
        b7.value="";
        b8.value="";
        b9.value="";
        
    }
    else if(b2.value=='x' && b5.value=="x" && b8.value=='x'){
      head3.innerHTML="player 1 win"
      b1.disabled=true;
b6.disabled=true;
b3.disabled=true;
b9.disabled=true;
b4.disabled=true;
b7.disabled=true;
b1.value="";
b2.value="";
b3.value="";
b4.value="";
b5.value="";
b6.value="";
b7.value="";
b8.value="";
b9.value="";
    }
    else if(b4.value=='x' && b5.value=="x" && b6.value=='x'){
      head3.innerHTML="player 1 win"
      b1.disabled=true;
b2.disabled=true;
b3.disabled=true;
b9.disabled=true;
b8.disabled=true;
b7.disabled=true;
b1.value="";
        b2.value="";
        b3.value="";
        b4.value="";
        b5.value="";
        b6.value="";
        b7.value="";
        b8.value="";
        b9.value="";
        
    }

else if(b1.value=='O' && b2.value=='O' && b3.value=='O'){
   head3.innerHTML="player 2 win"
   b4.disabled=true;
    b5.disabled=true;
    b6.disabled=true;
    b7.disabled=true;
    b8.disabled=true;
    b9.disabled=true;
    b1.value="";
        b2.value="";
        b3.value="";
        b4.value="";
        b5.value="";
        b6.value="";
        b7.value="";
        b8.value="";
        b9.value="";
  
        }
        else if(b1.value=='O' && b4.value=='O' && b7.value=='O'){
         head3.innerHTML="player 2 win"  
         b2.disabled=true;
    b6.disabled=true;
    b3.disabled=true;
    b8.disabled=true;
    b9.disabled=true;
    b5.disabled=true;
    b1.value="";
        b2.value="";
        b3.value="";
        b4.value="";
        b5.value="";
        b6.value="";
        b7.value="";
        b8.value="";
        b9.value="";
   
        }
        else if(b1.value=='O' && b5.value=='O' && b9.value=='O'){
         head3.innerHTML="player 2 win"  
         b2.disabled=true;
    b6.disabled=true;
    b3.disabled=true;
    b8.disabled=true;
    b4.disabled=true;
    b7.disabled=true;
    b1.value="";
        b2.value="";
        b3.value="";
        b4.value="";
        b5.value="";
        b6.value="";
        b7.value="";
        b8.value="";
        b9.value="";
           
        }
        else if(b2.value=='O' && b5.value=='O' && b8.value=='O'){
         head3.innerHTML="player 2 win" 
         b1.disabled=true;
    b6.disabled=true;
    b3.disabled=true;
    b9.disabled=true;
    b4.disabled=true;
    b7.disabled=true;
    b1.value="";
        b2.value="";
        b3.value="";
        b4.value="";
        b5.value="";
        b6.value="";
        b7.value="";
        b8.value="";
        b9.value="";
   
        }
        else if(b4.value=='O' && b5.value=='O' && b6.value=='O'){
         head3.innerHTML="player 2 win" 
         b1.disabled=true;
    b2.disabled=true;
    b3.disabled=true;
    b9.disabled=true;
    b8.disabled=true;
    b7.disabled=true;
    b1.value="";
        b2.value="";
        b3.value="";
        b4.value="";
        b5.value="";
        b6.value="";
        b7.value="";
        b8.value="";
        b9.value="";
          
        }
        else if((b1.value=='x'||b1.value=='O')&&(b2.value=='x'||b2.value=='O')&&(b3.value=='x'||b3.value=='O')&&(b4.value=='x'||b4.value=='O')&&(b5.value=='x'||b5.value=='O')
        &&(b6.value=='x'||b6.value=='O')&&(b7.value=='x'||b7.value=='O')&&(b8.value=='x'||b8.value=='O')&&(b9.value=='x'||b9.value=='O'))
        {
         head3.innerHTML="Both are win Tie!!" 
        }
        else {
       
            if(flag==1){
            head3.innerHTML="play 1 turn"
        }
        else{
            head3.innerHTML="play 2 turn"
        }
        
        }
        
      }
