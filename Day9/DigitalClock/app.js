let timer=null;
function play(userChoice)
{
    if(timer!=null)
    {
        clearInterval(timer);
    }
    if(userChoice==="btn1")
    {
    timer=setInterval(()=>{
    const day=new Date();
    let hours=day.getHours();
    const minutes=day.getMinutes();
    const seconds=day.getSeconds();
    //adding am/pm
    let amPm="AM"
    if(hours>=12)
    {
        amPm="PM";
    }
    if(hours>12)
    {
        hours=hours-12;
    }
    if(hours===0)
    {
        hours=12;
    }
    const time=`${hours}:${minutes}:${seconds}${amPm}`;

    document.getElementById("time").innerText=time;
    document.getElementById("time").style.display="block";
    document.getElementById("date").innerText=day.toDateString();
    document.getElementById("date").style.display="block";
    document.getElementById("btn1").style.visibility="hidden";
    document.getElementById("btn2").style.visibility="visible";
    },100);
    }

     if(userChoice==="btn2")
    {
    timer=setInterval(()=>{
    const day=new Date();
    const hours=day.getHours();
    const minutes=day.getMinutes();
    const seconds=day.getSeconds();
    let amPm="AM"
    if(hours>=12)
    {
        amPm="PM";
    }
    const time=`${hours}:${minutes}:${seconds}${amPm}`;

    document.getElementById("time").innerText=time;
    document.getElementById("time").style.display="block";
    document.getElementById("date").innerText=day.toDateString();
    document.getElementById("date").style.display="block";
    document.getElementById("btn1").style.visibility="visible";
    document.getElementById("btn2").style.visibility="hidden";
    },100)
    }
}
