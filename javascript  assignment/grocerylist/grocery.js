let button=document.querySelector("button")
let inp1=document.querySelector("#inp1")
let input1=document.querySelector(".input1")
let awesome=document.querySelector(".fas")
let add1=document.querySelector(".add1")


awesome.addEventListener("click",add)
button.addEventListener("click",remove)
function add(){
input1.insertAdjacentHTML("afterend",`<input type="text"  id="inp2" value=${inp1.value}>
<i class="fas fa-cut fa-1x"></i>`)
inp1.value=""
}

function remove(){
    inp1.innerHTML=""
}
function changec(element){
element.style.background ="blue"
}
