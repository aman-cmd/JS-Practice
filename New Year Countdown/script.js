function calTime(){
    const currentYear = new Date().getFullYear();
    const nextYear = new Date(`Jan 01, ${currentYear+1} 00:00:00`);
    const now = new Date().getTime();
    const diffInMs = nextYear - now;
    const diff = diffInMs / 1000;
    const days = Math.floor(diff / (86400));
    const hours =  Math.floor((diff % 86400) / 3600);
    const minutes = Math.floor(((diff % 86400) % 3600) / 60);
    const seconds = Math.floor((((diff % 86400) % 3600) % 60));
    document.getElementById("days").innerHTML = `${days}`;
    document.getElementById("hours").innerHTML = `${hours}`;
    document.getElementById("minutes").innerHTML = `${minutes}`;
    document.getElementById("seconds").innerHTML = `${seconds}`;
    document.getElementById("nextyear").innerHTML = `${currentYear+1}`;
}

calTime();
setInterval(calTime,1000);