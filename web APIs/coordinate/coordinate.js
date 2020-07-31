'use strict';

const middle = document.querySelector('.middle');

// when window clicked and show client x,y ,page x,y
// window.addEventListener('click' , (e) => {
//   const client = `client X = ${e.clientX} clinet Y = ${e.clientX}`;
//   const page = `page x = ${e.pageX} page Y = ${e.pageY}`;
//   e.target.innerText = `${client}, ${page}`
//   console.log(client);
//   console.log(page);
// });

// when middle clicked and show rect 
// middle.addEventListener('click', () => {
//   const rect = middle.getBoundingClientRect();
//   console.log(rect);
// });

const scrollBtnTo = document.querySelector('.scrollBtnTo');
const scrollBtnBy = document.querySelector('.scrollBtnBy');
const scrollBtnInto = document.querySelector('.scrollBtnInto');

//scroll by
scrollBtnBy.addEventListener('click' , ()=> {
  scrollBy();
});

//scroll to
scrollBtnTo.addEventListener('click', () => {
  scrollTo();
});

//scrollInto
scrollBtnInto.addEventListener('click', () => {
  scrollInto();
});

//Scroll by fuc
const scrollBy = () => {
  window.scrollBy(0,100);
};

// Scroll to fuc
const scrollTo = ()=> {
  window.scrollTo(100 ,100);
};

//scroll into fuc
const scrollInto = () => {
  middle.scrollIntoView({
    block:'start',
    behavior : 'smooth'
  });
}

