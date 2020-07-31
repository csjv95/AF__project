`use strick`
const horizontal = document.querySelector('.horizontal');
const vertical = document.querySelector('.vertical');
const cordinateXY = document.querySelector('.discription');
const target = document.querySelector('.target');

document.addEventListener('mousemove', (e) => {
  //style을 할때는 px이라는 유닛을 붙쳐야한다
  horizontal.style.top =`${e.clientY}px`; //e.clientY에 px값을 전달해준다
  vertical.style.left =`${e.clientX}px`;
  target.style.top =`${e.clientY}px`;
  target.style.left =`${e.clientX}px`;
  cordinateXY.style.top =`${e.clientY}px`;
  cordinateXY.style.left =`${e.clientX}px`;
  cordinateXY.innerText = `${e.clientX}, ${e.clientY}`;
});