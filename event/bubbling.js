const outer = document.querySelector('.outer');
const middle = document.querySelector('.middle');
const btn = document.querySelector('.btn');

outer.addEventListener('click', () => {
  console.log('outer');
});

middle.addEventListener('click', () => {
  console.log('middle');
});

btn.addEventListener('click', () => {
  console.log('btn');
});