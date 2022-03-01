let timer = 0;

function Count(){
    timer++;
}

function ShowTimer(){
    alert(timer);
}

setInterval(Count,1);