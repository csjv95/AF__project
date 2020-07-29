'use strict';

const view = document.querySelector('.view');

window.addEventListener('resize', () => {
  view.innerText = (` window.screen : ${window.screen.width} ${window.screen.height}
                        window.outer : ${window.outerWidth} , ${window.outerHeight}
                        window.inner : ${window.innerWidth} , ${window.innerHeight}
                         documentElement.clientWidth : ${document.documentElement.clientWidth} , ${document.documentElement.clientHeight}

  `);
});