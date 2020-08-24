const starBtn = document.querySelector('.game__start__btn');
const gameField = document.querySelector('.game__field');

//when clicked the start btn 
starBtn.addEventListener('click', ()=> {
  console.log('click');
  startGame();
});

//start game!!!
const startGame = () => {
  gameField.innerHTML = `Hi`;
  //좌표 랜덤하게 받아서 이미지 넣기!!
  makeCarrot();

};

const makeCarrot = () => {
   //당근 넣기
   const carrotImg = document.createElement('img');
   carrotImg.src = './img/carrot.png';
   gameField.appendChild(carrotImg);

}

