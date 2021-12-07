let inp1=document.querySelector("#inp1")
let result=document.querySelector("#result")
inp1.addEventListener("input",calculateresult)
function calculateresult(){
result.innerHTML=(inp1.value/2.2046).toFixed(4)

}