'use strict';

const middle = document.querySelector( '.middle');

// when window clicked and show client x,y ,page x,y
window.addEventListener('click' , (e) => {
  const client = `client X = ${e.clientX} clinet Y = ${e.clientX}`;
  const page = `page x = ${e.pageX} page Y = ${e.pageY}`;
  e.target.innerText = `${client}, ${page}`
  console.log(client);
  console.log(page);
});

// when middle clicked and show rect 
middle.addEventListener('click', (e) => {
  const rect = middle.getBoundingClientRect();
  console.log(rect);
});