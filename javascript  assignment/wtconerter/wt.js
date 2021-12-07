let pounds=document.querySelector(".pound");
let kg=document.querySelector(".kilogram");
let grams=document.querySelector(".gram");
let ounces=document.querySelector(".ounces");
let form=document.querySelector("form")
form.addEventListener("click",convertw)
function convertw(e){
  if(e.target.classList.contains("pound"))
   {
        let x=e.target.value;
    kg.value=x/2.2046;
    grams.value=x/0.0022046;
    ounces.value=x*16

}
if(e.target.classList.contains("kilogram"))
   {
        let x=e.target.value;
    pounds.value=x*2.2046;
    grams.value=x*1000;
    ounces.value=x*35.274;
}
if(e.target.classList.contains("gram"))
   {
        let x=e.target.value;
       kg.value=x/1000;
        pounds.value=x*0.0022046
   ounces.value=x*0.035274;
}
if(e.target.classList.contains("ounces"))
   {
        let x=e.target.value;
       kg.value=x/35.274;
        grams.value=x/0.035274
   pounds.value=x*0.0625;
}
}