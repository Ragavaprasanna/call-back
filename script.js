var time=10;
var Countdown=setInterval(function(){

    --time;
    
    document.getElementById("countDownText").innerHTML=time;
    if(time<=0){
        time=10;
    }
},600);
    
