'use strick'

const itemList = document.querySelector('.item__list');
const item = document.querySelector('.item');

const input = document.querySelector('.footer__input');
const clickBtn = document.querySelector('.puls__btn');

//When click add btn
clickBtn.addEventListener('click', ()=> {
  plusBtn();
});

// when you press enter in the input 
input.addEventListener('keydown' , (e) => {
  if(e.keyCode == 13){
    // enter key 받 았을때 입력된값으로 만들기
    console.log('keydown in input');
  }
})

// plus btn
const plusBtn = () => {
    //get input value
    const text = input.value;
    console.log(text);

    //make item list
    const item = createItem(text);
    itemList.appendChild(item);
    
    //reset input & focus
    input.value = '';
    input.focus();
}

const createItem = (text) => {
  const item = document.createElement('li');
  item.setAttribute ('class' , 'item');

  const itemContainer = document.createElement('div');
  itemContainer.setAttribute('class', 'item__container')

  const itemName = document.createElement('span');
  itemName.setAttribute('class','item__name');
  itemName.innerText = text;

  const delBtn = document.createElement('button');
  delBtn.setAttribute('class' , 'item__delete');
  delBtn.innerHTML = '<i class="fas fa-trash"></i>';
  delBtn.addEventListener('click', () => {
    itemList.removeChild(item);
  });

  const underLine = document.createElement('div');
  underLine.setAttribute('class','underLine');

  item.appendChild(itemContainer);
  item.appendChild(underLine);
  itemContainer.appendChild(itemName);
  itemContainer.appendChild(delBtn);

  return item;
};
