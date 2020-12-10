



function time() {
let day = document.querySelector('.day'),
hh = document.querySelector('.hh'),
mm = document.querySelector('.mm'),
ss = document.querySelector('.ss');




let date = new Date();
let realDay = date.getDay();
let realH = date.getHours();
let realM = date.getMinutes();
let realS = date.getSeconds();


day.textContent = realDay;
}

time();