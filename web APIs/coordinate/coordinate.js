'use strict';

const middle = document.querySelector( '.middle');
window.addEventListener('click' , (e) => {
  const client = `client X = ${e.clientX} clinet Y = ${e.clientX}`;
  console.log(client);
  const rect = middle.getBoundingClientRect();
  console.log(rect);
})