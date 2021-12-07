

    var d=new Date();
    var days=d.getDay();
   let nameoday;
   let message;
   switch(days){
       case 0:
        nameoday="sunday"
        message="<h2> Today is <h2><h3>Time to party</h3><br> <h2>sunday</h2>"
        document.querySelector(".first").innerHTML=message
        break;
        case 1:
        nameoday="Monday"
        message="<h2>Today is</h2><br> <h1>Monday</h1><br><h3>first day of Week</h3><br>"
        document.querySelector(".first").innerHTML=message
        break;
        case 2:
        nameoday="Tuesday"
        message="<h2>Today is</h2><br> <h1>Tuesday</h1><br><h3>Second day of Week</h3>"
        document.querySelector(".first").innerHTML=message
        break;
        case 3:
        nameoday="Wednesday"
        message="<h2>Today is</h2><br> <h1>Wednesday</h1><br><h3>Third day of Week</h3>"
        document.querySelector(".first").innerHTML=message
        break;
        case 4:
        nameoday="Thursday"
        message="<h2>Today is</h2> <br><h1>Thursday</h1><br><h3>Fourth day of Week</h3>"
        document.querySelector(".first").innerHTML=message
        break;
        case 5:
        nameoday="Friday"
        message="<h2>Today is</h2> <br> <h1>friday</h1><br><h3>five day of Week</h3>"
        document.querySelector(".first").innerHTML=message
        break;
        case 6:
        nameoday="Satursday"
        message="<h2>Today is</h2> <br><h1> Satursday</h1><h3>six day of Week</h3> <br> "
        
        document.querySelector(".first").innerHTML=message
        break;
   }