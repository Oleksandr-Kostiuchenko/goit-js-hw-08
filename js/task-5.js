//TODO: Напиши скрипт, який змінює колір фону елемента <body> через інлайн-стиль по кліку на button.change-color і задає це значення кольору текстовим вмістом для span.color.

//* Function to get random color 
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

//* Find elements
const changeColorBtn = document.querySelector('.change-color');
const colorNameSpan = document.querySelector('.color');
const body = document.querySelector('body');

//* Function
const onBtnClick = () => {
  body.style.backgroundColor = `${getRandomHexColor()}`;
  colorNameSpan.textContent = body.style.backgroundColor;
};

changeColorBtn.addEventListener('click', onBtnClick);