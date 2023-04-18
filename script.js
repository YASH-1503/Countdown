const d=document.getElementById("days")
const h=document.getElementById("hours")
const m=document.getElementById("mins")
const s=document.getElementById("seconds")

const newYears="1 jan 2024";

function countdown()
{
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();
    const totalSecond=(newYearsDate-currentDate)/1000;

    const days=Math.floor(totalSecond / 3600 / 24);
    const hours =Math.floor(totalSecond / 3600 ) % 24;
    const mins=Math.floor(totalSecond / 60) % 60;
    const seconds=Math.floor(totalSecond % 60);

    d.innerHTML=formattime(days);
    h.innerHTML=formattime(hours);
    m.innerHTML=formattime(mins);
    s.innerHTML=formattime(seconds);
}

function formattime(time)
{
    return time<10?`0${time}`:time;
}
countdown();
setInterval(countdown,1000);