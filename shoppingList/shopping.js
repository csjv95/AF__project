'use strick'

// when clicked the plus btn
const itemList = document.querySelector('.item__list');
const plusBtn = document.querySelector('.plus__btn');
const input = document.querySelector('.get__write');

itemList.addEventListener('click', ()=> {
  if(event.target.className === 'item__delete') {
    console.log('hi');
  }
});

//when clicked the plus btn
plusBtn.addEventListener('click', () => {
  plus();
})

//when keydown enter
input.addEventListener('keydown', (e) => {
  if(e.keyCode === 13){
    plus();
  }
});

const plus = () => {
  // get user input value
  const inputValue = input.value;

  if(inputValue === '') {
    input.focus();
    alert('Plz typing');
    return;
  }
  //create new item
  const itemRow = createItem(inputValue);

  //add item in itemContainer
  itemList.appendChild(itemRow);

  //scrolling
  itemRow.scrollIntoView({behavior: "smooth", block : "end"});

  //input default
  input.value = '';
  focus();
  
};

const createItem = (inputValue) => {
  const item = document.createElement('li');
  item.setAttribute('class','item');

  const itemContainer = document.createElement('div');
  itemContainer.setAttribute('class','item__container' );

  const name = document.createElement('span');
  name.setAttribute('class','item__name');
  name.innerText = inputValue;

  const itemDelete = document.createElement('button');
  itemDelete.setAttribute('class','item__delete');
  itemDelete.innerHTML = ' <i class="far fa-trash-alt"></i>';

  itemDelete.addEventListener('click', () => {
    itemList.removeChild(item);
  });

  const line = document.createElement('div');
  line.setAttribute('class','line');

  itemList.appendChild(item);

  item.appendChild(itemContainer);
  item.appendChild(line);

  itemContainer.appendChild(name);
  itemContainer.appendChild(itemDelete);

  return item;
}