`use strict`
let hours = 0;
let min = 0;
let sec = 0;
let startWatch = undefined;
let stopTimer = undefined;

const time = document.querySelector('.time');
const showClockBtn = document.querySelector('.show__clock');
const stopWatch = document.querySelector('.stop__watch');
const stopBtn = document.querySelector('.stop__btn');
const stopClock = document.querySelector('.stop__clock');
const stopWatchStartBtn =document.querySelector('.stop__watch__start__btn');

//when clicked the show__clock
showClockBtn.addEventListener('click', ()=> {
  currentTime();
  startWatch = setInterval(currentTime,1000);
});

//when clicked the stopClock
stopClock.addEventListener('click', () => {
  clearInterval(startWatch);
});

//when click the stopBtn
stopBtn.addEventListener('click', () => {
   clearInterval(stopTimer);
});

//when clicked the stop__watch__start__btn
stopWatchStartBtn.addEventListener('click', () => {
  stopTimer = setInterval(timer,1000);
});

function currentTime() {
  const date = new Date();
  const hours = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();
  time.innerText = ` ${hours} : ${min} : ${sec} `;
}

function timer() {
  sec++;
  if(sec === 60) {
    min++;
    sec = 0;

    if (min === 60) {
      min = 0;
      hours++;
    }
  }
  stopWatch.innerText = `${hours} : ${min} : ${sec}`;
  
}