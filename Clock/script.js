const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".minute-hand");
const hourHand = document.querySelector(".hour-hand");

function updateTime(){
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    const secInDeg = seconds * 6;
    const minInDeg = minutes * 6;
    const hoursInDeg = hours * 30;
    secondHand.style.transform = `rotate(${secInDeg}deg)`;
    minuteHand.style.transform = `rotate(${minInDeg}deg)`;
    hourHand.style.transform = `rotate(${hoursInDeg}deg)`;
}

setInterval(updateTime,1000);
updateTime();