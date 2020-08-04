const findRabbit = document.querySelector('.find-btn');
const rabbit = document.querySelector('.rabbit');

findRabbit.addEventListener('click', () => {
 rabbit.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
})