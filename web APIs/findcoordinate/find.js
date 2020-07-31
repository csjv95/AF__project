`use strick`
const cordinateXY = document.querySelector('.discription');

document.addEventListener('mousemove', (e) => {
  cordinateXY.innerText = `Client X/Y: ${e.clientX}, ${e.clientY}`;
});