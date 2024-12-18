//TODO: Є input, у який користувач вводить бажану кількість елементів. Після натискання на кнопку Create має рендеритися (додаватися в DOM) колекція з відповідною кількістю елементів і очищатися значення в інпуті. При повторному натисканні на кнопку Create поверх старої колекції має рендеритись нова. Після натискання на кнопку Destroy колекція елементів має очищатися.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// ---------------------- Search Elements -------------------------------
//* Find elements & Add classes
const controlsDiv = document.querySelector('#controls');
controlsDiv.style.margin = '30px';

const inputQuantity = controlsDiv.querySelector('input');
inputQuantity.classList.add('input-number');

const createBtn = controlsDiv.querySelector('[data-create]');
createBtn.classList.add('add-button');

const destroyBtn = controlsDiv.querySelector('[data-destroy]');
destroyBtn.classList.add('destroy-button');

const boxesDiv = document.querySelector('#boxes');
// ---------------------- /Search Elements -------------------------------

// ---------------------- Functions -------------------------------
//* Create function
const createBoxes = quantity => {
  let boxesArr = [];
  let size = 30;

  for(let i = 1; i <= quantity; i++){
    const box = document.createElement('div');
    box.style.backgroundColor = `${getRandomHexColor()}`;
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;

    boxesArr.push(box);
    size += 10;
  }

  boxesDiv.append(...boxesArr);
}

//* Destroy function
const destroyFunction = () => {
  boxesDiv.innerHTML = '';
}
// ---------------------- /Functions -------------------------------

// ---------------------- Event listeners -------------------------------
//* Create event listeners with checking (if)
createBtn.addEventListener('click', () => {
  if(inputQuantity.value >= 1 && inputQuantity.value <= 100){
    destroyFunction();

    createBoxes(inputQuantity.value);
    inputQuantity.value = '';
  }
});

destroyBtn.addEventListener('click', destroyFunction);
// ---------------------- /Event listeners -------------------------------