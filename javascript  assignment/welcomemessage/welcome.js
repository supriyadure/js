

function person(){
   
    document.getElementById("p1").style.textAlign="center"
    let name=prompt("please enter your name","Supriya");
    let dates=new Date();
let hrs=dates.getHours();
if(hrs>=12 && hrs<=17){
    document.body.style.backgroundColor="rgb(39, 54, 49)";
    document.getElementById("p1").innerHTML=`<h1>Good Afternoon ${name}</h1>
    <br> <h2>Have a Nice Day!</h2>`
}
else if(hrs<=12){
    document.body.style.backgroundColor="cyan";
    document.getElementById("p1").innerHTML=`<h1>Good Morning ${name}</h1><br>
   <h2> Have a Nice Day!</h2>`
} 

else if(hrs>=17 && hrs<=24){
    document.body.style.backgroundColor="orange";
    document.getElementById("p1").innerHTML=`<h1>Good evening ${name}</h1><br>
   <h2> Have a Nice Day!</h2>`
} 

}
person();