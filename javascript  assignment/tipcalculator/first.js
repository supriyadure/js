function myf(){
    let bill=document.getElementById("inp1").value;
    //let num=document.getElementById("we").value;
    let opt1=document.getElementById("option1").value;

    if(bill== 0)
    {
        alert("plz enter valid data");

}
else if(opt1==0){
alert("plz fill valid data");
}
// else if(num<1){
//     alert("plz enter number of people");
// }
let result1=document.getElementById("result");
//let result12=document.getElementById("result12")
let tip=bill * opt1;
tip=Math.ceil(tip);
   let total= Number(bill) + tip;
  // let num1=total/num;
   result1.innerHTML= `<h2>Tip</h2> ${tip} and total ${total} `
//result1.innerHTML= `<h2>Total</h2> ${total}`
//result12.innerHTML=`<h2>Bill per person</h2> ${num1}`
//Tip${tip} ;


 setTimeout(alertFunc, 5000);
}
  
  function alertFunc() {
    result.innerHTML=" ";
    result12.innerHTML=" ";
  }