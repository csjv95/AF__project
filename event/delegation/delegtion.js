const box = document.querySelectorAll('.box');
const boxContainer = document.querySelector('.box__container');

// delegtion 사용전
//box.forEach(box => {
//  box.addEventListener('click', ()=> {
//  box.style.background = 'blue';
//  })
//});

//delegation 사용 ul에게만 event를 줘서 더욱 간결
boxContainer.addEventListener('click', (e)=> {
  console.log(e);
  if(event.target.className === 'box') {
    console.log(e);
   event.target.classList.add('change__color');
  }
});

