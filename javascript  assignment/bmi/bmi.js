let inp1=document.querySelector("#inp1")
let inp2=document.querySelector("#inp2")
let btn1=document.querySelector("#btn1")
let result=document.querySelector("#result")
btn1.addEventListener("click",calculate)
function calculate(){
    if(inp1.value==="" || isNaN(inp1.value)){
    result.innerHTML="please enter a valid height"
    }
    else if(inp2.value==="" || isNaN(inp2.value)){
        result.innerHTML="please enter a valid weight"

    }
    else{
        let bmi=((inp2.value / ((inp1.value * inp1.value) 
        / 10000)).toFixed(2))
        result.innerHTML=bmi
        if(bmi<18.6)result.innerHTML=` Under Weight : <span>${bmi}</span>`;
        else if(bmi>=18.6&&bmi<24.9)result.innerHTML=`Normal : <span>${bmi}</span>`
else result.innerHTML=`over weight:<span>${bmi}</span>`
        }
    }
