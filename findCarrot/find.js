`use strict`
const startBtn = document.querySelector('.game__start__btn');
const gameField = document.querySelector('.game__field');
const rectGameField = gameField.getBoundingClientRect();

startBtn.addEventListener('click', () => {
  startGame();
  count();
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
  addItem('carrot','10','./img/carrot.png','absolute');
  addItem('bug','10','./img/bug.png','absolute');
}

//add items carrot and bug
function addItem (className,count,imgsPath,position) {
  const carrotSize = 80;
  //create carrot on gameField
  for(let i = 0; i < count; i++){
  const item = document.createElement('img');

  const x = ranadomNum(rectGameField.left,rectGameField.right-carrotSize);
  const y = ranadomNum(rectGameField.top,rectGameField.bottom-carrotSize);
  
  item.setAttribute('class',className);
  item.setAttribute('src',imgsPath);
  item.style.position = position;
 
  item.style.left =`${x}px`;
  item.style.top =`${y}px`;

  gameField.appendChild(item);
  }
};

//random
function ranadomNum(min, max) {
  return Math.random() * (max - min) + min;
}

//time
function count() {
  window.setTimeout(slowAlert, 3000);
};

function slowAlert() {
  alert('Too late');
};