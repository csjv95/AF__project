`use strict`
const startBtn = document.querySelector('.game__start__btn');
const gameField = document.querySelector('.game__field');
const rectGameField = gameField.getBoundingClientRect();

startBtn.addEventListener('click', () => {
  startGame();
  count();
});

const startGame = () => {
  const carrotSize = 80;
  //create carrot on gameField
  for(let i = 0; i<11; i++){
  const carrotImg = document.createElement('img');
  const x = ranadomNum(rectGameField.left,rectGameField.right-carrotSize);
  const y = ranadomNum(rectGameField.top,rectGameField.bottom-carrotSize);

  carrotImg.setAttribute('src','./img/carrot.png');
  carrotImg.style.position = 'absolute';
 
  carrotImg.style.left =`${x}px`;
  carrotImg.style.top =`${y}px`;

  gameField.appendChild(carrotImg);
  }
  //create bug on gameField
  for(let i = 0; i<11; i++){
    const bugImg = document.createElement('img');
    const x = ranadomNum(rectGameField.left,rectGameField.right-carrotSize);
    const y = ranadomNum(rectGameField.top,rectGameField.bottom-carrotSize);

    bugImg.setAttribute('src','./img/bug.png');
    bugImg.style.position = 'absolute';
  
    bugImg.style.left =`${x}px`;
    bugImg.style.top =`${y}px`;
    
    gameField.appendChild(bugImg);
    }
};

//random
function ranadomNum(min, max) {
  return Math.random() * (max - min) + min;
}

// remove target
gameField.addEventListener ('click', (e) => {
  if(e.target === e.target) {
    console.log('delte');
    gameField.removeChild(e.target);
  }
});

//time
const count = () => {
  window.setTimeout(slowAlert, 3000);
};

const slowAlert = ()=> {
  alert('Too late');
}