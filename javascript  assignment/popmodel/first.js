btn1=document.getElementById("btn1");
clos=document.getElementById("clos");
const second=document.getElementById("second");
btn1.addEventListener("click",one);
clos.addEventListener("click",close);
function one(){

    second.style.display="block";
}
function close(){
    second.style.display="none";
}