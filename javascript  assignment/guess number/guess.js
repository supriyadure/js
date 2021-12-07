let inp1=document.querySelector("#inp1")
var head1=document.querySelector("#head1");
let head2=document.querySelector("#head2");
let success2=document.querySelector("#success2")
var num=Math.floor(Math.random() * 100)+1;
let ans=document.querySelector("#p1");
let btn1=document.querySelector("#btn1")

btn1.addEventListener("click",myf)
ans.innerHTML=num;
let count=1;
var countguess;

function myfun(){
   
inp1.value="";
 count++;
 head2.innerHTML=`${11-count}`
if(head2.innerHTML==0){
    alert("you finished attempt sorry!")
}}

    function myf(){
   
       // test();
       myfunction();
     if(num==inp1.value){
 document.querySelector("#success1").innerHTML="you guessed correctly";
 
 inp1.value=" "
     
   
}

 else if(num<inp1.value){
      document.querySelector("#success1").innerHTML="Too high! Try Again";
   inp1.value=" "
}
  
 else{
    document.querySelector("#success1").innerHTML="Too Low! Try Again";
 inp1.value=" "
 } 

 myfun();

 
}
function myfunction(){
 const addnum=[]
   console.log(addnum)

   head1.innerHTML=  addnum.concat(inp1.value);
    

}

// function test()
// {
//  if (inp1.value>100){
//         alert("please enter value between 100")
//         head2.innerHTML=0
//     }
//   else if(inp1.value==="" )
//    {
//        alert("plz enter value");
//        head2.innerHTML=0;
//   }
//    else if(isNaN(inp1.value)){
//       alert("string not allowed") 
//    }
// }
