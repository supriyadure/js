function countdown(){
let newdate=new Date();
let bdate="18 oct 2021";
let birthdate=new Date(bdate);
let remainingtime=(birthdate-newdate)/1000;
console.log(remainingtime)
var p1=document.querySelector("#p1")
var p2=document.querySelector("#p2")
var p3=document.querySelector("#p3")
var p4=document.querySelector("#p4")
const days=Math.floor(remainingtime/3600/24)
console.log(days);
const hours=Math.floor(remainingtime/3600)%24;
const minute=Math.floor(remainingtime/60)%60;
const second=Math.floor(remainingtime)%60;
p1.innerHTML=days
p2.innerHTML=hours
p3.innerHTML=minute
p4.innerHTML=second
}
countdown();
setInterval(countdown,1000)