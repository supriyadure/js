
let hr=0;
let min=0;
let sec=0;
let ms=0;
let timer=false;
function start(){
    timer=true;
    stopwatch();
    }
    function reset(){
        timer=false;
    }
function stop(){
    timer=false;
}


function stopwatch(){
if(timer==true){
ms=ms+1;
if(ms==100){
    sec=sec+1;
    ms=0;
}
if(sec==60){
    min=min+1;
    sec=0;
}
if(min==60)
{
    hr=hr+1;
    min=0;
    sec=0
}
document.getElementByClassName("mstext").innerHTML=ms;
document.getElementByClassName("sectext").innerHTML=sec;
document.getElementByClassName("hrtest").innerHTML=hr;
document.getElementByClassName("minstext").innerHTML=min;
    setTimeout("stopwatch()",10)
}
}
