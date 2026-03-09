const box = document.getElementById("box");
const hours = document.createElement("span");
hours.classList.add("hours");
box.append(hours);
function displayTime(){
    const now = new Date();
    let sec = now.getSeconds();
    let min = now.getMinutes();
    let hour = now.getHours();
    if(sec < 10){
        sec = "0" + sec;
    }
    if(min < 10){
        min = "0" + min;
    }
    if(hour < 10){
        hour = "0" + hour;
    }
    hours.textContent = hour + ":" + min + ":" + sec ;
}
setInterval(displayTime,1000);
displayTime();