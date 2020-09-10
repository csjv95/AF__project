`use strict`
const CARROT__SIZE = 80;
let CARROT__COUNT = 10;
let GAME__DURATION = 5;
let stopWatch = undefined;
let started = false;

const game = document.querySelector('.game');
const startBtn = document.querySelector('.game__start__btn');
const gameCount =document.querySelector('.game__count');
const carrotCount = document.querySelector('.carrot__count');
const gameField = document.querySelector('.game__field');
const rectGameField = gameField.getBoundingClientRect();
const popUp = document.querySelector('.pop-up');
const resumeBtn = document.querySelector('.pop-up__refresh');

//when clicked start btn
startBtn.addEventListener('click', () => {
  if(started) {
    stopGame();
  }else {
    startGame();
  }
  started = !started;
});

// remove target
gameField.addEventListener ('click', (e) => {
  if(e.target === e.target) {
    console.log('delte');
    gameField.removeChild(e.target);
  }
});



//start game
function startGame() {
  setGameFeild();
  changeStartBtn()
  showGameBox();
  count();
}

function setGameFeild() {
  // reset gameFeild
  gameField.innerHTML ='';
  gameCount.innerText = GAME__DURATION;
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
  const icon = startBtn.querySelector('.fa-grin-stars');
  icon.classList.remove('fa-grin-stars');
  icon.classList.add('fa-pause');
  console.log(icon.classList);
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
    gameCount.innerText = 'End';
  }else {
    gameCount.innerText = GAME__DURATION;
    --GAME__DURATION;
  }
}

function stopGame() {
  stopGameTimer();
  hiddenBtn();
  opcityDown();
  popUpShow();
  
}

function stopGameTimer() {
  clearInterval(stopWatch);
}

function hiddenBtn() {
  startBtn.style.visibility = 'hidden';
}

function popUpShow() {
  popUp.style.visibility = 'visible';
}

function opcityDown() {
  game.style.opacity = '20%';
  popUp.style.opacity = '90%';
}