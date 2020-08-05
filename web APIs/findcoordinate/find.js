`use strick`
const horizontal = document.querySelector('.horizontal');
const vertical = document.querySelector('.vertical');
const target = document.querySelector('.target');
const cordinateXY = document.querySelector('.discription');

document.addEventListener('mousemove', (e) => {
  //style을 할때는 px이라는 유닛을 붙쳐야한다
  const x = e.clientX;
  const y = e.clientY;
  const targetRect = target.getBoundingClientRect();
  const targetWidth = targetRect.width /2;
  const targetHeight = targetRect.height / 2;
  
  horizontal.style.transform =`translateY(${y}px)`; //e.clientY에 px값을 전달해준다
  vertical.style.transform =`translateX(${x}px)`;
  target.style.transform =`translate(${x-targetWidth}px, ${y-targetHeight}px)`;
  cordinateXY.style.transform =`translate(${x}px, ${y}px)`;
  cordinateXY.innerText = `${x}, ${y}`;
});