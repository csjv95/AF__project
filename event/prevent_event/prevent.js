const box = document.querySelector('input');

document.addEventListener('wheel' , () => {
  console.log('wheel');

  //event.preventDefault();를 사용하여도 동작을함
  //errer code :
  //Unable to preventDefault inside passive event listener due to target 
  //being treated as passive.
  //event.preventDefault();

  //위에서 본거와 같이 passive를 false로 옵션을 해주면된다
  //발생이유 event.md 참조
  event.preventDefault();
},{passive:false});

box.addEventListener('click', () => {
  console.log('click');

  //click 이벤트는 발생하지만  event.preventDefault();사용하여서 동작을 하지않음 
  event.preventDefault();
});


