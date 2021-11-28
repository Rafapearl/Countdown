const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours"); 
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const plus = document.getElementById("btnPlus");
const novaData = document.querySelector("#Send");



let newYears = "01 Jan 2022"

function countdown(){
    const newYearsDate = new Date(newYears);
    const currentDate = new Date()

    const totalseconds = new Date (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalseconds / 3600 / 24);
    const hours = Math.floor(totalseconds / 3600) % 24;
    const minutes = Math.floor(totalseconds / 60) % 60;
    const seconds = Math.floor(totalseconds) % 60;
    
 daysEl.innerHTML =  formatTime(days);
 hoursEl.innerHTML = formatTime(hours);
 minutesEl.innerHTML = formatTime(minutes);
 secondsEl.innerHTML = formatTime(seconds);


}

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;

}


plus.addEventListener('click', a => 
{  
   let niver = "19 Aug 2022"

   newYears = niver
   return niver


});

novaData.addEventListener("click", function(e){

    e.preventDefault();
    const name = document.querySelector("#name");

    const value = name.value;

    newYears = value
    return value

});
countdown();
setInterval(countdown, 1000);
