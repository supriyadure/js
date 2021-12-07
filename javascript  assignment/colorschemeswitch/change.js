
//et body=document.querySelector("body")
let textwhite=document.querySelectorAll(".textwhite")
function changec(color){
document.body.style.backgroundColor=color;
if(color=="#000000"){
    for(let elm of textwhite){
        elm.style.color="white";
    }
}
        else  {
        for(let elm of textwhite){
            elm.style.color="black";
        }
   
    
       
    
}


}