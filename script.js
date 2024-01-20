
setInterval(showTime, 1000);

function showTime(){
    let time = new Date();

    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();


    let carry = 0;
    let am = "am";
    if(hour>12){
        hour-=12;
        am="pm";
    }else if(hour==0){
        hour=12;
        am="am";
    }

    hour = hour<10 ? "0" + hour : hour;
    minute = minute<10 ? "0" + minute : minute;
    second = second<10 ? "0" + second : second;

    let currentTime =  hour + ":" + minute + ":" + second + am;

    let changetime = document.getElementById("clock");
    changetime.innerHTML = currentTime;
}


document.addEventListener('DOMContentLoaded', function () {
    var currentYear = new Date().getFullYear();
    document.getElementById('copyright').innerHTML = '© ' + currentYear + ' Digital clock . All rights reserved to Harsh Vardhan, you can use it just by downloading this code.';
});