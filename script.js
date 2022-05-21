let c = (el)=> document.querySelector(el);
let ca = (el)=> document.querySelectorAll(el);


let digitalElement = c('.digital');
let sElement = c('.p_s');
let mElement = c('.p_m');
let hElement = c('.p_h');

function updateClock(){
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
    let miliS = now.getMilliseconds();

    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`;

    let sDeg = -90 + (360/60 * second) + (miliS * (30/5000));
    let mDeg = -90 + (360/60) * minute;
    let hDeg = (360 / 12 * hour) + ((30/60) * minute) - 90;

    sElement.style.transform = `rotate(${sDeg}deg)`;
    mElement.style.transform = `rotate(${mDeg}deg)`;
    hElement.style.transform = `rotate(${hDeg}deg)`;
}

function fixZero(time){
    return time < 10 ? `0${time}` : time;
}


setInterval(updateClock, 1);
updateClock();