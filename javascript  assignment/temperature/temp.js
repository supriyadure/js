let inp1=document.querySelector(".inp1")
let inp2=document.querySelector(".inp2")
let cal=document.querySelector(".cal")
 cal.addEventListener("click",convertt)
 function convertt(e){
        if(e.target.classList.contains("inp1"))
        {
             let x=e.target.value;
             let f=(x*9/5)+32;
        inp2.value=f;
    
    }
    if(e.target.classList.contains("inp2"))
    {
         let x=e.target.value;
         let c=(x-32)*5/9;
    inp1.value=c;
    
    }
    }





//  inp1.addEventListener("input",convertt)
// inp2.addEventListener("input",calcu)
// function convertt()
// {
//     let c=inp1.value;
//     let f=(c*9/5)+32;
//     inp2.value=f;
// }
// function calcu(){
//     let f=inp2.value;
//     let c=(f-32)*5/9
//     inp1.value=c;
// }
