function renderTime() {
    let day = document.querySelector('.day'),
        hh = document.querySelector('.hh'),
        mm = document.querySelector('.mm'),
        ss = document.querySelector('.ss');

    let date = new Date();
    
    let realDay = date.getDay(),
        realH = date.getHours(),
        realM = date.getMinutes(),
        realS = date.getSeconds();

    checkTime(realH, hh);
    checkTime(realM, mm);
    checkTime(realS, ss);

    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    day.textContent = days[realDay];
}

function checkTime(time, selector) {
    if (time > 9) {
        selector.textContent = time;
    } else {
        selector.textContent = '0' + time;
    }
}
renderTime()
setInterval(renderTime, 1000)