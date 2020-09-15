`use strict`
const CARROT__SIZE = 80;

let CARROT__COUNT = 10;
let GAME__DURATION = 5;
let stopWatch = undefined;
let started = false;
let score = 0;

const game = document.querySelector('.game');
const startBtn = document.querySelector('.game__start__btn');
const gameCount =document.querySelector('.game__count');
const carrotCount = document.querySelector('.carrot__count');
const gameField = document.querySelector('.game__field');
const rectGameField = gameField.getBoundingClientRect();
const popUp = document.querySelector('.pop-up');
const restartBtn = document.querySelector('.pop-up__refresh');
const gameCountNum = gameCount.querySelector('.fa-stopwatch')
const remainBug = popUp.querySelector('.remain');

const bgSound = new Audio('./sound/bg.mp3');
const bugPullSound = new Audio('./sound/bug_pull.mp3');
const carrotPullSound = new Audio('./sound/carrot_pull.mp3');
const gameWinSound = new Audio('./sound/game_win.mp3');
const alertSound = new Audio('./sound/alert.wav');

//when clicked start btn
startBtn.addEventListener('click', () => {
  if(started) {
    stopGame();
    console.log(started);
  }else {
    startGame();
    console.log(started);
  }
});

//when clicked the target after remove target
gameField.addEventListener ('click', (e) => {
  const target = e.target;
  if(!started) {
    return;
  }
  if(target.matches('.carrot')) {
    score++;
    playAudio(carrotPullSound);
    target.remove();
    updateScore();
    if(CARROT__COUNT === score) {
      stopGameTimer();
      finishGame();
    }
  }else if(target.matches('.bug')) {
    playAudio(bugPullSound);
    target.classList.add('js_catch__bug');
    stopGameTimer();
    finishGame();
  }
});

//when clicked the restart btn
restartBtn.addEventListener('click', () => {
  opacityUp();
  popUpRemove();
  startGame();
});

//start game
function startGame() {
  started = true;
  score = 0;
  playAudio(bgSound);
  setGameFeild();
  changeStartBtn();
  showGameBox();
  updateScore();
  count();
}

//stop game
function stopGame() {
  started = false;
  pauseAudio(bgSound);
  stopGameTimer();
  hiddenBtn();
  opcityDown();
  playAudio(alertSound);
  popUpShow();
 
}

function setGameFeild() {
  // reset gameFeild
  gameField.innerHTML ='';
  gameCountNum.innerText = ` ${GAME__DURATION} `;
  addItem('carrot','10','./img/carrot.png','absolute');
  addItem('bug','10','./img/bug.png','absolute');
}

//when started game show game box
function showGameBox() {
  gameCount.style.visibility ='visible';
  carrotCount.style.visibility ='visible';
}

//when clicked the startBtn will be change as stop btn
function changeStartBtn() {
  const icon = startBtn.querySelector('.fas');
  icon.classList.remove('fa-grin-stars');
  icon.classList.add('fa-pause');
  startBtn.style.visibility ='visible';
}

//create carrot and bug on gameField
function addItem (className,count,imgsPath,position) {
  for(let i = 0; i < count; i++){
  const item = document.createElement('img');

  //item territory
  const x = ranadomNum(rectGameField.left,rectGameField.right-CARROT__SIZE);
  const y = ranadomNum(rectGameField.top,rectGameField.bottom-CARROT__SIZE);
  
  item.setAttribute('class',className);
  item.setAttribute('src',imgsPath);
  item.style.position = position;
 
  item.style.left =`${x}px`;
  item.style.top =`${y}px`;

  gameField.appendChild(item);
  }
}

//random
function ranadomNum(min, max) {
  return Math.random() * (max - min) + min;
}

//time
function count() {
  stopWatch = setInterval(gameTimer,1000);
}

function gameTimer() {
  if(GAME__DURATION <= 0){
     gameCountNum.innerText = ` ${GAME__DURATION}`;
    stopGameTimer();
    finishGame();
  }else {
    gameCountNum.innerText = ` ${GAME__DURATION}`;
    --GAME__DURATION;
  }
}

function stopGameTimer() {
  clearInterval(stopWatch);
  GAME__DURATION = 5;
}

function hiddenBtn() {
  startBtn.style.visibility = 'hidden';
}

function popUpShow() {
  popUp.classList.remove('hidden');
}

function popUpRemove() {
  popUp.classList.add('hidden');
}

// gmae opcity
function opcityDown() {
  game.style.opacity = '20%';
  popUp.style.opacity = '90%';
}

function opacityUp() {
  game.style.opacity = '100%';
}

// update
function updateScore() {
  const boxIcon = document.querySelector('.fa-box-open');
  boxIcon.innerText = ` ${CARROT__COUNT-score}`;
}

//finish game
function finishGame() {
  started = false;
  remainBug.innerText = ` Remain Carrot :${CARROT__COUNT-score}`
  opcityDown();
  popUpShow();
  pauseAudio(bgSound);
}

function playAudio(sound) {
  sound.currentTime = 0;
  sound.play();
}

function pauseAudio(sound) {
  sound.pause();
}