const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours"); 
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const plus = document.getElementById("btnPlus");
const novaData = document.querySelector("#Send");
const novoNome = document.querySelector("#Send2");
let Title = document.getElementById("Title");



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

 if (daysEl.innerHTML < 0){
     daysEl.innerHTML = 0
 };

}



// Função para aplicar data do meu aniversário
// plus.addEventListener('click', a => 
// {  
//    let niver = "19 Aug 2022"

//    newYears = niver
//    return niver


// });

//Função para mudar apenas o valor da data

// novaData.addEventListener("click", function(e){

//     e.preventDefault();
//     const name = document.querySelector("#name");

//     const value = name.value;

//     newYears = value
//     return value

// });

novaData.addEventListener("click", function(i){

    i.preventDefault();
 const ttext = document.querySelector("#text").value;

   document.getElementById("Title").innerHTML = ttext

   const name = document.querySelector("#name");

    const value = name.value;

    newYears = value
    
        return value, ttext
   
});

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;

}




countdown();
setInterval(countdown, 1000);

